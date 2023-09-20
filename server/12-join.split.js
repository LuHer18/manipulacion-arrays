const elements = ['Fire', 'Air', 'Water'];

const separator = '--';
let rtaFinal = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if( index == elements.length -1){
    rtaFinal = rtaFinal + element;
    }else{
    rtaFinal = rtaFinal + element + separator;
    }
    
}

console.log(rtaFinal);

rta2 = elements.join('--')
console.log(rta2)
const tittle = 'Curso de Manipulación de arrays';

const tittleFinal = tittle.split(" ").join('-').toLowerCase();
console.log(tittleFinal); 