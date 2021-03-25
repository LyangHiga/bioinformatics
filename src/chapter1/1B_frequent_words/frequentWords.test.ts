import { frequentWords, hashTableFrequentWords } from "./frequentWords";

describe("1B: The Frequent Words Problem", () => {
  test("Book example for 9-mer in the oriC region of Vibrio cholerae using naive algorithm", () => {
    const text =
      "atcaatgatcaacgtaagcttctaagcATGATCAAGgtgctcacacagtttatccacaacctgagtggatgacatcaagataggtcgttgtatctccttcctctcgtactctcatgaccacggaaagATGATCAAGagaggatgatttcttggccatatcgcaatgaatacttgtgacttgtgcttccaattgacatcttcagcgccatattgcgctggccaaggtgacggagcgggattacgaaagcatgatcatggctgttgttctgtttatcttgttttgactgagacttgttaggatagacggtttttcatcactgactagccaaagccttactctgcctgacatcgaccgtaaattgataatgaatttacatgcttccgcgacgatttacctcttgatcatcgatccgattgaagatcttcaattgttaattctcttgcctcgactcatagccatgatgagctcttgatcatgtttccttaaccctctattttttacggaagaATGATCAAGctgctgctcttgatcatcgtttc";
    const k = 9;
    const freq = frequentWords(text.toUpperCase(), k);
    const ans = [...freq.keys()].toString().replace(/,/g, " ");
    expect(ans).toBe("ATGATCAAG CTCTTGATC TCTTGATCA CTTGATCAT");
  });

  test("Book example for 9-mer in the oriC region of Vibrio cholerae using hash table algorithm", () => {
    const text =
      "atcaatgatcaacgtaagcttctaagcATGATCAAGgtgctcacacagtttatccacaacctgagtggatgacatcaagataggtcgttgtatctccttcctctcgtactctcatgaccacggaaagATGATCAAGagaggatgatttcttggccatatcgcaatgaatacttgtgacttgtgcttccaattgacatcttcagcgccatattgcgctggccaaggtgacggagcgggattacgaaagcatgatcatggctgttgttctgtttatcttgttttgactgagacttgttaggatagacggtttttcatcactgactagccaaagccttactctgcctgacatcgaccgtaaattgataatgaatttacatgcttccgcgacgatttacctcttgatcatcgatccgattgaagatcttcaattgttaattctcttgcctcgactcatagccatgatgagctcttgatcatgtttccttaaccctctattttttacggaagaATGATCAAGctgctgctcttgatcatcgtttc";
    const k = 9;
    const freq = hashTableFrequentWords(text.toUpperCase(), k);
    const ans = [...freq.keys()].toString().replace(/,/g, " ");
    expect(ans).toBe("ATGATCAAG CTCTTGATC TCTTGATCA CTTGATCAT");
  });

  test("Rosalind 1st example using naive alg", () => {
    const text = "ACAACTATGCATCACTATCGGGAACTATCCT";
    const k = 5;
    const freq = frequentWords(text, k);
    const ans = [...freq.keys()].toString().replace(/,/g, " ");
    expect(ans).toBe("ACTAT");
  });

  test("Rosalind 1st example using hash table alg", () => {
    const text = "ACAACTATGCATCACTATCGGGAACTATCCT";
    const k = 5;
    const freq = hashTableFrequentWords(text, k);
    const ans = [...freq.keys()].toString().replace(/,/g, " ");
    expect(ans).toBe("ACTAT");
  });

  test("Rosalind 2nd example using naive alg", () => {
    const text = "CGATATATCCATAG";
    const k = 3;
    const freq = frequentWords(text, k);
    const ans = [...freq.keys()].toString().replace(/,/g, " ");
    expect(ans).toBe("ATA");
  });

  test("Rosalind 2nd example using hash table alg", () => {
    const text = "CGATATATCCATAG";
    const k = 3;
    const freq = hashTableFrequentWords(text, k);
    const ans = [...freq.keys()].toString().replace(/,/g, " ");
    expect(ans).toBe("ATA");
  });

  test("Rosalind extra dataset using naive alg", () => {
    const text =
      "CGGAAGCGAGATTCGCGTGGCGTGATTCCGGCGGGCGTGGAGAAGCGAGATTCATTCAAGCCGGGAGGCGTGGCGTGGCGTGGCGTGCGGATTCAAGCCGGCGGGCGTGATTCGAGCGGCGGATTCGAGATTCCGGGCGTGCGGGCGTGAAGCGCGTGGAGGAGGCGTGGCGTGCGGGAGGAGAAGCGAGAAGCCGGATTCAAGCAAGCATTCCGGCGGGAGATTCGCGTGGAGGCGTGGAGGCGTGGAGGCGTGCGGCGGGAGATTCAAGCCGGATTCGCGTGGAGAAGCGAGAAGCGCGTGCGGAAGCGAGGAGGAGAAGCATTCGCGTGATTCCGGGAGATTCAAGCATTCGCGTGCGGCGGGAGATTCAAGCGAGGAGGCGTGAAGCAAGCAAGCAAGCGCGTGGCGTGCGGCGGGAGAAGCAAGCGCGTGATTCGAGCGGGCGTGCGGAAGCGAGCGG";
    const k = 12;
    const freq = frequentWords(text, k);
    const ans =
      "CGGCGGGAGATT CGGGAGATTCAA CGTGCGGCGGGA CGTGGAGGCGTG CGTGGCGTGCGG GCGTGCGGCGGG GCGTGGAGGCGT GCGTGGCGTGCG GGAGAAGCGAGA GGAGATTCAAGC GGCGGGAGATTC GGGAGATTCAAG GTGCGGCGGGAG TGCGGCGGGAGA";
    // create an arr with each given 12-mer expected
    const test = ans.split(" ");
    // delete each 9-mer ans from our map
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });

  test("Rosalind extra dataset using hash table alg", () => {
    const text =
      "CGGAAGCGAGATTCGCGTGGCGTGATTCCGGCGGGCGTGGAGAAGCGAGATTCATTCAAGCCGGGAGGCGTGGCGTGGCGTGGCGTGCGGATTCAAGCCGGCGGGCGTGATTCGAGCGGCGGATTCGAGATTCCGGGCGTGCGGGCGTGAAGCGCGTGGAGGAGGCGTGGCGTGCGGGAGGAGAAGCGAGAAGCCGGATTCAAGCAAGCATTCCGGCGGGAGATTCGCGTGGAGGCGTGGAGGCGTGGAGGCGTGCGGCGGGAGATTCAAGCCGGATTCGCGTGGAGAAGCGAGAAGCGCGTGCGGAAGCGAGGAGGAGAAGCATTCGCGTGATTCCGGGAGATTCAAGCATTCGCGTGCGGCGGGAGATTCAAGCGAGGAGGCGTGAAGCAAGCAAGCAAGCGCGTGGCGTGCGGCGGGAGAAGCAAGCGCGTGATTCGAGCGGGCGTGCGGAAGCGAGCGG";
    const k = 12;
    const freq = hashTableFrequentWords(text, k);
    const ans =
      "CGGCGGGAGATT CGGGAGATTCAA CGTGCGGCGGGA CGTGGAGGCGTG CGTGGCGTGCGG GCGTGCGGCGGG GCGTGGAGGCGT GCGTGGCGTGCG GGAGAAGCGAGA GGAGATTCAAGC GGCGGGAGATTC GGGAGATTCAAG GTGCGGCGGGAG TGCGGCGGGAGA";
    // create an arr with each given 12-mer expected
    const test = ans.split(" ");
    // delete each 12-mer ans from our map
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });

  test("Rosalind dataset using naive alg", () => {
    const text =
      "TTCGAGTCCAAGGTCGAATTGCTACAACTTGGTGTTCCGTACACTTGGTGTTCCGTACTTCCGTACACTTGGTGTTCCGTACAAGGTCGAAACTTGGTGACTTGGTGTTCGAGTCCTTCGAGTCCTTCGAGTCCTTCCGTACTTGCTACAACTTGGTGTTCCGTACTTGCTACAAAGGTCGAATTCGAGTCCACTTGGTGTTGCTACATTCGAGTCCTTCCGTACTTCGAGTCCACTTGGTGAAGGTCGAATTGCTACATTGCTACAACTTGGTGACTTGGTGAAGGTCGAAACTTGGTGTTGCTACAACTTGGTGAAGGTCGAAAAGGTCGAATTGCTACATTCCGTACAAGGTCGAAAAGGTCGAATTGCTACAACTTGGTGTTCCGTACTTCCGTACACTTGGTGTTCCGTACAAGGTCGAAACTTGGTGAAGGTCGAATTCCGTACACTTGGTGACTTGGTGTTCCGTACAAGGTCGAAAAGGTCGAAACTTGGTGTTGCTACAACTTGGTGTTCGAGTCCAAGGTCGAATTCGAGTCCACTTGGTGTTCGAGTCCAAGGTCGAAAAGGTCGAAAAGGTCGAATTGCTACATTGCTACATTCCGTACACTTGGTGAAGGTCGAAACTTGGTGTTGCTACAAAGGTCGAATTCGAGTCCTTCCGTACACTTGGTGACTTGGTGTTCGAGTCCAAGGTCGAAACTTGGTGACTTGGTGTTCCGTACTTGCTACAACTTGGTGTTGCTACATTGCTACATTGCTACATTCGAGTCCTTGCTACATTCGAGTCCACTTGGTGTTCGAGTCCTTGCTACA";
    const k = 14;
    const freq = frequentWords(text, k);
    // ans for code challenge
    // const ans = [...freq.keys()].toString().replace(/,/g, " ");
    const ans = "ACTTGGTGTTCCGT CTTGGTGTTCCGTA TTGGTGTTCCGTAC";
    const test = ans.split(" ");
    // delete each 14-mer ans from our map
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });

  test("Rosalind  dataset using hash table alg", () => {
    const text =
      "TTCGAGTCCAAGGTCGAATTGCTACAACTTGGTGTTCCGTACACTTGGTGTTCCGTACTTCCGTACACTTGGTGTTCCGTACAAGGTCGAAACTTGGTGACTTGGTGTTCGAGTCCTTCGAGTCCTTCGAGTCCTTCCGTACTTGCTACAACTTGGTGTTCCGTACTTGCTACAAAGGTCGAATTCGAGTCCACTTGGTGTTGCTACATTCGAGTCCTTCCGTACTTCGAGTCCACTTGGTGAAGGTCGAATTGCTACATTGCTACAACTTGGTGACTTGGTGAAGGTCGAAACTTGGTGTTGCTACAACTTGGTGAAGGTCGAAAAGGTCGAATTGCTACATTCCGTACAAGGTCGAAAAGGTCGAATTGCTACAACTTGGTGTTCCGTACTTCCGTACACTTGGTGTTCCGTACAAGGTCGAAACTTGGTGAAGGTCGAATTCCGTACACTTGGTGACTTGGTGTTCCGTACAAGGTCGAAAAGGTCGAAACTTGGTGTTGCTACAACTTGGTGTTCGAGTCCAAGGTCGAATTCGAGTCCACTTGGTGTTCGAGTCCAAGGTCGAAAAGGTCGAAAAGGTCGAATTGCTACATTGCTACATTCCGTACACTTGGTGAAGGTCGAAACTTGGTGTTGCTACAAAGGTCGAATTCGAGTCCTTCCGTACACTTGGTGACTTGGTGTTCGAGTCCAAGGTCGAAACTTGGTGACTTGGTGTTCCGTACTTGCTACAACTTGGTGTTGCTACATTGCTACATTGCTACATTCGAGTCCTTGCTACATTCGAGTCCACTTGGTGTTCGAGTCCTTGCTACA";
    const k = 14;
    const freq = hashTableFrequentWords(text, k);
    // ans for code challenge
    // const ans = [...freq.keys()].toString().replace(/,/g, " ");
    const ans = "ACTTGGTGTTCCGT CTTGGTGTTCCGTA TTGGTGTTCCGTAC";
    const test = ans.split(" ");
    // delete each 14-mer ans from our map
    test.forEach((s) => freq.delete(s));
    // if they match (in any order) => freq has size 0
    expect(freq.size).toBe(0);
  });
});
