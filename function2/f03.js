function stringBlue(str, num) {
    var result = "";
    do {
        result += str; 
        num--;
    } while (num);
    return result
}
 
stringBlue('ha', 20);