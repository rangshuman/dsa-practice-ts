export function intToRoman(num: number): string {
  let romanValue: string = "";

  const intArr = Array.from(num.toString());
  const decimalPlaceValues = intArr.map((int, i) => ({
    int,
    decimalPlace: Math.pow(10, intArr.length - i - 1).toString(),
  }));

  decimalPlaceValues.forEach((val) => {
    switch (val.decimalPlace) {
      case "1000":
        switch (val.int) {
          case "1":
            romanValue += "M";
            break;
          case "2":
            romanValue += "MM";
            break;
          case "3":
            romanValue += "MMM";
            break;
          default:
            break;
        }
        break;
      case "100":
        switch (val.int) {
          case "1":
            romanValue += "C";
            break;
          case "4":
            romanValue += "CD";
            break;
          case "9":
            romanValue += "CM";
            break;
          case "5":
            romanValue += "D";
            break;
          default:
            if (Number(val.int) < 5) {
              Array(Number(val.int))
                .fill("i")
                .map(() => {
                  romanValue += "C";
                });
            } else {
              let timesC = "";
              Array(Number(val.int) - 5)
                .fill("i")
                .map(() => {
                  timesC += "C";
                });
              romanValue += "D" + timesC;
            }
            break;
        }
        break;
      case "10":
        switch (val.int) {
          case "1":
            romanValue += "X";
            break;
          case "4":
            romanValue += "XL";
            break;
          case "9":
            romanValue += "XC";
            break;
          case "5":
            romanValue += "L";
            break;
          default:
            if (Number(val.int) < 5) {
              Array(Number(val.int))
                .fill("i")
                .map(() => {
                  romanValue += "X";
                });
            } else {
              let timesC = "";
              Array(Number(val.int) - 5)
                .fill("i")
                .map(() => {
                  timesC += "X";
                });
              romanValue += "L" + timesC;
            }
            break;
        }
        break;
      case "1":
        switch (val.int) {
          case "1":
            romanValue += "I";
            break;
          case "4":
            romanValue += "IV";
            break;
          case "9":
            romanValue += "IX";
            break;
          case "5":
            romanValue += "V";
            break;
          default:
            if (Number(val.int) < 5) {
              Array(Number(val.int))
                .fill("i")
                .map(() => {
                  romanValue += "I";
                });
            } else {
              let timesC = "";
              Array(Number(val.int) - 5)
                .fill("i")
                .map(() => {
                  timesC += "I";
                });
              romanValue += "V" + timesC;
            }
            break;
        }
        break;
      default:
        break;
    }
  });

  return romanValue;
}

// AI Answer:
// export function intToRoman(num: number): string {
//   let romanValue: string = "";

//   const romanNumerals: [number, string][] = [
//     [1000, "M"],
//     [900, "CM"],
//     [500, "D"],
//     [400, "CD"],
//     [100, "C"],
//     [90, "XC"],
//     [50, "L"],
//     [40, "XL"],
//     [10, "X"],
//     [9, "IX"],
//     [5, "V"],
//     [4, "IV"],
//     [1, "I"],
//   ];

//   for (const [value, symbol] of romanNumerals) {
//     while (num >= value) {
//       romanValue += symbol;
//       num -= value;
//     }
//   }

//   return romanValue;
// }
