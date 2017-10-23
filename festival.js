"use strict";
(function () {

    console.log("hi")

    // var m1 = new Movie("bla", new Genre("drama"), 123);
})();

function Genre(name) {

    this.name = genrename;
}

function Movie(title, genre, length) {

    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function () {
        return this.genre.name;
    } 
}
var Movie = 
// concole.log(getData);

function Program(date, listofMovies, totalNumberofMovies) {

    this.date = date;
    this.listOfMovies = [];
    this.totalNumberOfMovies = 0;
}

function Festival(fetname, listfest, totalprogram) {
    this.name = festname;
    this.listfest = [];
    this.totalprogram = 0;
}





