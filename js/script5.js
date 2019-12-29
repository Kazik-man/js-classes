// const yourAge = +prompt('Укажите сколько вам лет: ', 00);
// if (yourAge <= 2) {
//     alert('Вы ребёнок!');
// }
// else if (yourAge >= 12 && yourAge < 18) {
//     alert('Вы подросток!');
// }
// else if (yourAge >= 18 && yourAge < 60) {
//     alert('Вы взрослый!');
// }
// else if (yourAge >= 60) {
//     alert('Вы пенсионер!');
// }




// const number = +prompt('Укажите число от 0 - 9',0);
// switch (number) {
//         case 1:
//             console.log("!");
//             break;
//         case 2:
//             console.log("@");
//             break;
//         case 3:
//             console.log("#");
//             break;
//         case 4:
//             console.log("$");
//             break;
//         case 5:
//             console.log("%");
//             break;
//         case 6:
//             console.log("^");
//             break;
//         case 7:
//             console.log("&");
//             break;
//         case 8:
//             console.log("*");
//             break;
//         case 9:
//             console.log("(");
//             break;
//         case 0:
//             console.log(")");
//             break;

//         default:
//             console.log('Число с таким спецсимволом не существует!');
//             break;
// }




// const num = +prompt('Укажите трёхзначное число',100);
// // первое число
// let one = num % 10;
// // второе число
// let sum = num % 100;
// let two = Math.trunc(sum / 10);
// // третье число
// let fun = num / 100;
// let three = Math.trunc(fun % 100);
//  if (one === two || one === three) {
//      alert(true);
//  }
//  else {
//      alert(false);
//  }





// const year = +prompt('Укажите год: ');
// let result = year % 4;
// if (!(result % 4)) {
//     alert('Этот год високосный!');
// }
// else {
//     alert('Этот год не високосный ((');
// }





// let x = +prompt('Укажите пятизначное число:',10000);
// // последнее число
// let five = x % 10;
// // первое и второе число
// let num = Math.trunc(x / 1000);
// let one = Math.trunc(num / 10);
// let two = num % 10;
// // четвёртое число
// let sum = Math.trunc(x / 10);
// let four = Math.trunc(sum % 10);
// // третье число
// let fum = x / 100;
// let three = Math.trunc(fum % 10);

// if (one === five && two === four) {
//     alert('Это число является палиндромом');
// }
// else {
//     alert('Это обычное число');
// }







// const sum = +prompt('Укажите сумму в $ для обмена: ');
// const valuta = +prompt('Укажите валюту в которую хотите перевести: Euro = 1, CNY = 2, AZN = 3');
// const euro = 0.9;
// const cny = 7.03;
// const azn = 1.7;

// const result1 = sum * euro;
// const result2 = sum * cny;
// const result3 = sum * azn;

// switch(valuta) {
//     case 1:
//         console.log(result1);
//         break;
//     case 2:
//         console.log(result2);
//         break;
//     case 3:
//         console.log(result3);
//         break;

//     default:
//         console.log('Данной валюты нет в нашем обменнике!');
//         break;
// }




// const sum = +prompt('Введите сумму покупки: ');

// if(sum >= 200 && sum <= 300) {
//     alert('Ваша скидка составила 3%');
//     let result1 = Math.trunc(sum / 100 * 3);
//     result1 = sum - result1;
//     alert('Сумма со скидкой составила: ' + result1);
// }
// else if(sum > 300 && sum <= 500) {
//     alert('Ваша скидка составила 5%');
//     let result2 = Math.trunc(sum / 100 * 5);
//     result2 = sum - result2;
//     alert('Сумма со скидкой составила: ' + result2);
// }
// else if(sum > 500) {
//     alert('Ваша скидка составила 7%');
//     let result3 = Math.trunc(sum / 100 * 7);
//     result3 = sum - result3;
//     alert('Сумма со скидкой составила: ' + result3);
// }





// const circle = +prompt('Введите длинну окружности: ');
// const cube = +prompt('Введите периметр квадрата: ');

// const circleRadius = circle / 2;
// const cubeRad = (cube / 4) / 2;
// // console.log(circleRadius);
// // console.log(cubeRad);
// if(circleRadius <= cubeRad) {
//     alert('У вас получилось запихнуть...!))')
// }
// else {
//     alert('Размерчик бы поменьше.')
// }





// const oneQuestion = +prompt('Cколько пальцев на руке у человека: 1) 5 пальцев, 2) 10 пальцев, 3) 8 пальцев');

// switch(oneQuestion) {
//     case 1:
//         console.log("ты прав!");
//         break;
//     case 2:
//         console.log("читай энциклопедию");
//         break;
//     case 3:
//         console.log("читай энциклопедию");
//         break;

//     default:
//         console.log('Этой кнопке не присвоен ответ');
//         break;
// }
// const twoQuestion = +prompt('Сколько в ГигаБайте МегаБайт: 1) 8, 2) 512, 3) 1000');

// switch(twoQuestion) {
//     case 1:
//         console.log("Найди ответ в зелёной книге");
//         break;
//     case 2:
//         console.log("Найди ответ в зелёной книге");
//         break;
//     case 3:
//         console.log("Мамкин паграмист!");
//         break;

//     default:
//         console.log('Этой кнопке не присвоен ответ');
//         break;
// }
// const threeQuestion = +prompt('Сколько секунд в минуте: 1) 20, 2) 60, 3) 300');

// switch(threeQuestion) {
//     case 1:
//         console.log("Ты точно с этой планеты?");
//         break;
//     case 2:
//         console.log("Молодцом! Далеко пойдёшь");
//         break;
//     case 3:
//         console.log("Ты точно с этой планеты?");
//         break;

//     default:
//         console.log('Этой кнопке не присвоен ответ');
//         break;
// }

// let result1;
// let result2;
// let result3;

// if(oneQuestion === 1) {
//     result1 = 2;
// }
// else {
//     result1 = 0;
// }

// if(twoQuestion === 3) {
//     result2 = 2;
// }
// else {
//     result2 = 0;
// }

// if(threeQuestion === 2) {
//     result3 = 2;
// }
// else {
//     result3 = 0;
// }

// let result = result1 + result2 + result3;

// alert('Ты набрал' + ' ' + result + ' ' + 'балa!');




// эта задача ещё решается))



// const day = +prompt('Введите день: ');
// const month = +prompt('Введите месяц: ');
// const year = +prompt('Введите год: ');

// switch (day) {
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

// const visokosniy = year % 4;
// if(year === visokosniy) {
//     february = 29;
// }
