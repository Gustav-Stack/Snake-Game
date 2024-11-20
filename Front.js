const submeta = document.getElementById("submeta-se");
let tampaTudo = document.getElementById("tampaTudo");
const plataformaCobrinha = document.getElementById("plataforma").getContext("2d");
const plataforma = document.getElementById("plataforma");
let anima;
let tecla;
let teclaPressionada;
let intervalo;
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
  if (tecla === "none") {
    plataformaCobrinha.clearRect(0,0,plataforma.width,plataforma.height);


    //inicia criação da cobrinha 
    plataformaCobrinha.beginPath();
    //console.log(plataformaCobrinha);
    plataformaCobrinha.fillStyle = "green";
    plataformaCobrinha.fillRect(player.position[0].x, player.position[0].y, 24, 24);
    plataformaCobrinha.closePath();

    //create body
    for (let i = 0; i < player.tamanho; i++) {
      plataformaCobrinha.beginPath();
      plataformaCobrinha.fillStyle = "red";
      // if (i === 0) {
      //   plataformaCobrinha.arc((player.position[0].x+12), player.position[0].y+12, 12, 0, (Math.PI/180)*360, true);
      //   plataformaCobrinha.fill();
      //   player.position.push({
      //     x: player.position[0].x,
      //     y: player.position[0].y+12
      //   });
      // }
      // else{
        plataformaCobrinha.arc((player.position[0].x-12)-(i*6), player.position[0].y+12, 12, 0, (Math.PI/180)*360, true);
        plataformaCobrinha.fill();
        player.position.push({
          x: (player.position[0].x-12)-(i*6),
          y: player.position[0].y+12
        });
      // }
      console.log(player.position);
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
  let velocidade = 6;
  // constante que verifica a tecla clicada.
  const teclaCheck = {
    up() {
      //Salva a position antiga antes de renovar ela.
      playerPosition = {x:player.position[0].x,y:player.position[0].y-velocidade};
      //Move para cima a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      player.position[0].x += 12;
      player.position[0].y += 30;
      keypress();
    },
    down() {
      //Move para baixo a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      playerPosition = {x:player.position[0].x,y:player.position[0].y+velocidade};
      player.position[0].x += 12;
      player.position[0].y -= 6;
      keypress();
    },
    left() {
      //Move para esquerda a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      playerPosition = {x:player.position[0].x-velocidade,y:player.position[0].y};
      player.position[0].x += 30;
      player.position[0].y += 12;
      keypress();
    },
    right() {
      //Move para direita a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      playerPosition = {x:player.position[0].x+velocidade,y:player.position[0].y};
      player.position[0].x -= 6;
      player.position[0].y += 12;
      keypress();
    }
  }
  //
  function keypress(){
    plataformaCobrinha.clearRect(0,0,plataforma.width, plataforma.height);
    //
    console.log(player);
    for (let i = 0; i < player.tamanho-1; i++) {
      // if (i === 0) {
      //   plataformaCobrinha.arc((player.position[0].x+12), player.position[0].y+12, 12, 0, (Math.PI/180)*360, true);
      //   plataformaCobrinha.fill();
      //   player.position.push({
      //     x: player.position[0].x,
      //     y: player.position[0].y+12
      //   });
      // }
      // else{
      //   plataformaCobrinha.arc((player.position[0].x-12)-((i-1)*6), player.position[0].y+12, 12, 0, (Math.PI/180)*360, true);
      //   plataformaCobrinha.fill();
      //   player.position.push({
      //     x: (player.position[0].x-12)-(i*6),
      //     y: player.position[0].y+12
      //   });
      // }
      //
      console.log(player);
      let menos = player.tamanho - i - 1;
      plataformaCobrinha.beginPath();
      plataformaCobrinha.fillStyle = "blue";
      console.log(playerPosition, menos);
      plataformaCobrinha.arc(player.position[menos-1].x , player.position[menos-1].y, 12, 0, (Math.PI/180)*360, true);
      console.log(player.position[menos-1].x, player.position[menos-1].y);
      plataformaCobrinha.fill();
      console.log(player);
      player.position[menos].x = player.position[menos-1].x;
      player.position[menos].y = player.position[menos-1].y;
    }
    player.position[0].x = playerPosition.x;
    player.position[0].y = playerPosition.y;
    plataformaCobrinha.beginPath();
    plataformaCobrinha.fillStyle = "green";
    plataformaCobrinha.fillRect(playerPosition.x, playerPosition.y, 24, 24);
    plataformaCobrinha.closePath();
  }
  //verificando se o intervalo tem algo para a função reiniciar
  if (intervalo) {
    clearInterval(intervalo);
  }
  //Executa uma vez antes de entrar no intervalo.
  if (tecla === "ArrowUp") {
      teclaCheck.up();
  }
  if (tecla === "ArrowDown") {
    teclaCheck.down();
  }
  if (tecla === "ArrowLeft") {
    teclaCheck.left();
  }
  if (tecla === "ArrowRight") {
    teclaCheck.right();
  }
  //setando o intervalo para a função reiniciar.
  intervalo = setInterval(() => {
    //
    if (tecla === "ArrowUp") {
      teclaCheck.up();
    }
    if (tecla === "ArrowDown") {
      teclaCheck.down();
    }
    if (tecla === "ArrowLeft") {
      teclaCheck.left();
    }
    if (tecla === "ArrowRight") {
      teclaCheck.right();
    }
    console.log("to rodando");
  }, 10000);
}


window.addEventListener("keydown", (event) => {
  console.log(event, tecla);
  if (tecla === "none" && !tampaTudo) {
    if ((event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      event.preventDefault();
      tecla = event.key;
      window.scrollTo(player.position[0].x-200, player.position[0].y-200);
      AnimaPlataformaCobrinha();
      return;
    }
  }
  if ((tecla === "ArrowUp" || tecla === "ArrowDown" || tecla === "ArrowLeft" || tecla === "ArrowRight")  && !tampaTudo) {
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
