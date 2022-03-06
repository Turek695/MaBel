const colorButtons = document.querySelectorAll('.button-color');
const colorForms = document.querySelectorAll('.form-color');
const colorInputs = document.querySelectorAll('.input-color');
const themeDark = document.querySelectorAll('.theme-dark');
const themeLight = document.querySelectorAll('.theme-light');


// for (let num = 0; num < colorForms.length; num++) {
//     colorForms[num].addEventListener('submit', function (eve) {
//         eve.preventDefault();

//     })

// }
// let num = 0;

colorForms[0].addEventListener('submit', function (eve) {
    eve.preventDefault();
    let color1 = colorForms[0].color.value;
    for (let item of themeDark) {
        item.style.Color = color1;
    }
    for (let item of themeLight) {
        item.style.backgroundColor = color1;
    }
})

colorForms[1].addEventListener('submit', function (eve) {
    eve.preventDefault();
    let color2 = colorForms[1].color.value;
    for (let item of themeDark) {
        item.style.backgroundColor = color2;
    }
    for (let item of themeLight) {
        item.style.color = color2;
    }
})

