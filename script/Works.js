let MenuBtn = document.querySelector(`.Nav_Right`);
let Close = document.querySelector(`.close`);
function MenuBtnClick(){
    console.log(`클릭`);
    document.querySelector('.modal_wrap').style.display ='block';
    document.querySelector('.Modal_Menu_bg').style.display ='block';
}
function MenuBtnOffClick(){
    document.querySelector('.modal_wrap').style.display ='none';
    document.querySelector('.Modal_Menu_bg').style.display ='none';
}
MenuBtn.addEventListener("click",MenuBtnClick);
Close.addEventListener("click",MenuBtnOffClick);

