let bg = "";
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

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList = "svg";
  document.body.appendChild(svg);

  let axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
  let axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");

  axisX.classList = "line";
  axisY.classList = "line";

  axisX.id = "axisX";
  axisY.id = "axisY";

  svg.appendChild(axisX);
  svg.appendChild(axisY);

  document.body.addEventListener("mousemove", (mouse) => {
    let d = document.body.getBoundingClientRect();

    let x = mouse.clientX;
    let y = mouse.clientY;

    let hueV = Math.round(x * (360 / d.width));
    let limV = Math.round(y * (100 / d.height));

    axisX.setAttribute("x1", x);
    axisX.setAttribute("x2", x);
    axisX.setAttribute("y1", 0);
    axisX.setAttribute("y2", window.innerWidth);

    axisY.setAttribute("x1", 0);
    axisY.setAttribute("x2", window.innerHeight);
    axisY.setAttribute("y1", y);
    axisY.setAttribute("y2", y);

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
