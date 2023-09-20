const numbers = [1, 30, 49, 29, 10, 13];

let rta = true;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
    if (element >= 40) {
        rta = false;
    }
}

console.log( 'for', rta)

const rta2 = numbers.every(e => e <= 40);
console.log( 'every', rta2)

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const ageTeam = team.every(e => e.age <= 15);
  console.log(ageTeam);

