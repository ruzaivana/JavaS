// 1. Write a function to check whether an `input` is a string or not.

function isastring(a) {
    if (typeof (a) === "string") {
        console.log("string")

    } else {
        console.log("not a string")
    }
}

isastring(2);

// 2. Write a function to check whether a string is blank or not.


function isItBlank(str) {
    !str ? console.log("BLANK") : console.log("Not blank");
}

// isItBlank("asd");

// 3. Write a function to concatenates a given string n times (default is 1).

function conct(astring, times) {
    var result = ""
    for (var i = 1; i <= times; i++) {
        result = result + astring;
    }
    return result

}

// console.log(conct("treci zadatak", 5));

// 4. Write a function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanize(num) {
    var strNum = String(num);
    var howLong = strNum.length;

    if (num % 100 == 11 || num % 100 == 12 || num % 100 == 13) {
        console.log(num + "'th");
    } else {
        if (strNum[howLong - 1] == 1) {
            console.log(num + "'st");
        } else if (strNum[howLong - 1] == 2) {
            console.log(num + "'nd")
        } else if (strNum[howLong - 1] == 3) {
            console.log(num + "'rd")
        } else {
            console.log(num + "'th");
        }
        return
    }
}
  //humanize(1123);

// 5. Write a function to count number of letter occurrences in a string. "My random string", "n" -> 2

function letterCount(astring, whichletter) {
    var count = 0;
    for (var i = 0; i < astring.length; i++) {
        if (astring[i] == whichletter) {
            count++
        }
    } console.log(count);

}

// letterCount("hellllooo", "l");


// 6. Write a function to find position of first occurrence of character in a string. 
// Result should be in human numeration form. If there are no occurrences of character function should return -1.

function whichPosition(astring, whichletter) {
    for (var i = 0; i < astring.length; i++) {
        if (astring[i] == whichletter) {
            console.log("Pozicija karaktera je: " + (i + 1));
            return;
        }
    }
    return console.log(-1);

}

// whichPosition("hellllooo", "o");

// 7. Write a function to find position of last occurrence of character in a string. 
// Result should be in human numeration form. If there are no occurrences of character function should return -1.

function lastoccurance(astring, character) {
    for (var i = astring.length; i > 0; i--) {
        if (astring[i] == character) {
            console.log("pozicija je" + (i + 1));
            return;
        }
    }


}

// lastoccurance ("helloworld", "l");

// 8. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

function stringToArray(sentence) {
    var data = [];
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] == ' ') {
            data[i] = null;
        } else {
            data[i] = sentence[i];
        }
    }
    return console.log(data);
}

// stringToArray("pesma je lepa");


// 9. Write a function that accepts a number as a parameter and check if the number is prime or not.

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("not a prime");
            return;
        }

    } console.log("is a prime");

}

// isPrime(51);

// 10. Write a function which replaces spaces in a string with provided separator. If separator is not provided use “-” (dash) as default separator.

function replacing(word, replacer) {
    replacer = replacer || "-";

    var newWord = '';

    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            newWord += replacer;
        } else {
            newWord += word[i];
        }

    }
    return console.log(newWord);
}

// replacing("Sta se to desava");


// 11. Write a function to get first n number of characters and add “...” at the end of newly created string.

function firstCharacters(word, chars) {
    var newstring = ""
    for (var i = 0; i < chars; i++) {
        newstring += word[i]
    } console.log(newstring + "...")


}

// firstCharacters ("helloworld", 4);

// 12.   Write a function to find number of years until retirement based on year of birth.

function timeLeft(birth, age) {
    return age - 2017 + birth;
}

//console.log(timeLeft(1992));


// 13.  Write a function to convert array of strings to array of numbers. Filter out all non number values.


function convert2numbers(array) {
    var numbarray = [];
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (!isNaN(parseInt(array[i]))) {

            numbarray[i - count] = parseFloat(array[i]);
        } else {
            count++;
        }
    } return numbarray;


}



// console.log(convert2numbers([2, 3, "a", true, 30.4]));

//14. Write a function to calculate number of years until retirement based on year of birth.Retirement for men is at age of
// 65 and for women at age of 60. If someone is already in retirement proper message should be provided.

function finalExam(year, gender) {
    if (gender == "M") {
        age = 65;
    } else if (gender = "F") {
        age = 60;
    } else {
        console.log("Please enter M or F as gender");
    }

    if (timeLeft(year, age) < 0) {
        return "CESTITAMO! U PENZIJI STE!"
    }

    return "Do penzije ima jos: " + timeLeft(year, age) + " godina";
}

//console.log(finalExam(1992, "M"));
