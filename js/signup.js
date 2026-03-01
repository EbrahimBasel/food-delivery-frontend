const signupForm     = document.getElementById('signupForm');
const continueBtn   = document.getElementById('continueBtn');
const btnLabel      = document.getElementById('btnLabel');
const btnSpinner    = document.getElementById('btnSpinner');
const remember      = document.getElementById('remember');
const googleBtn     = document.getElementById('googleBtn');
const emailInput    = document.getElementById('email');
const emailError    = document.getElementById('emailError');
const passInput     = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const confirmpassInput     = document.getElementById('confirmPassword');
const eyeToggle     = document.getElementById('eyeToggle');
const confirmEyeToggle    = document.getElementById('confirmEyeToggle');
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const firstNameError = document.getElementById('firstNameError')
const lastNameError = document.getElementById('lastNameError')


// Check if email is valid by using regex
function isEmailValid(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}


// Show error under a specific field
function showFieldError(field, message) {
  if (field === 'firstName') {
    firstNameError.textContent = message;
    firstNameError.classList.add('show');
    firstNameInput.classList.add('error');
  }
  if (field === 'lastName') {
    lastNameError.textContent = message;
    lastNameError.classList.add('show');
    lastNameInput.classList.add('error');
  }
  if (field === 'email') {
    emailError.textContent = message;
    emailError.classList.add('show');
    emailInput.classList.add('error');
  }
  if (field === 'password') {
    passwordError.textContent = message;
    passwordError.classList.add('show');
    passInput.classList.add('error');
  }
  if (field === 'confirmPassword') {
    confirmPasswordError.textContent = message;
    confirmPasswordError.classList.add('show');
    confirmpassInput.classList.add('error');
  }
}


//  Hide error under a specific field
function hideFieldError(field) {
  if (field === 'firstName') {
    firstNameError.classList.remove('show');
    firstNameError.textContent = '';
    firstNameInput.classList.remove('error');
  }
  if (field === 'lastName') {
    lastNameError.classList.remove('show');
    lastNameError.textContent = '';
    lastNameInput.classList.remove('error');
  }
  if (field === 'email') {
    emailError.classList.remove('show');
    emailError.textContent = '';
    emailInput.classList.remove('error');
  }
  if (field === 'password') {
    passwordError.classList.remove('show');
    passwordError.textContent = '';
    passInput.classList.remove('error');
  }
  if (field === 'confirmPassword') {
    confirmPasswordError.classList.remove('show');
    confirmPasswordError.textContent = '';
    confirmpassInput.classList.remove('error');
  }
}

function hideAllErrors() {
  hideFieldError('email');
  hideFieldError('password');
  hideFieldError('confirmPassword');
  hideFieldError('firstName');
  hideFieldError('lastName');
}


// Shows error under the right field
// Returns true if everything is valid
function validate(email, password, confirmPassword, firstName, lastName) {
  let valid = true;

  if (!firstName) {
    showFieldError('firstName', 'First name is required.');
    valid = false;
  }

   if (!lastName) {
    showFieldError('lastName', 'Last name is required.');
    valid = false;
  }

  if (!email) {
    showFieldError('email', 'Please enter your email address.');
    valid = false;
  } else if (!isEmailValid(email)) {
    showFieldError('email', 'Please enter a valid email address.');
    valid = false;
  }

  if (!password) {
    showFieldError('password', 'Please enter your password.');
    valid = false;
  } else if (password.length < 6) {
    showFieldError('password', 'Password must be at least 6 characters.');
    valid = false;
  }

  if (confirmPassword !== password) {
    showFieldError('confirmPassword', 'password does not match.');
    valid = false;
  }

  return valid; 
}

function setLoading(isLoading) {
  continueBtn.disabled = isLoading;
  continueBtn.classList.toggle('loading', isLoading);
}

eyeToggle.addEventListener('click', () => {
  const isHidden = passInput.type === 'password';
  passInput.type  = isHidden ? 'text' : 'password';
  eyeToggle.classList.toggle('visible', isHidden);
});

confirmEyeToggle.addEventListener('click', () => {
  const isHidden = confirmpassInput.type === 'password';
  confirmpassInput.type  = isHidden ? 'text' : 'password';
  confirmEyeToggle.classList.toggle('visible', isHidden);
});

//Clear email error as user types in email field
emailInput.addEventListener('input', () => {
  hideFieldError('email');
});


// Clear password error as user types in password field
passInput.addEventListener('input', () => {
  hideFieldError('password');
});

signupForm.addEventListener('submit', async (e) => {

  e.preventDefault();

  hideAllErrors();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email    = emailInput.value.trim();
  const password = passInput.value;
  const confirmPassword = confirmpassInput.value;

  const isValid = validate(email, password, confirmPassword, firstName, lastName);
  if (!isValid) return;

});
