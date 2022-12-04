import { input } from "./input";

const getSum = (array1: any[]) =>
  array1.reduce(
    (accumulator, currentValue) =>
      parseInt(accumulator) + parseInt(currentValue),
    0,
  );

const caloriesCluster = input.split("\n\n");
const totalCaloriesPerElf = caloriesCluster.map((cluster) => {
  const calories = cluster.split("\n");
  return getSum(calories);
});

const sortedResults = totalCaloriesPerElf.sort().reverse();

const part1 = () => sortedResults[0];
const part2 = () => getSum(sortedResults.slice(0, 3));

export default { part1, part2 };
