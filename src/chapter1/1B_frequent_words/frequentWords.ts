import patternCount from "../1A_pattern_count/patternCount";

// @Problema 1B

// Given: A DNA string Text and an integer k.
// Return: All most frequent k-mers in Text (in any order).

// Book algorithm (naive) O(|text|^2 . K)
export const frequentWords = (text: string, k: number) => {
  // map for the more frequent words of size k (k-mern)
  // key: pattern , val: number of times in text (this is max count of this text)
  const frequentPatterns = new Map<string, number>();
  const count = new Array<number>();
  for (let i = 0; i < text.length - k + 1; i++) {
    // use i+k substring of text as pattern and search for it in text
    const pattern = text.slice(i, i + k);
    count.push(patternCount(text, pattern));
  }
  const maxCount = Math.max(...count);
  for (let i = 0; i < text.length - k + 1; i++) {
    if (count[i] === maxCount) {
      frequentPatterns.set(text.slice(i, i + k), maxCount);
    }
  }
  return frequentPatterns;
};

// use hash to count how many times a pattern appears O(|text|)
export const hashTableFrequentWords = (text: string, k: number) => {
  // map for the more frequent words of size k (k-mern)
  // key: pattern , val: number of times in text (this is max count of this text)
  const frequentPatterns = new Map<string, number>();
  for (let i = 0; i < text.length - k + 1; i++) {
    const pattern = text.slice(i, i + k);
    // use i+k substring of text as pattern and search for it in text
    const curCount = frequentPatterns.get(pattern);
    // if this pattern is already in frequentPatterns add 1 to counting
    // otherwise add to frequentPatterns with counting 1 (first time it appears)
    if (curCount) {
      frequentPatterns.set(pattern, curCount + 1);
    } else {
      frequentPatterns.set(pattern, 1);
    }
  }

  // to keep only the patterns that have maxCount
  const maxCount = Math.max(...frequentPatterns.values());
  for (const [key, value] of frequentPatterns.entries()) {
    if (value !== maxCount) {
      frequentPatterns.delete(key);
    }
  }
  return frequentPatterns;
};
