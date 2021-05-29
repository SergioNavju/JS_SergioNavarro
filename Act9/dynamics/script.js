let jug1 = document.getElementById("pal1");
let jug2 = document.getElementById("pal2");
let velPel = 3;
let choco = false;
let posY;
let dirX;
let dirY;
let posOrig = true;
let pausa = false;
let jugador1 = 0;
let jugador2 = 0;

//CANVAS
let canvas = document.getElementById("tablero");
let ctx = canvas.getContext("2d");
//Objetos que determinan posición de las paletas y la pelota
let pelota = {
  x: 0,
  y: 0,
  rad: 10
}
let paleta1 = {
  x: -475,
  y: -50,
  w:25,
  h:100
}
let paleta2 = {
  x: 450,
  y: -50,
  w:25,
  h:100
}
ctx.translate(canvas.width/2, canvas.height/2);
//Devuelve número aleatorio para dirección de la pelota desde el centro
function numAl(){
  return Math.round(Math.random()+1);
}
//Detecta en caso de haber colisión entre la pelota y la paleta y los bordes
function colision(){
  if(pelota.y + pelota.rad >= canvas.height/2)
  {
    dirY = false;
  }
  else if(pelota.y - pelota.rad <= -(canvas.height/2))
  {
    dirY = true;
  }//Colisión de la paleta 2 
  if(pelota.x + pelota.rad >= paleta2.x)
  {

    if(pelota.y > paleta2.y && pelota.y < paleta2.y+paleta2.h)
    {
      choco = true;
    }
    if(choco === true)
    {
      dirX = !dirX;
      velPel += 0.3; 
      posOrig = false;
      choco = false;
  	}
    else
    {
      pelota.x = 0;
      pelota.y = 0;
      choco = false;
      posOrig = true;
      jugador1++;
      jug1.innerText=jugador1;
		  velPel = 5;
    }
  }//Colisión de la paleta 1
  else if(pelota.x - pelota.rad <= paleta1.x+ paleta1.w)
  {
    if(pelota.y > paleta1.y && pelota.y < paleta1.y+paleta1.h)
    {
      choco = true;
    }
    if(choco === true){
      dirX = !dirX;
      velPel += 0.3; 
      posOrig = false;
	    choco = false;
	  }
	  else{
      pelota.x = 0;
      pelota.y = 0;
      choco = false;
      posOrig = true;
      jugador2++;
      jug2.innerText=jugador2;
	    velPel = 5;
	  }
  }
}
 //Dibuja pelota
function canPelota(){
  ctx.arc(pelota.x,pelota.y,pelota.rad,0,Math.PI*2);
  ctx.fill();
  ctx.closePath();
}//Dibuja paleta 1
function canPaleta1(){
  ctx.rect (paleta1.x,paleta1.y,paleta1.w,paleta1.h);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}//Dibuja paleta 2
function canPaleta2(){
  ctx.rect (paleta2.x,paleta2.y,paleta2.w,paleta2.h);
  ctx.fill();
  ctx.closePath();
}
//Funcionalida de pausa y dirección de la pelota
function dib(){
  if(pausa===false){
      ctx.clearRect(-500,-500,1000,1000);
      ctx.beginPath();
      if(posOrig === true)
      {
        pelota.x = 0;
        pelota.y = 0;
        velPel = 3;
        posOrig = false;
        if(numAl()===1){
          dirX = false;
        }
        else{
          dirX = true;
        }
        if(numAl()==1){
          dirY = false;
        }
        else{
          dirX = true;
        }
      }
      canPelota();
      canPaleta1();
      canPaleta2();

      colision();
      //Movimiento de la pelota
      if(dirY){
        pelota.y += velPel;
      }
      else{
        pelota.y -= velPel;
      }
      if(dirX)
      {
        pelota.x += velPel;
      }
      else
      {
        pelota.x -= velPel;
      }
  } 
  requestAnimationFrame(dib);
}


let vel = 25;
//Eventos de Teclado
document.querySelector("body").addEventListener("keydown",(e)=>{

  if(e.key == "w" && paleta1.y > -(canvas.height/2) && pausa === false){
    paleta1.y -= vel;
  }
  if(e.key == "s" && paleta1.y < canvas.height/2-paleta1.h && pausa===false){
    paleta1.y += vel;
  }
  if(e.key == "u" && paleta2.y > -(canvas.height/2) && pausa===false){
    paleta2.y -= vel;
  }
  if(e.key == "j" && paleta2.y < canvas.height/2-paleta2.h && pausa===false){
    paleta2.y += vel;
  }
  if(e.key == "p"){
    pausa = !pausa;
  }
});

requestAnimationFrame(dib);