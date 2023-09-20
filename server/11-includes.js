const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];

    if(element === 'cat'){
        includeInArray = true;
        break;
    }
    
}

console.log('for', includeInArray);

rta2 = pets.includes("cat");

console.log('includes', rta2)
