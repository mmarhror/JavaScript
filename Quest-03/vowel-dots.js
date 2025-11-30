const vowels = /[aAeEiIoOuU]/g;
function vowelDots(txt) {
  txt = txt.replace(vowels, (match) => match + ".");
  return txt;
}
