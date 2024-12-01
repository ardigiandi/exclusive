const carousel = document.getElementById("carousel");
const slides = carousel.children;
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

const updateCarousel = () => {
  const offset = -currentIndex * 100; // Menggeser slide sebesar 100% per item
  carousel.style.transform = `translateX(${offset}%)`;
};

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});

// Set initial target date
const initialTargetDate = new Date("2024-12-01T00:00:00");

let targetDate = initialTargetDate.getTime();

function updateCountdown() {
  const now = new Date().getTime();
  let timeDifference = targetDate - now;

  // Reset countdown if timeDifference is less than or equal to 0
  if (timeDifference <= 0) {
    targetDate = new Date(targetDate + 24 * 60 * 60 * 1000).getTime(); // Tambahkan 1 hari
    timeDifference = targetDate - now; // Hitung ulang selisih waktu
  }

  // Calculate time components
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update DOM elements
  document.getElementById("days").textContent = String(
    Math.max(days, 0)
  ).padStart(2, "0");
  document.getElementById("hours").textContent = String(
    Math.max(hours, 0)
  ).padStart(2, "0");
  document.getElementById("minutes").textContent = String(
    Math.max(minutes, 0)
  ).padStart(2, "0");
  document.getElementById("seconds").textContent = String(
    Math.max(seconds, 0)
  ).padStart(2, "0");
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// NAVBAR

// Select elements
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

// Function to close the menu
const closeMenu = () => {
  mobileMenu.classList.add("-translate-x-full");
};

// Open menu
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent triggering the document click event
  mobileMenu.classList.remove("-translate-x-full");
});

// Close menu when clicking close button
menuClose.addEventListener("click", closeMenu);

// Close menu when clicking outside the menu
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    closeMenu();
  }
});
