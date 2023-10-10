const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const prevNumber = document.querySelector(".fa-chevron-left");
const currentNumber = document.querySelector(".current-number");
const nextNumber = document.querySelector(".fa-chevron-right");

let slideIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;

updateSlideNumbers();

prevButton.addEventListener("click", () => {
    if (slideIndex > 0) {
        slideIndex--;
        updateSlider();
    }
});

nextButton.addEventListener("click", () => {
    if (slideIndex < 9 - 1) {
        slideIndex++;
        updateSlider();
    }
});

function updateSlider() {
    const translateX = -slideIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    updateSlideNumbers();
}

function updateSlideNumbers() {
    currentNumber.textContent = slideIndex + 1;
    prevNumber.textContent = slideIndex === 0 ? 9 : slideIndex;
    nextNumber.textContent = slideIndex === 10 ? 1 : slideIndex + 2;
}