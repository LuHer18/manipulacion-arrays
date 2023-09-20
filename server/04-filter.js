const words = ['spra', 'limit', 'elite', 'exuberant'];

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    
    if (item.length >= 6) {
        newArray.push(item);
    }
}

console.log('newArra', newArray);
console.log('original', words);

const rta = words.filter(item => item.length >= 6);
console.log('rta', rta);

console.log('original', words);

//nuevo ejemplo

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,

    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false, 

    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,

    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,

    },
];

const rta3 = orders.filter(item => item.delivered);
console.log(rta3);

//contar elementos repetidos en un array;
const array3 = [1, 1, 2, 3, 4, 1, 3, 2, 4, 5];
const contador = {};

array3.forEach(item => (contador[item] = contador[item] + 1 ||1));

console.log(contador);

console.log(Object.entries(contador));

// buscador con filter

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));