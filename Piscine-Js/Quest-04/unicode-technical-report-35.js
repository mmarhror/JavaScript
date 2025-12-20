function format(date, fmt) {
  let strDate = date.toString();

  const src = new Map([
    ["yyyy", date.toLocaleString("en-US", { year: "numeric" })],
    ["y", date.toLocaleString("en-US", { year: "2-digit" })],
    ["GGGG", date.getFullYear() >= 0 ? "Anno Domini" : "Before Christ"],
    ["G", date.getFullYear() >= 0 ? "AD" : "BC"],
    ["MMMM", date.toLocaleString("en-US", { month: "long" })],
    ["MMM", date.toLocaleString("en-US", { month: "short" })],
    ["MM", String(date.getMonth() + 1).padStart(2, "0")],
    ["M", date.getMonth() + 1],
    ["dd", date.toLocaleString("en-US", { day: "2-digit" })],
    ["d", date.toLocaleString("en-US", { day: "numeric" })],
    ["EEEE", date.toLocaleString("en-US", { weekday: "long" })],
    ["E", date.toLocaleString("en-US", { weekday: "short" })],
    ["HH", date.toLocaleString("en-US", { hour: "2-digit", hour12: false })],
    ["H", date.getHours()],
    [
      "mm",
      date.toLocaleString("en-US", { minute: "2-digit" }).padStart(2, "0"),
    ],
    ["m", date.getMinutes()],
    [
      "ss",
      date.toLocaleString("en-US", { second: "2-digit" }).padStart(2, "0"),
    ],
    ["s", date.getSeconds()],
    ["a", date.toLocaleString("en-US", { hour: "numeric" }).slice(2)],
  ]);

  for (const [key, val] of src) {
    console.log(key, val);

    fmt = fmt.replace(key, val);
  }

  console.log(fmt);
}

const d = new Date("7 January 1985, 3:08:1");

format(d, "HH(mm)ss [dd] <MMM>"); // -> '03(08)19 [07] <Jan>'
