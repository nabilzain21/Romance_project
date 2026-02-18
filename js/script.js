document.addEventListener("DOMContentLoaded", function () {
  const unlockBtn = document.getElementById("unlockBtn");
  const popup = document.getElementById("unlockPopup");
  const confetti = document.getElementById("confetti");

  if (unlockBtn) {
    unlockBtn.addEventListener("click", () => {
      // Fade out button
      unlockBtn.classList.add("opacity-0", "scale-90");

      // Show confetti
      confetti.classList.remove("opacity-0", "scale-90");
      confetti.classList.add("opacity-100", "scale-100");

      // Fade popup
      setTimeout(() => {
        popup.classList.add("opacity-0");
      }, 2000);

      setTimeout(() => {
        popup.classList.add("hidden");
      }, 2700);
    });
  }
  /* ================= CINEMATIC TEXT ================= */

const texts = [
  "You are already 25 years old",
  "You survived every hard moment",
  "You are stronger than you think",
  "This is your new chapter"
];

const textElement = document.getElementById("cinematicText");

if (textElement) {
  let index = 0;

  // ⏱️ TIMING (UBAH DI SINI)
  const fadeDuration = 1000;   // fade in / out
  const stayDuration = 3500;   // teks DIAM di layar
  const totalDuration = fadeDuration * 2 + stayDuration;

  function showText() {
    textElement.textContent = texts[index];

    // Fade In
    textElement.classList.remove("opacity-0", "translate-y-4");
    textElement.classList.add("opacity-100", "translate-y-0");

    // Fade Out
    setTimeout(() => {
      textElement.classList.remove("opacity-100", "translate-y-0");
      textElement.classList.add("opacity-0", "translate-y-4");
    }, fadeDuration + stayDuration);

    index = (index + 1) % texts.length;
  }

  // Initial setup
  textElement.classList.add("transform", "transition-all", "duration-1000");

  showText();
  setInterval(showText, totalDuration);
}


});
