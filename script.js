'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms  == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}
//start(); // вызов функции

const personalMovieDB = {      // создается объект со свойствами
    count: numberOfFilms, // количество фильмов сюда
    movies: {}, //объект
    actors: {}, // объект
    genres: [], // массив
    privat: false,
};

function rememberMyFilms() {
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
};

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log ('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ("Вы классический зритель")
    } else if  (personalMovieDB.count >= 30) {
        console.log ("Вы киноман!")
    } else {
        console.log ("Произошла ошибка")
    }
};

//detectPersonalLevel();

function showMyDB(hidden) {
        if (hidden == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Приват');
    }
};

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const answerGerres = prompt(`Ваш любимый жанр под номером ${i}`, ""); //переменная вопрос
        if (answerGerres != null && answerGerres != "" && answerGerres.length < 50) {
            console.log ("done");
            personalMovieDB.genres[i - 1] = answerGerres; // в свойства записывается ответ
        } else {
            console.log ("error"); // если ошибка вопрос возвращается
            i--;
        }
    }
}

writeYourGenres();


