// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movie) => movie.director)
  console.log("EXERCICE 1 -->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const arrayDirector = array.filter((movie) => movie.director === director)
  console.log("EXERCICE 2 -->", arrayDirector);
  return arrayDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = getMoviesFromDirector(array, director)
  let averageMovies = moviesDirector.reduce((sumScore, movie) => sumScore.score ? sumScore.score + movie.score : sumScore + movie.score)
  averageMovies = Number((averageMovies / moviesDirector.length).toFixed(2))
  console.log("EXERCICE 3 -->", averageMovies)
  return averageMovies
}
// function moviesAverageOfDirector(array, director) {
//   let sumScore = 0
//   const moviesDirector = getMoviesFromDirector(array, director)
//   moviesDirector.map((movie) => sumScore += movie.score)
//   const averageMovies = Number((sumScore / moviesDirector.length).toFixed(2))
//   console.log("EXERCICE 3 -->", averageMovies);
//   return averageMovies
// }

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  // const namesArray = array.map(movies => movies.title)
  const orderNames = (array.map(movies => (movies.title)).sort()).slice(0, 20)
  console.log("EXERCICE 4 -->", orderNames)
  return orderNames
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const orderYears = array.map(movies => (movies.year)).sort()
  const listMoviesOrdered = []
  const iterableArray = [...array]
  for (const year of orderYears) {
    const indexMovie = iterableArray.findIndex(movie => movie.year === year)
    listMoviesOrdered.push(iterableArray.splice(indexMovie, 1))
  }

console.log("EXERCICE 5 orderYears -->", listMoviesOrdered)
}
// function orderByYear(array) {
//   const orderYears = array.reduce((firstMovie, movie, index) =>{
//     if (firstMovie.year > movie.year) {
//       movie[index] 

//       console.log("EXERCICE 5 orderYears -->", orderYears)
//       console.log("EXERCICE 5 orderYears[index] -->", orderYears[index])
//       console.log("EXERCICE 5 firstMovie -->", firstMovie)
//       console.log("EXERCICE 5 movie -->", movie)

//     }
//     if (firstMovie.year > movie.year) {

//     }
//   })
// }

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

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