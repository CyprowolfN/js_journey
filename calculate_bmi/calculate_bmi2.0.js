const prompt = require('prompt-sync');
/**
 * Calulating BMI 2.0
 */
const firstName = prompt("Whats your first name?");
const userWeight = prompt("what is your weight?");
const userHeight = prompt("and what is your height?");

const friendFirstName = prompt("Whats your first name, friend?")
const userFriendWeight = prompt("what is your weight, friend?");
const userFriendHeight = prompt("and what is your height?");

var userBMI = userWeight / (userHeight * userHeight);
console.log(userBMI);

var userFriendBMI = userFriendWeight / (userFriendHeight * userFriendHeight);
console.log(userFriendBMI);

if (userBMI > userFriendBMI) {
	console.log('\n' + firstName + "'s" + " BMI is heigher than " + friendFirstName + "'s" + "\n" + firstName + " BMI: " + userBMI + "\n" + friendFirstName + ' BMI: ' + userFriendBMI);
} else {
	console.log('\n' + friendFirstName + "'s" + " BMI is heigher than " + firstName + "'s" + "\n" + friendFirstName + " BMI: " + userFriendBMI + "\n" + firstName + ' BMI: ' + userBMI);
}
