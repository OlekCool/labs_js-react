//1 - переписані функції у методи об'єкта
const prompt = require("prompt-sync")();

let personalMovieDB = {
  count: 3,
  movies: { "Forrest Gump": 8, Sonic: 9, "The Matrix": 7.4 },
  actors: { "Tom Hanks": true },
  genres: [],
  privat: false,

  showMyDB: function () {
    if (this.privat === false) {
      console.log(this);
    }
  },

  writeYourGenres: function () {
    for (let i = 0; i < this.count; i++) {
      let genre;
      while (!genre || genre.trim() === "") {
        genre = prompt(`Ваш улюблений жанр під номером ${i + 1}: `);
        if (!genre || genre.trim() === "") {
          console.log("Введіть коректний жанр.");
        }
      }
      this.genres.push(genre.trim());
    }

    console.log("\n");
    this.genres.forEach((genre, index) => {
      console.log(`Улюблений жанр #${index + 1} - це ${genre}`);
    });
  },

  //2 - додано метод
  toggleVisibleMyDB: function () {
    this.privat ? (this.privat = false) : (this.privat = true);
  },
};

// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// console.log("Toogled to false \n");

// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// console.log("Toogled to true \n");

// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// console.log("Toogled to false \n");

// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// console.log("Toogled to true \n");

//3
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
