import {
  freqWordsMistaches,
  freqWordsMistachesHT,
  changePinIdx,
  patternToMP,
  permutator,
} from "./freqWordsMismatches";

import hammingDist from "../1G_hamming_distance/hammingDist";

describe("1I: Find the Most Frequent Words with Mismatches in a String", () => {
  test("Rosalind Sample Dataset Naive implementation", () => {
    const text = "ACGTTGCATGTCGCATGATGCATGAGAGCT";
    const k = 4;
    const d = 1;
    const freq = freqWordsMistaches(text, k, d);
    const expAns = "GATG ATGC ATGT";
    const test = expAns.split(" ");
    expect(freq.size).toBe(3);
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });

  // |text| = 361; k=10; d=2 => Apprx. 368kk operations (using O(freqWordsMistaches))
  test("Rosalind Extra Dataset Naive implementation", () => {
    const text =
      "CACAGTAGGCGCCGGCACACACAGCCCCGGGCCCCGGGCCGCCCCGGGCCGGCGGCCGCCGGCGCCGGCACACCGGCACAGCCGTACCGGCACAGTAGTACCGGCCGGCCGGCACACCGGCACACCGGGTACACACCGGGGCGCACACACAGGCGGGCGCCGGGCCCCGGGCCGTACCGGGCCGCCGGCGGCCCACAGGCGCCGGCACAGTACCGGCACACACAGTAGCCCACACACAGGCGGGCGGTAGCCGGCGCACACACACACAGTAGGCGCACAGCCGCCCACACACACCGGCCGGCCGGCACAGGCGGGCGGGCGCACACACACCGGCACAGTAGTAGGCGGCCGGCGCACAGCC";
    const k = 10;
    // console.log(`text size: ${text.length}`);
    const d = 2;
    const freq = freqWordsMistaches(text, k, d);
    const expAns = "GCACACAGAC GCGCACACAC";
    const test = expAns.split(" ");
    expect(freq.size).toBe(2);
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });

  test("Rosalind submit Dataset Naive implementation", () => {
    const text =
      "GCATCTCAGGCATCTCAGTTTTTCGTCCGCCGTAACCCTCTTGATTGCTATACCGCCGTAACTTTTTCGTTTGCTATATTTTTCGTCCGCCGTAACCCGCCGTAACCCTCTTGACCGCCGTAACGCATCTCAGCCGCCGTAACCCTCTTGACCTCTTGATTGCTATACCGCCGTAACCCTCTTGATTTTTCGTCCTCTTGACCGCCGTAACCCGCCGTAACCCGCCGTAACTTTTTCGTCCTCTTGATTGCTATATTGCTATATTTTTCGTCCGCCGTAACCCGCCGTAACTTGCTATACCGCCGTAACTTTTTCGTCCTCTTGATTGCTATACCGCCGTAACCCGCCGTAACTTGCTATAGCATCTCAGTTGCTATACCTCTTGATTTTTCGTGCATCTCAGGCATCTCAGCCTCTTGATTGCTATATTTTTCGTCCGCCGTAACCCTCTTGACCGCCGTAACGCATCTCAGCCTCTTGACCTCTTGAGCATCTCAGGCATCTCAGCCTCTTGACCTCTTGATTTTTCGTCCTCTTGAGCATCTCAGTTTTTCGTGCATCTCAGCCTCTTGACCTCTTGAGCATCTCAGGCATCTCAGCCGCCGTAACCCGCCGTAACTTTTTCGTCCTCTTGACCGCCGTAACTTTTTCGTCCTCTTGACCTCTTGAGCATCTCAGGCATCTCAGTTGCTATATTGCTATAGCATCTCAGCCGCCGTAACTTGCTATATTTTTCGTTTGCTATATTGCTATAGCATCTCAGCCTCTTGAGCATCTCAGTTGCTATACCTCTTGATTTTTCGTCCTCTTGACCGCCGTAACCCGCCGTAACTTGCTATACCGCCGTAACTTGCTATATTGCTATAGCATCTCAGCCTCTTGAGCATCTCAGCCGCCGTAACGCATCTCAGTTGCTATA";
    const k = 6;
    const d = 2;
    const freq = freqWordsMistaches(text, k, d);
    const ans = [...freq.keys()].toString().replace(/,/g, " ");
    // console.log(ans);
    const expAns = "ATCTTC";
    expect(freq.size).toBe(1);
    const test = expAns.split(" ");
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });

  test("changing pattern in one position", () => {
    const pattern = "AAAA";
    const ans = changePinIdx([...pattern], 1);
    const expAns = ["AAAA", "ACAA", "AGAA", "ATAA"];
    for (let i = 0; i < expAns.length; i++) {
      expect(ans[i].toString().replace(/,/g, "")).toBe(expAns[i]);
    }
  });

  test("check if patternToMP returns all mismaches from a pattern with at most d erros", () => {
    const pattern = "AAAA";
    const d = 2;
    const mp = patternToMP(pattern, d);
    // console.log(`mp: ${mp.length}`);
    const t0 = new Array<string>();
    const t1 = new Array<string>();
    const t2 = new Array<string>();
    for (let q of mp) {
      switch (hammingDist(pattern, q)) {
        case 0:
          t0.push(q);
          continue;
        case 1:
          t1.push(q);
          continue;
        case 2:
          t2.push(q);
          continue;
      }
    }
    // console.log(`t0: ${t0}, ${t0.length}`);
    expect(t0.length).toBe(1);
    // console.log(`t1: ${t1}, ${t1.length}`);
    expect(t1.length).toBe(12);
    // REMOVING REPETIONS!!! => hash table
    // console.log(`t2: ${t2}, ${t2.length}`);
    expect(t2.length).toBe(54);

    const sum = t0.length + t1.length + t2.length;
    expect(sum).toBe(mp.length);

    // lets check using all permutations
    // just to confirm Math
    const perm = permutator(pattern.length);
    let countT2 = 0;
    for (let q of perm) {
      if (hammingDist(pattern, q) === 2) {
        countT2 += 1;
      }
    }
    expect(t2.length).toBe(countT2);
  });

  test("Rosalind Sample Dataset for frequent Words with mismatch using HT", () => {
    const text = "ACGTTGCATGTCGCATGATGCATGAGAGCT";
    const k = 4;
    const d = 1;
    const freq = freqWordsMistachesHT(text, k, d);
    const expAns = "GATG ATGC ATGT";
    const test = expAns.split(" ");
    expect(freq.size).toBe(3);
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });

  // |text| = 361; k=10; d=2 => Apprx. 253k operations (using O(freqWordsMistachesHT))
  test("Rosalind Extra Dataset for frequent Words with mismatch using HT", () => {
    const text =
      "CACAGTAGGCGCCGGCACACACAGCCCCGGGCCCCGGGCCGCCCCGGGCCGGCGGCCGCCGGCGCCGGCACACCGGCACAGCCGTACCGGCACAGTAGTACCGGCCGGCCGGCACACCGGCACACCGGGTACACACCGGGGCGCACACACAGGCGGGCGCCGGGCCCCGGGCCGTACCGGGCCGCCGGCGGCCCACAGGCGCCGGCACAGTACCGGCACACACAGTAGCCCACACACAGGCGGGCGGTAGCCGGCGCACACACACACAGTAGGCGCACAGCCGCCCACACACACCGGCCGGCCGGCACAGGCGGGCGGGCGCACACACACCGGCACAGTAGTAGGCGGCCGGCGCACAGCC";
    console.log(text.length);
    const k = 10;
    const d = 2;
    const freq = freqWordsMistachesHT(text, k, d);
    // const ans = [...freq.keys()].toString().replace(/,/g, " ");
    // console.log(ans);
    const expAns = "GCACACAGAC GCGCACACAC";
    const test = expAns.split(" ");
    expect(freq.size).toBe(2);
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });

  test("Rosalind submit Dataset for frequent Words with mismatch using HT", () => {
    const text =
      "GCATCTCAGGCATCTCAGTTTTTCGTCCGCCGTAACCCTCTTGATTGCTATACCGCCGTAACTTTTTCGTTTGCTATATTTTTCGTCCGCCGTAACCCGCCGTAACCCTCTTGACCGCCGTAACGCATCTCAGCCGCCGTAACCCTCTTGACCTCTTGATTGCTATACCGCCGTAACCCTCTTGATTTTTCGTCCTCTTGACCGCCGTAACCCGCCGTAACCCGCCGTAACTTTTTCGTCCTCTTGATTGCTATATTGCTATATTTTTCGTCCGCCGTAACCCGCCGTAACTTGCTATACCGCCGTAACTTTTTCGTCCTCTTGATTGCTATACCGCCGTAACCCGCCGTAACTTGCTATAGCATCTCAGTTGCTATACCTCTTGATTTTTCGTGCATCTCAGGCATCTCAGCCTCTTGATTGCTATATTTTTCGTCCGCCGTAACCCTCTTGACCGCCGTAACGCATCTCAGCCTCTTGACCTCTTGAGCATCTCAGGCATCTCAGCCTCTTGACCTCTTGATTTTTCGTCCTCTTGAGCATCTCAGTTTTTCGTGCATCTCAGCCTCTTGACCTCTTGAGCATCTCAGGCATCTCAGCCGCCGTAACCCGCCGTAACTTTTTCGTCCTCTTGACCGCCGTAACTTTTTCGTCCTCTTGACCTCTTGAGCATCTCAGGCATCTCAGTTGCTATATTGCTATAGCATCTCAGCCGCCGTAACTTGCTATATTTTTCGTTTGCTATATTGCTATAGCATCTCAGCCTCTTGAGCATCTCAGTTGCTATACCTCTTGATTTTTCGTCCTCTTGACCGCCGTAACCCGCCGTAACTTGCTATACCGCCGTAACTTGCTATATTGCTATAGCATCTCAGCCTCTTGAGCATCTCAGCCGCCGTAACGCATCTCAGTTGCTATA";
    const k = 6;
    const d = 2;
    const freq = freqWordsMistachesHT(text, k, d);
    // const ans = [...freq.keys()].toString().replace(/,/g, " ");
    // console.log(ans);
    const expAns = "ATCTTC";
    expect(freq.size).toBe(1);
    const test = expAns.split(" ");
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });
});
