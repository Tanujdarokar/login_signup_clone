const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.querySelector('.sign-up-container .auth-form');
const signInForm = document.querySelector('.sign-in-container .auth-form');

function showPanel(target) {
	if (!container || !target) return;

	container.classList.toggle('right-panel-active', target === 'signup');

	if (target === 'signup') {
		signUpForm?.classList.remove('animate-form-leave');
		signUpForm?.classList.add('animate-form-enter');
		signInForm?.classList.add('animate-form-leave');
	} else {
		signInForm?.classList.remove('animate-form-leave');
		signInForm?.classList.add('animate-form-enter');
		signUpForm?.classList.add('animate-form-leave');
	}
}

signUpButton.addEventListener('click', () => {
	showPanel('signup');
});

signInButton.addEventListener('click', () => {
	showPanel('signin');
});