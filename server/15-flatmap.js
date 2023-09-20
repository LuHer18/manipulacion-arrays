const users = [
    { userId: 1, usarnamne: 'Tom', atributes: ['Nice', 'Cute']},
    { userId: 2, usarnamne: 'Mike', atributes: ['Lovely']},
    { userId: 3, usarnamne: 'Nico', atributes: ['Nice', 'Cool']},
];

const rta = users.map(user => user.atributes).flat();
console.log("mat y flat seprados", rta);
const rta2 = users.flatMap(user => user.atributes);
console.log(rta2)


// calendars

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const dateInitial = Object.values(calendars).flat();
/* console.log(dateInitial) */

const rta3 = dateInitial.map( calendar => calendar.startDate)
console.log(rta3)

 