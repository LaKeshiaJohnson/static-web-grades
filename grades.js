/* Loop over an array of student grades (values from 50-100) and output how many 
of each grades there are.

A score of 50-60 is an F - 55, 58
A score of 61-70 is a D - 64, 69
A score of 71-80 is a C - 71, 72, 78
A score of 81-90 is a B - 82, 84, 87
A score of 91-100 is an A - 95, 98
Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
Use console.log() to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?
*/

console.log("hello");

let A = [];
let B = [];
let C = [];
let D = [];
let F = [];

lowestGrade = [];
highestGrade = [];


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
 
 console.log("Lowest score: ", Math.min.apply(null, scores));
 console.log("Highest score: ", Math.max.apply(null, scores));



		for (let i = 0; i < scores.length; i++) {

			grade = scores[i]

			if (grade >= 91) {
				A.push(grade)
			} else if (grade >= 81 ) {
				B.push(grade)
			} else if (grade >= 71) {
				C.push(grade)
			} else if (grade >= 61) {
				D.push(grade)
			} else {
				F.push(grade)
			}
			
				
	}
	console.log("Number of A's: ", A.length);
	console.log("Number of B's: ", B.length);
	console.log("Number of C's: ", C.length);
	console.log("Number of D's: ", D.length);
	console.log("Number of F's: ", F.length);


		

		



