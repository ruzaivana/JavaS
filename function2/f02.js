function print(x) {
    if (typeof x === 'string' || typeof x === " ") {
       x = '////' + x + '////';
      console.log(true); 
    }
    else{
        console.log(false);
    }
}
print(" ");