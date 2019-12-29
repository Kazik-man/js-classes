
// ЦИКЛЫ!!!! ДЗ



// const firstNumber = +prompt('Введите начальное число: ');
// const secondNumber = +prompt('Введите конечное число: ');
// let result = 0;
// for(let i = firstNumber; i <= secondNumber; i++) {
//    result += i;
// }
// alert('Сумма ваших чисел = ' + result);





// let firstNumber = +prompt('Введите начальное число: ');
// let secondNumber = +prompt('Введите конечное число: ');

// let result;
// let minNumber = Math.min(firstNumber, secondNumber);

// for(let i = 2; i <= minNumber; i++) {
//   if (!(firstNumber % i) && !(secondNumber % i)) {
//     result = i;
//   }
// }
// console.log(result);


// let num = +prompt('Введите число: ');

// let result;
// for(let i = 1; i <= num; i++) {
//   result = num / i;
//   console.log(result);
// }

// либо вот это решение правильнее

// let num = +prompt('Введите число: ');

// let result;
// for(let i = 1; i <= num; i++) {
//   if(!(num % i)) {
//     result = i;
//   }
//   console.log(result);
// }


// let num = prompt('Введите число: ');
// console.log(num.length);




// let plusNum = 0;
// let minusNum = 0;
// let nolik = 0;
// let resDoble = 0;
// let resSingle = 0;
// for(let i = 0; i < 6; i++) {
//   let num = prompt('Введите число: ');
//   if(num % 2) {
//     resDoble++;
//   }
//   if(!(num % 2)) {
//    resSingle++;
//   }
//   while(num) {
//     if(num > 0) {
//         plusNum++;
//     //   console.log(num.length);
//       }
//       if(num < 0) {
//         minusNum++;
//         // console.log(num.length);
//       }
//       if(num = 0) {
//         nolik++;
//       }
//   }
// }
// console.log(plusNum);
// console.log(minusNum);
// console.log(nolik);
// console.log(resDoble);
// console.log(resSingle);





// метод do/ while


do {
    let firstNum = +prompt('Введите начальное число: ');
    let secondNum = +prompt('Введите конечное число: ');
   
    const sign = prompt('Enter sign');
    switch (sign) {
        case '+':
            console.log(firstNum + secondNum);
            break;
        case '-':
                console.log(firstNum - secondNum);
            break;
        case '*':
            console.log(firstNum * secondNum);
            break;
        case '/':
            console.log(firstNum / secondNum);
            break;
        
        default:
            console.log('allow only + - / *');
            break;
    }

    let conf = confirm('Хотите решить ещё уравнение?');
} while(!(conf=true));




