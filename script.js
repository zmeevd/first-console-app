'use strict';
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {      // создается объект со свойствами
    count: numberOfFilms, // количество фильмов сюда
    movies: {}, //объект
    actors: {}, // объект
    genres: [], // массив
    privat: false,
};

for (let i = 0; i < 2; i++) {   // создаем цикл сколько раз спрашиваем вопрос
    const answerNameFilm = prompt("Один из последних просмотренных фильмов?", ""); //переменная вопрос
    const ballFilm = prompt("На сколько оцените его", ""); // второй вопрос

    if (answerNameFilm != null && ballFilm != null && answerNameFilm != "" && ballFilm != "" && answerNameFilm.length < 50) {
        console.log ("done");
        personalMovieDB.movies[answerNameFilm] = ballFilm; // в свойства записывается ответ
    } else {
        console.log ("error"); // если ошибка вопрос возвращается
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log ('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ("Вы классический зритель")
} else if  (personalMovieDB.count >= 30) {
    console.log ("Вы киноман!")
} else {
    console.log ("Произошла ошибка")
}

console.log(personalMovieDB);
