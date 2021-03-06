const aside_image = document.querySelector('.aside_image');
const aside_hover = document.querySelector('.aside_hover');
const aside_modal = document.querySelector('.aside_modal');
const aside_modal_close = document.querySelector('.aside_modal_close');
const pass_photo = document.querySelector('.pass-photo');
const modals_modal = document.querySelector('.modals');
const modals_close = document.querySelector('.modals_close');

function showModals() {
    // aside_hover.classList.add('active');
    modals_modal.classList.add('show');
};

function hideModals() {
    // aside_hover.classList.remove('active');
    modals_modal.classList.remove('show');
};

function show() {
    aside_hover.classList.add('active');
    aside_modal.classList.add('show');
};

function hide() {
    aside_hover.classList.remove('active');
    aside_modal.classList.remove('show');
};
pass_photo.addEventListener('click', showModals);
modals_close.addEventListener('click', hideModals);
aside_image.addEventListener('click', show);
aside_modal_close.addEventListener('click', hide);
document.querySelector('.pass-photo').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
};
let age = 0;

function getAge() {
    let today = new Date();
    let birthDate = new Date("1994/12/30");
    age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

function updateDisplay() {
    document.querySelector("#age").innerHTML = age + '<span style="font-size: small;">th</span>';
};
getAge();
updateDisplay();