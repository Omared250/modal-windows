'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// close the window modal and the overlay div
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Open the window modal and the overlay div
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    // Open window modal for each button
    btnsOpenModal[i].addEventListener('click', openModal);
}

// closing the windows modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// handle the keyboard 
document.addEventListener('keydown', function(e) {

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
