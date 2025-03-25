function validateForm() {
    let form = document.forms['registrationForm'];
    let isValid = true;
  
    try {
      //Reset previous error messages
      clearErrors();
  
      //Validate Full Name (No numbers or special characters)
      let fullName = form['fullName'].value.trim();
      if (!/^[A-Za-z\s]+$/.test(fullName) || fullName === "") {
        throw new Error("Full name can only contain letters and spaces.");
      }
  
      //Validate Username (6–15 characters, alphanumeric, can't start with a number)
      let username = form['username'].value.trim();
      if (!/^[A-Za-z][A-Za-z0-9]{5,14}$/.test(username)) {
        throw new Error("Username must be 6–15 characters, start with a letter, and contain only letters and numbers.");
      }
  
      //Validate Email
      let email = form['email'].value.trim();
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        throw new Error("Invalid email format.");
      }
  
      //Validate Password (8–20 characters, uppercase, lowercase, digit, special char)
      let password = form['password'].value;
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/.test(password)) {
        throw new Error("Password must be 8–20 characters, include uppercase, lowercase, a digit, and a special character.");
      }
  
      //Confirm Password
      let confirmPassword = form['confirmPassword'].value;
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }
  
      //Validate Phone Number (Basic format) updated with regex
      let phone = form['phone'].value.trim();
      if (!/^\+?[\d\s\-()]{10,15}$/.test(phone)) {
        throw new Error("Invalid phone number format. Do not use parenthesis, hyphens, or spaces.");
      }
  
      //Validate Date of Birth (User must be 18+)
      let dob = new Date(form['dob'].value);
      let age = new Date().getFullYear() - dob.getFullYear();
      let monthDiff = new Date().getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && new Date().getDate() < dob.getDate())) {
        age--;
      }
      if (age < 18) {
        throw new Error("You must be at least 18 years old.");
      }
  
      // Validate Terms and Conditions
      if (!form['terms'].checked) {
        throw new Error("You must agree to the terms and conditions.");
      }
  
      //If all validations pass
      console.info("Form submitted successfully!");
  
      //Show success message
      displaySuccess("Your form has been submitted successfully!");
      form.reset();
      return false;
  
  
    } catch (error) {
      displayError(error.message);
      console.warn("Form validation failed:", error.message);
      return false;
    }
  }
  
  function clearErrors() {
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
  
    //Clear success message
    document.getElementById('successMessage').textContent = '';
  }
  
  function displayError(message) {
    if (message.includes("Full name")) document.getElementById('nameError').textContent = message;
    else if (message.includes("Username")) document.getElementById('usernameError').textContent = message;
    else if (message.includes("email")) document.getElementById('emailError').textContent = message;
    else if (message.includes("Password must")) document.getElementById('passwordError').textContent = message;
    else if (message.includes("Passwords do not match")) document.getElementById('confirmPasswordError').textContent = message;
    else if (message.includes("phone")) document.getElementById('phoneError').textContent = message;
    else if (message.includes("18")) document.getElementById('dobError').textContent = message;
    else if (message.includes("terms")) document.getElementById('termsError').textContent = message;
  }
  
  function displaySuccess(message) {
    document.getElementById('successMessage').textContent = message;
  }
  