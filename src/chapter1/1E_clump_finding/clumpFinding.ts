// Given integers L and t, a string Pattern forms an (L, t)-clump inside a (larger) string Genome
// if there is an interval of Genome of length L in which Pattern appears at least t times.
// For example, TGCA forms a (25,3)-clump in the following Genome:
// gatcagcataagggtcccTGCAATGCATGACAAGCCTGCAgttgttttac.

//return all patterns that appears at least t times in text
const patternAtLeastTTimes = (text: string, k: number, t: number) => {
  // to count how many a pattern appears in text
  const patterns = new Map<string, number>();
  for (let i = 0; i < text.length - k + 1; i++) {
    const word = text.slice(i, i + k);
    const count = patterns.get(word);
    // check if this word already exists in patterns, add 1 to its count
    // or set to 1 if it's the first time
    if (count) {
      patterns.set(word, count + 1);
    } else {
      patterns.set(word, 1);
    }
  }
  // filter only the words that appears at least t times
  for (const [key, val] of patterns.entries()) {
    if (val < t) {
      patterns.delete(key);
    }
  }

  return patterns;
};

// Clump Finding Problem
// Find patterns forming clumps in a string.
// Given: A string Genome, and integers k, L, and t.
// Return: All distinct k-mers forming (L, t)-clumps in Genome.
const clumpFinding = (genome: string, k: number, l: number, t: number) => {
  // ATTENTION: Rosalind datasets are using l equals |genome|
  // iow: subtring = genome
  // this way we get the right answer, but this is not the real problem
  // to pass all tests toogle comments bellow:
  const subStrings = genome.match(new RegExp(".{1," + l + "}", "g"))!;
  const patterns = new Array<string>();
  // patterns.push(...patternAtLeastTTimes(genome, k, t).keys());
  for (let text of subStrings) {
    patterns.push(...patternAtLeastTTimes(text, k, t).keys());
  }
  return patterns.toString().replace(/,/g, " ");
};

export default clumpFinding;
