// import Plotly from "plotly.js";
import { newPlot } from "plotly.js";

// Define the skew of a DNA string Genome, denoted Skew(Genome),
// as the difference between the total number of occurrences of 'G' and 'C' in Genome.
// Let Prefixi (Genome) denote the prefix (i.e., initial substring) of Genome of length i.
// For example, the values of Skew(Prefixi ("CATGGGCATCGGCCATACGCC")) are:
// 0 -1 -1 -1 0 1 2 1 1 1 0 1 2 1 0 0 0 0 -1 0 -1 -2

// Minimum Skew Problem
// Find a position in a genome minimizing the skew.
// Given: A DNA string Genome.
// Return: All integer(s) i minimizing Skew(Prefixi (Text))
// over all values of i (from 0 to |Genome|).
const minSkew = (genome: string) => {
  // skew i, starting with i=0 to 0
  // #G - #C in the ith position
  const skew = new Array<number>();
  // counting c and g
  let c = 0;
  let g = 0;
  for (let letter of genome) {
    skew.push(g - c);
    switch (letter) {
      case "C":
        c += 1;
        continue;
      case "G":
        g += 1;
        continue;
      default:
        continue;
    }
  }
  const min = Math.min(...skew);
  const positions = new Array<number>();
  skew.forEach((x, i) => {
    if (x === min) positions.push(i);
  });

  return positions;
};

export default minSkew;
