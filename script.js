const botaoAbrir = document.getElementById("abrirConvite");
const abertura = document.getElementById("abertura");

botaoAbrir.addEventListener("click", () => {
    abertura.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    abertura.style.opacity = "0";
    abertura.style.transform = "scale(1.08)";

    setTimeout(() => {
        abertura.style.display = "none";
    }, 800);
});
