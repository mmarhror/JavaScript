function getAcceleration(obj) {
  let f1 = obj.f / obj.m;
  let f2 = obj.Δv / obj.Δt;
  let f3 = (2 * obj.d) / (obj.t * obj.t);

  if (!Number.isNaN(f1)) {
    return f1;
  } else if (!Number.isNaN(f2)) {
    return f2;
  } else if (!Number.isNaN(f3)) {
    return f3;
  }
  return "impossible";
}
