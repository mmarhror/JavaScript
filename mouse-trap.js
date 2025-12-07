export function createCircle() {
  document.addEventListener("click", (event) => {
    inside = false;
    let div = document.createElement("div");
    div.style.backgroundColor = "white";
    div.classList = "circle";

    let x = event.clientX;
    let y = event.clientY;

    div.style.left = x - 25 + "px";
    div.style.top = y - 25 + "px";

    document.body.appendChild(div);
  });
}

export function setBox() {
  let box = document.createElement("div");
  box.classList = "box";
  document.body.appendChild(box);
}

function circleInsideBox(circle, box) {
  return (
    circle.top >= box.top &&
    circle.bottom <= box.bottom &&
    circle.left >= box.left &&
    circle.right <= box.right
  );
}
let inside = false;

export function moveCircle() {
  document.addEventListener("mousemove", (event) => {
    let circles = document.body.getElementsByClassName("circle");
    let circle = circles[circles.length - 1];

    if (!circle) return;

    let x = event.clientX - 25;
    let y = event.clientY - 25;

    //
    let box = document.getElementsByClassName("box")[0];
    let boxDims = box.getBoundingClientRect();
    let circleDims = circle.getBoundingClientRect();

    if (circleInsideBox(circleDims, boxDims)) {
      circle.style.backgroundColor = "var(--purple)";
      inside = true;
    } else {
      circle.style.backgroundColor = "white";
    }

    let max = {
      left: boxDims.x + 1,
      right: boxDims.x + boxDims.width - 51,
      top: boxDims.y + 1,
      bottom: boxDims.y + boxDims.height - 51,
    };

    if (inside) {
      if (Number(x) > boxDims.right - 51) {
        x = max.right;
      } else if (Number(x) < boxDims.left) {
        x = max.left;
      }

      if (Number(y) < boxDims.top) {
        y = max.top;
      } else if (Number(y) > boxDims.bottom - 51) {
        y = max.bottom;
      }
    }

    circle.style.left = x + "px";
    circle.style.top = y + "px";
  });
}
