

const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menuShow");
const btnMenuHide = document.getElementById("menuHiden");


btnMenu.addEventListener("click",()=>{

    menu.classList.add("showMenu");

});

btnMenuHide.addEventListener("click",()=>{
    menu.classList.remove("showMenu");
});