const submeta = document.getElementById("submeta-se");
const tampaTudo = document.getElementById("tampaTudo");
const plataformaCobrinha = document.getElementById("plataforma").getContext("2d");
const plataforma = document.getElementById("plataforma");
let anima;
console.log(plataformaCobrinha);
const player = {
  nome: String,
  tamanho: 20,
  position: [{
    x: 200,
    y: 100
  }],
  rotation: Number
};
//
submeta.addEventListener("click", (event) => {
  if(!tampaTudo.children[0].children[0].value) {
    alert("Precisa fornecer um nome");
    return;
  }
  player.nome = tampaTudo.children[0].children[0].value;
  tampaTudo.parentNode.removeChild(tampaTudo);
  console.log(player, document.getElementById("plataforma").width);
  AnimaplataformaCobrinha(100, 12);
});
//
function AnimaplataformaCobrinha(positionX, positionY) {
  plataformaCobrinha.clearRect(0,0,5000,5000);
  if (positionX > 5000) {
    plataformaCobrinha.beginPath();
    //console.log(plataformaCobrinha);
    plataformaCobrinha.fillStyle = "green";
    plataformaCobrinha.fillRect(player.position[0].x, player.position[0].y, 40, 24);
    plataformaCobrinha.closePath();
    for (let i = 0; i < player.tamanho; i++) {
      plataformaCobrinha.beginPath();
      plataformaCobrinha.arc((player.position[0].x-12)-(i*6), player.position[0].y+12, 12, (Math.PI/180)*0, (Math.PI/180)*360, true);
      console.log((player.position[0].x-40)-(i*6))
      plataformaCobrinha.fill();
    }
  }
  plataformaCobrinha.beginPath();
  //console.log(plataformaCobrinha);
  plataformaCobrinha.fillStyle = "green";
  plataformaCobrinha.rotate(20 * Math.PI / 180);
  plataformaCobrinha.fillRect(player.position[0].x, player.position[0].y, 40, 24);
  plataformaCobrinha.closePath();
  for (let i = 0; i < player.tamanho; i++) {
    plataformaCobrinha.beginPath();
    plataformaCobrinha.arc((player.position[0].x-12)-(i*6), player.position[0].y+12, 12, (Math.PI/180)*0, (Math.PI/180)*360, true);
    console.log((player.position[0].x-40)-(i*6))
    plataformaCobrinha.fill();
  }
  //positionX++; it's dont work
}
//
plataforma.addEventListener("mousemove", (event) => {
  //console.log(event.clientX, event.clientY);
  //AnimaplataformaCobrinha(event.clientX, event.clientY);
});
