let MenuBtn = document.querySelector(`.Nav_Right`);
let Close = document.querySelector(`.modal_close`);
let MainContainer = document.querySelector('.container');
function MenuBtnClick(){
    console.log(`클릭`);
    MainContainer.style.display='none';
    document.querySelector('.modal_wrap').style.display ='block';
    document.querySelector('.black_bg').style.display ='block';
}
function offClick() {
    MainContainer.style.display='block'
    document.querySelector('.modal_wrap').style.display ='none';
    document.querySelector('.black_bg').style.display ='none';
}
MenuBtn.addEventListener("click",MenuBtnClick);
Close.addEventListener("click",offClick);

