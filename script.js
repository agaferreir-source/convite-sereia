/* ==========================================================
   CONVITE ANTONELLA
========================================================== */


/* ==========================================================
   LINKS
========================================================== */

const MAPS_URL =
    "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";

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



/* ==========================================================
   LIMPAR TRANSIÇÃO
========================================================== */

function limparTransicao() {

    transicao.className = "";

}



/* ==========================================================
   ESCOLHER TRANSIÇÃO
========================================================== */

function escolherTransicao(
    anterior,
    destino
) {

    limparTransicao();


    /*
       PRIMEIRO → SEGUNDO

       Abertura do mar
    */

    if (
        anterior === 0 &&
        destino === 1
    ) {

        transicao.classList.add(
            "tipo1"
        );

    }


    /*
       SEGUNDO → TERCEIRO

       Luz perolada
    */

    else if (
        anterior === 1 &&
        destino === 2
    ) {

        transicao.classList.add(
            "tipo2"
        );

    }


    /*
       TERCEIRO → QUARTO

       Bolhas
    */

    else if (
        anterior === 2 &&
        destino === 3
    ) {

        transicao.classList.add(
            "tipo3"
        );

    }


    /*
       QUARTO → QUINTA

       Mergulho
    */

    else if (
        anterior === 3 &&
        destino === 4
    ) {

        transicao.classList.add(
            "tipo4"
        );

    }


    /*
       QUINTA → QUARTO

       Retorno
    */

    else if (
        anterior === 4 &&
        destino === 3
    ) {

        transicao.classList.add(
            "tipo5"
        );

    }


    /*
       Garante reinício
       da animação CSS.
    */

    void transicao.offsetWidth;

}



/* ==========================================================
   MUDAR DE TELA
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
        novaTela === telaAtual
    ) {
        return;
    }


    trocando = true;


    const anterior =
        telaAtual;


    /*
       Escolhe uma animação
       diferente dependendo
       da passagem.
    */

    escolherTransicao(
        anterior,
        novaTela
    );


    /*
       Troca a tela.
    */

    setTimeout(
        function() {

            telas[anterior]
                .classList
                .remove("ativa");


            telas[novaTela]
                .classList
                .add("ativa");


            telaAtual =
                novaTela;

        },
        400
    );


    /*
       Remove completamente
       a camada da transição.
    */

    setTimeout(
        function() {

            limparTransicao();

            trocando = false;

        },
        1250
    );

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
            event.stopPropagation();

            mudarTela(1);

        }
    );

}



/* ==========================================================
   SEGUNDO → TERCEIRO
========================================================== */

const tela2 =
    document.getElementById(
        "tela2"
    );


if (tela2) {

    tela2.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            mudarTela(2);

        }
    );

}



/* ==========================================================
   TERCEIRO → QUARTO
========================================================== */

const tela3 =
    document.getElementById(
        "tela3"
    );


if (tela3) {

    tela3.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            mudarTela(3);

        }
    );

}



/* ==========================================================
   QUARTO → QUINTA
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

            console.log(
                "Abrindo Quinta.jpg"
            );

            mudarTela(4);

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


            if (MAPS_URL) {

                window.open(
                    MAPS_URL,
                    "_blank"
                );

            }

        }
    );

}



/* ==========================================================
   CONFIRMAÇÃO
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


            if (RSVP_URL) {

                window.open(
                    RSVP_URL,
                    "_blank"
                );

                return;

            }


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


if (fecharAviso) {

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
   QUINTA → QUARTA
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
   PRÉ-CARREGAMENTO
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

        imagem.src =
            caminho;

    }
);



/* ==========================================================
   PRIMEIRA TELA
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
