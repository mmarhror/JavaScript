export function generateLetters() {
  let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let fontW = ["300", "400", "600"];
  let fontS = 11;
  for (let i = 0; i < fontW.length; i++) {
    for (let j = 0; j < 40; j++) {
      let n = Math.floor(Math.random() * 26);
      let div = document.createElement("div");
      div.textContent = alph[n];
      div.style.fontWeight = fontW[i];
      console.log(fontS);
      div.style.fontSize = String(fontS) + "px";
      document.body.appendChild(div);
      fontS++;
    }
  }
}
