const frames = document.querySelectorAll(".frame");
let currentFrame = 0;
let intervalId;

function showNextFrame() {
  frames[currentFrame].classList.add("hidden"); // Spusť fade out animaci
  // Přechod na další snímek po skončení fade out
  setTimeout(() => {
    frames[currentFrame].classList.remove("active", "hidden"); // Vyčisti aktivní třídy
    currentFrame = (currentFrame + 1) % frames.length; // Přejdi na další snímek
    frames[currentFrame].classList.add("active"); // Zobraz další snímek
  }, 500); // Doba odpovídající trvání fade out animace
}

// Aktivuj animaci při najetí myši na kontejner
const animationContainer = document.querySelector(".animation-container");
animationContainer.addEventListener("mouseenter", () => {
  // Zobraz první snímek
  frames[currentFrame].classList.add("active");
  intervalId = setInterval(showNextFrame, 2000); // Obnov snímky každé 2 sekundy
});

// Zastav animaci, když myš opustí kontejner
animationContainer.addEventListener("mouseleave", () => {
  clearInterval(intervalId); // Zastav interval
  frames[currentFrame].classList.remove("active"); // Skryj aktivní snímek
});

console.log("JavaScript je načten.");
