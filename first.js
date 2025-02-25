const prompt = require("prompt-sync")();

let numberOfFilms;
while (true) {
    numberOfFilms = prompt("Скільки фільмів ви вже подивилися? ", "");
    if (numberOfFilms && !isNaN(parseInt(numberOfFilms))) {
        numberOfFilms = parseInt(numberOfFilms);
        break;
    } else {
        console.log("Введіть коректне число.");
    }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let i = 0;
while (i < numberOfFilms) {
    let title;
    while (true) {
        title = prompt("Один із останніх переглянутих фільмів? ", "");
        if (title && title.length <= 50) {
            break;
        } else {
            console.log("Введіть коректну назву фільму (не порожню та не більше 50 символів).");
        }
    }

    let mark;
    while (true) {
        mark = prompt("На скільки оціните його? ", "");
        if (mark && !isNaN(parseFloat(mark))) {
            mark = parseFloat(mark);
            break;
        } else {
            console.log("Введіть коректну оцінку (число).");
        }
    }

    personalMovieDB.movies[title] = mark;
    i++;

    console.log("");
}

if (personalMovieDB.count < 10) {
    console.log("Вами переглянуто досить мало фільмів");
} else if (personalMovieDB.count <= 30) {
    console.log("Ви звичайний глядач");
} else if (personalMovieDB.count > 30) {
    console.log("Ви неймовірний кіноман");
} else {
    console.log("Ви ввели некоректне значення");
}




// other cycle variants:

/*
for (i = 0; i < personalMovieDB.count; i++){
    let title;
    while (true) {
        title = prompt("Один із останніх переглянутих фільмів? ", "");
        if (title && title.length <= 50) {
            break;
        } else {
            console.log("Введіть коректну назву фільму (не порожню та не більше 50 символів).");
        }
    }

    let mark;
    while (true) {
        mark = prompt("На скільки оціните його? ", "");
        if (mark && !isNaN(parseFloat(mark))) {
            mark = parseFloat(mark);
            break;
        } else {
            console.log("Введіть коректну оцінку (число).");
        }
    }

    personalMovieDB.movies[title] = mark;

    console.log("");
}

do {
    let title;
    while (true) {
        title = prompt("Один із останніх переглянутих фільмів? ", "");
        if (title && title.length <= 50) {
            break;
        } else {
            console.log("Введіть коректну назву фільму (не порожню та не більше 50 символів).");
        }
    }

    let mark;
    while (true) {
        mark = prompt("На скільки оціните його? ", "");
        if (mark && !isNaN(parseFloat(mark))) {
            mark = parseFloat(mark);
            break;
        } else {
            console.log("Введіть коректну оцінку (число).");
        }
    }

    personalMovieDB.movies[title] = mark;
    i++;

    console.log("");
} while (i < numberOfFilms);

 */