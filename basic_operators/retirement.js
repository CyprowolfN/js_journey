
/**
 * Basic operators
 */
// var age = 26;
// var birthDate = age - new Date().getDay();
// console.log(birthDate);
// var year = new Date().getFullYear();
// var myBirthDate = year - age;
// var kBirthDate = year - age;
// console.log('Me: ' + myBirthDate + '\n' + 'K: ' + kBirthDate);


/**
 * Calculate age and retirement
 */
// function calculateAge(birthYear) {
// return new Date().getFullYear() - birthYear;
// }
// var mikeAge = calculateAge(1980);
// console.log("Mike is: " + mikeAge);
//
// function calculateRetirement(firstName, year) {
// var age = calculateAge(year);
// var retirement = 65 - age;
//
// if (retirement <= 0) {
// console.log(firstName + " has already retired");
// } else {
// console.log(firstName + ' has ' + retirement + ' years before retirement');
// }
// }
//
// calculateRetirement("Big smoke", 1940);
// calculateRetirement("Mike", 1980);

/**
 * Calculate age and retirement ES7
 */
const CalculateAge = (birthYear) => {
    return new Date().getFullYear() - birthYear;
}

let mikeAge = CalculateAge(1980);
console.log("Mike is: " + mikeAge);

const CalculateRetirement = (firstName, year) => {
    let age = CalculateAge(year);
    let retirement = 65 - age;
    if (retirement <= 0) {
        console.log(firstName + " has already retired!");
    } else {
        console.log(firstName + " has " + retirement + " years before retirement")
    }

}

CalculateRetirement("Big smoke", 1940);
CalculateRetirement("Mike", 1980);
