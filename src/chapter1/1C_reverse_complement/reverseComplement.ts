const complement = (s: string) => {
  if (!(s === "A" || s === "T" || s === "C" || s === "G")) {
    throw new Error(`s must to be 'A' or 'T' or 'C' 'G'. s=${s} `);
  }
  const c = new Map<string, string>();
  c.set("A", "T");
  c.set("T", "A");
  c.set("C", "G");
  c.set("G", "C");
  return c.get(s);
};

const reverseComplement = (p: string) => {
  const pR = p.split("").reverse().join("");
  let pRC = "";
  for (let letter of pR) {
    pRC += complement(letter);
  }
  return pRC;
};

export default reverseComplement;
