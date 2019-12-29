// let numbers = [10, 12, 23, 34, 44, 57, 29, 531, 15, 75];


// function printNumbers(arr) {
//     console.log(arr);
// }
// // printNumbers(numbers);


// function onlyEven(arr) {
//     let result = [];
//     for(let elem of arr) {
//         if(!(elem % 2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// }
// let even = onlyEven(numbers);
// // console.log(even);

// numberSum = (arr) => {
//     let result = 0;
//     for(let elem of arr) {
//         result += elem;
//     }
//     return result;
// }
// // console.log(numberSum(numbers));

// maxNumber = (arr) => {
//     // let result;
//     // for(let elem of arr) {
//     //     if(!result) {
//     //         result = elem;
//     //     }
//     //     else {
//     //         result = Math.max(result, elem);
//     //     }
//     // }
//     // return result;
//     let sorted = arr.sort((a, b) => {
//         return b - a;
//     });
//     return sorted[0];
// }
// //  console.log(maxNumber(numbers));


// function insernNumber(arr, num, index) {
//     let newNumbers = [];

//     for(let i in arr) {
//         if(Number(i) + 1 == index) {
//         newNumbers.push(num);
//         }
//         newNumbers.push(arr[i]);
//     }
//     return newNumbers;
// }
// // console.log(insernNumber(numbers, 999, 5));



// function removedNumber(arr, index) {
//     // let newNumbers = [];

//     // for(let i in arr) {
//     //     if(Number(i) + 1 != index) {
//     //         newNumbers.push(arr[i]);
//     //     }
//     // }
//     // return newNumbers;
//     arr.splice(index, 1)
// }
// // removedNumber(numbers, 5);
// // console.log(numbers);

// let secondNumbers = [10, 31, 43, 57, 81];

// function getUniq(arr1, arr2) {
//     let result = arr1;
//     for (let elem2 of arr2) {
//         if(arr1.indexOf(elem2) != -1) {
//             result.push(elem2);
//         }
//     }
//     return result;
// }
// // console.log(getUniq(numbers, secondNumbers));



// function getCommon(arr1, arr2) {
//     let result = [];
//     for (let elem2 of arr2) {
//         if(arr1.indexOf(elem2) >= 0) {
//             result.push(elem2);
//         }
//     }
//     return result;
// } 
// // console.log(getCommon(numbers, secondNumbers));



// function finish(arr1, arr2) {
//     let result = [...arr1];

//     for (let elem2 of arr2) {
//         if(arr1.indexOf(elem2) >= 0) {
//             result.splice(arr1.indexOf(elem2), 1);
//         }
//     }
//     return result;
// }
// // console.log(finish(numbers, secondNumbers));
// // console.log(numbers);

// let fruits = ['Kivi', 'Apple', 'Banana', 'Orange', 'Watermelon'];
// // fruits.sort();
// // console.log(fruits);


// writeFruits = (arr) => {
//     let result = `<ul>`;
//     for(let fruit of arr) {
//         result += `<li>${fruit}</li>`;
//     }
//     result += `</ul>`;
//     document.write(result);
// }
// // writeFruits(fruits);



// findFruit = (arr, fruit) => {
//     lowerCaseArr = arr.map(function(fruit) {
//         return fruit.toLowerCase();
//     });
//     return lowerCaseArr.indexOf(fruit.toLowerCase());
// }
// // console.log(findFruit(fruits, 'Apple'));
// // console.log(findFruit(fruits, 'apple'));




// // const bigNmber = prompt('Enter numbers: ');
// // function colonOdd(num) {
// //     let result = '';
// //     let prevIsOdd = false;
// //     const numLength = num.length;

// //     for(let i = 0; i < numLength; i++) {
// //             prevIsOdd = i > 0 && +num[i - 1] % 2;

// //         if(+num[i] % 2 && prevIsOdd) {
// //             result += ':';
// //         }
// //         result += num[i];
// //     }
// //     console.log(result);
// // };
// // colonOdd(bigNmber);


// console.log(_.difference(numbers, secondNumbers));











// 3. Создать массив из 10 случайных чисел и написать несколько функций для работы с ним. 
let numbers = [10, 12, 344, 34, 67, 23, 76, 40, 93, 33, 10, 67];

// - Функция принимает массив и выводит его на экран. 
printNumbers = (arr) => {
    console.log(arr)
}
// printNumbers(numbers);

