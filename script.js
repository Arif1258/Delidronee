// script.js
window.onload = function() {
    // Simulate a loading time
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none'; // Hide the loader
        document.querySelector('.main').style.display = 'flex'; // Show the main content
    }, 1000); // Change this value to simulate different loading times
};