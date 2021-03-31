// We defined a mismatch in “Compute the Hamming Distance Between Two Strings”.
// We now generalize “Find the Most Frequent Words in a String” to incorporate mismatches as well.

// Given strings Text and Pattern as well as an integer d,
// we define Countd(Text, Pattern) as the total number of occurrences of Pattern in Text with at most d mismatches.
// For example, Count1(AACAAGCTGATAAACATTTAAAGAG, AAAAA) = 4
// because AAAAA appears four times in this string with at most one mismatch: AACAA, ATAAA, AAACA, and AAAGA.
// Note that two of these occurrences overlap.

// A most frequent k-mer with up to d mismatches in Text is simply a string Pattern maximizing
// Countd(Text, Pattern) among all k-mers.
// Note that Pattern does not need to actually appear as a substring of Text;
// for example, AAAAA is the most frequent 5-mer with 1 mismatch in AACAAGCTGATAAACATTTAAAGAG,
// even though AAAAA does not appear exactly in this string. Keep this in mind while solving the following problem.

import approximatePatternMatching from "../1H_approximate_pattern_matching/approximatePatternMatching";

// Frequent Words with Mismatches Problem
// Find the most frequent k-mers with mismatches in a string.
// Given: A string Text as well as integers k and d.
// Return: All most frequent k-mers with up to d mismatches in Text.

// Naive implementation: Generate all permutatios with repetition (4^k)
// Approx. O(4^k * O(approximatePatternMatching))
//  ~~~~ O(4^k*|text-k|)
export const freqWordsMistaches = (text: string, k: number, d: number) => {
  // map for the more frequent words of size k (k-mern)
  // key: pattern , val: number of times this pattern(with at most d mismatches)
  // appears in text
  const frequentPatterns = new Map<string, number>();
  const count = new Array<number>();
  const combinations = permutator(k);
  for (let i = 0; i < combinations.length; i++) {
    const pattern = combinations[i];
    const t = approximatePatternMatching(pattern, text, d).length;
    count.push(t);
  }
  let maxCount = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > maxCount) {
      maxCount = count[i];
    }
  }
  // const maxCount = Math.max(...count);
  for (let i = 0; i < combinations.length; i++) {
    if (count[i] === maxCount) {
      frequentPatterns.set(combinations[i], maxCount);
    }
  }
  return frequentPatterns;
};

// return all permutations with repetition
// with size k
export const permutator = (k: number) => {
  const result: string[] = [];
  const nucleotideos = ["A", "C", "G", "T"];

  const permute = (arr: string[]) => {
    if (arr.length > k - 1) {
      result.push(arr.toString().replace(/,/g, ""));
      return;
    }
    for (let i = 0; i < nucleotideos.length; i++) {
      permute(arr.concat([nucleotideos[i]]));
    }
  };

  permute([]);

  return result;
};

// given a pattern and position idx
// returns all pattern' with mismatch in idx position
// export const changePinIdx = (pattern: string, idx: number) => {
export const changePinIdx = (pattern: string[], idx: number) => {
  const nucleotideos = ["A", "C", "G", "T"];
  const mismactchesP: string[][] = [];
  for (let letter of nucleotideos) {
    mismactchesP.push([
      ...pattern.slice(0, idx),
      letter,
      ...pattern.slice(idx + 1),
    ]);
  }
  return mismactchesP;
};

// Approx. O(Combinations(k,k-d) * 4^d)
// Combinations (k,k-d) = k!/ ((k-d)!d!)
//  ~~~ O(k! * 4^d)/((k-d)!d!)
export const patternToMP = (pattern: string, d: number) => {
  const result = new Map<string, number>();

  const permute = (arr: string[], m: number) => {
    if (m === 0) {
      result.set(arr.toString().replace(/,/g, ""), 0);
      return;
    }
    // foreach position
    for (let i = 0; i < arr.length; i++) {
      // foreach new pattern
      const newPatterns = changePinIdx(arr, i);

      for (let np of newPatterns) {
        // console.log(np, m - 1);
        permute(np, m - 1);
      }
    }
  };

  permute([...pattern], d);

  return [...result.keys()];
};

// More elegant approach: we could use each slice of text (k-mern) as pattern
//    use a function patternToPattern': given a pattern returns all patterns'
//    with at most d mismatches
//    for each pattern we keep pattens' in a hash table counting how many times
//    each pattern' appears.

//Approx. O(|text-k| * O(patternToMP))
// ~~~~ O( |text -k| * k! * 4^d)/((k-d)!d!)
export const freqWordsMistachesHT = (text: string, k: number, d: number) => {
  // map for the more frequent words of size k (k-mern)
  // key: pattern, val: number of times this pattern(with at most d mismatches)
  // appears in text
  const frequentPatterns = new Map<string, number>();

  // Go trhough all text and get all pattern and its pattern' with at most d mismatches
  for (let i = 0; i < text.length - k + 1; i++) {
    const p = text.slice(i, i + k);
    const patterns = patternToMP(p, d);
    for (let q of patterns) {
      const curCount = frequentPatterns.get(q);
      if (curCount) {
        frequentPatterns.set(q, curCount + 1);
      } else {
        frequentPatterns.set(q, 1);
      }
    }
  }
  // to keep only patterns that appeas maxCount times
  const maxCount = Math.max(...frequentPatterns.values());
  for (const [key, value] of frequentPatterns.entries()) {
    if (value !== maxCount) {
      frequentPatterns.delete(key);
    }
  }
  return frequentPatterns;
};
