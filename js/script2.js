// const name = prompt('Введите своё имя:');
// alert('Привет, ' + ' ' + name + '!');



// const thisYear = 2019;
// const yourDate = prompt('Введите свой год рождения:');
// const age = (thisYear - yourDate);
// alert('Ваш возраст: ' + age + 'лет!');



// const siteCube = prompt('Введите длину стороны квадрата:');
// const sizeAllSite = siteCube * 4;
// alert('Периметр вашего квадрата = ' + sizeAllSite + 'см.');



// const radiusSfera = +prompt('Введите радиус окружности:');
// const numberPi = 3.1415;
// const squareSfera = radiusSfera * numberPi * radiusSfera;
// alert(`Площадь окружности = ` + squareSfera);




// const distance = prompt('Укажите расстояние в км между двумя городами:', 10);
// const speed = prompt('Укажите за сколько часов вы хотите добраться:');
// const kmPerHour = distance / speed;
// alert(kmPerHour + 'км/час ' + 'должна быть ваша скорость, чтобы успеть вовремя!');




// const dollar = prompt('Введите сумму в долларах: ');
// const financeCours = 0.9;
// const euro = financeCours / dollar;
// alert('Ваша сумма обмена = ' + euro + '\u20ac');



// const flashMemory = prompt('Введите объём вашей флеш-карты в Гб: ', 10);
// const volFiles = 820;
// const volGb = 1000;
// const gbVsMb = (flashMemory / volFiles) * volGb;
// alert('На вашу флешку вмещается ' + gbVsMb + ' файлов');




// const quantity = +prompt('Ваша сумма гривен в кошельке: ');
// const priceChocolat = +prompt('Введите сумму одной шоколадки в грн: ');
// const manyChoco = Math.trunc(quantity / priceChocolat);
// const restOfMoney = quantity % priceChocolat;

// alert('Количество шоколадок, которое вы можете купить = ' + manyChoco + 'шт');
// alert('Ваша сдача составлет ' + restOfMoney + 'грн');





// let x = +prompt('Введите трёхзначное число: ',100);
// let sum;
// let result;
// let num;
// result = x % 10;
// num = Math.trunc(x / 10);
// let numTwo = Math.trunc(num / 10);
// sum = num % 10;

// alert('Ваше число задом на перёд: ' + result + sum + numTwo);






// const sum = +prompt('Введите сумму вклада на депозит в $: ');
// const percent = 5;
// const monthInYear = 12;
// const percentMonth = percent / monthInYear;
// let ourSumInPercent = percentMonth * 2;
// let ourSum = Math.trunc(sum / ourSumInPercent);
// alert('Ваша процентная ставка за 2 месяца составит: ' + ourSumInPercent + '%');
// alert('Ваша общая сумма составляет: ' + ourSum + '$');