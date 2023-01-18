let calcScrollValue = () => {
    let scrollProgress = document.getElementById
    ("progress");
    
    let progressValue = document.getElementById
    ("progress-value");
    let pos = document.documentElement.scrollTop;
    console.log(pos);
    let calcHeight =
     document.documentElement.scrollHeight -
     document.documentElement.clientHeight;
    let scrollValue = Math.round((pos*100) / calcHeight);
    if (pos>100){
        scrollProgress.style.display = "grid";
    }

    else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(Link => {
    Link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})