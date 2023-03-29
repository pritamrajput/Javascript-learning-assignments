'use strict';

// All variables
const getAddBox = document.querySelector(".add__box");
const getBody = document.querySelector("body");
const getForm = document.querySelector("form");
const boxContainer = document.querySelector(".Upperbox");

//Making boxContaier invisible initially
boxContainer.style.display = "none";

getForm.addEventListener('submit',function(event){
   event.preventDefault();
   
   // getting input from the user
   const getColor = document.querySelector(".color__name").value;
   const getHexCode = document.querySelector(".color__code").value;
  
   
   boxContainer.style.display = "flex";
   boxContainer.style.flexWrap = "wrap";
   const newBox = document.createElement("div");
   
   // Creating button for color change
   const btnColorChange = document.createElement("button");
   btnColorChange.classList.add("colorbutton");
   btnColorChange.innerText = getColor;

   //Creating button for deleting the box
   const cancelButton = document.createElement("button");
   cancelButton.classList.add("cancelbtn");
   cancelButton.innerText = "Delete";
   
   // Appending color boxes
   newBox.classList.add("colorbox");
   newBox.appendChild(btnColorChange);
   newBox.appendChild(cancelButton);
   boxContainer.appendChild(newBox);

   btnColorChange.addEventListener("click",function(){
    newBox.style.border = `2px solid ${getHexCode}`;
   })

   // confirmation popup
   cancelButton.addEventListener("click",function(event){
      const response = confirm("Do you want to delete ?")
      console.log(response);
      if(response === true){
        event.currentTarget.parentElement.remove();
      }
      
   })
})