const menuBtn = document.querySelector('#menu-btn');
const navArea = document.querySelector('#nav-area')

menuBtn.onclick = function () {
    console.log("menu button clicked!");
    navArea.classList.toggle('displayed');
};



