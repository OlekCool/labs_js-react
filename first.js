// 2 lab

// -------------------------------------------------------2.1-------------------------------------
// let numberOfFilms = 3;
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {"Forrest Gump": 8, "Sonic": 9, "The Matrix": 7.4},
//     actors: {"Tom Hanks": true},
//     genres: [],
//     privat: true,
// };
//
// function showMyDB() {
//     if (personalMovieDB.privat === false) {
//         return personalMovieDB;
//     }
// }
//
// console.log(showMyDB());

// -------------------------------------------------------2.2-------------------------------------
const prompt = require("prompt-sync")();

let numberOfFilms = 3;
let personalMovieDB = {
    count: numberOfFilms,
    movies: {"Forrest Gump": 8, "Sonic": 9, "The Matrix": 7.4},
    actors: {"Tom Hanks": true},
    genres: [],
    privat: true,
};

function writeYourGenres() {
    for (i = 0; i < 3; i++) {
        let genre = prompt(`Ваш улюблений жанр під номером ${i + 1}: `);
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();
console.log(personalMovieDB);