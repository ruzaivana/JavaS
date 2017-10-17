// function multiplyByTwo(a, b, c) {
//     var outputArray = [];

//     for (var i=0; i < arguments.length; i++) {
//         outputArray = [i]
//     }
// }



// function addOne(a) {
//     return a + 1;
// // }
// function squareIt(a) {
//     return a * a;
// }

// function mnozenje2() {
//     var outputArray = [];
//     var callback = arguments[arguments.length - 1];
//     for (var i = 0; i < arguments.length - 1; i++) {
//         var currentElement = arguments[i] * 2;
//         outputArray[i] = callback(currentElement);
//     }
//     return outputArray;
// }

// console.log(mnozenje2(2, 3, 4, 5, 6, squareIt));

// function mnozenje2(num) {
    // var outputArray = [];
 

var sum = 0;
var arr = [2,3,4,5,6];
for (var i = 0; i < arr.length; i++) {
    sum += arr[i] * 2;
}
console.log(sum);

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var output = '';
// for (var i = 0; i , x.length; i++) {
//     var element = x [1];
//     output 
// }