// @Problem 1A from

// Given: {DNA strings}} Text and Pattern.
// Return: Count(Text, Pattern).
const patternCount = (text: string, pattern: string) => {
  let count = 0;
  for (let i = 0; i < text.length - pattern.length + 1; i++) {
    // check substring text[i:i+|pattern|]
    if (text.slice(i, i + pattern.length) === pattern) {
      count++;
    }
  }
  return count;
};

export default patternCount;
