export function getArchitects() {
  let a = document.getElementsByTagName("a");
  let notA = document.body.querySelectorAll(":not(a)");

  return [a, notA];
}

export function getClassical() {
  let a = document.body.getElementsByClassName("classical");
  let notA = document.body.querySelectorAll("a:not(.classical)");

  return [a, notA];
}

export function getActive() {}

getArchitects();
getClassical();
