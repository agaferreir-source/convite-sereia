const botaoAbrir = document.getElementById("abrirConvite");
const abertura = document.getElementById("abertura");
const transicaoMar = document.getElementById("transicaoMar");
const mensagem = document.getElementById("mensagem");

botaoAbrir.addEventListener("click", () => {

    // Impede que o convite seja aberto duas vezes
    botaoAbrir.disabled = true;


    /* =====================================================
       1. A PRIMEIRA IMAGEM COMEÇA A MERGULHAR
    ===================================================== */

    abertura.style.transition =
        "opacity 1s ease, transform 1.5s cubic-bezier(.2,.7,.2,1)";

    abertura.style.opacity = "0";

    abertura.style.transform = "scale(1.08)";


    /* =====================================================
       2. O FUNDO DO MAR COMEÇA A APARECER
    ===================================================== */

    setTimeout(() => {

        transicaoMar.classList.add("ativa");

    }, 300);


    /* =====================================================
       3. RETIRA A PRIMEIRA IMAGEM
    ===================================================== */

    setTimeout(() => {

        abertura.style.display = "none";

    }, 1500);


    /* =====================================================
       4. O FUNDO DO MAR FICA NA TELA
       
       Nesse momento:
       🫧 bolhas sobem
       ✨ luz se movimenta
       🌊 o cenário tem movimento
    ===================================================== */

    setTimeout(() => {

        // Mantém o cenário do mar visível
        transicaoMar.style.opacity = "1";

    }, 1500);


    /* =====================================================
       5. PREPARA A SAÍDA DA TRANSIÇÃO
    ===================================================== */

    setTimeout(() => {

        transicaoMar.style.transition =
            "opacity 1.2s ease";

        transicaoMar.style.opacity = "0";

    }, 5200);


    /* =====================================================
       6. MOSTRA A PRÓXIMA TELA
    ===================================================== */

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

    }, 6400);

});
