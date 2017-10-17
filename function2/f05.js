function counter(str, letter) {
    
    var letterCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            letterCount ++;
        }
    }
    return letterCount;
}

console.log(counter('My random string', 'n'));
