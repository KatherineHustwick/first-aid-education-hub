// Step 1: Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {

  // Step 2: Find the button with the ID "start-btn"
  const startButton = document.getElementById("start-btn");

  // Step 3: Add a click event listener to the button
  startButton.addEventListener("click", function() {

    // Step 4: Find the section with the ID "general-info"
    var targetSection = document.querySelector("#general-info");

    // Step 5: Scroll smoothly to that section
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });

});



// Step 1: Make a list (array) of colors
const colors = [
    "#CDEAF2", "#D8F3DC", "#FFF1C1", "#FFC8DD", 
  ];

  // Step 2: Find all the flip cards on the page
  const cards = document.querySelectorAll('.flip-card-inner');

  // Step 3: Go through each card using a regular function
  cards.forEach(function(card) {
    // Pick a random number between 0 and the number of colors
    const randomIndex = Math.floor(Math.random() * colors.length); //w3schools

    // Use that number to pick a color from the list
    const randomColor = colors[randomIndex];

    // Change the card’s background to that color
    card.style.backgroundColor = randomColor;
  });



 // SOUND SECTION
// Find all buttons with the class "sound-btn"
const buttons = document.querySelectorAll(".sound-btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // On click, look up which <audio> to control for each section
    const audioId = this.dataset.audio;
    const sound = document.getElementById(audioId);


 // Toggle play/pause and reset time; also swap button label
    if (sound.paused) {
      sound.currentTime = 0; // start from beginning
      sound.play();          // play audio
      this.textContent = "🔇 Stop"; // update button text
    } else {
      sound.pause();      // pause audio
      sound.currentTime = 0;
      this.textContent = "🔊 Listen";
    }
  });
});


//MOBILE MENU SHOELACE
  const menuToggle = document.querySelector('#menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');

  menuToggle.addEventListener('click', function () {
    mobileMenu.show();
  });



  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger); // enable scroll-based triggers
  
    // --- Hero: fade up on load ---
    gsap.from(".start", {
      y: 50,      // move up from 50px lower
      opacity: 0, // fade in
      duration: 1,
      ease: "power2.out"
    });
  
    // --- DRS ABCD section: animate panels when section scrolls in ---
    gsap.from("#DRSABCD sl-tab-panel", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15, // sequence each tab panel slightly after the previous
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#DRSABCD", // start doing it when the whole section enters
        start: "top 80%", // when top of section is 80% down the viewport
        end: "+=300", // end after 300px of scroll
        toggleActions: "play none none reverse"

      }
    });
  
    // --- General Info icons: rise + fade ---
    gsap.from("#general-info .icons img", {
      y: 60,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#general-info",
        start: "top 80%",
        end: "+=400",
        scrub: 1
      }
    });
  
    // --- Do's & Don'ts items: rise + fade ---
    gsap.from("#dos-donts .dd-item", {
      y: 60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#dos-donts",
        start: "top 80%",
        end: "+=400",
        scrub: 1 // scroll reveal of list cards
      }
    });
  });

  