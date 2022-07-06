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
 
let array = [1, 3, 5, 7, 9, 11, 11, 13, 15, 420];


function sumOfNumbers() {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];    
    }

    return sum;
}

assignment.sumOfNumbers = sumOfNumbers;






/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 24, 26];

let arrayOfEvenNumbers = [];

function countEvenNumbers() {
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
// 	const celsiusArray = [24, 30, 14, -8, 22, 17, -5, 25, 1.7, 25, 10, 10, 28, 33, 39, 28, 23, -1, 1.7, -4];
// const fahrenheitArray = [];

// function celsiusToFahrenheit() { 
//     celsiusArray.forEach(celsius => {
//         let fahrenheit = Math.floor((celsius * 1.8) + 32)
//         fahrenheitArray.push(fahrenheit);    
//     });
	
//     return fahrenheitArray;
// };
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

