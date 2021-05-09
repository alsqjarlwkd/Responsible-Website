const slideList = document.querySelector('.slide_list');
const slideContents = document.querySelectorAll('.slide_content');
const slideLen = slideContents.length;
const slideBtnNext = document.querySelector('.slide_btn_next'); 
const slideBtnPrev = document.querySelector('.slide_btn_prev'); 
const slideWidth = 400;
const slideSpeed = 300;

slideList.style.width = slideWidth *(slideLen)+"px";

let curIndex= 0;

function SlideBtnNext(){
    console.log("클릭");
    if(curIndex <= slideLen-2)
    {
        slideList.style.transition = slideSpeed+"ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
    }
    else {
        slideList.style.transform = "translate3d(0px, 0px, 0px)";
        curIndex = -1;
        }
    curSlide = slideContents[++curIndex];
}

slideBtnNext.addEventListener("click",SlideBtnNext);