// - Функция принимает массив и выводит только четные элементы. 
onlyEven = (arr) => {
    let result = [];
    for (let elem of arr) {
        if (!(elem % 2)) {
            result.push(elem);
        }
    }
    return result;
}
let even = onlyEven(numbers);
// console.log(even);

let even2 = numbers.map(function (num) {
    if (!(num % 2)) {
        return num;
    }
});
// console.log(even2);

// - Функция принимает массив и возвращает сумму всех элементов массива.
numbersSum = (arr) => {
    let result = 0;
    for (let elem of arr) {
        // console.log(elem);
        result += elem;
    }
    return result;
}
// console.log(numbersSum(numbers));

// - Функция принимает массив и возвращает его максимальный элемент.
maxNumber = (arr) => {
    // let result;
    // for (let elem of arr) {
    //     if (!result) {
    //         result = elem;
    //     } else {
    //         result = Math.max(result, elem);
    //     }
    // }
    // return result;

    let sorted = arr.sort((a, b) => {
        return b - a;
    });
    return sorted[0];
}
// console.log(maxNumber(numbers));

// - Функция добавления нового элемента в массив по указанному индексу. 
insertNumber = (arr, num, index) => {
    let newNumbers = [];
    for (let i in arr) {
        if (Number(i) + 1 == index) {
            newNumbers.push(num);
        }
        newNumbers.push(arr[i]);
    }
    return newNumbers;
}
// console.log(insertNumber(numbers, 999, 5));

// - Функция удаления элемента из массива по указанному индексу. 
remomveNumber = (arr, index) => {
    // let newNumbers = [];
    // for (let i in arr) {
    //     if (Number(i) + 1 != index) {
    //         newNumbers.push(arr[i]);
    //     }
    // }
    // return newNumbers;
    arr.splice(index, 1);
}
// remomveNumber(numbers, 5);
// console.log(numbers);

// 4. Создать еще один массив из 5 случайных чисел и написать следующие функции
let secondNumbers = [10, 46, 40, 41, 42];

// - Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
getUniq = (arr1, arr2) => {
    let result = arr1;
    for (let elem2 of arr2) {
        if (arr1.indexOf(elem2) != -1) {
            result.push(elem2);
        }
    }
    return result;
}
// console.log(getUniq(numbers, secondNumbers));

// - Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы(то есть элементы, которые встречаются и в первом и во втором массивах) без повторений. 
getCommon = (arr1, arr2) => {
    let result = [];
    for (let elem2 of arr2) {
        if (arr1.indexOf(elem2) >= 0) {
            result.push(elem2);
        }
    }
    return result;
};
// console.log(getCommon(numbers, secondNumbers));

// - Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве. 
finish = (arr1, arr2) => {
    let result = [...arr1];
    for (let elem2 of arr2) {
        if (arr1.indexOf(elem2) >= 0) {
            result.splice(arr1.indexOf(elem2), 1);
        }
    }
    return result;
}
// console.log(finish(numbers, secondNumbers));
// console.log(numbers);

// 5. Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции. 
let fruits = ['Kivi', 'Apple', 'Bannana', 'Orange', 'Watermelon'];
// fruits.sort();
// console.log(fruits);

// - Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li). 
writeFruits = (arr) => {
    let result = `<ul>`;
    for (let fruit of arr) {
        result += `<li>${fruit}</li>`;
    }
    result += `</ul>`;
    document.write(result);
}
writeFruits(fruits);

// - Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть не регистрозависимым.
findFruit = (arr, fruit) => {
    lowerCaseArr = arr.map(function (fruit) {
        return fruit.toLowerCase();
    });
    return lowerCaseArr.indexOf(fruit.toLowerCase());
}
// console.log(findFruit(fruits, 'apple'));
// console.log(findFruit(fruits, 'Apple'));

// Пользователь вводит многозначное число через promt.Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие(: ) между двумя нечетными числами.Например, если вводится число 55639217, то на выход должно быть 5: 563: 921: 7.
// const bigNumber = prompt('Enter numbers');
colonOdd = (num) => {
    let result = '';
    let prevIsOdd = false;
    const numLength = num.length;
    for (let i = 0; i < numLength; i++) {
        prevIsOdd = i > 0 && +num[i - 1] % 2;

        if (+num[i] % 2 && prevIsOdd) {
            result += ':';
        }
        result += num[i];
    }
    console.log(result);
};
// colonOdd(bigNumber);

// console.log(_.difference(numbers, secondNumbers))