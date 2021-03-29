// We say that a k-mer Pattern appears as a substring of Text with at most d mismatches
// if there is some k-mer substring Pattern' of Text having d or fewer mismatches with Pattern,
// i.e., HammingDistance(Pattern, Pattern') ≤ d.
// Our observation that a DnaA box may appear with slight variations
// leads to the following generalization of the Pattern Matching Problem.

// Approximate Pattern Matching Problem
// Find all approximate occurrences of a pattern in a string.
// Given: Strings Pattern and Text along with an integer d.
// Return: All starting positions where Pattern appears as a substring of Text with at most d mismatches.

import hammingDist from "../1G_hamming_distance/hammingDist";

const approximatePatternMatching = (
  pattern: string,
  text: string,
  d: number
) => {
  //   arr to keep starting positions
  const idxs = new Array<number>();
  for (let i = 0; i < text.length - pattern.length + 1; i++) {
    // we could also check for pattern complementary
    // check substring text[i:i+|pattern|]
    const q = text.slice(i, i + pattern.length);
    // this time we serach for pattern' with at most d mismatches
    if (hammingDist(pattern, q) <= d) {
      idxs.push(i);
    }
  }
  return idxs;
};

export default approximatePatternMatching;
