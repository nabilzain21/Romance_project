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

const revealElements = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.remove('opacity-0', 'translate-y-10');
        el.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);

  const photos = [
  {
    src: "assets/foto1.jpeg",
    caption: "This moment is one of the reasons we’ve come this far, when you were still shy around me, and I was incredibly happy that I had won your heart."
  },
  {
    src: "assets/foto2.jpeg",
    caption: "I clearly remember this photo. It was when we continued our trip from Cianjur to Bandung, and then I took you to the travel station to go home. I felt uneasy and a little sad seeing you travel alone. It hurt me knowing you had to be so independent."
  },
  {
    src: "assets/foto3.jpeg",
    caption: "Long story short, our journey kept going further. In this moment, I had just picked you up in Bekasi, and we ate sate taichan together. It was our very first sate taichan at midnight."
  },
  {
    src: "assets/foto4.jpeg",
    caption: "And here we were, looking for a Mazda CX-9 together. I was so happy that you accompanied me while searching for a car. Even though it was a second-hand one, it has always been my dream to buy our dream car together just like in this photo."
  },
  {
    src: "assets/foto9.jpeg",
    caption: "Next, we went to Bandung. It was our first trip, just the two of us. We did so many things together, and I realized that traveling far with you is incredibly fun. Even though we were limited by budget and other things, I dream that one day we’ll travel abroad and even live there together."
  },
  {
    src: "assets/foto8.jpeg",
    caption: "This was our anniversary moment. In that moment, I felt completely loved by a woman who is mature, gentle, beautiful, and patient."
  },
  {
    src: "assets/foto7.jpeg",
    caption: "And this is you, a woman who is now turning 25, who always tries her best for me and for our relationship."
  },
];

let current = 0;

const leftSlide = document.getElementById("leftSlide");
const centerSlide = document.getElementById("centerSlide");
const rightSlide = document.getElementById("rightSlide");
const caption = document.getElementById("caption");

function createPolaroid(photo) {
  return `
    <div class="bg-white p-4 shadow-2xl rounded-sm">
      <div class="aspect-[4/5] w-full overflow-hidden">
        <img src="${photo.src}" 
             class="w-full h-full object-cover">
      </div>
    </div>
  `;
}

function updateSlides() {
  const leftIndex = (current - 1 + photos.length) % photos.length;
  const rightIndex = (current + 1) % photos.length;

  leftSlide.innerHTML = createPolaroid(photos[leftIndex]);
  centerSlide.innerHTML = createPolaroid(photos[current]);
  rightSlide.innerHTML = createPolaroid(photos[rightIndex]);

  caption.innerText = photos[current].caption;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % photos.length;
  updateSlides();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + photos.length) % photos.length;
  updateSlides();
});

updateSlides();

function updateSlides() {
  const leftIndex = (current - 1 + photos.length) % photos.length;
  const rightIndex = (current + 1) % photos.length;

  leftSlide.innerHTML = createPolaroid(photos[leftIndex]);
  centerSlide.innerHTML = createPolaroid(photos[current]);
  rightSlide.innerHTML = createPolaroid(photos[rightIndex]);

  caption.style.opacity = 0;

  setTimeout(() => {
    caption.innerText = photos[current].caption;
    caption.style.opacity = 1;
  }, 200);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(el => observer.observe(el));


});
