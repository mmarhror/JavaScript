function interpolation(obj) {
  let dps = (obj.end - obj.start) / obj.step;
  let tps = obj.duration / obj.step;

  for (let i = 0; i < obj.step; i++) {
    const x = obj.start + dps * i;
    const y = tps * (i + 1);
    setTimeout(() => {
      obj.callback([x, y]);
    }, y);
  }
}
  