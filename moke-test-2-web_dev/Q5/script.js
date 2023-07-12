document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      validateForm();
    });
  
    function validateForm() {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const password = document.getElementById('password');
      const age = document.getElementById('age');
      const gender = document.getElementById('gender');
      const birthdate = document.getElementById('birthdate');
      const color = document.getElementById('color');
  
      resetErrors();
  
      if (name.value.trim() === '') {
        displayError('name', 'Name is required');
      }
  
      if (email.value.trim() === '') {
        displayError('email', 'Email is required');
      } else if (!validateEmail(email.value.trim())) {
        displayError('email', 'Invalid email format');
      }
  
      if (phone.value.trim() === '') {
        displayError('phone', 'Phone number is required');
      } else if (!validatePhone(phone.value.trim())) {
        displayError('phone', 'Invalid phone number format');
      }
  
      if (password.value.trim() === '') {
        displayError('password', 'Password is required');
      }
  
      if (age.value.trim() === '') {
        displayError('age', 'Age is required');
      } else if (!validateAge(age.value.trim())) {
        displayError('age', 'Invalid age');
      }
  
      if (gender.value === '') {
        displayError('gender', 'Gender is required');
      }
  
      if (birthdate.value.trim() === '') {
        displayError('birthdate', 'Date of birth is required');
      }
  
      if (color.value.trim() === '') {
        displayError('color', 'Favorite color is required');
      }
    }
  
    function displayError(fieldId, errorMessage) {
      const errorElement = document.getElementById(`${fieldId}Error`);
      errorElement.textContent = errorMessage;
    }
  
    function resetErrors() {
      const errorElements = document.getElementsByClassName('error');
      Array.from(errorElements).forEach(element => {
        element.textContent = '';
      });
    }
  
    function validateEmail(email) {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return emailRegex.test(email);
    }
  
    function validatePhone(phone) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    }
  
    function validateAge(age) {
      const ageNum = Number(age);
      return Number.isInteger(ageNum) && ageNum >= 0;
    }
  });
  