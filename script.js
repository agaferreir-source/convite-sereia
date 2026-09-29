/* ==========================================================
   CONVITE ANTONELLA
========================================================== */


/* ==========================================================
   LINKS
========================================================== */

const MAPS_URL =
    "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";


/*
   Quando tivermos o WhatsApp,
   colocaremos o link aqui.

   Por enquanto fica vazio.
*/

const RSVP_URL = "";



/* ==========================================================
   TELAS
========================================================== */

const telas = [
    document.getElementById("tela1"),
    document.getElementById("tela2"),
    document.getElementById("tela3"),
    document.getElementById("tela4"),
    document.getElementById("tela5")
];


let telaAtual = 0;

let trocando = false;



/* ==========================================================
   TRANSIÇÃO
========================================================== */

const transicao =
    document.getElementById("transicao");



function iniciarTransicao() {

    if (!transicao) {
        return;
    }

    /*
       Remove a classe primeiro
       para permitir que a animação
       seja executada novamente.
    */

    transicao.classList.remove("ativa");

    void transicao.offsetWidth;

    transicao.classList.add("ativa");

}



/* ==========================================================
   FINALIZAR TRANSIÇÃO
========================================================== */

function finalizarTransicao() {

    if (!transicao) {
        return;
    }

    transicao.classList.remove("ativa");

}



/* ==========================================================
   TROCAR DE TELA
========================================================== */

function mudarTela(novaTela) {

    if (trocando) {
        return;
    }


    if (
        novaTela < 0 ||
        novaTela >= telas.length
    ) {
        return;
    }


    if (
        !telas[novaTela] ||
        !telas[telaAtual]
    ) {
        return;
    }


    if (novaTela === telaAtual) {
        return;
    }


    trocando = true;


    /*
       Começa a animação
       de água.
    */

    iniciarTransicao();


    /*
       Espera a luz passar
       antes de trocar a imagem.
    */

    setTimeout(() => {

        telas[telaAtual]
            .classList
            .remove("ativa");


        telas[novaTela]
            .classList
            .add("ativa");


        telaAtual = novaTela;


    }, 380);


    /*
       Retira a camada
       de transição.
    */

    setTimeout(() => {

        finalizarTransicao();

        trocando = false;

    }, 1100);

}



/* ==========================================================
   PRIMEIRO → SEGUNDO
========================================================== */

const abrirConvite =
    document.getElementById(
        "abrirConvite"
    );


if (abrirConvite) {

    abrirConvite.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            mudarTela(1);

        }
    );

}



/* ==========================================================
   SEGUNDO → TERCEIRO
========================================================== */

const tela2 =
    document.getElementById("tela2");


if (tela2) {

    tela2.addEventListener(
        "click",
        function() {

            mudarTela(2);

        }
    );

}



/* ==========================================================
   TERCEIRO → QUARTO
========================================================== */

const tela3 =
    document.getElementById("tela3");


if (tela3) {

    tela3.addEventListener(
        "click",
        function() {

            mudarTela(3);

        }
    );

}



/* ==========================================================
   PRESENTES → QUINTA
========================================================== */

const botaoPresentes =
    document.getElementById(
        "botaoPresentes"
    );


if (botaoPresentes) {

    botaoPresentes.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            mudarTela(4);

        }
    );

}



/* ==========================================================
   VOLTAR DA QUINTA → QUARTA
========================================================== */

const voltarPresentes =
    document.getElementById(
        "voltarPresentes"
    );


if (voltarPresentes) {

    voltarPresentes.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            mudarTela(3);

        }
    );

}



/* ==========================================================
   LOCALIZAÇÃO
========================================================== */

const botaoLocal =
    document.getElementById(
        "botaoLocal"
    );


if (botaoLocal) {

    botaoLocal.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            if (!MAPS_URL) {
                return;
            }


            window.open(
                MAPS_URL,
                "_blank"
            );

        }
    );

}



/* ==========================================================
   CONFIRMAR PRESENÇA
========================================================== */

const botaoConfirmar =
    document.getElementById(
        "botaoConfirmar"
    );


const avisoConfirmacao =
    document.getElementById(
        "avisoConfirmacao"
    );


if (botaoConfirmar) {

    botaoConfirmar.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            /*
               Quando tivermos o link,
               ele será aberto aqui.
            */

            if (RSVP_URL) {

                window.open(
                    RSVP_URL,
                    "_blank"
                );

                return;
            }


            /*
               Enquanto não temos o link.
            */

            if (avisoConfirmacao) {

                avisoConfirmacao
                    .classList
                    .add("aberto");

            }

        }
    );

}



/* ==========================================================
   FECHAR AVISO
========================================================== */

const fecharAviso =
    document.getElementById(
        "fecharAviso"
    );


if (fecharAviso && avisoConfirmacao) {

    fecharAviso.addEventListener(
        "click",
        function() {

            avisoConfirmacao
                .classList
                .remove("aberto");

        }
    );

}



/* ==========================================================
   FECHAR AVISO CLICANDO FORA
========================================================== */

if (avisoConfirmacao) {

    avisoConfirmacao.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                avisoConfirmacao
            ) {

                avisoConfirmacao
                    .classList
                    .remove("aberto");

            }

        }
    );

}



/* ==========================================================
   PRÉ-CARREGAR TODAS AS IMAGENS
========================================================== */

const imagens = [

    "Primeiro.png",
    "Segundo.png",
    "Terceiro.png",
    "Quarto.png",
    "Quinta.jpg"

];


imagens.forEach(
    function(caminho) {

        const imagem =
            new Image();

        imagem.src = caminho;

    }
);



/* ==========================================================
   GARANTIR PRIMEIRA TELA
========================================================== */

telas.forEach(
    function(tela, indice) {

        if (!tela) {
            return;
        }

        if (indice === 0) {

            tela.classList.add(
                "ativa"
            );

        } else {

            tela.classList.remove(
                "ativa"
            );

        }

    }
);
