// 3. Задания, в которых необходимо использовать IF.
// - Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.
// - Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
// - Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).
// - Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.
// - Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.
// 4. Задания, в которых необходимо использовать SWITCH.
// - Запросить у пользователя номер месяца и вывести на экран его название.
// - Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.
// 5. Задания, в которых необходимо использовать тернарный
// оператор.
// - Запросить 2 числа и вывести большее из них.
// - Запросить 1 число и проверить, оно кратно 5 или нет.
// - Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», то вывести «Привет, землянин!», в остальных случаях вывести «Привет, инопланетянин!».



// const a = +prompt('Enter number:');
// if (a<0) {
//     alert('< 0');
// }
// else if (a>0) {
//     alert('>0');
// }
// else {
//     alert(0);
// }


// const b = +prompt('Enter age');
// // if (b >= 0 && b <= 120) {
// //     alert('ok');
// // }
// // else {
// //     alert('ne ok');
// // }
// alert(b >= 0 && b <= 120 ? 'ok' : 'ne ok');




// const c = +prompt('Enter number');
// // if(c > 0) {
// //     alert(c);
// // }
// // else {
// //     alert(-c);
// // }
// alert(Math.abs(c));




// const hours = +prompt('Enter hours');
// const minutes = +prompt('Enter minuts');
// const seconds = +prompt('Enter seconds');
// alert(hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60);





// const x = +prompt('Enter x');
// const y = +prompt('Enter y');
// if (x>0 && y>0) {
//     alert(1);
// }
// else if (x>0 && y<0) {
//     alert(2);
// }
// else if (x<0 && y<0) {
//     alert(3);
// }
// else if (x<0 && y>0) {
//     alert(4);
// }
// else {
//     alert('you enter 0');
// }



// const d = +prompt('Enter number');
// switch (d) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
// }






// const number1 = +prompt('Enter number 1');
// const number2 = +prompt('Enter number 2');
// const sign = prompt('Enter sign');
// switch (sign) {
//     case '+':
//         console.log(number1 + number2);
//         break;
//     case '-':
//             console.log(number1 - number2);
//         break;
//     case '*':
//         console.log(number1 * number2);
//         break;
//     case '/':
//         console.log(number1 / number2);
//         break;
    
//     default:
//         console.log('allow only + - / *');
//         break;
// }





// const number3 = +prompt('Enter number 1');
// const number4 = +prompt('Enter number 2');
// alert(number3 > number4 ? number3 : number4);




// const number5 = +prompt('Enter number');
// if ( number5 % 5 ) {
//     alert('ne ok');
// }
// else {
//     alert('ok');
// }



// const planet = prompt('Название планеты');
// alert(planet == 'Земля' || planet == 'земля' ? 'Привет, землянин!' : 'Привет, инопланетяники!');
