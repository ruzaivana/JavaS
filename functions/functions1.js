function add(a, b) {
    var result = a + b;
    return result;
}

function substract(a, b) {
    var result = a - b;
    return result;
}

function divide(a, b) {
    var result = a / b;
    return result;
}

function multiply(a, b) {
    var result = a * b;
    return result;
}

function modulo(a, b) {
    var result = a % b;
    return result;
}

function equal(a, b) {
    var result = a === b;
    return result;
}

function print(a) {
    console.log('/////' + a + '/////');
}

function first(a) {
    if (typeof a[0] === 'number') {
        return null;
    } else {
        return a[0];
    }
}

function smiley(a) {
    switch (a) {
        case ":)":
        case ":D":
            return "happy";
            break;
        case ":(":
        case ":/":
        case ":\\":
            return "sad";
            break;
        default:
            return "not an emotion.";
            break;
    }
}