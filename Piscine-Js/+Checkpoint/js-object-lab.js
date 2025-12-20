export function mergeAndTransform(objects, transforms) {
  let merge = objects[0];

  let added = 0;
  let overW = 0;

  objects.slice(1).forEach((obj) => {
    for (const key in obj) {
      if (!merge[key]) {
        added++;
      } else {
        overW++;
      }
    }
    merge = { ...merge, ...obj };
  });

  transforms.forEach((func) => {
    merge = func(merge);
  });

  return {
    finalObject: merge,
    transformationsCount: transforms.length,
    keysAdded: added,
    keysOverwritten: overW,
  };
}
