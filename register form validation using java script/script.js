var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validInputs();
});

function validInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username cannot be blank');
    }
    else {
        setSuccess(username);
    }
    if (emailValue === '') {
        setError(email, 'Email cannot be blank');
    }
    else if (!isEmailValid(emailValue)) {
        setError(email, 'Email is not valid');
    }
    else {
        setSuccess(email);
    }
    if (passwordValue === '') {
        setError(password, 'Password cannot be blank');
    }
    else if(passwordValue.length <= 8){
        setError(password, 'Password must be greater than 8 characters');
    }

    else {
        setSuccess(password);
    }
    if (cpasswordValue === '') {
        setError(cpassword, 'Confirm Password cannot be blank');
    }
    else if (passwordValue !== cpasswordValue) {
        setError(cpassword, 'Password does not match');
    }
    else {
        setSuccess(cpassword);
    }
    
}
    function setError(element, message) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');
        errorElement.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

    function setSuccess(element) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');
        errorElement.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    }
    const isEmailValid = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/
            );

    };