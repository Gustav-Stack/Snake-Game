const submeta = document.getElementById("submeta-se");
const tampaTudo = document.getElementById("tampaTudo");
const canva = document.getElementById("plataforma").getContext("2d");
console.log(canva)
const player = {
  nome: String,
  position: [],
  rotation: Number
}
//
submeta.addEventListener("click", (event) => {
  if(!tampaTudo.children[0].children[0].value) {
    alert("Precisa fornecer um nome");
    return;
  }
  player.nome = tampaTudo.children[0].children[0].value;
  tampaTudo.parentNode.removeChild(tampaTudo);
  console.log(player)
  canva.fillStyle = "green";
  canva.fillRect(2, 2, 4, 1);
});
//
window.addEventListener("onmousemove", (event) => {
  console.log(event)
});
