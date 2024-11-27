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
  tamanho: 20,
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
    x: getRandom(100, plataforma.width-100),
    y: getRandom(100, plataforma.height-100)
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

    //create body
    for (let i = 0; i < player.tamanho-1; i++) {
      plataformaCobrinha.beginPath();
      plataformaCobrinha.fillStyle = "blue";
        plataformaCobrinha.arc((player.position[0].x)-(i*6), player.position[0].y+12, 12, 0, (Math.PI/180)*360, true);
        plataformaCobrinha.fill();
        player.position.push({
          x: (player.position[0].x+6)-(i*6),
          y: player.position[0].y+12
        });
        //inicia criação da cobrinha 
        plataformaCobrinha.beginPath();
        //console.log(plataformaCobrinha);
        plataformaCobrinha.fillStyle = "green";
        plataformaCobrinha.fillRect(player.position[0].x, player.position[0].y, 24, 24);
        plataformaCobrinha.closePath();
      console.log(player.position);
    }

    //atualização de players em tempo real
    if (players.length > 1) {
      for (p of players) {
        for (let i = 0; i < p.tamanho; i++) {
          if (i === 0) {
            plataformaCobrinha.beginPath();
            plataformaCobrinha.fillStyle = "green";
            plataformaCobrinha.fillRect(p.position.x, p.position[0].y, 24, 24);
          }
          else {
            plataformaCobrinha.beginPath();
            plataformaCobrinha.fillStyle = "red";
            plataformaCobrinha.arc((p.position[i].x, p.position[i].y, 12, 0, (Math.PI/180)*360, true);
            console.log((p.position[0].x-40)-(i*6));
            plataformaCobrinha.fill();
          }
        }
      } 
    }
    return;
  }
  //A variável playerPosition não funcionava corretamente.
  //Então substui ela pelo playerPosition mas mantive o nome playerPosition.
  var playerPosition;
  var playerPosition1;
  let velocidade = 6;
  // constante que verifica a tecla clicada.
  const teclaCheck = {
    up() {
      //Salva a position antiga antes de renovar ela.
      playerPosition = {x:player.position[0].x,y:player.position[0].y-velocidade};
      playerPosition1 = {x:player.position[0].x+12,y:player.position[0].y+12};
      //Move para cima a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      player.position[0].x += 12;
      player.position[0].y += 30;
      keypress();
    },
    down() {
      //Move para baixo a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      playerPosition = {x:player.position[0].x,y:player.position[0].y+velocidade};
      playerPosition1 = {x:player.position[0].x+12,y:player.position[0].y+12};
      player.position[0].x += 12;
      player.position[0].y -= 6;
      keypress();
    },
    left() {
      //Move para esquerda a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      playerPosition = {x:player.position[0].x-velocidade,y:player.position[0].y};
      playerPosition1 = {x:player.position[0].x+12,y:player.position[0].y+12};
      player.position[0].x += 30;
      player.position[0].y += 12;
      keypress();
    },
    right() {
      //Move para direita a posição da cabeça da cobrinha que está no indice 0 do array position da linha 9.
      playerPosition = {x:player.position[0].x+velocidade,y:player.position[0].y};
      playerPosition1 = {x:player.position[0].x+12,y:player.position[0].y+12};
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
      console.log(player);
      let menos = player.tamanho - i - 1;
      if (menos === 1) {
        plataformaCobrinha.beginPath();
        plataformaCobrinha.fillStyle = "blue";
        console.log(playerPosition, menos);
        plataformaCobrinha.arc(playerPosition1.x , playerPosition1.y, 12, 0, (Math.PI/180)*360, true);
        console.log(player.position[menos-1].x, player.position[menos-1].y);
        plataformaCobrinha.fill();
        player.position[menos].x = playerPosition1.x;
        player.position[menos].y = playerPosition1.y;
      }
      else{
        plataformaCobrinha.beginPath();
        plataformaCobrinha.fillStyle = "blue";
        console.log(playerPosition, menos);
        plataformaCobrinha.arc(player.position[menos-1].x , player.position[menos-1].y, 12, 0, (Math.PI/180)*360, true);
        console.log(player.position[menos-1].x, player.position[menos-1].y);
        plataformaCobrinha.fill();
        player.position[menos].x = player.position[menos-1].x;
        player.position[menos].y = player.position[menos-1].y;
      }
      console.log(player);
    }
    player.position[0].x = playerPosition.x;
    player.position[0].y = playerPosition.y;
    plataformaCobrinha.beginPath();
    plataformaCobrinha.fillStyle = "green";
    plataformaCobrinha.fillRect(playerPosition.x, playerPosition.y, 24, 24);
    plataformaCobrinha.closePath();
  }
  //Função que checa tanto as setas, quanto a colisão.
  function Check() {
    //Setas
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
    //Colisão bordas
    if (player.position[0].x < 0 || player.position[0].y < 0) {
      window.location.reload();
    }
    if (player.position[0].x > plataforma.width-24 || player.position[0].y > plataforma.height-24) {
      window.location.reload();
    }
  }
  //verificando se o intervalo tem algo para a função reiniciar
  if (intervalo) {
    clearInterval(intervalo);
  }
  //Executa uma vez antes de entrar no intervalo.
  Check();
  //setando o intervalo para a função reiniciar.
  intervalo = setInterval(() => {
    //
    Check();
    // for (let i = 1; i < playerXY.length; i++) {
    //   if (playerXY[i].x === headPositionX && playerXY[i].y === headPositionY) {
    //     alert("perdeu")
    //     return
    //   }
    //  
    // }
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
  if ((event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight")  && !tampaTudo) {
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
