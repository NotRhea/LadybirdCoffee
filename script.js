window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero");
    let offset = window.pageYOffset;
    hero.style.backgroundSize = 100 + offset * 0.1 + "%";
});