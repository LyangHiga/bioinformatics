// We now extend “Find the Most Frequent Words with Mismatches in a String”
// to find frequent words with both mismatches and reverse complements.
// Recall that Pattern' refers to the reverse complement of Pattern.

// Frequent Words with Mismatches and Reverse Complements Problem
// Find the most frequent k-mers (with mismatches and reverse complements) in a DNA string.

// Given: A DNA string Text as well as integers k and d.
// Return: All k-mers Pattern maximizing the sum
// Countd(Text, Pattern) + Countd(Text, Pattern') over all possible k-mers.

import { patternToMP } from "../1I_frequent_words_mismatches/freqWordsMismatches";
import reverseComplement from "../1C_reverse_complement/reverseComplement";

export const freqWordsMisRev = (text: string, k: number, d: number) => {
  // map for the more frequent words of size k (k-mern)
  // key: pattern, val: number of times this pattern(with at most d mismatches)
  // appears in text
  const frequentPatterns = new Map<string, number>();

  // Go trhough all text and get all pattern and its pattern' with at most d mismatches
  for (let i = 0; i < text.length - k + 1; i++) {
    // now we have to check mismatches (at most d) from pattern and pattern'
    const p = text.slice(i, i + k);
    const patterns = patternToMP(p, d);
    const pRC = reverseComplement(p);
    const patternsMP = patternToMP(pRC, d);
    patterns.push(...patternsMP);
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
  const counting = [...frequentPatterns.values()];
  let maxCount = 0;
  counting.forEach((c) => {
    if (c > maxCount) {
      maxCount = c;
    }
  });
  for (const [key, value] of frequentPatterns.entries()) {
    if (value !== maxCount) {
      frequentPatterns.delete(key);
    }
  }
  return frequentPatterns;
};
