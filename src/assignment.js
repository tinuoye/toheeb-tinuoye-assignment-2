// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
 



// function sumOfNumbers(array) {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];    
//     }

//     return sum;
// }

// assignment.sumOfNumbers = sumOfNumbers;






/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */



let arrayOfEvenNumbers = [];

function countEvenNumbers(arrayOfNumbers) {
		arrayOfNumbers.forEach (number => {
			if ( number % 2 === 0){
				arrayOfEvenNumbers.push(number);
		}
		});
    return arrayOfEvenNumbers.length
};
assignment.countEvenNumbers = countEvenNumbers;





/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
	
const fahrenheitArray = [];

function celsiusToFahrenheit(celsiusArray) { 
    celsiusArray.forEach(celsius => {
        let fahrenheit = Math.floor((celsius * 1.8) + 32)
        fahrenheitArray.push(fahrenheit);    
    });
	
    return fahrenheitArray;
};
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

