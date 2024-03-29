'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const callOpenModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', callOpenModal)
}

const callhidden = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click',callhidden);

overlay.addEventListener('click', callhidden);

document.addEventListener('keydown', function(e){
console.log(e.key);
if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        callhidden();
}
})