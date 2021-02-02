//Audio de la pagina
let reproducir = document.getElementById("myAudio");

function playAudio() {
  reproducir.play();
}

function pauseAudio() {
  reproducir.pause();
}

// preparando la clase luchadores
 class Luchadores{
     constructor(nombre,vida,fuerza,defensa,suerte,handicap){
        this.nombre = nombre;
        this.vida = 200;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.handicap = handicap * Math.floor(Math.random()*4);
        this.suerte = suerte - handicap;
     }
      //metodos dentro de la clase...

      attack(contrincante){
       //como sera el ataque
       let factorRandom= Math.floor(Math.random()*5);
       contrincante.vida -= this.vida -contrincante.fuerza +((this.suerte)*2) +contrincante.defensa -(contrincante.suerte * factorRandom);
       
      }
       combo(contrincante){
         //Como sera el ataque especial
       contrincante.vida -= this.vida -(contrincante.fuerza *2) +(this.suerte*3)-(   (contrincante.suerte) *3);
       
     }
  }
 
 // iniciar la seleccion de los personajes
 
  let luchador1 =new Luchadores("jetlee",200,50,30,8,2);
  let luchador2 =new Luchadores("jackie",200,40,60,5,7);
  let luchador3 =new Luchadores("tonny",200,30,45,9,5);
  let luchador4 =new Luchadores("tayson",200,25,45,6,8);
  let luchador5 =new Luchadores("brucelee",200,25,80,7,5);
  let luchador6 =new Luchadores("ronda",200,50,80,8,2);
  let luchador7 =new Luchadores("mcgregor",200,45,39,6,8);
  let luchador8 =new Luchadores("ipman",200,50,30,8,5);
  let jugador1 ="";
  let jugador2 ="";

  let inicio = ()=>{
    let vidaInicial = 200;
    jugador1.vida= vidaInicial;
    jugador2.vida= vidaInicial;
  }

   //funcion para el cambio de pantalla.
   //cuando le de al boton Go me va a cambiar de pantalla , me muestra los contrincantes y el boton de atacar.
  let empieza = ()=>{
    inicio();
    document.getElementById("primeraPantalla").style.display = 'none';
    document.getElementById("segundaPantalla").style.display = 'block';}

    // seleccion de los jugadores
  let seleccion=(jugador)=>{
    
    
    if(jugador1 == ""){
      jugador1 = jugador;
      document.getElementById("jugador1").innerHTML =  `<div ><img src="img/${jugador1}.jpg" class="imagenFighters"></div>`;
      document.getElementById(jugador).className = "nuevosImagenesFighters";
      document.getElementById(jugador).onclick = "";
      
    }
    else{
      jugador2 = jugador;
      document.getElementById("jugador2").innerHTML = `<div ><img src="img/${jugador2}.jpg" class="imagenFighters"></div>`;
      document.getElementById(jugador).className = "nuevosImagenesFighters";
      document.getElementById(jugador).onclick = "";
     }
     //mostrar en pantalla que los jugadores estan ya selecionados 
     document.getElementById("listoParaLaSiguientePantalla").style.display = 'block';

     
     
      
   
      
    
  
    /*cambio de pantalla*/
    
    

   
    
   }
  