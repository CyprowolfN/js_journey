
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
function CalculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}
var mikeAge = CalculateAge(1980);
var bigsmokeAge = CalculateAge(1940);
console.log("Mike is: " + mikeAge);
console.log("Big smoke is: " + bigsmokeAge);

function CalculateRetirement(firstName, year) {
    var age = CalculateAge(year);
    var retirement = 65 - age;

    if (retirement <= 0) {
        console.log(firstName + " has already retired");
    } else {
        console.log(firstName + " has: " + retirement + " years before retirement");
    }
}

CalculateRetirement("Mike", 1980);
CalculateRetirement("Big smoke", 1940);

/**
 * Calculate age and retirement ES7
 */
// const CalculateAge = (birthYear) => {
// return new Date().getFullYear() - birthYear;
// }
//
// let mikeAge = CalculateAge(1980);
// let bigsmokeAge = CalculateAge(1940);
// console.log("Mike is: " + mikeAge);
// console.log("Big smoke: " + bigsmokeAge);
//
// const CalculateRetirement = (firstName, year) => {
// let age = CalculateAge(year);
// let retirement = 65 - age;
// if (retirement <= 0) {
// console.log(firstName + " has already retired!");
// } else {
// console.log(firstName + " has " + retirement + " years before retirement")
// }
//
// }
//
// CalculateRetirement("Big smoke", 1940);
// CalculateRetirement("Mike", 1980);
