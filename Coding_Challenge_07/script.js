'use strict';
const markDetails = {
    fullName : 'Mark Miller',
    mass : 78,
    height: 1.69,
    //method to calculate BMI
    calcBMI: function(){
      this.BMI1 = this.mass/(this.height ** 2);
      return this.BMI1;
    }
}
const johnDetails = {
    fullName : 'John Smith',
    mass : 92,
    height: 1.60,
    //method to calculate BMI
    calcBMI: function(){
      this.BMI1 = this.mass/(this.height ** 2);
      return this.BMI1;
    }
}

const markBMI = markDetails.calcBMI();
const johnBMI = johnDetails.calcBMI();

if(markBMI > johnBMI){
    console.log(`${markDetails.fullName}'s BMI (${markDetails.BMI1}) is higher than ${johnDetails.fullName}'s (${johnDetails.BMI1})`);
}
else if(johnBMI > markBMI){
    console.log(`${johnDetails.fullName}'s BMI (${johnDetails.BMI1}) is higher than ${markDetails.fullName}'s (${markDetails.BMI1})`);
}
else{
    console.log(`OOPS....!!!! Something went wrong...!!!!`)
}

