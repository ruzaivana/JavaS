function print(x) {
    if (typeof x === 'string') {
       x = '////' + x + '////';
       console.log(true) ; 
    }
    else{
        console.log(false) ; 
    }
}
print("mia");