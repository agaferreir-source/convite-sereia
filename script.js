const telas = [
    document.getElementById("tela1"),
    document.getElementById("tela2"),
    document.getElementById("tela3"),
    document.getElementById("tela4"),
    document.getElementById("tela5")
];

const transicao = document.getElementById("transicao");

let telaAtual = 0;


/* ==========================================
   TROCAR DE TELA
========================================== */

function mudarTela(numero) {

    if (numero < 0 || numero >= telas.length) {
        return;
    }

    if (numero === telaAtual) {
        return;
    }

    /*
       Começa a transição
    */

    transicao.classList.add("entrando");


    setTimeout(() => {

        telas[telaAtual].classList.remove("ativa");

        telas[numero].classList.add("ativa");

        telaAtual = numero;


        /*
           Espera a nova imagem aparecer
        */

        setTimeout(() => {

            transicao.classList.remove("entrando");

        }, 250);


    }, 400);
}


/* ==========================================
   ABRIR O CONVITE
========================================== */

document
    .getElementById("abrirConvite")
    .addEventListener("click", () => {

        mudarTela(1);

    });


/* ==========================================
   PASSAGEM DA SEGUNDA PARA A TERCEIRA
========================================== */

document
    .getElementById("tela2")
    .addEventListener("click", () => {

        mudarTela(2);

    });


/* ==========================================
   PASSAGEM DA TERCEIRA PARA A QUARTA
========================================== */

document
    .getElementById("tela3")
    .addEventListener("click", () => {

        mudarTela(3);

    });


/* ==========================================
   SUGESTÃO DE PRESENTES
========================================== */

document
    .getElementById("botaoPresentes")
    .addEventListener("click", (event) => {

        event.stopPropagation();

        mudarTela(4);

    });


/* ==========================================
   LOCALIZAÇÃO
========================================== */

document
    .getElementById("botaoLocal")
    .addEventListener("click", (event) => {

        event.stopPropagation();

        const mapa =
            "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";

        window.open(mapa, "_blank");

    });


/* ==========================================
   CONFIRMAR PRESENÇA
========================================== */

document
    .getElementById("botaoConfirmar")
    .addEventListener("click", (event) => {

        event.stopPropagation();

        /*
           COLOQUE O LINK DO WHATSAPP AQUI
           quando você me passar o número.

           Exemplo:

           const telefone = "5521999999999";

           window.open(
               "https://wa.me/" + telefone,
               "_blank"
           );
        */

        alert("O link para confirmar presença será configurado em breve. 💗");

    });


/* ==========================================
   VOLTAR DA QUINTA
========================================== */

document
    .getElementById("voltarPresentes")
    .addEventListener("click", (event) => {

        event.stopPropagation();

        mudarTela(3);

    });


/* ==========================================
   PRÉ-CARREGAR AS IMAGENS
========================================== */

const imagens = [
    "Primeiro.png",
    "Segundo.png",
    "Terceiro.png",
    "Quarto.png",
    "Quinta.jpg"
];

imagens.forEach((arquivo) => {

    const imagem = new Image();

    imagem.src = arquivo;

});
