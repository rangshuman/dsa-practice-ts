// Question link: https://leetcode.com/problems/string-to-integer-atoi

function roundTo32BitSignedInt(num: number) {
  const INT32_MIN = -(2 ** 31); // -231
  const INT32_MAX = 2 ** 31 - 1; // 231 - 1

  // Ensure the number is within the range by rounding if necessary
  return Math.max(INT32_MIN, Math.min(INT32_MAX, num));
}

function isLeadingZero(finalInt: string): boolean {
  const splitString = finalInt.split("");
  const filteredArray = splitString.filter((c) => !isNaN(Number(c)));
  return filteredArray.length > 0 ? false : true;
}

export function myAtoi(s: string): number {
  let finalInt = "";

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    // Break loop if char is a an Alpha character at any position
    if (isNaN(Number(char)) && char !== "-" && char !== "+" && char !== " ") {
      break;
    }

    if (char === " " && finalInt.length > 0) {
      break;
    }

    if ((char === "-" || char === "+") && finalInt.length === 0) {
      finalInt += char;
    } else if ((char === "-" || char === "+") && finalInt.length > 0) {
      break;
    }

    if (
      char === "0" &&
      finalInt.charAt(finalInt.length - 1) !== "0" &&
      finalInt.charAt(finalInt.length - 1) !== "-" &&
      finalInt.charAt(finalInt.length - 1) !== "+"
    ) {
      finalInt += char;
    } else if (
      char === "0" &&
      finalInt.charAt(finalInt.length - 1) === "0" &&
      !isLeadingZero(finalInt)
    ) {
      finalInt += char;
    }

    if (!isNaN(Number(char)) && char !== "0" && char !== " ") {
      finalInt += char;
    }
  }

  return finalInt.length > 0 && !isNaN(Number(finalInt))
    ? roundTo32BitSignedInt(Number(finalInt))
    : 0;
}
