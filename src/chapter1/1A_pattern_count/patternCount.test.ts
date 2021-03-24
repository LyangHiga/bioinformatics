import fs from "fs";
import patternCount from "./patternCount";

describe("1A: Pattern Count Algorithm", () => {
  test("book example 1st example", () => {
    const text = "ACAACTATGCATACTATCGGGAACTATCCT";
    const pattern = "ACTAT";
    expect(patternCount(text, pattern)).toBe(3);
  });

  test("book example 2nd example", () => {
    const text = "CGATATATCCATAG";
    const pattern = "ATA";
    expect(patternCount(text, pattern)).toBe(3);
  });

  test("Rosalind sample", () => {
    const text = "GCGCG";
    const pattern = "GCG";
    expect(patternCount(text, pattern)).toBe(2);
  });

  test("Rosalind extra dataset", () => {
    const path = "./src/chapter1/1A_pattern_count/dataset/extra.txt";
    const text = fs.readFileSync(path, {
      encoding: "utf8",
      flag: "r",
    });
    const pattern = "AGCCTTTAG";
    expect(patternCount(text, pattern)).toBe(294);
  });

  test("Rosalind dataset", () => {
    const path = "./src/chapter1/1A_pattern_count/dataset/rosalind_ba1a.txt";
    const text = fs.readFileSync(path, {
      encoding: "utf8",
      flag: "r",
    });
    const pattern = "CGGCGGGCG";
    expect(patternCount(text, pattern)).toBe(27);
  });
});
