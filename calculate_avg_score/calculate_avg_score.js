/**
 * Coding Challenge calculate the avg score
 */

var teamJohnScore = parseFloat(((800 + 120 + 103) / 3).toFixed(2));
console.log("John's team: ", teamJohnScore);

var teamMarkScore = parseFloat(((900 + 120 + 103) / 3).toFixed(2));
console.log("Mark's team: ", teamMarkScore);

var teamMerryScore = parseFloat(((800 + 120 + 103) / 3).toFixed(2));
console.log("Merry's team: ", teamMerryScore);

if (teamMarkScore > teamJohnScore && teamMarkScore > teamMerryScore) {
	console.log("Mark's Team won with the avg score of: " + teamMarkScore);
	if (teamJohnScore === teamMerryScore) {
		console.log("John and Merry drew with the avg score of: ", teamJohnScore);
	}

} else if (teamMerryScore > teamMarkScore && teamMerryScore > teamJohnScore) {
	console.log("Merry's Team won with the avg score of: " + teamMerryScore);
	if (teamJohnScore === teamMarkScore) {
		console.log("John and Mark drew with the avg score of: ", teamJohnScore);
	}

} else if (teamJohnScore > teamMarkScore && teamJohnScore > teamMerryScore) {
	console.log("John's Team won with the avg score of: " + teamJohnScore);
	if (teamMarkScore === teamMerryScore) {
		console.log("Mark and Merry drew with the avg score of: ", teamMarkScore);
	}

} else {
	console.log("Mark's Team, Merry's Team and John's Team drew with the avg score of: " + teamMarkScore + "\n" + "Mark's Team: " + teamMarkScore + "\n" + "John's Team: " + teamJohnScore + "\n" + "Merry's Team: " + teamMerryScore);
}
