const markHeight = 1.69;
const markWeight =  78;
const johnHeight = 1.95;
const johnWeight = 93;
console.log("The height and weight of Mark are respectively", markHeight,markWeight);
console.log("The height and weight of john are respectively", johnHeight,johnWeight);
const markBMI = markWeight/(markHeight*markHeight);
const johnBMI = johnWeight/(johnHeight*johnHeight);
console.log("BMI of MARK is", markBMI);
console.log("BMI of JOHN is", johnBMI);
const markHighBmi = markBMI > johnBMI;
console.log("Is mark BMI greater than john BMI ?",markHighBmi);