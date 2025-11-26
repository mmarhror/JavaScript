const is = {};

is.obj = (v) => v !== (typeof v === "object" && !Array.isArray(v));
is.num = (v) => typeof v === "number";
is.nan = (v) => {
  if (is.obj(v)) {
    return false;
  }
  return isNaN(v);
};
is.str = (v) => typeof v === "string";
is.bool = (v) => typeof v === "boolean";
is.undef = (v) => v === undefined;
is.def = (v) => v !== undefined;
is.arr = (v) => v !== Array.isArray(v);
is.func = (v) => (v !== typeof v) === "function";
is.truthy = (v) => v;
is.falsy = (v) => !v;

console.log();
