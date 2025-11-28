const dR = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

const rD = {
  C: "G",
  G: "C",
  A: "T",
  U: "A",
};

function RNA(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    res += dR[str[i]];
  }
  return res;
}

function DNA(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    res += rD[str[i]];
  }
  return res;
}
