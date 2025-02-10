const tag1 = document.querySelector('.tag');
const tag2 = document.querySelector('.tag2');

// Function to alternate rotation between both tags
function rotateElements() {
    setInterval(() => {
        // Rotate tag1 by 50 degrees (clockwise)
        tag1.style.transform = 'rotate(50deg)';
        
        // After 2 seconds, return tag1 to 0 degrees
        setTimeout(() => {
            tag1.style.transform = 'rotate(0deg)';
        }, 2000); // Reset tag1 after 2 seconds

        // Wait until tag1 completes its reset before rotating tag2
        setTimeout(() => {
            // Rotate tag2 by -50 degrees (counterclockwise)
            tag2.style.transform = 'rotate(-50deg)';
            
            // After 2 seconds, return tag2 to 0 degrees
            setTimeout(() => {
                tag2.style.transform = 'rotate(0deg)';
            }, 4000); // Reset tag2 after 2 seconds
        }, 2000); // Wait 2 seconds before rotating tag2 (after tag1 resets)
    }, 4000); // Rotate both tags every 4 seconds (2s rotation + 2s reset)
}

// Start the alternating rotation process
rotateElements();