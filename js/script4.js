// 3. Задания, в которых необходимо использовать WHILE.
// - Вывести # столько раз, сколько указал пользователь.
// - Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
// - Запросить число и степень. Возвести число в указанную степень и вывести результат.
// - Запросить 2 числа и найти все общие делители.
// - Посчитать факториал введенного пользователем числа.
// 4. Задания, в которых необходимо использовать DO WHILE.
// - Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.
// - Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.
// 5. Задания, в которых необходимо использовать FOR.
// - Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
// - Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
// - Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.





// let i = 0;
// while (i<6) {
//     console.log(i);
//     i++;
// }



// const a = +prompt('Enter count');
// let i = 0;
// while (i < a) {
//     console.log('#');
//     i++;
// }




// let i = +prompt('enter count');

// while (i >= 0) {
//     console.log(i);
//     i--;
// }



// const b = +prompt('enter number');
// const c = +prompt('enter stepen');
// let i = 0;
// let result = 1;
// while (i < c) {
//     result = result * b;
//     i++;
// }
// alert(result);




// const d = +prompt('enter number 1');
// const e = +prompt('enter number 2');
// const min = d < e ? d : e;
// let i = 1;
// while (i <= min) {
//     if (!(d % i) && !(e % i)) {
//         console.log(i);
//     }
//     i++;
// }




// const f = +prompt('enter number');
// let i = 1;
// let result = 1;
// while (i <= f) {
//     result = result * i;
//     i++;
// }
// console.log(result);





// let answer;
// const correctAnswer = 2 + 2 * 2;
// do {
//     answer = +prompt('Сколько будет 2 + 2 * 2?');
// }
// while (answer != correctAnswer);



// let maxNumber = 1000;
// const minNumber = 50;
// let i = 1;
// do {
//     maxNumber /= 2;
//     i++;
// }
// while (maxNumber >= minNumber * 2);
// console.log(maxNumber, i);





// const e = +prompt('enter number');
// for (let i = 0; i <= 100; i++) {
//     if(!(i % e)) {
//         console.log(i);
//     }
// }




// const f = +prompt('enter number 1');
// const g = +prompt('enter number 2');
// for (let i = f; i <= g; i+=4) {
//     console.log(i);
// }



// const l = +prompt('enter number');
// let result = true;
// for (let i = 2; i < l; i++) {
//     if (!(l % i)) {
//         result = false;
//         break;
//     }
// }
// console.log(result);