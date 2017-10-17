var grades = [80, 77, 88, 95, 68];
var students = ["David", "Marko", "Dany", "John", "Thomas"];
var grades1 = [
    ["David", 80],
    ["Marko", 77],
    ["Dany", 88],
    ["John", 95],
    ["Thomas", 68]
];
var sum = 0;
var avg = 0;

/*for (var i in grades1) {
    for (var j in grades1[i]) {
        if (j == 1) {
            sum += grades1[i][j];
        }

    }

}*/

for (var i = 0; i < grades1.length; i++) {
    for (var j = 0; j < grades1[i].length; j++) {
        if (j == 1) {
            sum += grades1[i][j];
        }
    }

}

console.log(sum);

/*for (var i = 0; i < grades.length; i++) {
    if (grades[i] < 60) {
        console.log(students[i] + " : F");
    } else if (grades[i] < 70) {
        console.log(students[i] + " : D");
    } else if (grades[i] < 80) {
        console.log(students[i] + " : C");
    } else if (grades[i] < 90) {
        console.log(students[i] + " : B");
    } else {
        console.log(students[i] + " : A");
    }
}*/