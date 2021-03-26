import fs from "fs";
import clumpFinding from "./clumpFinding";

describe("1E: Clump Finding Problem", () => {
  test("First Rosalind test, sample dataset", () => {
    const genome =
      "CGGACTCGACAGATGTGAAGAAATGTGAAGACTGAGTGAAGAGAAGAGGAAACACGACACGACATTGCGACATAATGTACGAATGTAATGTGCCTATGGC";
    const k = 5;
    const l = 75;
    const t = 4;
    expect(clumpFinding(genome, k, l, t)).toBe("CGACA GAAGA AATGT");
  });

  test("Rosalind extra Dataset", () => {
    const path = "./src/chapter1/1E_clump_finding/datasets/extra.txt";
    const genome = fs.readFileSync(path, {
      encoding: "utf8",
      flag: "r",
    });
    const k = 11;
    const l = 566;
    const t = 18;
    expect(clumpFinding(genome, k, l, t)).toBe("AAACCAGGTGG");
  });

  test("Rosalind submit", () => {
    const path = "./src/chapter1/1E_clump_finding/datasets/submit.txt";
    const genome = fs.readFileSync(path, {
      encoding: "utf8",
      flag: "r",
    });
    const k = 12;
    const l = 589;
    const t = 20;
    // console.log(clumpFinding(genome, k, l, t));
    expect(clumpFinding(genome, k, l, t)).toBe(
      "GTACTCTTCGCG TTAAGCGTGGCT AGCTAGTGCGTT GCACATTCTCAC"
    );
  });
});
