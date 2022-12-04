import { input } from "./input";

const movesPart1: any = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const scoresPart1: any = {
  "A X": 3,
  "A Y": 6,
  "A Z": 0,
  "B X": 0,
  "B Y": 3,
  "B Z": 6,
  "C X": 6,
  "C Y": 0,
  "C Z": 3,
};

const scoresPart2: any = {
  "A X": 0,
  "A Y": 3,
  "A Z": 6,

  "B X": 0,
  "B Y": 3,
  "B Z": 6,

  "C X": 0,
  "C Y": 3,
  "C Z": 6,
};

const movesPart2: any = {
  "A X": 3, // Scissors - Rock L
  "A Y": 1, // Rock - Rock D
  "A Z": 2, // Paper - Rock W

  "B X": 1, // Rock - Paper L
  "B Y": 2, // Paper - Paper D
  "B Z": 3, // Scissors - Paper W

  "C X": 2, // Paper - Scissors L
  "C Y": 3, // Scissors - Scissors D
  "C Z": 1, // Rock -  Scissors W
};

const rounds = input.split("\n");

const part1 = () => {
  let score = 0;
  rounds.forEach((round: any) => {
    score = score + scoresPart1[round];
    const myMove = round.split(" ")[1];
    score = score + movesPart1[myMove];
  });
  return score;
};

const part2 = () => {
  let score = 0;
  rounds.forEach((round: any) => {
    score = score + scoresPart2[round] + movesPart2[round];
  });
  return score;
};

export default { part1, part2 };
