/*
Calculate age and retirment 
 */
const CalculateAge = (birthYear: number): number => {
	return new Date().getFullYear() - birthYear;
}

let mikeAge: number = CalculateAge(1980);
console.log("Mike is: " + mikeAge);

const CalculateRetirement = (firstName: string, year: number): [string, number] => {
	let age: number = CalculateAge(year);
	let retirementAge: number = 65;
	let yearsUntilRetirement = retirementAge - age;

	// Return appropriate message and years left
	if (yearsUntilRetirement <= 0) {
		return [`${firstName} has already retired!`, 0];
	} else {
		return [`${firstName} has ${yearsUntilRetirement} years before retirement`, yearsUntilRetirement];
	}
}

// Example usage
console.log(CalculateRetirement("Mike", 1980));
console.log(CalculateRetirement("Big Smoke", 1940));
