import {
  max,
  updateMax,
  filterPosts,
  createStory,
  createJob,
  createPoll,
} from "./main.js";

import { attachComments } from "./comments.js";

const notifications = document.getElementById("updates-content");
const liveUpdatesBtn = document.getElementById("show-updates");
const list = document.getElementById("storyList");

let newPostsBuffer = [];
let newCommentsCnt = 0;

setInterval(async () => {
  let newMax = await fetch(
    "https://hacker-news.firebaseio.com/v0/maxitem.json"
  ).then((res) => res.json());

  if (newMax > max) {
    let proms = [];
    for (let i = max + 1; i <= newMax; i++) {
      proms.push(
        fetch(`https://hacker-news.firebaseio.com/v0/item/${i}.json`).then(
          (res) => res.json()
        )
      );
    }

    let data = await Promise.all(proms);

    data.forEach((elem) => {
      if (elem && elem.type === "comment") {
        newCommentsCnt++;
      }
    });

    data = filterPosts(data);

    newPostsBuffer.push(...data);

    notifications.innerHTML = "";

    const time = new Date();
    let notif = document.createElement("div");
    notif.className = "update-item newposts";
    notif.innerHTML = `
      <span class="update-time">
      ${String(time.getHours()).padStart(2, "0")}:${String(
      time.getMinutes()
    ).padStart(2, "0")}
      </span>
      <span class="update-text">+${newCommentsCnt} new comments</span>
      `;

    notifications.appendChild(notif);

    if (newPostsBuffer.length > 0) {
      let notif = document.createElement("div");
      notif.className = "update-item newposts";
      notif.innerHTML = `
      <span class="update-text">+${newPostsBuffer.length} new posts</span>
      `;

      notifications.appendChild(notif);
    }

    updateMax(newMax);
  }
}, 5000);

function prependPost(post) {
  let type = post.type;

  if (type === "story") {
    const el = createStory(post);
    list.prepend(el);
    attachComments(el, post);
  } else if (type === "job") {
    list.prepend(createJob(post));
  } else {
    const el = createPoll(post);
    list.prepend(el);
    attachComments(el, post);
  }
}

function loadNewPosts() {
  const count = Math.min(20, newPostsBuffer.length);
  for (let i = 0; i < count; i++) {
    const post = newPostsBuffer.shift();
    prependPost(post);
  }
}

liveUpdatesBtn.addEventListener("click", () => {
  loadNewPosts();
  notifications.innerHTML = "";
});
