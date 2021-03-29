import fs from "fs";
import approximatePatternMatching from "./approximatePatternMatching";

describe("1H: Approximate Patterb Matching Problem", () => {
  test("Rosalind Sample Dataset", () => {
    const pattern = "ATTCTGGA";
    const text =
      "CGCCCGAATCCAGAACGCATTCCCATATTTCGGGACCACTGGCCTCCACGGTACGGACGTCAATCAAATGCCTAGCGGCTTGTGGTTTCTCCTACGCTCC";
    const d = 3;
    const ans = approximatePatternMatching(pattern, text, d)
      .toString()
      .replace(/,/g, " ");
    expect(ans).toBe("6 7 26 27 78");
  });

  test("Rosalind Extra Dataset", () => {
    const pattern = "AGGTACAT";
    const pathText =
      "./src/chapter1/1H_approximate_pattern_matching/datasets/extra/text.txt";
    const text = fs.readFileSync(pathText, {
      encoding: "utf8",
      flag: "r",
    });
    const pathAns =
      "./src/chapter1/1H_approximate_pattern_matching/datasets/extra/ans.txt";
    const expAns = fs.readFileSync(pathAns, {
      encoding: "utf8",
      flag: "r",
    });
    const d = 5;
    const ans = approximatePatternMatching(pattern, text, d)
      .toString()
      .replace(/,/g, " ");
    expect(ans).toBe(expAns);
  });
  test("Rosalind Submit Dataset", () => {
    const pattern = "TTATGTTCTG";
    const pathText =
      "./src/chapter1/1H_approximate_pattern_matching/datasets/submit/text.txt";
    const text = fs.readFileSync(pathText, {
      encoding: "utf8",
      flag: "r",
    });
    const d = 4;
    const pathAns =
      "./src/chapter1/1H_approximate_pattern_matching/datasets/submit/ans.txt";
    const expAns = fs.readFileSync(pathAns, {
      encoding: "utf8",
      flag: "r",
    });
    const ans = approximatePatternMatching(pattern, text, d)
      .toString()
      .replace(/,/g, " ");
    // fs.writeFileSync(
    //   `./src/chapter1/1H_approximate_pattern_matching/datasets/submit/ans.txt`,
    //   ans.toString()
    // );
    expect(ans).toBe(expAns);
  });
});
