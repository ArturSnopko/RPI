
const gr2prevButton = document.getElementById("group2ButtonPrev");
const gr2nextButton = document.getElementById("group2ButtonNext");
const gr2EmptyDot = document.getElementById("EmptyCircle");
const gr2image = document.getElementById("Group2PlayerPhoto");
const gr2icon = document.getElementById("Group2PlayIcon");
const gr2TextUnder = document.getElementById("Group2SliderText");
const gr2TextTitle = document.getElementById("Group2SliderTitle");

let gr2CurrentPos = 1;
const gr2minPos = 1;
const gr2maxPos = 4;

gr2prevButton.addEventListener("click", () => {
    if (gr2CurrentPos!==gr2minPos){
        gr2CurrentPos--;
    }
    updateSlider();
    drawContext();
});

gr2nextButton.addEventListener("click", () => {
    if (gr2CurrentPos!==gr2maxPos){
        gr2CurrentPos++;
    }
    updateSlider();
    drawContext();
});

function updateSlider() {
    if(gr2CurrentPos === gr2minPos){
        gr2prevButton.style.visibility = "hidden";
    } else {
        gr2prevButton.style.visibility = "visible";
    }
    if(gr2CurrentPos === gr2maxPos){
        gr2nextButton.style.visibility = "hidden";
    } else {
        gr2nextButton.style.visibility = "visible";
    }
}

function drawContext(){
    gr2image.src = gr2CurrentPos === 1 ? "img/PlayerPhoto.png" : "";
    gr2icon.src = gr2CurrentPos === 1 ? "img/PlayIcon.png" : "";
    gr2TextUnder.textContent = gr2CurrentPos === 1 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis.\n" +
        "                    <br>In posuere elit eget lacus lacinia rutrum eu at leo." : "";
    gr2TextTitle.textContent = gr2CurrentPos === 1 ? "Mountain Survival Tutorial" : "";
    gr2EmptyDot.style.left = (-25 + 37 * gr2CurrentPos) + "px";
}

document.addEventListener("DOMContentLoaded", function() {
    updateSlider();
    drawContext();
});
/*
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis vitae tortor nec arcu condimentum ullamcorper quis eget felis.
                    <br>In posuere elit eget lacus lacinia rutrum eu at leo.

    Mountain Survival Tutorial
 */
