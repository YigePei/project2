// script.js - Main JavaScript file
console.log("Website loaded successfully!");

// Add event listener for link clicks
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Log when links are clicked
    console.log('Link clicked:', this.href);
    
    // If it's a placeholder link, prevent default and show message
    if (this.href.endsWith('.html') && !this.href.includes('example.com')) {
      e.preventDefault();
      console.log('This is a placeholder link for future content');
      alert('This content will be available in the future!');
    }
  });
});

// Log window size on resize
window.addEventListener('resize', function() {
  console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});