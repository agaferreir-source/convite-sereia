const botaoAbrir =
    document.getElementById("abrirConvite");

const abertura =
    document.getElementById("abertura");

const cenaMar =
    document.getElementById("cenaMar");

const cenaMenina =
    document.getElementById("cenaMenina");

const informacoes =
    document.getElementById("informacoes");

const presentes =
    document.getElementById("presentes");

const confirmacao =
    document.getElementById("confirmacao");


const continuarParaInformacoes =
    document.getElementById(
        "continuarParaInformacoes"
    );

const continuarParaPresentes =
    document.getElementById(
        "continuarParaPresentes"
    );

const continuarParaConfirmacao =
    document.getElementById(
        "continuarParaConfirmacao"
    );

const voltarInformacoes =
    document.getElementById(
        "voltarInformacoes"
    );

const voltarPresentes =
    document.getElementById(
        "voltarPresentes"
    );

const abrirLocalizacao =
    document.getElementById(
        "abrirLocalizacao"
    );


/* =====================================================
   ESCONDER CENAS
===================================================== */

function esconderCenas() {

    cenaMenina.classList.remove("ativa");

    informacoes.classList.remove("ativa");

    presentes.classList.remove("ativa");

    confirmacao.classList.remove("ativa");
}


/* =====================================================
   ABRIR CONVITE
===================================================== */

botaoAbrir.addEventListener(
    "click",
    () => {

        botaoAbrir.disabled = true;


        cenaMar.classList.add("ativa");


        abertura.style.opacity = "0";

        abertura.style.transform =
            "scale(1.04)";


        /*
         * A transição acontece sozinha.
         * Depois do mergulho, a menina aparece.
         */

        setTimeout(
            () => {

                abertura.style.display =
                    "none";

            },
            1400
        );


        setTimeout(
            () => {

                cenaMenina.classList.add(
                    "ativa"
                );

            },
            1800
        );

    }
);


/* =====================================================
   MENINA → INFORMAÇÕES
===================================================== */

continuarParaInformacoes.addEventListener(
    "click",
    () => {

        cenaMenina.classList.remove(
            "ativa"
        );


        setTimeout(
            () => {

                informacoes.classList.add(
                    "ativa"
                );

            },
            350
        );

    }
);


/* =====================================================
   INFORMAÇÕES → PRESENTES
===================================================== */

continuarParaPresentes.addEventListener(
    "click",
    () => {

        informacoes.classList.remove(
            "ativa"
        );


        setTimeout(
            () => {

                presentes.classList.add(
                    "ativa"
                );

            },
            350
        );

    }
);


/* =====================================================
   PRESENTES → CONFIRMAÇÃO
===================================================== */

continuarParaConfirmacao.addEventListener(
    "click",
    () => {

        presentes.classList.remove(
            "ativa"
        );


        setTimeout(
            () => {

                confirmacao.classList.add(
                    "ativa"
                );

            },
            350
        );

    }
);


/* =====================================================
   VOLTAR → INFORMAÇÕES
===================================================== */

voltarInformacoes.addEventListener(
    "click",
    () => {

        presentes.classList.remove(
            "ativa"
        );


        setTimeout(
            () => {

                informacoes.classList.add(
                    "ativa"
                );

            },
            350
        );

    }
);


/* =====================================================
   VOLTAR → PRESENTES
===================================================== */

voltarPresentes.addEventListener(
    "click",
    () => {

        confirmacao.classList.remove(
            "ativa"
        );


        setTimeout(
            () => {

                presentes.classList.add(
                    "ativa"
                );

            },
            350
        );

    }
);


/* =====================================================
   LOCALIZAÇÃO
===================================================== */

abrirLocalizacao.addEventListener(
    "click",
    () => {

        const endereco =
            "Rua Oliveira Bueno 850";

        const url =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(endereco);

        window.open(
            url,
            "_blank"
        );

    }
);
