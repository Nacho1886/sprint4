// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movie) => movie.director)
  /* console.log("EXERCICE 1 -->", result); */
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const arrayDirector = array.filter((movie) => movie.director === director)
  /* console.log("EXERCICE 2 -->", arrayDirector); */
  return arrayDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = getMoviesFromDirector(array, director)
  const averageMovies = moviesAverage(moviesDirector)
  /* console.log("EXERCICE 3 -->", averageMovies) */
  return averageMovies
}
function moviesAverage(array) {
    const averageMovies = array.reduce((sumScore, movie) => sumScore + movie.score, 0)
    return Number((averageMovies / array.length).toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const orderNames = (array.map(movies => (movies.title)).sort()).slice(0, 20)
  /* console.log("EXERCICE 4 -->", orderNames) */
  return orderNames
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const orderYears = array.sort((movie1, movie2) => {
    if (movie1.year === movie2.year) movie1.title > movie2.title ? 1 : -1;
    return movie1.year > movie2.year ? 1 : -1;
  })
  /* console.log("EXERCICE 5-->", orderYears) */
  return [...orderYears]
}
/* function orderByYear(array) {
  const orderYears = array.map(movies => movies.year).sort()
  const listMoviesOrdered = []
  const iterableArray = [...array]
  orderYears.map((year) => {
    let arrayYear = []
    while (iterableArray.findIndex(movie => movie.year === year) !== -1) {
      indexMovie = iterableArray.findIndex(movie => movie.year === year)
      arrayYear.push(iterableArray[indexMovie])
      iterableArray.splice(indexMovie, 1)
    }
    const ordenedNamesYear = orderAlphabetically(arrayYear)

    while (ordenedNamesYear.length !== 0) {
      const ordenedMoviesYear = arrayYear.find(movie => movie.title === ordenedNamesYear[0])
      listMoviesOrdered.push(ordenedMoviesYear)
      ordenedNamesYear.shift()
    }
  })
  console.log("EXERCICE 5-->", listMoviesOrdered)
  return listMoviesOrdered
} */

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const arrayGenre = array.filter((movie) => movie.genre.find(genreMovie => genreMovie === genre))
  arrayGenre.map((movieGenre) =>{    
    if (!movieGenre.score) {
    const movieEliminated = arrayGenre.findIndex(movie => movie === movieGenre)
    arrayGenre.splice(movieEliminated, 1)
  }})

  const averageGenre = moviesAverage(arrayGenre)
  /* console.log("EXERCICE 6-->", averageGenre) */
  return averageGenre
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  /* const removedText = self.val().replace(/\D+/g, ''); */
  const arrayWithMinuteMovies = []
  array.map((movie) =>{
    const newMovie = {...movie}
    newMovie.duration = newMovie.duration.replace(new RegExp(/[a-z]/g),"").split(" ")
    newMovie.duration = newMovie.duration.length === 2 ?
    newMovie.duration[0] * 60 + Number(newMovie.duration[1]) : newMovie.duration[0] * 60
    arrayWithMinuteMovies.push(newMovie)
  })
  /* console.log("EXERCICE 7-->", arrayWithMinuteMovies); */
  return arrayWithMinuteMovies
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const moviesYear = array.filter(movie => movie.year === year)
  if (moviesYear.length > 1) moviesYear.sort((movie1, movie2) => movie1.score === movie2.score ? 0 : movie1.score > movie2.score ? -1 : 1)

  const bestMovies = moviesYear.filter(movie => movie.score === moviesYear[0].score)
  /* console.log("EXERCICE 8-->", bestMovies); */
  return bestMovies
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}