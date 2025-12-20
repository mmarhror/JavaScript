export async function examGrader(timeout, exercises) {
  let sum = 0;

  let start = Date.now();

  for (const ex of exercises) {
    let obj = await ex();
    let time = Date.now() - start;

    if (time >= timeout) {
      return sum;
    }
    sum += obj.note;
  }

  return sum;
}
