// We say that position i in k-mers p1 … pk and q1 … qk is a mismatch if pi ≠ qi.
// For example, CGAAT and CGGAC have two mismatches.
// The number of mismatches between strings p and q is called
// the Hamming distance between these strings and is denoted HammingDistance(p, q).

// Hamming Distance Problem
// Compute the Hamming distance between two DNA strings.
// Given: Two DNA strings.
// Return: An integer value representing the Hamming distance.
const hammingDist = (p: string, q: string) => {
  // check if p and q have the same size
  if (p.length !== q.length) {
    throw new Error("p and q must have the same size");
  }
  let dist = 0;
  for (let i = 0; i < p.length; i++) {
    if (p.charAt(i) !== q.charAt(i)) {
      dist += 1;
    }
  }
  return dist;
};

export default hammingDist;
