// Question link: https://leetcode.com/problems/container-with-most-water

export function maxArea(height: number[]): number {
  let pointerStart = 0;
  let pointerEnd = height.length - 1;

  const areas = [];
  for (let i = 0; i < height.length; i++) {
    const containerHeight =
      height[pointerStart] > height[pointerEnd]
        ? height[pointerEnd]
        : height[pointerStart];

    const containerWidth = pointerEnd - pointerStart;

    areas.push(containerHeight * containerWidth);

    const startHeight = height[pointerStart];
    const endHeight = height[pointerEnd];

    if (startHeight === endHeight) {
      pointerStart++;
      pointerEnd--;
    } else if (startHeight > endHeight) {
      pointerEnd--;
    } else {
      pointerStart++;
    }
  }

  return Math.max(...areas);
}
