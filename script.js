const botaoAbrir = document.getElementById("abrirConvite");
const abertura = document.getElementById("abertura");
const transicaoMar = document.getElementById("transicaoMar");
const mensagem = document.getElementById("mensagem");

botaoAbrir.addEventListener("click", () => {

    /* =========================================
       1. IMAGEM COMEÇA A SAIR
    ========================================= */

    abertura.style.transition =
        "opacity 0.9s ease, transform 1.2s ease";

    abertura.style.opacity = "0";
    abertura.style.transform = "scale(1.08)";


    /* =========================================
       2. FUNDO DO MAR APARECE
    ========================================= */

    setTimeout(() => {

        transicaoMar.classList.add("ativa");

    }, 350);


    /* =========================================
       3. ESCONDE A PRIMEIRA TELA
    ========================================= */

    setTimeout(() => {

        abertura.style.display = "none";

    }, 1200);


    /* =========================================
       4. DEPOIS DA TRANSIÇÃO,
          MOSTRA A PRÓXIMA TELA
    ========================================= */

    setTimeout(() => {

        transicaoMar.style.opacity = "0";

        transicaoMar.style.transition =
            "opacity 1s ease";

    }, 3500);


    setTimeout(() => {

        transicaoMar.style.visibility = "hidden";

        mensagem.classList.add("ativa");

        mensagem.style.display = "flex";

        mensagem.style.opacity = "0";

        requestAnimationFrame(() => {

            mensagem.style.transition =
                "opacity 1.2s ease";

            mensagem.style.opacity = "1";

        });

    }, 4300);

});
