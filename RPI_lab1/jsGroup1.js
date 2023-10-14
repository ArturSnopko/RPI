
const prevButton = document.getElementById("group1left");
const nextButton = document.getElementById("group1right");
const prevNumber = document.getElementById("group1prevnumb");
const currentNumber = document.getElementById("group1curnumb");
const nextNumber = document.getElementById("group1nextnumb");
const image = document.getElementById("group1background");

let slideIndex = 4;
const slides = 9;

prevButton.addEventListener("click", () => {
    slideIndex--;
    if(slideIndex < 1){
        slideIndex = 9;
    }
    gr1updateSlider();
    image.style.backgroundImage = slideIndex === 4 ? "url('img/group1background.png')": "url('')";
});

nextButton.addEventListener("click", () => {
    slideIndex = slideIndex  % slides + 1 ;
    gr1updateSlider();
    image.style.backgroundImage = slideIndex === 4 ? "url('img/group1background.png')": "url('')";
});

function gr1updateSlider() {
    updateSlideNumbers();
}

function updateSlideNumbers(){
    if ((slideIndex - 1) === 0) {prevNumber.textContent = `${9}`}
        else {prevNumber.textContent = `${slideIndex - 1}`;}
    currentNumber.textContent = `${slideIndex}`;
    if ((slideIndex + 1) === 10) {nextNumber.textContent = `${1}`}
        else {nextNumber.textContent = `${slideIndex + 1}`;}
}

