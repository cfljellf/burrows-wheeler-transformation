const text = "plain"; // input

const encorded = encode(text);
const decoded = decode(encorded.code, encorded.index);
console.log({ encorded, decoded });

function encode(text) {
  let a = [...Array(text.length)].map((_, i) => text.slice(-i) + text.slice(0, -i)).sort();
  const code = a.map((x) => x.slice(-1)).join("");
  const index = a.indexOf(text);
  return { code, index };
}

function decode(code, index) {
  let sorted = [...code].sort();
  for (let j = 1; j < code.length; j++) sorted = sorted.map((x, i) => code[i] + x).sort();
  return sorted[index];
}
