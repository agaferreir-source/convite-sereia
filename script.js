// ============================================
// LINKS DOS BOTÕES
// ============================================

// Coloque os links aqui quando estiverem prontos.

const MAPS_URL = "";

const PRESENTES_URL = "";

const RSVP_URL = "";


// ============================================
// TELAS
// ============================================

const telas = [
  document.getElementById("tela1"),
  document.getElementById("tela2"),
  document.getElementById("tela3"),
  document.getElementById("tela4")
];

let telaAtual = 0;


// ============================================
// TROCAR DE TELA
// ============================================

function mostrarTela(numero) {

  telas.forEach((tela, index) => {

    tela.classList.toggle(
      "ativa",
      index === numero
    );

  });

  telaAtual = numero;

}


// ============================================
// PRIMEIRO → SEGUNDO
// ============================================

document
  .getElementById("abrirConvite")
  .addEventListener("click", () => {

    mostrarTela(1);

  });


// ============================================
// SEGUNDO → TERCEIRO
// ============================================

document
  .getElementById("irTela3")
  .addEventListener("click", () => {

    mostrarTela(2);

  });


// ============================================
// TERCEIRO → QUARTO
// ============================================

document
  .getElementById("irTela4")
  .addEventListener("click", () => {

    mostrarTela(3);

  });


// ============================================
// LOCALIZAÇÃO
// ============================================

document
  .getElementById("botaoLocal")
  .addEventListener("click", () => {

    if (MAPS_URL.trim() !== "") {

      window.open(
        MAPS_URL,
        "_blank"
      );

    } else {

      alert(
        "O link da localização ainda não foi configurado."
      );

    }

  });


// ============================================
// SUGESTÃO DE PRESENTES
// ============================================

document
  .getElementById("botaoPresentes")
  .addEventListener("click", () => {

    if (PRESENTES_URL.trim() !== "") {

      window.open(
        PRESENTES_URL,
        "_blank"
      );

    } else {

      alert(
        "O link da lista de presentes ainda não foi configurado."
      );

    }

  });


// ============================================
// CONFIRMAR PRESENÇA
// ============================================

document
  .getElementById("botaoRsvp")
  .addEventListener("click", () => {

    if (RSVP_URL.trim() !== "") {

      window.open(
        RSVP_URL,
        "_blank"
      );

    } else {

      alert(
        "O link de confirmação ainda não foi configurado."
      );

    }

  });
