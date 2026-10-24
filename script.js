const elementos = document.querySelectorAll(".card");

function mostrarCardsVisiveis() {
    elementos.forEach((el) => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
}

const btnTopo = document.getElementById("btnTopo");

function atualizarRolagem() {
    mostrarCardsVisiveis();
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
}

window.addEventListener("scroll", atualizarRolagem, { passive: true });
window.addEventListener("resize", atualizarRolagem);

// Também revela os cartões que já estão visíveis quando a página abre.
atualizarRolagem();

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
