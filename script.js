/* ==========================================================
   CONVITE ANTONELLA
========================================================== */


/* ==========================================================
   LINKS
========================================================== */

const MAPS_URL =
    "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";


/*
   Link da confirmação.
   Será colocado depois.
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


function limparTiposTransicao() {

    if (!transicao) {
        return;
    }

    transicao.classList.remove(
        "tipo1",
        "tipo2",
        "tipo3",
        "tipo4",
        "tipo5",
        "ativa"
    );

}


/* ==========================================================
   ESCOLHER A TRANSIÇÃO
========================================================== */

function escolherTransicao(
    telaAnterior,
    novaTela
) {

    limparTiposTransicao();


    /*
       1 → 2
       Abertura do mar
    */

    if (
        telaAnterior === 0 &&
        novaTela === 1
    ) {

        transicao.classList.add("tipo1");

    }


    /*
       2 → 3
       Luz perolada
    */

    else if (
        telaAnterior === 1 &&
        novaTela === 2
    ) {

        transicao.classList.add("tipo2");

    }


    /*
       3 → 4
       Bolhas
    */

    else if (
        telaAnterior === 2 &&
        novaTela === 3
    ) {

        transicao.classList.add("tipo3");

    }


    /*
       4 → 5
       Mergulho
    */

    else if (
        telaAnterior === 3 &&
        novaTela === 4
    ) {

        transicao.classList.add("tipo4");

    }


    /*
       5 → 4
       Retorno
    */

    else if (
        telaAnterior === 4 &&
        novaTela === 3
    ) {

        transicao.classList.add("tipo5");

    }


    /*
       Qualquer outra mudança
       recebe a transição mais suave.
    */

    else {

        transicao.classList.add("tipo2");

    }


    /*
       Força o navegador a reiniciar
       a animação.
    */

    void transicao.offsetWidth;

    transicao.classList.add("ativa");

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


    if (
        !telas[telaAtual] ||
        !telas[novaTela]
    ) {
        return;
    }


    trocando = true;


    const telaAnterior =
        telaAtual;


    /*
       Escolhe a transição
       específica.
    */

    escolherTransicao(
        telaAnterior,
        novaTela
    );


    /*
       Troca a imagem no meio
       do efeito.
    */

    setTimeout(
        function() {

            telas[telaAnterior]
                .classList
                .remove("ativa");


            telas[novaTela]
                .classList
                .add("ativa");


            telaAtual =
                novaTela;

        },
        430
    );


    /*
       Finaliza a animação.
    */

    setTimeout(
        function() {

            limparTiposTransicao();

            trocando = false;

        },
        1200
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
   SUGESTÃO DE PRESENTES
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
                "Sugestão de presentes"
            );


            /*
               Abre a Quinta.jpg
               através da quinta tela.
            */

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


            /*
               Quando o link existir,
               será aberto automaticamente.
            */

            if (RSVP_URL) {

                window.open(
                    RSVP_URL,
                    "_blank"
                );

                return;

            }


            /*
               Enquanto não existe link,
               mostra o aviso.
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
   CLICAR FORA DO AVISO
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
   PRÉ-CARREGAR IMAGENS
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
