    const colors = [
  "purple",
  "rebeccapurple",
  "mediumpurple",
  "darkviolet",
  "indigo",
  "violet",
  "plum",
  "lavender",
  "thistle",
  "orchid",
  "darkorchid",
  "blueviolet",
  "mediumvioletred",
  "gray",
  "lightgray",
  "darkgray",
  "dimgray",
  "slategray",
  "silver",
  "gainsboro",
  "lightslategray",
  "graytext",
  "black",
  "whitesmoke",
  "ivory",
  "aliceblue",
];

export function compose() {
  document.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key === "Backspace") {
      if (document.body.lastChild) {
        document.body.lastChild.remove();
      }
      //
    } else if (key === "Escape") {
      document.body.innerHTML = "";
      //
    } else if (key.length === 1 && /[a-z]/.test(key)) {
      let letters = "abcdefghijklmnopqrstuvwxyz";
      let match = letters.indexOf(key);

      let div = document.createElement("div");
      div.classList = "note";
      div.textContent = key;
      div.style.backgroundColor = colors[match];

      document.body.appendChild(div);
      //
    }
  });
}
