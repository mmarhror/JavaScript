export function build(amount) {
  let id = 1;
  let cnt = -1;

  let int = setInterval(() => {
    let div = document.createElement("div");
    div.id = `brick-${id}`;

    if (cnt === 3 || id === 2) {
      div.setAttribute("foundation", "true");
      cnt = 0;
    }

    document.body.appendChild(div);

    if (amount === id) {
      clearInterval(int);
    }
    id++;
    cnt++;
  }, 100);
}

export function repair(...ids) {
  for (let i = 0; i < ids.length; i++) {
    let elem = document.querySelector("#" + ids[i]);

    if (elem === null) {
      continue;
    }

    let isMiddle = elem.getAttribute("foundation");
    if (isMiddle) {
      elem.setAttribute("repaired", "in progress");
    } else {
      elem.setAttribute("repaired", true);
    }
  }
}

export function destroy() {
  document.body.lastChild.remove();
}
