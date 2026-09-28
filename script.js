const botaoAbrir = document.getElementById("abrirConvite");
const abertura = document.getElementById("abertura");
const transicaoMar = document.getElementById("transicaoMar");
const mensagem = document.getElementById("mensagem");

botaoAbrir.addEventListener("click", () => {

    // Evita clicar duas vezes
    botaoAbrir.disabled = true;


    // =========================================
    // 1. A ABERTURA COMEÇA A MERGULHAR
    // =========================================

    abertura.style.transition =
        "opacity 1s ease, transform 1.5s cubic-bezier(.2,.7,.2,1)";

    abertura.style.opacity = "0";

    abertura.style.transform = "scale(1.08)";


    // =========================================
    // 2. FUNDO DO MAR ENTRA
    // =========================================

    setTimeout(() => {

        transicaoMar.classList.add("ativa");

    }, 300);


    // =========================================
    // 3. RETIRA A PRIMEIRA IMAGEM
    // =========================================

    setTimeout(() => {

        abertura.style.display = "none";

    }, 1500);


    // =========================================
    // 4. DEIXA O MAR APARECER POR UM MOMENTO
    // =========================================

    setTimeout(() => {

        transicaoMar.style.transition =
            "opacity 1.2s ease";

        transicaoMar.style.opacity = "0";

    }, 5000);


    // =========================================
    // 5. ENTRA A PRÓXIMA CENA
    // =========================================

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

    }, 6200);

});
