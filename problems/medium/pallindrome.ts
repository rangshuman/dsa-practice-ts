// Question link: https://leetcode.com/problems/longest-palindromic-substring

let subStrings: string[] = [];

function isPallindrome(s: string) {
  const reverseS = s.split("").reverse().join("");
  return { string: s, isPallindrome: s === reverseS, length: s.length };
}

function collectAllSubString(s: string) {
  if (s.length === 0 || s.length === 1) return subStrings.push(s);
  const baseSubString: string[] = [];
  for (let i = 0; i <= s.length; i++) {
    const slicedS = s.slice(0, i);
    if (slicedS.length > 1) {
      baseSubString.push(slicedS);
    }
    subStrings = [...subStrings, ...baseSubString];
    collectAllSubString(s.slice(i + 1, s.length));
  }
}

export function longestPalindrome(s: string): string {
  collectAllSubString(s);
  const sub: {
    string: string;
    isPallindrome: boolean;
    length: number;
  }[] = subStrings.map((s) => isPallindrome(s)).filter((s) => s.isPallindrome);
  sub.sort((a, b) => b.length - a.length);
  return sub[0].string;
}
