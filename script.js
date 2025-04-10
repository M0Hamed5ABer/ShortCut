// function opensidebar(){
//   document.getElementById("sidebar").classList.toggle("opensidebar");
// }

document.querySelectorAll(".card").forEach((cardSection) => {
  const hero = cardSection.querySelector(".hero");
  const originalBackground = hero.style.backgroundImage;

  const categoryCards = cardSection.querySelectorAll(".category-card");

  categoryCards.forEach((card) => {
    const img = card.querySelector("img");

    card.addEventListener("mouseenter", () => {
      const imgSrc = img.getAttribute("src");
      hero.style.backgroundImage = `url('${imgSrc}')`;
    });

    card.addEventListener("mouseleave", () => {
      hero.style.backgroundImage = originalBackground;
    });
  });
});

const mainPage = document.querySelector(".main_page");
const sections = document.querySelectorAll(".card");
let currentIndex = 0;

// ازرار الكمبيوتر
document.getElementById("nextBtn")?.addEventListener("click", () => {
  if (currentIndex < sections.length - 1) {
    currentIndex++;
    updateSlide();
  }
});

document.getElementById("prevBtn")?.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

function updateSlide() {
  mainPage.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// ✅ دعم اللمس للموبايل
let startX = 0;
let endX = 0;

mainPage.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

mainPage.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 80; // أقل مسافة سحب مطلوبة

  if (startX - endX > threshold && currentIndex < sections.length - 1) {
    // سحب لليسار
    currentIndex++;
    updateSlide();
  } else if (endX - startX > threshold && currentIndex > 0) {
    // سحب لليمين
    currentIndex--;
    updateSlide();
  }
}

// sidebar
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openSidebar() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
}

function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");

  document.querySelectorAll(".sidebar li.show").forEach((li) => {
    li.classList.remove("show");
  });
}

function toggleSubMenu(a) {
  const parentLi = a.closest("li");
  parentLi.classList.toggle("show");
}

/***** Dark mode toggle *****/
document.addEventListener("DOMContentLoaded", () => {
  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  };

  // Check for dark mode preference in local storage
  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
  }

  // Toggle dark mode on button click
  document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});
