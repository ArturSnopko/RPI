const gr5_WtCircle = document.getElementById("gr5_WtCircle");
const gr5_ButtonPrev = document.getElementById("gr5_ButtonPrev");
const gr5_ButtonNext = document.getElementById("gr5_ButtonNext");
var gr5_ImgTop = document.getElementById("gr5_ImgTop");
const gr5_ImgBottom = document.getElementById("gr5_ImgBottom");
const gr5_TextTop_1 = document.getElementById("gr5_TextTop_1");
const gr5_TextTop_2 = document.getElementById("gr5_TextTop_2");
const gr5_TextBottom_1 = document.getElementById("gr5_TextBottom_1");
const gr5_TextBottom_2 = document.getElementById("gr5_TextBottom_2");


let CurSlide = 0;
var saveT1 = gr5_TextTop_1.textContent;
var saveT2 = gr5_TextTop_2.textContent;
var saveT3 = gr5_TextBottom_1.textContent;
var saveT4 = gr5_TextBottom_2.textContent;

gr5_ButtonPrev.addEventListener("click", () => {
    CurSlide--;
    if (CurSlide < 0) {CurSlide = 3;}
    gr5_WtCircle.style.top = `${5.5 + 37 * CurSlide}px`;
    if (CurSlide !== 0)
    {
        gr5_ImgTop.src = "";
        gr5_ImgBottom.src = "";
        gr5_TextTop_1.textContent = "";
        gr5_TextTop_2.textContent = "";
        gr5_TextBottom_1.textContent = "";
        gr5_TextBottom_2.textContent = "";
    }
    else
    {
        gr5_ImgTop.src = "img/group5_1.png";
        gr5_ImgBottom.src = "img/group5_2.png";
        
        gr5_TextTop_1.textContent = saveT1;
        gr5_TextTop_2.textContent = saveT2;
        gr5_TextBottom_1.textContent = saveT3;
        gr5_TextBottom_2.textContent = saveT4;
    }
});

gr5_ButtonNext.addEventListener("click", () =>{
    CurSlide++;
    if (CurSlide > 3) {CurSlide = 0;}
    gr5_WtCircle.style.top = `${5.5 + 37 * CurSlide}px`;
    if (CurSlide !== 0)
    {
        gr5_ImgTop.src = "";
        gr5_ImgBottom.src = "";
        gr5_TextTop_1.textContent = "";
        gr5_TextTop_2.textContent = "";
        gr5_TextBottom_1.textContent = "";
        gr5_TextBottom_2.textContent = "";

    }
    else
    {
        gr5_ImgTop.src = "img/group5_1.png";
        gr5_ImgBottom.src = "img/group5_2.png";
        gr5_TextTop_1.textContent = saveT1;
        gr5_TextTop_2.textContent = saveT2;
        gr5_TextBottom_1.textContent = saveT3;
        gr5_TextBottom_2.textContent = saveT4;
    }
});


