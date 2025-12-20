export function flattenAndMap(obj, mapper, flat = {}, path = "") {
  for (const key in obj) {
    let np = path ? `${path}.${key}` : key;
    if (obj[key] && obj[key].constructor.name === "Object") {
      flattenAndMap(obj[key], mapper, flat, np);
    } else {
      if (Array.isArray(obj[key])) {
        flat[np] = obj[key].map((val) => {
          return mapper(val);
        });
      } else {
        flat[np] = mapper(obj[key]);
      }
    }
  }
  return {
    flattened: flat,
    originalKeysCount: Object.keys(flat).length,
    transformedKeysCount: Object.values(flat).length,
  };
}
