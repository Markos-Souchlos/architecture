const topBtn = document.querySelector('#top');
const navbar = document.querySelector('#main-nav');
const mobileNav = document.querySelector('#mobile-nav');
const logo = document.querySelector('#logo-img');


export function navigationEn() {
    // console.log(document.querySelector('#main-nav.en'));

    document.querySelector('#main-nav.en').innerHTML = `
    <ul>
        <li id="li-logo"><a href="/en/home.html" id="logo"><img src="../public/assets/icons/88d728b9-073a-4b3e-bbb2-1975ab491d05.jpeg" alt="logo" id="logo-img" ></a></li>

        <li><a href="/en/home.html">HOME</a></li>
        <li><a href="/en/about.html">ABOUT</a></li>
        <li><a href="/en/projects.html">PROJECTS</a></li>
        <li><a href="/en/gallery.html">GALLERY</a></li>
        <li><a href="/en/contact.html">CONTACT</a></li>
        <li><button class="change-lang"><img src="https://img.icons8.com/fluency/48/usa-circular.png" alt="USA flag" /></button></li>
        <li id="sandwitch"><button><img width="96" height="96" src="https://img.icons8.com/plumpy/96/menu--v5.png" alt="menu--v5"/></button></li>
    </ul>
    `;
}

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
            // console.log('index.js works');
            window.location.href = `/${lang}/${page}.html`;
        })
    });
}
