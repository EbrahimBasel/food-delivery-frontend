const emailInput    = document.getElementById('email');
const emailError    = document.getElementById('emailError');
const forgotPassForm = document.getElementById('forgotPassForm');
const continueBtn = document.getElementById('continueBtn');

// Check if email is valid by using regex
function isEmailValid(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Show error under a specific field
function showFieldError(field, message) {
  if (field === 'email') {
    emailError.textContent = message;
    emailError.classList.add('show');
    emailInput.classList.add('error');
  }
}


// Hide error under a specific field
function hideFieldError(field) {
  if (field === 'email') {
    emailError.classList.remove('show');
    emailError.textContent = '';
    emailInput.classList.remove('error');
  }
}

function hideAllErrors() {
  hideFieldError('email');
}

// Shows error under the right field
// Returns true if everything is valid
function validate(email) {
  let valid = true;

  if (!email) {
    showFieldError('email', 'Please enter your email address.');
    valid = false;
  } else if (!isEmailValid(email)) {
    showFieldError('email', 'Please enter a valid email address.');
    valid = false;
  }

  return valid; 
}

function setLoading(isLoading) {
  continueBtn.disabled = isLoading;
  continueBtn.classList.toggle('loading', isLoading);
}

//Clear email error as user types in email field
emailInput.addEventListener('input', () => {
  hideFieldError('email');
});

forgotPassForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  hideAllErrors();

  const email    = emailInput.value.trim();
  
  const isValid = validate(email);
  if (!isValid) return;

});
