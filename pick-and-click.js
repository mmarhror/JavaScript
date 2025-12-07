let bg = "" 
export function pick() {
  let div = document.createElement("div");
  let hue = document.createElement("div");
  let lim = document.createElement("div");

  div.classList = "hsl";
  hue.classList = "text hue";
  lim.classList = "text luminosity";

  document.body.appendChild(div);
  document.body.appendChild(hue);
  document.body.appendChild(lim);

  document.body.addEventListener("mousemove", (mouse) => {
    let d = document.body.getBoundingClientRect();

    let hueV = Math.round(mouse.x * (360 / d.width));
    let limV = Math.round(mouse.y * (100 / d.height));

    bg = `hsl(${hueV},100%,${limV}%)`;

    div.textContent = bg;

    hue.textContent = `
    hue
    ${hueV}`;

    lim.textContent = `
      ${limV}
      luminosity`;

    document.body.style.background = bg;
  });

  document.body.addEventListener("click", () => {
    navigator.clipboard.writeText(bg);
  });
}
