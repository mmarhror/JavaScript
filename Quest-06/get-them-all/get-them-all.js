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
  let a = Array.from(document.body.querySelectorAll("a.classical.active"));
  let notA = Array.from(
    document.body.querySelectorAll("a.classical:not(.active)")
  );

  return [a, notA];
}

export function getBonannoPisano() {
  let a = document.getElementById("BonannoPisano");
  let notA = document.body.querySelectorAll("a.classical.active");
    
  return [a, notA];
}
