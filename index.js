

const navbar = document.querySelector('#main-nav');
const mobileNav = document.querySelector('#mobile-nav');

export function underline(num) {
    document.querySelector(`#main-nav li:nth-child(${num}) a`).style.borderBottom = '3px solid red'
}

export function increaseNav() {

    window.addEventListener('scroll', () => {
        if (window.scrollY > 130) {
            navbar.style.height = '60px';
        } else {
            navbar.style.height = '80px'; 
        }
    });

}

export function sandwitch() {

    document.querySelector('#sandwitch').addEventListener('click', () => {
        mobileNav.classList.toggle('visible');
    })

}

export function resize() {

    window.addEventListener("resize", () => {
        const windowWidth = window.innerWidth;
        console.log("Window width changed to:", windowWidth);
        if (windowWidth>650) {
            mobileNav.classList.remove('visible');
        }
    })
}

