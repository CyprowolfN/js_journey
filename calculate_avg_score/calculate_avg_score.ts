/**
 * Coding Challenge calculate the avg score
 */

const CalculateAvgScore = (teamJohnScore: number, teamMarkScore: number, teamMerryScore: number): number => {
	let highestScore = Math.max(teamJohnScore, teamMarkScore, teamMerryScore);

	if (teamMarkScore > teamJohnScore && teamMarkScore > teamMerryScore) {
		console.log(`Mark's Team won with the avg score of: ${teamMarkScore}`);
		if (teamJohnScore === teamMerryScore) {
			console.log(`John and Merry drew with the avg score of: ${teamJohnScore}`);
		}

	} else if (teamMerryScore > teamMarkScore && teamMerryScore > teamJohnScore) {
		console.log(`Merry's Team won with the avg score of: ${teamMerryScore}`);
		if (teamJohnScore === teamMarkScore) {
			console.log(`John and Mark drew with the avg score of: ${teamJohnScore}`);
		}

	} else if (teamJohnScore > teamMarkScore && teamJohnScore > teamMerryScore) {
		console.log(`John's Team won with the avg score of: ${teamJohnScore}`);
		if (teamMarkScore === teamMerryScore) {
			console.log(`Mark and Merry drew with the avg score of: ${teamMarkScore}`);
		}

	} else {
		console.log(`Mark's Team, Merry's Team and John's Team drew with the avg score of: ${teamMarkScore} \nMark's Team: ${teamMarkScore} \nJohn's Team: ${teamJohnScore} \nMerry's Team: ${teamMerryScore}`);
	}

	return highestScore;
}

const johnScore = (100 + 100 + 100) / 3;
const markScore = (420 + 100 + 100) / 3;
const merryScore = (302 + 100 + 100) / 3;

console.log("The highest average score is: " + CalculateAvgScore(johnScore, markScore, merryScore));
