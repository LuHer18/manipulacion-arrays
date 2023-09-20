const numbers = [1, 2, 3, 4];
let  rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
    if (element % 2 === 0){
        rta = true;
        break;
    }
}

console.log(rta)

rta2 = numbers.some(item => item % 2 ===0);
console.log(rta2);

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

const rta2 = orders.some(item => item.delivered);
console.log(rta2);
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
const dates = [
    {startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    tittle: 'Cita de trabajo',
    },
    {startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        tittle: 'Cita con mi jefe',
    },
    {startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        tittle: 'Cena',
    },
    
];

const newAppointment = {
    startDate : new Date(2021, 1, 1, 19),
    endDate: new Date (2021, 1, 1, 20, 30),
}


const isOverLap = (newDate) => {
    return dates.some(date => {
       return areIntervalsOverlapping( 
        {start: date.startDate, end: date.endDate},
        {start: newDate.startDate, end: newDate.endDate},
        ) 
    })
}

console.log('isOverLap', isOverLap(newAppointment));