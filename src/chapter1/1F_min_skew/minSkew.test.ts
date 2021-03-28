import fs from "fs";
import minSkew from "./minSkew";

describe("Minimum Skew Problem", () => {
  test("Rosalind Sample test", () => {
    const genome =
      "CCTATCGGTGGATTAGCATGTCCCTGTACGTTTCGCCGCGAACTAGTTCACACGGCTTGATGGCAAATGGTTTTTCCGGCGACCGTAATCGTCCACCGAG";
    const positions = minSkew(genome);
    const ans = [...positions].toString().replace(/,/g, " ");
    expect(ans).toBe("53 97");
  });
  test("Extra dataset test", () => {
    const path = "./src/chapter1/1F_min_skew/datasets/extra.txt";
    const genome = fs.readFileSync(path, {
      encoding: "utf8",
      flag: "r",
    });
    const positions = minSkew(genome, "extra_dataset");
    const ans = [...positions].toString().replace(/,/g, " ");
    expect(ans).toBe("89969 89970 89971 90345 90346");
  });
  test("Submit", () => {
    const path = "./src/chapter1/1F_min_skew/datasets/submit.txt";
    const genome = fs.readFileSync(path, {
      encoding: "utf8",
      flag: "r",
    });
    const positions = minSkew(genome, "submit");
    const ans = [...positions].toString().replace(/,/g, " ");
    expect(ans).toBe("78139");
  });
});
