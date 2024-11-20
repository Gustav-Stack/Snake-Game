const submeta = document.getElementById("submeta-se");
let tampaTudo = document.getElementById("tampaTudo");
const plataformaCobrinha = document.getElementById("plataforma").getContext("2d");
const plataforma = document.getElementById("plataforma");
let anima;
let tecla;
console.log(tecla);
console.log(plataformaCobrinha);
const player = {
  nome: String,
  tamanho: 5,
  position: [],
  rotation: Number
};
const players = [{
  nome: String,
  tamanho: 20,
  position: [],
  rotation: Number
}];
//
submeta.addEventListener("click", (event) => {
  if(!tampaTudo.children[0].children[0].value) {
    alert("Precisa fornecer um nome");
    return;
  }
  player.nome = tampaTudo.children[0].children[0].value;
  tampaTudo.parentNode.removeChild(tampaTudo);
  console.log(player, document.getElementById("plataforma").width);
  player.position.unshift({
    x: getRandom(50, 4850),
    y: getRandom(50, 4850)
  });
  console.log(player.position[0].x, player.position[0].y);
  window.scrollTo(player.position[0].x-200, player.position[0].y-200);
  tecla = "none";
  tampaTudo = false;
  AnimaPlataformaCobrinha();
});
//
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//desenhar no canva a cobrinha
function AnimaPlataformaCobrinha() {
  plataformaCobrinha.clearRect(0,0,5000,5000);
  if (tecla === "none") {


    //inicia criação da cobrinha 
    plataformaCobrinha.beginPath();
    //console.log(plataformaCobrinha);
    plataformaCobrinha.fillStyle = "green";
    plataformaCobrinha.fillRect(player.position[0].x, player.position[0].y, 24, 24);
    plataformaCobrinha.closePath();

    //create body
    for (let i = 0; i < player.tamanho; i++) {
      plataformaCobrinha.beginPath();
      plataformaCobrinha.arc((player.position[0].x-12)-(i*6), player.position[0].y+12, 12, (Math.PI/180)*0, (Math.PI/180)*360, true);
      console.log((player.position[0].x-40)-(i*6));
      plataformaCobrinha.fill();
    }

    //atualização de players em tempo real
    if (players.length > 1) {
      for (p of players) {
        plataformaCobrinha.fillRect(p.position[0].x, p.position[0].y, 24, 24);
        plataformaCobrinha.closePath();
        for (let i = 0; i < p.tamanho; i++) {
          plataformaCobrinha.beginPath();
          plataformaCobrinha.arc((p.position[0].x-12)-(i*6), p.position[0].y+12, 12, (Math.PI/180)*0, (Math.PI/180)*360, true);
          console.log((p.position[0].x-40)-(i*6));
          plataformaCobrinha.fill();
        }
      } 
    }
    return;
  }
  //A variável playerPosition não funcionava corretamente.
  //Então substui ela pelo playerPosition mas mantive o nome playerPosition.
  var playerPosition;
  let velocidade = 10;
  const teclaPressionada = {
    up() {
      //Salva a position antiga antes de renovar ela.
      playerPosition = {x:player.position[0].x,y:player.position[0].y-velocidade};
      //Move para cima a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      keypress();
    },
    down() {
      //Move para baixo a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      playerPosition = {x:player.position[0].x,y:player.position[0].y+velocidade};
      keypress();
    },
    left() {
      //Move para esquerda a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      playerPosition = {x:player.position[0].x-velocidade,y:player.position[0].y};
      keypress();
    },
    right() {
      //Move para direita a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      playerPosition = {x:player.position[0].x-velocidade,y:player.position[0].y};
      keypress();
    }
  }
  //
  function keypress(){
    plataformaCobrinha.beginPath();
    plataformaCobrinha.fillStyle = "green";
    plataformaCobrinha.fillRect(playerPosition.x, playerPosition.y, 24, 24);
    plataformaCobrinha.closePath();
    //
    for (let i = 0; i < player.tamanho; i++) {
      plataformaCobrinha.beginPath();
      plataformaCobrinha.fillStyle = "blue";
      console.log(playerPosition);
      plataformaCobrinha.arc(player.position[i].x , player.position[i].y, 12, 0, (Math.PI/180)*360, true);
      console.log((player.position[0].x-40)-(i*6));
      plataformaCobrinha.fill();
      if (i === 0) {
        player.position[i].x = playerPosition.x;
        player.position[i].y = playerPosition.y;
        return;
      }
      player.position[i].x = player.position[i].x;
      player.position[i].y = player.position[i].y;
    }
  }
  //setando o intervalo para a função reiniciar
  setInterval(() => {
    
    
    if (tecla === "ArrowUp") {
        teclaPressionada.up();
    }
    if (tecla === "ArrowDown") {
      teclaPressionada.down();
    }
    if (tecla === "ArrowLeft") {
      teclaPressionada.left();
    }
    if (tecla === "ArrowRight") {
      teclaPressionada.right();
    }
    console.log("to rodando");
  }, 1000);
}


window.addEventListener("keydown", (event) => {
  console.log(event, tecla);
  if (tecla === "none" && !tampaTudo) {
    event.preventDefault();
    tecla = event.key;
    window.scrollTo(player.position[0].x-200, player.position[0].y-200);
    AnimaPlataformaCobrinha();
    return;
  }
  if (tecla != "none"  && !tampaTudo) {
    event.preventDefault();
    tecla = event.key;
    window.scrollTo(player.position[0].x-200, player.position[0].y-200);
    AnimaPlataformaCobrinha();
    return;
  }
  //console.log(event.clientX, event.clientY);
  //AnimaPlataformaCobrinha(event.clientX, event.clientY);
});
//
window.addEventListener("keyup", (event) => {
  console.log(event, "sla mano", tampaTudo);
  if (tampaTudo) {
    return;
  }
  //tecla = "none";
  // AnimaPlataformaCobrinha();
  //console.log(event.clientX, event.clientY);
  //AnimaPlataformaCobrinha(event.clientX, event.clientY);
});
