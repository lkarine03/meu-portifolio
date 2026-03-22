const elementos = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
