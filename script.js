const botaoAbrir = document.getElementById("abrirConvite");
const abertura = document.getElementById("abertura");
const cenaMar = document.getElementById("cenaMar");

let aberto = false;

botaoAbrir.addEventListener("click", () => {

    if (aberto) {
        return;
    }

    aberto = true;

    botaoAbrir.disabled = true;


    /*
     * Primeiro o fundo do mar aparece
     * por trás da imagem de abertura.
     */

    cenaMar.classList.add("ativa");


    /*
     * Depois a primeira imagem
     * desaparece suavemente.
     */

    setTimeout(() => {

        abertura.style.opacity = "0";

        abertura.style.transform = "scale(1.025)";

    }, 100);


    /*
     * Depois de desaparecer,
     * retiramos a primeira tela.
     */

    setTimeout(() => {

        abertura.style.display = "none";

    }, 1400);

});
