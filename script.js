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

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < sections.length - 1) {
    currentIndex++;
    updateSlide();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

function updateSlide() {
  mainPage.style.transform = `translateX(-${currentIndex * 100}vw)`;
}





