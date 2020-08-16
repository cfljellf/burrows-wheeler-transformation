const name = ""; // input

const encorded = encode(name);
const decoded = decode(encorded.code, encorded.index);
console.log({ encorded, decoded });

function encode(name) {
  let a = [...Array(name.length)].map((_, i) => name.slice(-i) + name.slice(0, -i)).sort();
  const code = a.map((x) => x.slice(-1)).join("");
  const index = a.indexOf(name);
  return { code, index };
}

function decode(code, index) {
  let sorted = [...code].sort();
  for (let j = 1; j < code.length; j++) sorted = sorted.map((x, i) => code[i] + x).sort();
  return sorted[index];
}
