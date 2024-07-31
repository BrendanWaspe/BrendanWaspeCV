Script.js
// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
     // Log creator information to the console
    console.log("Created by Brendan Waspe")
    // Select the image box and modal elements
    const imgBx = document.querySelector('.imgBx');
    const modal = document.getElementById('customModal');

    // Add event listeners for mouse and touch interactions
    imgBx.addEventListener('mouseover', applyPinkScale);
    imgBx.addEventListener('mouseout', handleMouseOut);

    // Touch event handling for mobile devices
    imgBx.addEventListener('touchstart', (event) => {
        event.preventDefault();
        applyPinkScale();
        showCustomModal();
    });
    
    imgBx.addEventListener('touchend', (event) => {
        event.preventDefault();
        handleTouchEnd();
    });

    // Function to apply a pink scale filter to the image
    function applyPinkScale() {
        imgBx.style.filter = 'grayscale(100%) sepia(100%) hue-rotate(255deg) brightness(1.2) contrast(1)';
    }

    // Function to remove the pink scale filter from the image
    function removePinkScale() {
        imgBx.style.filter = ''; 
    }

    // Function to handle mouse out event
    function handleMouseOut() {
        if (!modal.style.display || modal.style.display === 'none') {
            removePinkScale();
        }
    }

    // Function to handle touch end event
    function handleTouchEnd() {
        if (!modal.style.display || modal.style.display === 'none') {
            removePinkScale();
        }
    }

    // Add click event listener to show the custom modal
    imgBx.addEventListener('click', () => {
        showCustomModal();
    });

    // Function to display the custom modal and apply the pink scale filter
    function showCustomModal() {
        modal.style.display = 'block';
        applyPinkScale(); 
    }

    // Function to hide the custom modal and remove the pink scale filter
    function closeModal() {
        modal.style.display = 'none';
        removePinkScale(); 
    }

    // Expose functions to the global window object for external access
    window.showCustomModal = showCustomModal;
    window.closeModal = closeModal;
});