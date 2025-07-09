// script.js
let cliques = 0;
let humor = "neutro";
let ultimaInteracao = Date.now();

const frasesVenda = [
  "Já pensou em vender pelo WhatsApp 24h por dia?",
  "Eu crio bots que respondem e vendem por você!",
  "Automatize seu atendimento agora mesmo!",
  "Chega de perder tempo com mensagens repetidas.",
  "Fale comigo e veja seu negócio crescer! 📈",
  "Seus clientes merecem um atendimento profissional! 💬"
];

const conquistas = {
  3: "🎯 Você interagiu 3 vezes!",
  7: "🔥 Você está gostando de mim, né? 7 cliques!",
  10: "🏆 Uau! 10 interações desbloqueadas!"
};

function botTalk() {
  cliques++;
  const speech = document.getElementById("speech");
  const tempoParado = Date.now() - ultimaInteracao;
  ultimaInteracao = Date.now();

  if (conquistas[cliques]) {
    falar(conquistas[cliques]);
    speech.innerText = conquistas[cliques];
    return;
  }

  if (tempoParado > 15000) {
    humor = "triste";
    mudarHumor("Poxa... você me deixou aqui sozinho 😢");
    return;
  } else if (cliques % 6 === 0) {
    humor = "empolgado";
    falar("Bora automatizar tudo com bots no WhatsApp! 🚀");
    speech.innerText = "Bora automatizar tudo com bots no WhatsApp! 🚀";
    return;
  }

  humor = "feliz";
  const frase = frasesVenda[Math.floor(Math.random() * frasesVenda.length)];
  speech.innerText = frase;
  falar(frase);
}

function falar(texto) {
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = 'pt-BR';
  fala.pitch = 1.1;
  fala.rate = 1;
  window.speechSynthesis.speak(fala);
}

function mudarHumor(msg) {
  const face = document.querySelector(".face");
  if (humor === "triste") {
    face.style.boxShadow = "inset 0 0 10px #5555aa";
  } else {
    face.style.boxShadow = "inset 0 0 10px rgb(0, 185, 99)";
  }
  const speech = document.getElementById("speech");
  speech.innerText = msg;
  falar(msg);
}
