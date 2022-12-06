import { input } from "./input";

const getMarkerPosition = (characters: number) => {
  let markerPosition = 0;
  for (let i = 0; i < input.length; i++) {
    const cluster = input.slice(i, i + characters).split("");
    const clusterSet = new Set([...cluster]);
    if ([...clusterSet].length === characters && markerPosition === 0) {
      markerPosition = i + characters;
    }
  }
  return markerPosition;
};

const part1 = () => getMarkerPosition(4);
const part2 = () => getMarkerPosition(14);
export default { part1, part2 };
