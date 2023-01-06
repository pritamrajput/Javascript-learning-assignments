//------------------------------------------------------------
//***************** Coding Challenge 02 **********************
//------------------------------------------------------------

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

// ------------------------------------------------
// ******** BMI comparison with if/else ***********
// ------------------------------------------------

if(markBMI>johnBMI){
    console.log("Mark's BMI is higher than John's");
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}
else{
    console.log("John's BMI is higher than Mark's");
    console.log(`John's BMI (${johnBMI}) is higher than Marks's BMI (${markBMI})`)
}