import { attachComments } from "./comments.js";

let buffer = [];
let displayed = 0;
let size = 20;
let currId;

export let max = 0;

export function updateMax(newMax) {
  if (newMax > max) {
    max = newMax;
  }
}

const loading = document.getElementById("loadingIndicator");
let list = document.getElementById("storyList");
const loadMoreBtn = document.getElementById("loadMoreBtn");

async function fetchData() {
  const BATCH_SIZE = 50;
  loading.style.display = "block";
  while (buffer.length < 20) {
    let proms = [];

    for (let i = 0; i < BATCH_SIZE; i++) {
      proms.push(
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${currId - i}.json`
        ).then((res) => res.json())
      );
    }

    let batch = await Promise.all(proms);

    const validPosts = filterPosts(batch);

    const remaining = size - displayed;
    const toRender = validPosts.slice(0, remaining);

    toRender.forEach((post) => {
      loadPost(post);
    });

    displayed += toRender.length;

    buffer.push(...validPosts.slice(remaining));

    currId -= BATCH_SIZE;
  }
}

export function filterPosts(posts) {
  posts = posts.filter(
    (data) =>
      data &&
      ["story", "job", "poll"].includes(data.type) &&
      !data.dead &&
      !data.deleted
  );

  return posts;
}

function loadPost(post) {
  let type = post.type;
  if (type === "story") {
    const el = createStory(post);
    list.appendChild(el);
    attachComments(el, post);
  } else if (type === "job") {
    list.appendChild(createJob(post));
  } else {
    const el = createPoll(post);
    list.appendChild(el);
    attachComments(el, post);
  }
}

function load() {
  const count = Math.min(20, buffer.length);
  for (let i = 0; i < count; i++) {
    const post = buffer.shift();
    loadPost(post);
  }
}

async function main() {
  const res = await fetch("https://hacker-news.firebaseio.com/v0/maxitem.json");
  currId = await res.json();
  max = currId;

  loading.style.display = "block";
  loadMoreBtn.style.display = "none";

  await fetchData();

  loading.style.display = "none";
  loadMoreBtn.style.display = "block";
}

try {
  main();
} catch (err) {
  throw err;
}

loadMoreBtn.addEventListener("click", async () => {
  loading.style.display = "block";
  loadMoreBtn.style.display = "none";

  if (buffer.length >= size) {
    load();
  }

  await fetchData();

  loading.style.display = "none";
  loadMoreBtn.style.display = "block";
});

export function createStory(story) {
  let a = document.createElement("article");

  a.innerHTML = `
  <article class="story-item post story" data-id="${
    story.id
  }" data-type="story">
    <div class="story-header">
      <span class="story-rank">-</span>
      <div class="story-content">
        <span class="post-type story">STORY</span>
        <h2 class="story-title">
          <a class="story-link" href="${
            story.url || "#"
          }" target="_blank" rel="noopener noreferrer">
            ${story.title}
          </a>
        </h2>
        <div class="post-text">${story.text || ""}</div>
        <div class="story-meta">
          <div class="meta-item"><span class="meta-icon">▲</span> <span class="story-score">${
            story.score
          }</span></div>
          <div class="meta-item"><span class="meta-icon">@</span> <span class="meta-author">${
            story.by
          }</span></div>
          <div class="meta-item"><span class="meta-icon">⏱</span> <time datetime="${new Date(
            story.time * 1000
          ).toISOString()}">${formatTime(story.time)}</time></div>
          <div class="meta-item comments-trigger"><span class="meta-icon">💬comment</span> <span class="comment-count">${
            story.kids?.length || 0
          }</span></div>
        </div>
      </div>
    </div>
    <section class="comments" hidden></section>
  </article>
  `;
  return a;
}

export function createJob(job) {
  let a = document.createElement("article");

  a.innerHTML = `
  <article class="story-item post job" data-id="${job.id}" data-type="job">
    <div class="story-header">
      <span class="story-rank">-</span>
      <div class="story-content">
        <span class="post-type job">JOB</span>
        <h2 class="story-title">
          <a class="story-link" href="${
            job.url || "#"
          }" target="_blank" rel="noopener noreferrer">
            ${job.title}
          </a>
        </h2>
        <div class="story-meta">
          <div class="meta-item"><span class="meta-icon">▲</span> <span class="story-score">${
            job.score || 0
          }</span></div>
          <div class="meta-item"><span class="meta-icon">@</span> <span class="meta-author">${
            job.by
          }</span></div>
           <div class="meta-item"><span class="meta-icon">⏱</span> <time datetime="${new Date(
             job.time * 1000
           ).toISOString()}">${formatTime(job.time)}</time></div>
        </div>
      </div>
    </div>
  </article>
  `;
  return a;
}

// Poll with fixed time formatting
export function createPoll(poll) {
  const article = document.createElement("article");
  article.className = "story-item post poll";
  article.dataset.id = poll.id;
  article.dataset.type = "poll";

  article.innerHTML = `
    <div class="story-header">
      <span class="story-rank">-</span>
      <div class="story-content">
        <span class="post-type poll">POLL</span>
        <h2 class="story-title">${poll.title}</h2>
        <div class="post-text">${poll.text || ""}</div>

        <ul class="poll-options">
          <li class="poll-loading">Loading poll options...</li>
        </ul>

        <div class="story-meta">
          <div class="meta-item"><span class="meta-icon">▲</span> ${
            poll.score
          }</div>
          <div class="meta-item"><span class="meta-icon">@</span> ${
            poll.by
          }</div>
          <div class="meta-item"><span class="meta-icon">⏱</span>
            <time datetime="${new Date(poll.time * 1000).toISOString()}">
              ${formatTime(poll.time)}
            </time>
          </div>
          <div class="meta-item comments-trigger">
            <span class="meta-icon">💬</span>
            <span class="comment-count">${poll.kids?.length || 0}</span>
          </div>
        </div>
      </div>
    </div>

    <section class="comments" hidden></section>
  `;

  loadPollOptions(article, poll.parts);
  return article;
}

async function loadPollOptions(article, partIds = []) {
  const list = article.querySelector(".poll-options");

  if (!partIds.length) {
    list.innerHTML = `<li class="poll-empty">No poll options</li>`;
    return;
  }

  const options = await Promise.all(
    partIds.map((id) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((r) =>
        r.json()
      )
    )
  );

  list.innerHTML = "";

  options
    .filter((o) => o && o.type === "pollopt")
    .sort((a, b) => b.score - a.score)
    .forEach((opt) => {
      const li = document.createElement("li");
      li.className = "poll-option";
      li.innerHTML = `
      <span class="poll-score">${opt.score}</span>
        <span class="poll-text">${opt.text}</span>
      `;
      list.appendChild(li);
    });
}

// formatTime now returns the post creation date
export function formatTime(unixTime) {
  const date = new Date(unixTime * 1000); // convert seconds to milliseconds
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const h = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${d} ${h}:${min}`;
}
