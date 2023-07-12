document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const submitBtn = document.getElementById('submitBtn');
    const outputContainer = document.getElementById('outputContainer');
  
    submitBtn.addEventListener('click', function() {
      const text = userInput.value.trim();
  
      if (text !== '') {
        const submittedText = document.createElement('p');
        submittedText.className = 'submitted-text';
        submittedText.textContent = text;
        outputContainer.appendChild(submittedText);
  
        userInput.value = '';
      }
    });
  });
  