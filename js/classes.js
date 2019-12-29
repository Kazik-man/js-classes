
// class PrintMachine {
//     constructor(_fontSize, _fontColor, _fontFamily) {
//         this._fontSize = _fontSize;
//         this._fontColor = _fontColor;
//         this._fontFamily = _fontFamily;
//     }
//     print(text) {
//         document.write(`<div style="font-size: ${this._fontSize}px; color: ${this._fontColor}; fontFamily: ${this._fontFamily}">${text}</div>`);
//     }
// }

// let printData = new PrintMachine(14, 'red', 'Arial');
// printData.print("Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen.");



// ДЗ !!!!



// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 


// class PrintCircle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     get circleRad() {
//         return this.radius;
//     }
//     set circleRad(value) {
//         this.radius = value;
//     }
//     get diametr() {
//         return this.radius * 2;
//     }
//     circleSquare() {
//         return 3.14 * this.radius ^ 2;
//     }
//     circleWidth() {
//         return 3.14 * this.diametr;
//     }
// }

// const circle = new PrintCircle(50);
// console.log(circle.circleRad);
// circle.circleRad = 75;
// console.log(circle.circleRad);
// console.log(circle.diametr);
// console.log(circle.circleSquare());
// console.log(circle.circleWidth());



// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 



// class Flo {
//     constructor(color, quantity) {
//         this.color = color;
//         this.quantity = quantity;
//     }

//     print(quantity, text) {
        
//         let letter = text.length;
//         const symbol = 0.5;
//         let sum = letter * symbol;
//         // let result = this.quantity - sum;
//         let res = '';

//         if (this.quantity < 0) {
//             return;
//             } else {
//                 for(let i = 0; i < letter; i++) {
//                     this.quantity -= symbol;
                
//                     if (text[i] == ' ') {
//                         this.quantity += symbol;
//                         }
//                     res += text[i];
        
//                     if(this.quantity <= 0) {
//                         alert('У вас закончились чернила! Нужно заправить.');
//                         return document.write(`<div style="color: ${this.color}; text-align: center;">${res}</div>`);
//                     }
//                 }
//             }
//         console.log(letter, sum);
//         return document.write(`<div style="color: ${this.color}; text-align: center;">${res}</div>`);
//     }
// }

// const marker = new Flo('blue', 10);
// console.log(marker);
// marker.print(this.quantity, "Arrived   777.");






// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().


let ourObj = {
    image: 'https://sfw.so/uploads/posts/2011-03/1299942692_post-3-12998499541764.jpg',
    name: 'Анатолий',
    age: '23',
    experience: '2 года',
    profession: 'менеджер',
}

let people = [
    {
        image: 'https://sfw.so/uploads/posts/2011-03/1299942692_post-3-12998499541764.jpg',
        name: 'Анатолий',
        age: '23',
        experience: '2 года',
        profession: 'менеджер',
    },
    {   
        image: 'http://pomada.cc/uploads/title/201606/image_1487081162.jpg',
        name: 'Марина',
        age: '27',
        experience: '1 год',
        profession: 'бухгалтер',
    },
    {
        image: 'https://i.photographers.ua/images/pictures/1549/_mg_9811.jpg',
        name: 'Виктория',
        age: '25',
        experience: '4 года',
        profession: 'кассир',
    },
    {
        image: 'https://i1.i.ua/prikol/pic/2/3/657432.jpg',
        name: 'Валентин',
        age: '36',
        experience: '5 лет',
        profession: 'охранник',
    },
    {
        image: 'https://www.5.ua/media/pictures/original/114743.jpg',
        name: 'Виктор',
        age: '48',
        experience: '3 года',
        profession: 'отдел кадров',
    },
    {
        image: 'https://i1.i.ua/prikol/pic/7/0/285407.jpg',
        name: 'Александрa',
        age: '30',
        experience: '4 года',
        profession: 'заместитель директора',
    }
]

class Employee {
    constructor(ourObj) {
        this.image = ourObj.image;
        this.name = ourObj.name;
        this.age = ourObj.age;
        this.experience = ourObj.experience;
        this.profession = ourObj.profession;
    }
}


class EmpTable {
    constructor(people) {
        this.people = people;
    }
    
    getHtml() {
        if(people) {
            let result = ``;
            for(let count of people) {

                result += `<div class="peopleBanks__item">`;
                result += `<div class="peopleBanks__image" style="background-image: url('${count.image}');"></div>`;
                result += `<div class="peopleBanks__name">${count.name}</div>`;
                result += `<div class="peopleBanks__age">${count.age}</div>`;
                result += `<div class="peopleBanks__experience">${count.experience}</div>`;
                result += `<div class="peopleBanks__profession">${count.profession}</div>`;
                result += `</div>`;
            }
            
            document.getElementById('peopleBanks').innerHTML += result;
        }
    }
}

let empTable = new EmpTable(people);
empTable.getHtml();
console.log(people);