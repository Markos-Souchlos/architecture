const topBtn = document.querySelector('#top');
const navbar = document.querySelector('#main-nav');
const mobileNav = document.querySelector('#mobile-nav');
const logo = document.querySelector('#logo-img');

export function underline(num) {
    document.querySelector(`#main-nav li:nth-child(${num}) a`).style.borderBottom = '3px solid #eaa33a'
}

export function increaseNav() {

    window.addEventListener('scroll', () => {
        //navbar
        if (window.scrollY > 130) {
            navbar.style.height = '50px';
            logo.style.height = '50px';
        } else {
            navbar.style.height = '80px'; 
            logo.style.height = '80px';
        }
        
        //topBtn
        if (window.scrollY > 300) {
            topBtn.style.display = 'block';            
            topBtn.style.opacity = '1';            
        } else {
            topBtn.style.display = 'none';            
            topBtn.style.opacity = '0';            
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
        if (windowWidth>650) {
            mobileNav.classList.remove('visible');
        }
    })
}

export function goToTop() {
    document.querySelector('#top').addEventListener('click', () => {
        window.scrollTo({top:0, behavior:'smooth'})
    })
}

export function getYear() {
    const year = new Date().getFullYear();
    document.querySelector('#year').textContent = year;
}

export function changeLanguage(lang, page) {
    document.querySelectorAll('.change-lang').forEach(element => {
        element.addEventListener('click', () => {
            console.log('index.js works');
            window.location.href = `/${lang}/${page}.html`;
        })
    });
}
