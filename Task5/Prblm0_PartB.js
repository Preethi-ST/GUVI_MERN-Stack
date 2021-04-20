console.log("**********DISPLAYING OUTPUT FOR Problem0_PartB**********");
let myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
      {
        date: '3/15/2019',
        damage_points: '5000',
        atFaultForAccident: true
      },
      {
        date: '7/4/2022',
        damage_points: '2200',
        atFaultForAccident: true
      },
      {
        date: '6/22/2021',
        damage_points: '7900',
        atFaultForAccident: true
      }
    ]
}
console.log(myCar);
//Loop over the accidents array. Change atFaultForAccident from true to false.
console.log(`Change atFaultForAccident from true to false ....`);
myCar.accidents.map( value => value.atFaultForAccident = false);
console.log(myCar);
/* var a =6;
console.log(a);
a = 10;
console.log(a); */
console.log(`Printing the date of my accidents ....`);
myCar.accidents.map(value => console.log(value.date));

/* var myob ={name : "Kumar",Age : 20 , hobbies :["Cricket","Reading Books"]};
console.log(myob);
myob.hobbies = "Crafting";
console.log(myob); */