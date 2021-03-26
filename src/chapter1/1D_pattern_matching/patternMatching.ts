// Find all occurrences of a pattern in a string.
// Given: Strings Pattern and Genome.
// Return: All starting positions in Genome where Pattern appears as a substring. Use 0-based indexing.

const patternMatching = (genome: string, pattern: string) => {
  //   arr to keep starting positions
  const idxs = new Array<number>();
  for (let i = 0; i < genome.length - pattern.length + 1; i++) {
    //   we could also check for pattern complementary
    // check substring text[i:i+|pattern|]
    if (genome.slice(i, i + pattern.length) === pattern) {
      // add this start position to idxs
      idxs.push(i);
    }
  }

  return idxs;
};

export default patternMatching;
