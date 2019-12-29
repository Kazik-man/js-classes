
// Массивы ДЗ!!!

let listForBuy = [
    {
        name: 'kivi',
        quantity: 3,
        buyOrNot: 'yes'
    },
    {
        name: 'orange',
        quantity: 6,
        buyOrNot: 'yes'
    },
    {
        name: 'banana',
        quantity: 1,
        buyOrNot: 'no'
    },
    {
        name: 'potatos',
        quantity: 5,
        buyOrNot: 'yes'
    },
    {
        name: 'milk',
        quantity: 2,
        buyOrNot: 'no'
    },
    {
        name: 'bread',
        quantity: 1,
        buyOrNot: 'no'
    },
    {
        name: 'tea',
        quantity: 1,
        buyOrNot: 'yes'
    },
    {
        name: 'beef',
        quantity: 4,
        buyOrNot: 'no'
    },
];
let result;

insertFood = (name, quantity, buyOrNot) => {

    let alreadyExists = false;
    for (let elem of listForBuy) {
        if(elem['name'] == name) {
            elem['quantity'] += quantity;
            alreadyExists = true;
            break;
        }
    }

    if (!alreadyExists) {
        listForBuy.push({name, quantity, buyOrNot});
    }
}
insertFood('beef', 4, 'no');

// функция сортирует не купленые товари и купленые
listForBuy.sort(function (a, b) {
    if(a.buyOrNot > b.buyOrNot) {
        return 1;
    }
    if(a.buyOrNot < b.buyOrNot) {
        return -1;
    }
});

buyProduct = (name, quantity, buyOrNot) => {
    listForBuy.push({name, quantity, buyOrNot});
    for(let elem of listForBuy) {
        if(elem['buyOrNot'] == 'yes') {

            let result = '<ul>';
            result = `<li>${elem.name}<span> Куплен!</span></li>`;
            reult = `</ul>`;
            document.write(result);
            // listForBuy.pop({name});
        }

    }
}
buyProduct('cola', 2, 'yes');


checklist = (arr) => {
    result = `<ul>`;

    for(let elem of arr) {
        result += `<li>${elem.name}</li>`;
    }
    result += `</ul>`;
    document.write(result);
}
checklist(listForBuy, result);


console.log(listForBuy);