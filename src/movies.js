// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(myArr){
    
    const directorArray = myArr.map(x => x.director );
    
    return directorArray;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(myArr){

    const howManyMoviesArr =myArr.filter (x => x.director == 'Steven Spielberg')

    const outputArr = howManyMoviesArr.filter (x => x.genre.includes('Drama'))

    const result = outputArr.map(x => x.title);

    return result.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(myArr) {

    const setup = myArr.map (x => x.rate)
    if(setup.length==0){
        return 0;
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    const filtered = setup.filter(function (item){
        return (parseInt(item) ==item);
    });

    const reduced = filtered.reduce(reducer);

    return Math.round(((reduced/myArr.length) + Number.EPSILON) * 100)/100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

    function dramaMoviesRate(array) {
        let filteredDramaMovies = array.filter((eachMovie) => {
          return eachMovie.genre.includes('Drama')
        })
      
        return ratesAverage(filteredDramaMovies)
      }



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const result = array.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
  
        return a.title.localeCompare(b.title);
      }
    })
    return [...result];
  }
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    //sort but title
    let sortedArray = [...arr].sort((a, b) => {
      return (a.title.localeCompare(b.title)) //it is either 0,1,-1
  
  
    })
  
    let first20titles = sortedArray.slice(0, 20).map(item => {
      return item.title
    })
  
    return first20titles
    // return first 20 items
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

 const newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
   
  let lettersArr = newArr[i].duration.split('');
  const numberArr = lettersArr.filter(function(x) {
    return x == parseInt(x);
  });
  
  let totalMin= 0;
  if(numberArr.length==3){
  totalMin = numberArr[0]*60 + numberArr[1]*10 + numberArr[2]*1
  } else {
    totalMin = numberArr[0]*60 + numberArr[1]*1
  }

  newArr[i].duration = totalMin;
}

return newArr;
}
//split parse int 

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
