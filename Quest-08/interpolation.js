function interpolation(o) {
  let dps = (o.end - o.start) / o.step;
  let tps = o.duration / o.step;

  for (let i = 0; i < o.step; i++) {
    let x = o.start + dps * i;
    let y = tps * (i + 1);
    setTimeout(() => {
      o.callback([x, y]);
    }, y);
  }
}
