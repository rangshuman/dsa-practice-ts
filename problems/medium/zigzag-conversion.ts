// Question link: https://leetcode.com/problems/zigzag-conversion

export function convert(s: string, numRows: number): string {
  if (s.length === 1) return s;

  const matrix: { val: string; r: number; c: number }[] = [];
  let zigZagString = "";

  let r = 1;
  let c = 1;
  let increment = true;
  for (let i = 0; i < s.length; i++) {
    matrix.push({ val: s.charAt(i), r, c });
    if (r === numRows) {
      increment = false;
      c++;
    }
    if (r === 1) {
      increment = true;
    }
    increment === true ? r++ : r--;
  }

  for (let j = 1; j <= c; j++) {
    const getAllCharsAtRowJSortedByColumn = matrix
      .filter((m) => m.r === j)
      .sort((a, b) => a.c - b.c);

    getAllCharsAtRowJSortedByColumn.forEach((c) => {
      zigZagString = zigZagString + c.val;
    });
  }

  return zigZagString;
}
