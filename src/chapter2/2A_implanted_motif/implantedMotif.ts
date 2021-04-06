import { patternToMP } from "../../chapter1/1I_frequent_words_mismatches/freqWordsMismatches";

const implantedMotif = (dna: string[], k: number, d: number) => {
  // to keep track of frequent patterns
  const patterns = new Map<string, number>();
  // for each string in dna
  dna.forEach((sub) => {
    //   To keep pnly one mismatche pattern per substring of dna
    const mismatchesPerSub = new Map<string, number>();
    // for each pattern (k-mern inside sub)
    for (let i = 0; i < sub.length - k + 1; i++) {
      const pattern = sub.slice(i, i + k);
      // all mismatches from pattern
      const patternsMismatches = patternToMP(pattern, d);
      for (let mismatcheP of patternsMismatches) {
        // do not add more than once for each sub
        mismatchesPerSub.set(mismatcheP, 1);
      }
    }
    // add each individual mismatche pattern generated from sub
    for (const [key, val] of mismatchesPerSub.entries()) {
      const curCount = patterns.get(key);
      if (curCount) {
        patterns.set(key, curCount + 1);
      } else {
        patterns.set(key, 1);
      }
    }
  });
  // to keep only the patterns that have maxCount
  const maxCount = Math.max(...patterns.values());
  for (const [key, value] of patterns.entries()) {
    if (value !== maxCount) {
      patterns.delete(key);
    }
  }
  return patterns;
};

export default implantedMotif;
