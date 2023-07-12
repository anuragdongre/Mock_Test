document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const dataContainer = document.getElementById('dataContainer');
    const dataList = document.getElementById('dataList');
  
    function showLoader() {
      loader.style.display = 'flex';
      dataContainer.style.display = 'none';
    }
  
    function hideLoader() {
      loader.style.display = 'none';
      dataContainer.style.display = 'block';
    }
  
    function createListItem(title) {
      const listItem = document.createElement('li');
      listItem.textContent = title;
      return listItem;
    }
  
    function fetchData() {
      showLoader();
  
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          hideLoader();
  
          data.forEach(item => {
            const listItem = createListItem(item.title);
            dataList.appendChild(listItem);
          });
        })
        .catch(error => {
          hideLoader();
          console.error('Error:', error);
        });
    }
  
    fetchData();
  });
  