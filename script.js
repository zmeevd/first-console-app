'use strict';

const personalMovieDB = { // создается объект со свойствами
	count: 0, // количество фильмов сюда
	movies: {}, //объект
	actors: {}, // объект
	genres: [], // массив
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) { // создаем цикл сколько раз спрашиваем вопрос
			const answerNameFilm = prompt("Один из последних просмотренных фильмов?", ""); //переменная вопрос
			const ballFilm = prompt("На сколько оцените его", ""); // второй вопрос

			if (answerNameFilm != null && ballFilm != null && answerNameFilm != "" && ballFilm != "" && answerNameFilm.length < 50) {
				console.log("done");
				personalMovieDB.movies[answerNameFilm] = ballFilm; // в свойства записывается ответ
			} else {
				console.log("error"); // если ошибка вопрос возвращается
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов')
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель")
		} else if (personalMovieDB.count >= 30) {
			console.log("Вы киноман!")
		} else {
			console.log("Произошла ошибка")
		}
	},
	showMyDB: function(hidden) {
		if (hidden == false) {
			console.log(personalMovieDB);
		} else {
			console.log('Приват');
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			const answerGerres = prompt(`Ваш любимый жанр под номером ${i}`, ""); //переменная вопрос
			if (answerGerres != null && answerGerres != "" && answerGerres.length < 50) {
				console.log("done");
				personalMovieDB.genres[i - 1] = answerGerres; // в свойства записывается ответ так как i c 1
			} else {
				console.log("error"); // если ошибка вопрос возвращается
				i--; //возвращается вопрос
			}
		}
		personalMovieDB.genres.forEach((item, i) => { // item - каждый элемент, i - количество  элементов
			console.log(`Любимый жанр номер ${i + 1} - это ${item}`);
		});
	},

	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat == false) {
			personalMovieDB.privat = true;
		} else {
			personalMovieDB.privat = false;
		}
	}
};