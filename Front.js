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
  tamanho: 1,
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
  AnimaPlataformaCobrinha(tecla);
});
//
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//desenhar no canva a cobrinha
function AnimaPlataformaCobrinha(teclaPressionada) {
  plataformaCobrinha.clearRect(0,0,5000,5000);
  if (teclaPressionada === "none") {


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

var playerPosition;
var playerPositionXy;

  function keypress(playerPosition, playerPositionXy){
    plataformaCobrinha.beginPath();
    playerPosition;
    plataformaCobrinha.fillStyle = "green";
    plataformaCobrinha.fillRect(player.position[0].x, player.position[0].y, 24, 24);
    plataformaCobrinha.closePath();
    for (let i = 0; i < player.tamanho; i++) {
      plataformaCobrinha.beginPath();
      console.log(playerPositionXy);
      plataformaCobrinha.arc(playerPositionXy.x , playerPositionXy.y+(i*6), 12, 0, (Math.PI/180)*360, true);
      console.log((player.position[0].x-40)-(i*6));
      plataformaCobrinha.fill();
    }
    return;
  }
  if (teclaPressionada === "ArrowUp") {
    playerPosition = player.position[0].y -= 10
    playerPositionXy = {x:player.position[0].x+12,y:player.position[0].y+36}
    keypress(playerPosition, playerPositionXy)
  }
  if (teclaPressionada === "ArrowDown") {
    playerPosition = player.position[0].y += 10
    playerPositionXy = {x:player.position[0].x+12,y:player.position[0].y-12}
    keypress(playerPosition, playerPositionXy)
  }
  if (teclaPressionada === "ArrowLeft") {
    playerPosition = player.position[0].x -= 10
    playerPositionXy = {x:player.position[0].x+36,y:player.position[0].y+12}
    keypress(playerPosition, playerPositionXy)
 
  }
  if (teclaPressionada === "ArrowRight") {
    playerPosition = player.position[0].x -= 10
    playerPositionXy = {x:player.position[0].x-12,y:player.position[0].y+12}
    keypress(playerPosition, playerPositionXy)
   
  }
  
  setInterval(() => {
    
    
    keypress(playerPosition, playerPositionXy)
    console.log("to rodando");
    
  }, 1000);
}


window.addEventListener("keydown", (event) => {
  console.log(event, tecla);
  if (tecla === "none" && !tampaTudo) {
    tecla = event.key;
    window.scrollTo(player.position[0].x-200, player.position[0].y-200);
    AnimaPlataformaCobrinha(tecla);
    return;
  }
  if (tecla != "none"  && !tampaTudo) {
    tecla = event.key;
    window.scrollTo(player.position[0].x-200, player.position[0].y-200);
    AnimaPlataformaCobrinha(tecla);
  }
  //console.log(event.clientX, event.clientY);
  //AnimaPlataformaCobrinha(event.clientX, event.clientY);
});
//
window.addEventListener("keyup", (event) => {
  console.log(event, "sla mano");
  tecla = "none";
  if (tampaTudo) {
    return;
  }
  // AnimaPlataformaCobrinha(tecla);
  //console.log(event.clientX, event.clientY);
  //AnimaPlataformaCobrinha(event.clientX, event.clientY);
});
