
/**
 * Calulating BMI
 */
var markMass, johnMass;
var markHeight, johnHeight;
markMass = 80;
johnMass = 70;
markHeight = 1.80;
johnHeight = 1.70;
var markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);
var heigherBMI = markBMI > johnBMI;
console.log("is Mark's BMI heigher than John's: " + heigherBMI);
