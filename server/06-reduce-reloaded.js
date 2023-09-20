const data = [
    {
        name: 'Nicolas',
        level: 'low',
    },
    {
        name: 'Andrea',
        level: 'medium',
    },
    {
        name: 'Zulema',
        level: 'hight',
    },
    {
        name: 'Santiago',
        level: 'low',
    },
    {
        name: 'Valentina',
        level: 'medium',
    },
    {
        name: 'Lucia',
        level: 'hight',
    }
];

const rta= data
.map(item => item.level)
.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj
}, {});

console.log(rta);

//reto platzi 

//reload de rago de 1 a 5, de 6 a 8 y de 9 a 10.


const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 9, 9, 11, 1, 3, 4, 5, 6, 7, 7, 9, 10]

const rtaDef = arrayNum.reduce( (obj, item ) => {
    if (item > 0 && item < 6){
        obj['1-5'] = obj['1-5'] + 1;
    } else if( item < 9) {
        obj['6-8'] = obj['6-8'] + 1;
    } else {
        obj['9-10'] = obj['9-10'] + 1;
    }

    return obj;

}, {'1-5': 0, '6-8': 0, '9-10':0 });

console.log(rtaDef)