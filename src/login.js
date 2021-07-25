const openLogInButton = document.querySelectorAll('[data-modal-target]');
const closeLogInButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openLogInButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        console.log("Modal is: " + modal);
        openModal(modal);
    })
})

closeLogInButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.login-modal');
        closeModal(modal);
    })
})

function openModal(modal){
    if(modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}