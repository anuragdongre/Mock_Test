document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const modalContainer = document.getElementById('modalContainer');
    const closeModal = modalContainer.getElementsByClassName('close')[0];
  
    openModalBtn.addEventListener('click', function() {
      modalContainer.style.display = 'block';
      document.body.classList.add('modal-open');
    });
  
    closeModal.addEventListener('click', function() {
      modalContainer.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  
    modalContainer.addEventListener('click', function(event) {
      if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  });
  