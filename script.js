// Toggle between Sign In and Sign Up
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
  
  // Basic Form Validation and Submission (dummy behavior)
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Dummy validation (you can add more robust validation or API integration)
  if(email && password) {
    alert('Login Successful');
    // Here, you can handle the login logic or redirect
  } else {
    alert('Please fill in all fields.');
  }
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Dummy validation
    if(name && email && password) {
      alert('Account Created Successfully');
      // Here, you can handle the signup logic or redirect
    } else {
      alert('Please fill in all fields.');
    }
  });
  