const botaoAbrir = document.getElementById("abrirConvite");
const abertura = document.getElementById("abertura");
const cenaMar = document.getElementById("cenaMar");

let conviteAberto = false;


botaoAbrir.addEventListener("click", () => {

    // Impede vários cliques
    if (conviteAberto) {
        return;
    }

    conviteAberto = true;

    botaoAbrir.disabled = true;


    /* =====================================================
       1. FUNDO DO MAR COMEÇA A APARECER
    ===================================================== */

    cenaMar.classList.add("ativa");


    /* =====================================================
       2. PRIMEIRA IMAGEM DESAPARECE
       
       Sem aquele zoom exagerado.
       A ideia é parecer que estamos
       entrando suavemente no mar.
    ===================================================== */

    setTimeout(() => {

        abertura.style.opacity = "0";

        abertura.style.transform = "scale(1.025)";

    }, 100);


    /* =====================================================
       3. RETIRA A PRIMEIRA TELA
    ===================================================== */

    setTimeout(() => {

        abertura.style.display = "none";

    }, 1500);

});
