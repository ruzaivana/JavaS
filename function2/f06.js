function counter(str, letter) {
    
    var position = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            position += i;
        }
    }
    
}
counter();