import { formatTime } from "./main.js";

async function fetchItem(id) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return res.json();
}
function createComment(comment) {
  const div = document.createElement("div");
  div.className = "comment";

  div.innerHTML = `
    <div class="comment-meta">
      <span class="comment-author">${comment.by || "anonymous"}</span>
      <time>${formatTime(comment.time)}</time>
    </div>
    <div class="comment-text">${comment.text || ""}</div>
  `;

  return div;
}
async function loadComments(post, container) {
  container.innerHTML = `<p class="loading">Loading comments...</p>`;

  if (!post.kids || post.kids.length === 0) {
    container.innerHTML = `<p class="empty">No comments yet</p>`;
    return;
  }

  try {
    const comments = await Promise.all(post.kids.map(fetchItem));

    const validComments = comments
      .filter((c) => c && !c.deleted && !c.dead)
      .sort((a, b) => b.time - a.time);

    container.innerHTML = "";

    validComments.forEach((comment) => {
      container.appendChild(createComment(comment));
    });
  } catch (err) {
    container.innerHTML = `<p class="error">Failed to load comments</p>`;
  }
}

function debounce(fn, delay = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function attachComments(postElement, post) {
  const trigger = postElement.querySelector(".comments-trigger");
  const commentsSection = postElement.querySelector(".comments");

  if (!trigger || !commentsSection) return;

  const handleClick = debounce(async () => {
    // toggle
    if (!commentsSection.hidden) {
      commentsSection.hidden = true;
      return;
    }

    commentsSection.hidden = false;

    const freshPost = await fetchPost(post.id);
    await loadComments(freshPost, commentsSection);
  }, 400); // debounce delay (ms)

  trigger.addEventListener("click", handleClick);
}

async function fetchPost(id) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return res.json();
}
