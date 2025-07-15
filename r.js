
/*saving the reference for the inputs */
const form = document.getElementById("form");
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateinputs();
});


const validateinputs = () =>{
    /* removing the whitespaces */
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


};