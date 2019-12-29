
// Функции ДЗ!!!!


// function num(numberOne, numberTwo) {
//     if(numberOne<numberTwo) {
//         alert(-1);
//     }
//     else if(numberOne===numberTwo) {
//         alert(0);
//     }
//     else if(numberOne>numberTwo) {
//         alert(1);
//     }
// }
// console.log(num(25, 25));


// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
  
//   console.log(factorial(5));




// let result;
// function numberBase(oneNum, twoNum, threeNum) {
//     oneNum = String(oneNum);
//     twoNum = String(twoNum);
//     threeNum = String(threeNum);
//     result = oneNum+twoNum+threeNum;
// }

// numberBase(3, 5, 7);
// console.log(result);





// let result;
// function cube(width, height) {
//     if(width>height || width<height) {
//         result = width * height;
//         console.log('Площадь прямоугольника = ' + result);
//     }
//     else {
//         result = width * 4;
//         alert('Это квадрат и его площадь = ' + result);
//     }
// }
// cube(15, 10);





// function sum(number) {
//     for(i = 1; i < number; i++) {
//         let res = 0;
//         for(j = 1; j < i; j++) {
//             if(i % j == 0) {
//                 res = res + j;
//             }
//             if(res == i) {
//                 console.log(res);
//             }
//         }
//     }
// }
// sum(2000);





// function diapasNum(min, max) {
//     for(i = min; i < max; i++) {
//         let sum = 0;
//         for(j = 1; j < i; j++) {
//             if(i % j == 0) {
//                 sum = sum + j;
//             }
//             if(sum == i) {
//                 console.log(sum);
//             }
//         }
//     }
// }
// diapasNum(1, 500);




function time(hours, minutes, seconds) {
    seconds = 0;   
    console.log(hours + ':' + minutes + ':' + seconds);
}

time(4, 34, 50);