// Get all the card-wrapper elements
const cardWrappers = document.querySelectorAll(".top-side");

const bmwCard = document.getElementById("card1");
const amazonCard = document.getElementById("card2");
const maerskCard = document.getElementById("card3");
const twilioCard = document.getElementById("card4");

const bmwDis = document.querySelector("#bmwCard");
const amazonDis = document.querySelector("#amazonCard");
const maerskDis = document.querySelector("#maerskCard");
const twilioDis = document.querySelector("#twilioCard");

const images = [bmwCard, amazonCard, maerskCard, twilioCard]; // Array of images
const displays = [addBmw, addAmazon, addMaersk, addTwilio]; // Corresponding display functions

let currentIndex = 0; // Track the current active image
let timer; // Timer variable

// Functions to show the correct display
function addBmw() {
  bmwDis.style.display = "flex";
  amazonDis.style.display = "none";
  maerskDis.style.display = "none";
  twilioDis.style.display = "none";
}

function addAmazon() {
  bmwDis.style.display = "none";
  amazonDis.style.display = "flex";
  maerskDis.style.display = "none";
  twilioDis.style.display = "none";
}

function addMaersk() {
  bmwDis.style.display = "none";
  amazonDis.style.display = "none";
  maerskDis.style.display = "flex";
  twilioDis.style.display = "none";
}

function addTwilio() {
  bmwDis.style.display = "none";
  amazonDis.style.display = "none";
  maerskDis.style.display = "none";
  twilioDis.style.display = "flex";
}

// Function to activate an image
function activateImage(index) {
  images.forEach((img) => img?.classList.remove("active")); // Remove active from all
  images[index]?.classList.add("active"); // Add active class to selected image
  displays[index](); // Change the displayed section
  currentIndex = index; // Update index
}

// Function to start the auto-switch timer
function startTimer() {
  clearInterval(timer); // Clear any existing timer
  timer = setInterval(() => {
    let nextIndex = (currentIndex + 1) % images.length; // Get next index (loops back after last)
    activateImage(nextIndex);
  }, 5000); // Change every 5 seconds
}

// Add event listeners to images for manual selection
images.forEach((img, index) => {
  img && img.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      activateImage(index); // Activate clicked image
      startTimer(); // Restart the timer after user interaction
    }
  });
});

// Set the first image (BMW) as active by default and start the timer
document.addEventListener("DOMContentLoaded", function () {
  activateImage(0); // Start with BMW
  startTimer(); // Start the auto-switch
});

// ------------------------------------


