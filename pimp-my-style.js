import { styles } from "./pimp-my-style.data.js";

let index = 0;
let unpimp = false;

export function pimp() {
  let button = document.getElementsByTagName("button")[0];

  if (!unpimp) {
    button.classList.add(styles[index]);
    index++;
  } else {
    console.log(index);

    button.classList.remove(styles[index]);
    index--;
  }
  if (index === -1) {
    unpimp = false;
    button.classList.toggle("unpimp");
    index++;
  }
  if (index === styles.length - 1) {
    unpimp = true;
    button.classList.toggle("unpimp");
    index--;
  }
}
