//   Функции!!!!!!!!!


//

// minNumber = (firstNumber, secondNumber) => {
//     return firstNumber < secondNumber ? firstNumber : secondNumber;
// }
// console.log(minNumber(10, 15));


//

// steppen = (number, stepen) => {
//     return number ** stepen;
// }
// console.log(steppen(5, 2));



//

// calc = (firstNumber, secondNumber, sing) => {
//     switch(sing) {
//     case "+":
//         return firstNumber + secondNumber;
//         break;
//     case "-":
//         return firstNumber - secondNumber;
//         break;
//     case "*":
//         return firstNumber * secondNumber;
//         break;
//     case "/":
//         return firstNumber / secondNumber;
//         break;
//     default:
//         console.log('Не правильный знак!');
//         break;
//     }
// }
// console.log(calc(10, 15, '+'));
// console.log(calc(10, 15, '-'));
// console.log(calc(10, 15, '*'));
// console.log(calc(10, 15, '/'));



//

// isSimple = (number) => {
//     let result = true;
//     for(let i = 2; i < number; i++) {
//         if(number % i == 0) {
//             result = false;
//             break;
//         }
//     }
//     return console.log(result);
// }
// isSimple(13);



//

// multipleTable = (number) => {
//     for(i = 2; i <= 9; i++) {
//         console.log(`${number} * ${i} = ${number * i}`);
//     }
// }
// multipleTable(3);


//

// divideLeft = (firstNumber, secondNumber) => {
//     let result = 0;
//     const divideResult = firstNumber / secondNumber;
//     const divideResultRound = Math.trunc(divideResult);
//     if(divideResult > divideResultRound) {
//         result = divideResult - divideResultRound;
//     }
//     return Math.trunc(result * secondNumber);
// }
// console.log(divideLeft(15, 9));



//

// function sum(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {
//     return num1 + num2 + num3 + num4 + num5;
// }
// console.log(sum(1, 1, 2));



//

// function theBigestNumber(num1, num2, num3, num4, num5) {
//     let bigNumber;
//     if(num1 && num2) {
//         bigNumber = num1 > num2 ? num1 : num2;
//         if(num3) {
//             bigNumber = num3 > bigNumber ? num3 : bigNumber;
//         }
//         if(num4) {
//             bigNumber = num4 > bigNumber ? num4 : bigNumber;
//         }
//         if(num5) {
//             bigNumber = num5 > bigNumber ? num5 : bigNumber;
//         }
//     }
//     else {
//         bigNumber = num1 || "No number";
//     }
//    return bigNumber;
// }
// console.log(theBigestNumber(1, 1, 2, 7, 10));




//

oddEven = (min, max, odd) => {
    for(i = min; i <= max; i++) {
        if(odd) {
            if(i % 2 == 0) {
                console.log(i);
            }
        }
        else {
            if(i % 2 != 0) {
                console.log(i);
            }
        }
    }
}
oddEven(3, 30, true);














// - Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
minNumber = (firstNumber, secondNumber) => {
    return firstNumber < secondNumber ? firstNumber : secondNumber;
}
// console.log(minNumber(10, 15));
​
​
// - Написать функцию, которая возводит переданное число в указанную степень.
steppen = (number, stepen) => {
    return number ** stepen;
}
// console.log(steppen(5, 2));
​
​
// - Написать функцию, которая принимает 2 числа и знак  (+ - * /), считает пример и возвращает результат.
calc = (firstNumber, secondNumber, sign) => {
    switch (sign) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            console.log("Не правельный знак!");
    }
}
// console.log(calc(10, 15, '+'));
// console.log(calc(10, 15, '-'));
// console.log(calc(10, 15, '/'));
// console.log(calc(10, 15, '*'));
// console.log(calc(10, 15, '6'));
​
​
// - Написать функцию, которая проверяет, является ли переданное ей число простым.
isSimple = (number) => {
    let result = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            result = false;
            break;
        }
    }
​
    return console.log(result);
}
// isSimple(8);
​
​
// - Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.
multipleTable = (number) => {
    for (let i = 2; i <= 9; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
// multipleTable(5);
​
​
// - Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать.
divideLeft = (firstNumber, secondNumber) => {
    let result = 0;
    const divideResult = firstNumber / secondNumber;
    const divideResultRound = Math.trunc(divideResult);
    if (divideResult > divideResultRound) {
        result = divideResult - divideResultRound;
    }
    return Math.trunc(result * secondNumber);
}
// console.log(divideLeft(15, 9));
​
​
// - Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.
function sum(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {
    return num1 + num2 + num3 + num4 + num5;
}
// console.log(sum(1, 1, 2));
​
​
// - Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.
function theBigestNumber(num1, num2, num3, num4, num5) {
    let bigNumber;
    if (num1 && num2) {
        bigNumber = num1 > num2 ? num1 : num2;
        if (num3) {
            bigNumber = num3 > bigNumber ? num3 : bigNumber;
        }
        if (num4) {
            bigNumber = num4 > bigNumber ? num4 : bigNumber;
        }
        if (num5) {
            bigNumber = num5 > bigNumber ? num5 : bigNumber;
        }
    } else {
        bigNumber = num1 || 'No number';
    }
​
    return bigNumber;
}
// console.log(theBigestNumber(1, 1, 2, 7, 10));
​
​
// - Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).
oddEven = (min, max, odd) => {
    for (let i = min; i <= max; i++) {
        if (odd) {
            if (i % 2 == 0) {
                console.log(i);
            }
        } else {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
}
​
oddEven(3, 30, true);