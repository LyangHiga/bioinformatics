import { freqWordsMisRev } from "../1J_frequent_words_mismatches_reverse/freqWordsMisRev";

describe("Find Frequent Words with Mismatches and Reverse Complements", () => {
  test("Rosalind Sample Dataset", () => {
    const text = "ACGTTGCATGTCGCATGATGCATGAGAGCT";
    const k = 4;
    const d = 1;
    const freq = freqWordsMisRev(text, k, d);
    const expAns = ["ATGT", "ACAT"];
    expect(freq.size).toBe(expAns.length);
    expAns.forEach((s) => freq.delete(s));
    expect(freq.size).toBe(0);
  });

  test("Rosalind Extra Dataset", () => {
    const text =
      "CTTGCCGGCGCCGATTATACGATCGCGGCCGCTTGCCTTCTTTATAATGCATCGGCGCCGCGATCTTGCTATATACGTACGCTTCGCTTGCATCTTGCGCGCATTACGTACTTATCGATTACTTATCTTCGATGCCGGCCGGCATATGCCGCTTTAGCATCGATCGATCGTACTTTACGCGTATAGCCGCTTCGCTTGCCGTACGCGATGCTAGCATATGCTAGCGCTAATTACTTAT";
    const k = 9;
    const d = 3;
    const freq = freqWordsMisRev(text, k, d);
    const expAns = ["AGCGCCGCT", "AGCGGCGCT"];
    expect(freq.size).toBe(expAns.length);
    expAns.forEach((s) => freq.delete(s));
    expect(freq.size).toBe(0);
  });

  test("Rosalind Submit Dataset", () => {
    const text =
      "GAGCGAGGGGAGGGTTGGGAGGGTTGGGCCGAACGATAAGGGTTGGGTACCGTAACTGAGCGAGGGGAGGGTTGGGTACCGTAACTGAGCGAGGGGTACCGTAACTAGGGTTGGGTTGTCGGTGAGGGTTGGGCCGAACGATAAGGGTTGGGCCGAACGATAGAGCGAGGGGGAGCGAGGGGAGGGTTGGGTTGTCGGTGGAGCGAGGGGTACCGTAACTGAGCGAGGGGCCGAACGATATTGTCGGTGTACCGTAACTGAGCGAGGGGGAGCGAGGGGCCGAACGATAGAGCGAGGGGTTGTCGGTGCCGAACGATAGAGCGAGGGGAGGGTTGGGTTGTCGGTGTACCGTAACTCCGAACGATACCGAACGATAAGGGTTGGGTTGTCGGTGAGGGTTGGGAGGGTTGGGGAGCGAGGGGAGGGTTGGGTTGTCGGTGTTGTCGGTGAGGGTTGGGTTGTCGGTGAGGGTTGGGGAGCGAGGGGAGGGTTGGGTACCGTAACTAGGGTTGGGTACCGTAACTCCGAACGATAGAGCGAGGGGAGGGTTGGGCCGAACGATAAGGGTTGGGAGGGTTGGGTTGTCGGTGTTGTCGGTGCCGAACGATACCGAACGATAAGGGTTGGGCCGAACGATAAGGGTTGGGTACCGTAACTTTGTCGGTGGAGCGAGGGGTACCGTAACTGAGCGAGGGGTACCGTAACTTACCGTAACTTACCGTAACTAGGGTTGGGAGGGTTGGGCCGAACGATATACCGTAACTAGGGTTGGGAGGGTTGGGTTGTCGGTGGAGCGAGGGGTACCGTAACTGAGCGAGGGGCCGAACGATAGAGCGAGGGGTTGTCGGTGTACCGTAACTCCGAACGATATTGTCGGTGCCGAACGATACCGAACGATATTGTCGGTG";
    const k = 7;
    const d = 3;
    const freq = freqWordsMisRev(text, k, d);
    // const ans = [...freq.keys()].toString().replace(/,/g, " ");
    // console.log(ans);
    const expAns = ["GGGGGGG", "CCCCCCC"];
    expect(freq.size).toBe(expAns.length);
    expAns.forEach((s) => freq.delete(s));
    expect(freq.size).toBe(0);
  });
});