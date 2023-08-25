const fullpageEl = document.getElementById('fullpage');
const menuBtn = document.querySelector('.menu__btn');
const navigation = document.querySelector('.navigation');
const navCloseBtn = document.querySelector('.navigation__close__btn');
const blurOverlay = document.querySelector('.blur__overlay');
const IS_ACTIVE = 'is--active';

const toggleNavigation = () => {
    navigation.classList.toggle(IS_ACTIVE);
    blurOverlay.classList.toggle(IS_ACTIVE);
    fullpageEl.classList.toggle('no-scroll');
};

const CLICK = 'click';

menuBtn.addEventListener(CLICK, toggleNavigation);
navCloseBtn.addEventListener(CLICK, toggleNavigation);
blurOverlay.addEventListener(CLICK, toggleNavigation);

new fullpage('#fullpage', {
    autoScrolling: true,
    scrollBar: true,
    // ...other options
});

const listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function(event) {
        const id = event.target.id;
        const href = document.getElementById(id).href;
        window.location.href = href;
    });
}






