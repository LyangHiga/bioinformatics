import fs from "fs";
import hammingDist from "./hammingDist";

describe("1G:Hamming Distace Problem", () => {
  test("Rosalind sample dataset", () => {
    const p = "GGGCCGTTGGT";
    const q = "GGACCGTTGAC";
    expect(hammingDist(p, q)).toBe(3);
  });

  test("Rosalind extra dataset", () => {
    const pathP = "./src/chapter1/1G_hamming_distance/datasets/extra/p.txt";
    const pathQ = "./src/chapter1/1G_hamming_distance/datasets/extra/q.txt";
    const p = fs.readFileSync(pathP, {
      encoding: "utf8",
      flag: "r",
    });
    const q = fs.readFileSync(pathQ, {
      encoding: "utf8",
      flag: "r",
    });

    expect(hammingDist(p, q)).toBe(844);
  });

  test("Rosalind submit dataset", () => {
    const pathP = "./src/chapter1/1G_hamming_distance/datasets/submit/p.txt";
    const pathQ = "./src/chapter1/1G_hamming_distance/datasets/submit/q.txt";
    const p = fs.readFileSync(pathP, {
      encoding: "utf8",
      flag: "r",
    });
    const q = fs.readFileSync(pathQ, {
      encoding: "utf8",
      flag: "r",
    });
    // console.log(hammingDist(p, q));
    expect(hammingDist(p, q)).toBe(897);
  });
});
