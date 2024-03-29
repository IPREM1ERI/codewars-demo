// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  const hYears = humanYears;
  let cYears = 15;
  let dYears = 15;
  
  if (hYears === 2) {
    cYears += 9;
    dYears += 9;
    return [hYears, cYears, dYears]
  }
  
  else if (hYears > 2) {
    cYears = 24 + (4 * (hYears - 2))
    dYears = 24 + (5 * (hYears - 2))
    return [hYears, cYears, dYears]
  }
  
  else {
    return [1,15,15]
  } 
}

console.log(humanYearsCatYearsDogYears(1)) // [1,15,15]
console.log(humanYearsCatYearsDogYears(2)) // [2,24,24]
console.log(humanYearsCatYearsDogYears(10)) // [10,56,64]
