const SignUpButton = document.getElementById('SignUp');
const SignInButton = document.getElementById('SignIn');
const ConTainer = document.getElementById('container');

SignUpButton.addEventListener('click', () => {
    ConTainer.classList.add('right-panel-active');
});


SignInButton.addEventListener('click', () => {
    ConTainer.classList.remove('right-panel-active');
});