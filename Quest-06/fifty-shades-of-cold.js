import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
  let style = document.createElement("style");

  for (const color of colors) {
    style.textContent += `.${color} {
        background: ${color};
    }
    `;
  }

  document.head.appendChild(style);
}

export function generateColdShades() {
  const tags = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"];

  for (const color of colors) {
    if (tags.some((clr) => color.includes(clr))) {
      let div = document.createElement("div");
      div.classList.add(color);
      div.textContent = color;
      document.body.appendChild(div);
    }
  }
}

export function choseShade(shade) {
  let divs = Array.from(document.getElementsByTagName("div"));

  divs.forEach((div) => {
    div.classList = "";
    div.classList.add(shade);
  });
}
