// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to load content based on the hash
    function loadContent(page) {
      fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
          document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
          document.getElementById('content').innerHTML = "<p>Error loading content.</p>";
          console.error('Error fetching page:', error);
        });
    }
  
    // Initial load if hash is present
    if (window.location.hash) {
      loadContent(window.location.hash.substring(1));
    }
  
    // Event listener for hash change
    window.addEventListener('hashchange', function () {
      loadContent(window.location.hash.substring(1));
    });
  
    // Sidebar links
    document.querySelectorAll('a.nav-link').forEach(link => {
      link.addEventListener('click', function () {
        loadContent(this.getAttribute('href').substring(1));
      });
    });
  });
  
  
  