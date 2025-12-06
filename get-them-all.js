export function getArchitects() {
  let a = Array.from(document.body.querySelectorAll("a"));
  let notA = Array.from(document.body.querySelectorAll("span"));

  return [a, notA];
}

export function getClassical() {
  let a = Array.from(document.body.querySelectorAll("a.classical"));
  let notA = Array.from(document.body.querySelectorAll("a:not(.classical)"));

  return [a, notA];
}

export function getActive() {
  let a = Array.from(document.body.querySelectorAll("a.active"));
  let notA = Array.from(document.body.querySelectorAll("a:not(.active)"));

  return [a, notA];
}

export function getBonannoPisano() {
  let a = Array.from(document.body.querySelectorAll("a#BonannoPisano"));
  let notA = Array.from(document.body.querySelectorAll("a:not(#BonannoPisano)"));

  return [a, notA];
}
