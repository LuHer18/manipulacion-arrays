const totales = [1, 2, 3, 4];

let sumaTotales = 0;

for (let index = 0; index < totales.length; index++) {
    const element = totales[index];
    sumaTotales = sumaTotales + element;
}

console.log(sumaTotales);

const rta = totales.reduce((sum, item) => sum + item);
console.log(rta, "rta")

const items = [1, 3, 2, 3]


const rta2 = items.reduce((obj, item) => {
   obj[item] = obj[item] + 1 || 1
    return obj;
}, {});

console.log(rta2) 
const contador = {};
const rta3 = items.forEach(item => (contador[item] = contador[item] + 1 || 1) );

console.log(contador)