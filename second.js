// 2 lab

// -------------------------------------------------------1.1-------------------------------------
// function sayHello(name) {
//     return `Hello, ${name}!`;
// }
//
// console.log(sayHello("Olha"));
//
// -------------------------------------------------------1.2-------------------------------------
// function array(numb) {
//     return [numb-1, numb, numb+1];
// }
//
// console.log(array(7));
//
// -------------------------------------------------------1.3-------------------------------------
// function func3(num1, num2) {
//     if (typeof(num2) != "number" || num2 <= 0) {
//         return num1;
//     }
//
//     let str = "";
//     let count = 0;
//
//     while (count < num2) {
//         str+=num1;
//
//         if (num2 - count === 1) {
//             return str;
//         }
//
//         str += "***";
//         count++;
//     }
// }
//
// console.log(func3(22, -24));

// -------------------------------------------------------3.1-------------------------------------
// const prompt = require("prompt-sync")();
// let input = prompt("Введіть хвилини: ");
//
// function minToHoursMin(minutes) {
//     let min = Number(minutes);
//
//     if (isNaN(min) || min < 0 || !Number.isInteger(min)) {
//         return "Помилка, перевірте дані!";
//     } else {
//         let h = Math.floor(min / 60), m = min % 60;
//
//         return `Це ${h} ${getHoursDeclension(h)} ${m} ${getMinutesDeclension(m)}`
//     }
// }
//
// function getHoursDeclension(hours) {
//     if (hours % 10 === 1 && hours % 100 !== 11) {
//         return "година";
//     } else if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100)) {
//         return "години";
//     } else {
//         return "годин";
//     }
// }
//
// function getMinutesDeclension(minutes) {
//     if (minutes % 10 === 1 && minutes % 100 !== 11) {
//         return "хвилина";
//     } else if ([2, 3, 4].includes(minutes % 10) && ![12, 13, 14].includes(minutes % 100)) {
//         return "хвилини";
//     } else {
//         return "хвилин";
//     }
// }
//
// console.log(minToHoursMin(input));

// -------------------------------------------------------3.2-------------------------------------
function returnMax(num1, num2, num3, num4) {
    if ([num1, num2, num3, num4].some(num => typeof num !== "number" || num < 4)) {
        return 0;
    }

    return Math.max(num1, num2, num3, num4);
}

console.log(returnMax(22, 42, "b", 11));
