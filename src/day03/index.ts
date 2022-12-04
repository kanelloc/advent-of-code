import { input } from "./input";
import * as _ from "lodash";

const rucksacks = input.split("\n");

const letterWeight = (letter: string): number => {
  const value = letter.charCodeAt(0);
  return value > 91 ? value - 96 : value - 38;
};

const commonLetter = (s1: string, s2: string, s3?: string): string => {
  let common = "";
  s1.split("").forEach((letter) => {
    if (s2.includes(letter) && !s3) {
      common = letter;
    } else if (s2.includes(letter) && s3 && s3.includes(letter)) {
      common = letter;
    }
  });
  return common;
};

const part1 = () => {
  return rucksacks.reduce((prev, rucksack) => {
    const rucksackSize = rucksack.length / 2;
    const firstPart = rucksack.slice(0, rucksackSize);
    const secondPart = rucksack.slice(rucksackSize, rucksack.length);
    const common = commonLetter(firstPart, secondPart);
    return letterWeight(common) + prev;
  }, 0);
};

const part2 = () => {
  const chunks = _.chunk(rucksacks, 3);
  return chunks.reduce((prev, chunk) => {
    let common = commonLetter(chunk[0], chunk[1], chunk[2]);
    return letterWeight(common) + prev;
  }, 0);
};

export default { part1, part2 };
