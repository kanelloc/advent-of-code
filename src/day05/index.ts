import { input } from "./input";

const inputString = input.split("\n");

// Strings 1-9 contain the stacks.
const rows = inputString.slice(1, 9).map((row) => {
  return row.match(/.{1,4}/g);
});

const procedureSteps = inputString.slice(11, inputString.length);

const getOriginalStacks = () => {
  let stacks: any[][] = [[], [], [], [], [], [], [], [], []];
  rows.forEach((rowCluster, clusterIndex) => {
    if (rowCluster) {
      rowCluster.forEach((element, index) => {
        stacks[index].push(rowCluster[index]);
      });
    }
  });
  return stacks.map((stack) => {
    return stack.reduce((previousValue, currentValue) => {
      const trimmedCargo = currentValue.trim();
      if (trimmedCargo) {
        previousValue.push(trimmedCargo);
      }
      return previousValue;
    }, []);
  });
};

const startProcedure = (type: "part1" | "part2") => {
  const stacks = getOriginalStacks();
  procedureSteps.forEach((step) => {
    const numberOfCratesToMove = step.match("move(.*)from");
    const moveFrom = step.match("from(.*)to");
    const moveTo = step.split(" ").pop();

    if (!numberOfCratesToMove || !moveFrom || !moveTo) {
      throw new Error("Error while getting step data");
    }

    const movingCount = parseInt(numberOfCratesToMove[1].trim());
    const moveFromIndex = parseInt(moveFrom[1].trim()) - 1;
    const moveToIndex = parseInt(moveTo) - 1;
    let cratesToMove = stacks[moveFromIndex].slice(0, movingCount);

    if (type === "part1") {
      cratesToMove = cratesToMove.reverse();
    }

    stacks[moveToIndex] = [...cratesToMove, ...stacks[moveToIndex]];
    stacks[moveFromIndex].splice(0, movingCount);
  });
  return stacks
    .map((stack) => {
      return stack[0].replace(/[^a-zA-Z ]/g, "");
    })
    .toString()
    .replace(/,/g, "");
};

const part1 = () => {
  return startProcedure("part1");
};

const part2 = () => {
  return startProcedure("part2");
};

export default { part1, part2 };
