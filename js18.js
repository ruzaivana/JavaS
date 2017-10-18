var aircraft = {
    name: 'Boeing',
    manufactured: 1964,
    tip: {
        firsname: 'classic',
        lastname: 737,
    },
    air: function () {
        return "blabla";
    },
    yearsOld: function () {
        return 2017 - aircraft.manufactured;
    },
};

console.log(aircraft.tip.lastname);
console.log(aircraft.manufactured);
console.log(aircraft.tip);
console.log(aircraft['tip']);
console.log(aircraft.air());