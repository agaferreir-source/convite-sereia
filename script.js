document.addEventListener("DOMContentLoaded", () => {

    /*
    ==========================================
    CONFIGURAÇÕES
    ==========================================
    */

    const MAPS_URL =
        "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";


    /*
    ==========================================
    TELAS
    ==========================================
    */

    const telas = [
        document.getElementById("tela1"),
        document.getElementById("tela2"),
        document.getElementById("tela3"),
        document.getElementById("tela4")
    ];


    let telaAtual = 0;


    /*
    ==========================================
    TROCAR TELA
    ==========================================
    */

    function mostrarTela(numero) {

        if (numero < 0 || numero >= telas.length) {
            return;
        }

        telas.forEach((tela, index) => {

            if (!tela) return;

            tela.classList.toggle(
                "ativa",
                index === numero
            );

        });

        telaAtual = numero;

    }


    /*
    ==========================================
    PRIMEIRA TELA
    ==========================================
    */

    const abrirConvite =
        document.getElementById("abrirConvite");


    if (abrirConvite) {

        abrirConvite.addEventListener("click", (event) => {

            event.preventDefault();

            mostrarTela(1);

        });

    }


    /*
    ==========================================
    SEGUNDA → TERCEIRA
    ==========================================
    */

    const irTela3 =
        document.getElementById("irTela3");


    if (irTela3) {

        irTela3.addEventListener("click", (event) => {

            event.preventDefault();

            mostrarTela(2);

        });

    }


    /*
    ==========================================
    TERCEIRA → QUARTA
    ==========================================
    */

    const irTela4 =
        document.getElementById("irTela4");


    if (irTela4) {

        irTela4.addEventListener("click", (event) => {

            event.preventDefault();

            mostrarTela(3);

        });

    }


    /*
    ==========================================
    SUGESTÃO DE PRESENTES
    ==========================================
    */

    const btnPresentes =
        document.getElementById("btnPresentes");

    const modalPresentes =
        document.getElementById("modalPresentes");

    const fecharPresentes =
        document.getElementById("fecharPresentes");


    if (btnPresentes && modalPresentes) {

        btnPresentes.addEventListener("click", (event) => {

            event.preventDefault();

            modalPresentes.classList.add("aberto");

        });

    }


    /*
    ==========================================
    FECHAR PRESENTES
    ==========================================
    */

    if (fecharPresentes && modalPresentes) {

        fecharPresentes.addEventListener("click", () => {

            modalPresentes.classList.remove("aberto");

        });

    }


    /*
    ==========================================
    CLICAR FORA DA IMAGEM
    ==========================================
    */

    if (modalPresentes) {

        modalPresentes.addEventListener("click", (event) => {

            if (
                event.target.classList.contains("modal-fundo")
            ) {

                modalPresentes.classList.remove("aberto");

            }

        });

    }


    /*
    ==========================================
    LOCALIZAÇÃO
    ==========================================
    */

    const btnLocal =
        document.getElementById("btnLocal");


    if (btnLocal) {

        btnLocal.addEventListener("click", (event) => {

            event.preventDefault();

            window.open(
                MAPS_URL,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }


    /*
    ==========================================
    CONFIRMAR PRESENÇA
    ==========================================
    */

    const btnConfirmar =
        document.getElementById("btnConfirmar");

    const aviso =
        document.getElementById("aviso");

    const fecharAviso =
        document.getElementById("fecharAviso");


    if (btnConfirmar && aviso) {

        btnConfirmar.addEventListener("click", (event) => {

            event.preventDefault();

            aviso.classList.add("aberto");

        });

    }


    /*
    ==========================================
    FECHAR AVISO
    ==========================================
    */

    if (fecharAviso && aviso) {

        fecharAviso.addEventListener("click", () => {

            aviso.classList.remove("aberto");

        });

    }


    /*
    ==========================================
    ESC PARA FECHAR MODAIS
    ==========================================
    */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (modalPresentes) {
                modalPresentes.classList.remove("aberto");
            }

            if (aviso) {
                aviso.classList.remove("aberto");
            }

        }

    });


    /*
    ==========================================
    GARANTIR QUE COMEÇA NA PRIMEIRA TELA
    ==========================================
    */

    mostrarTela(0);

});
