

// ОБЪЕКТЫ!!!!!!    classWork



let figure = {
    x1: 10,
    y1: 5,
    x2: 33,
    y2: 0,
    getCoordinates: function() {
        for(let key in this) {
            if(typeof this[key] == 'number') {
                console.log(`${key} - ${this[key]}`);
                // console.log(typeof this[key]);
            }
        }
    },
    getWidth: function(aditionWidth) {
        aditionWidth = aditionWidth || 0;
        return this.x1 > this.x2 ? this.x1 - this.x2 + aditionWidth : this.x2 - this.x1 + aditionWidth;
    },
    getHeight: function(aditionHeight) {
        aditionHeight = aditionHeight || 0;
        // первое решение
        let result = this.y1 > this.y2 ? this.y1 - this.y2: this.y2 - this.y1;
        return result + aditionHeight;
        // это два одинаковыч решения !!!
        // решение № 2
        // return this.y1 > this.y2 ? this.y1 - this.y2 + aditionHeight : this.y2 - this.y1 + aditionHeight;

    },
    getSqueare: function() {
        return this.getHeight() * this.getWidth();
    },
    getPerimetre: function() {
        return (this.getHeight() + this.getWidth()) * 2;
    },
    getAnotherData: function(aditionWidth, aditionHeight) {
        return {
            newWidth: this.getWidth() + aditionWidth,
            newHeight: this.getHeight() + aditionHeight,
        }
    },
    moveX: function(move) {
        this.x1 += move;
        this.x2 += move;
    },
    moveY: function(move) {
        this.y1 += move;
        this.y2 += move;
    }
}
// вынесли функцию для разнообразия
moveXY = (moveX, moveY) => {
    figure.x1 += moveX;
    figure.x2 += moveX;
    figure.y1 += moveY;
    figure.y2 += moveY;
}
moveXY(10, 10);
// console.log(figure);


chechPoint = (x, y) => {
    let result;
    const xMinValue = figure.x1 < figure.x2 ? figure.x1 : figure.x2;
    const xMaxValue = figure.x1 > figure.x2 ? figure.x1 : figure.x2;
    const yMinValue = figure.y1 < figure.y2 ? figure.y1 : figure.y2;
    const yMaxValue = figure.y1 > figure.y2 ? figure.y1 : figure.y2;
    // console.log(xMinValue, xMaxValue);
    if(x >= xMinValue && x <= xMaxValue && y >= yMinValue && y <= yMaxValue) {
        result = true;
    }
    else {
        result = false;
    }
    return result;
}
// console.log(chechPoint(10, 3));


// figure.getCoordinates();
// console.log(figure.getWidth());
// console.log(figure.getHeight());
// console.log(figure.getSqueare());
// console.log(figure.getPerimetre());
// console.log(figure.getWidth(15));
// console.log(figure.getHeight(26));

// console.log(figure.getAnotherData(15, 5));
// console.log(figure.getAnotherData(15, 5).newHeight);
// console.log(figure.getAnotherData(15, 5).newWidth);
// figure.moveX(10);
// console.log(figure);
// figure.moveY(-10);
// console.log(figure);












// Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
let figure = {
    x1: 10,
    y1: 5,
    x2: 33,
    y2: 0,
    getCoordinates: function () {
        for (let key in this) {
            if (typeof this[key] == 'number') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    },
    getWidth: function (aditionWidth) {
        aditionWidth = aditionWidth || 0;
        return this.x1 > this.x2 ? this.x1 - this.x2 + aditionWidth : this.x2 - this.x1 + aditionWidth;
    },
    getHeight: function (aditionHeight) {
        aditionHeight = aditionHeight || 0;
        let result = this.y1 > this.y2 ? this.y1 - this.y2 : this.y2 - this.y1
        return result + aditionHeight;
    },
    getSquare: function () {
        return this.getHeight() * this.getWidth();
    },
    getPerimeter: () => (this.getHeight() + this.getWidth()) * 2,
    getAnotherData: function (aditionWidth, aditionHeight) {
        return {
            newWidth: this.getWidth() + aditionWidth,
            newHeight: this.getHeight() + aditionHeight
        }
    },
    moveX: function (move) {
        this.x1 += move;
        this.x2 += move;
    },
    moveY: (move) => {
        this.y1 += move;
        this.y2 += move;
    }
}
​
​
// - Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
// figure.getCoordinates();
​
// - Функция принимает объект-прямоугольник и возвращает его ширину. 
// console.log(figure.getWidth());
​
// - Функция принимает объект-прямоугольник и возвращает его высоту.
// console.log(figure.getHeight());
​
// - Функция принимает объект-прямоугольник и возвращает его площадь
// console.log(figure.getSquare());
​
// - Функция принимает объект-прямоугольник и возвращает его периметр. 
// console.log(figure.getPerimeter());
​
// - Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину. 
// console.log(figure.getWidth(15));
​
// - Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.
// console.log(figure.getHeight(15));
​
// - Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения – для изменения ширины и высоты.
// console.log(figure.getAnotherData(15, 5));
// console.log(figure.getAnotherData(15, 5).newHeight);
// console.log(figure.getAnotherData(15, 5).newWidth);
​
// - Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
// figure.moveX(-10);
// console.log(figure);
​
// - Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
// figure.moveY(-10);
// console.log(figure);
​
// - Функция смещения прямоугольника и по оси X и по  оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
moveXY = (moveX, moveY) => {
    figure.x1 += moveX;
    figure.x2 += moveX;
    figure.y1 += moveY;
    figure.y2 += moveY;
}
// moveXY(10, 10);
// console.log(figure);
​
// - Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.
checkPoint = (x, y) => {
    const xMinValue = figure.x1 < figure.x2 ? figure.x1 : figure.x2;
    const xMaxValue = figure.x1 > figure.x2 ? figure.x1 : figure.x2;
    const yMinValue = figure.y1 < figure.y2 ? figure.y1 : figure.y2;
    const yMaxValue = figure.y1 > figure.y2 ? figure.y1 : figure.y2;
    return x >= xMinValue && x <= xMaxValue && y >= yMinValue && y <= yMaxValue;
}
// console.log(checkPoint(10, 3));