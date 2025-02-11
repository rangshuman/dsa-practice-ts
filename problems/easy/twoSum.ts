export function twoSum(nums: number[], target: number): number[] {
  let numsMap: any = {};
  for (let i = 0; i < nums.length; i++) {
    numsMap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsMap[complement] !== undefined && numsMap[complement] !== i) {
      return [i, numsMap[complement]];
    }
  }
  return [];
}
