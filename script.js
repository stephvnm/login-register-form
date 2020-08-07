// Selectors
const container = document.querySelector('.container')
const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');

// Event listeners
signUpBtn.addEventListener('click', () => {
  container.classList.add('signup-active');
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('signup-active');
})