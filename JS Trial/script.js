// console.log("isEven EXERCISE");

// function isEven(i){
// 	if (i % 2 === 0) {
// 		return "true";
// 	}

// 	else {
// 		return "false";
// 	}
// }

// console.log(isEven(7));

// console.log("factorial EXERCISE");


// function factorial(num) {
// 	//declare a result varible
// 	var result = 1;
// 	//loop
// 	for (var i = 2; i<=num; i++) {
// 		result = result * i;
// 	}
// 	return result;
// }

function kebabToSnake(phrase){
	var newPhrase = phrase.replace(/-/g,"_");
	return newPhrase;
}




// console.log("Print all numbers between -10 and 19");
// for (var i = -10; i <= 19; i++) {
// 	console.log(i);
// }

// console.log("Print all even numbers between 10 and 40");
// for (var i = 10; i <= 40; i+=2) {
// 	console.log(i);
// }

// console.log("Print all odd numbers between 300 and 333");
// for (var i = 300; i <= 333; i++) {
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// }

// // console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
// // var numFour = 5;
// // while(numFour <= 50) {
// // 	if(numFour % 3 === 0 && numFour % 5 === 0){
// // 		console.log(numFour);
// // 	}
// // 	numFour++;
// // }