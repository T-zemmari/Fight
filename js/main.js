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
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.handicap = handicap;
        this.suerte = suerte;
     }
      //metodos dentro de la clase...

      attack(contrincante){
       //como sera el ataque
       let factorRandom= Math.floor(Math.random()*4);
       this.vida -= (this.fuerza + contrincante.defensa -(this.suerte * factorRandom) + contrincante.defensa/2 + contrincante.fuerza/2 + contrincante.defensa/2 -this.fuerza);
       
      }
       combo(contrincante){
         //ataque casi fulminante
         let factorRandom2= Math.floor(Math.random()*4);
         this.vida -= (this.fuerza + contrincante.defensa -(this.suerte * factorRandom2) + contrincante.defensa/2 + contrincante.fuerza/2 + contrincante.defensa/2 -this.fuerza);
       
     }
  }
 
 // iniciar la seleccion de los personajes
 
  let luchador1 =new Luchadores("jetlee",200,20,16,8,2);
  let luchador2 =new Luchadores("jackie",200,20,18,4,8);
  let luchador3 =new Luchadores("tonny",200,24,14,8,4);
  let luchador4 =new Luchadores("tayson",200,22,12,6,8);
  let luchador5 =new Luchadores("brucelee",200,22,16,6,8);
  let luchador6 =new Luchadores("ronda",200,30,24,4,6);
  let luchador7 =new Luchadores("mcgregor",200,30,26,6,8);
  let luchador8 =new Luchadores("ipman",200,32,24,4,8);
  let arrayDeLosJugadores=[luchador1,luchador2,luchador3,luchador4,luchador5,luchador6,luchador7,luchador8];
  console.log(arrayDeLosJugadores);
  let jugador1 ="";
  let jugador2 ="";

  let inicio = ()=>{
    let vidaInicial = 200;
    luchador1.vida= vidaInicial;
    luchador2.vida= vidaInicial;
    jugador1 ="";
    jugador2 ="";

  }
  
  //cambio de pantalla

  let cambioDePantalla = (stage1,stage2,stage3) => {
    let pantalla1 = document.getElementById(stage1);

    let pantalla2 = document.getElementById(stage2);

    let pantalla3 = document.getElementById(stage3);
    pantalla1.style.display = 'none';
    pantalla2.style.display = 'block';
    pantalla3.style.display = 'none';

};


 /* let cambioConRetraso = () =>{
    resolveIn(3000).then(delay => {

      cambiaPantalla("screenOne","screenTwo");
      
  });
  }*/

 /*let  cambio = ()=>{setTimeout(() => {cambioDePantalla();
    
  }, 3000);
    
  }*/


//segundo cambio de pantalla

let cambioPantallaGanador =(uno,dos,tres) =>{
    let pantalla1 = document.getElementById(uno);

    let pantalla2 = document.getElementById(dos);

    let pantalla3 = document.getElementById(tres);
    pantalla1.style.display = 'none';
    pantalla2.style.display = 'none';
    pantalla3.style.display = 'block';

}


    // seleccion de los jugadores

    


    let traductorDeTodosLosjugadores = {
       "jetlee" : luchador1,
       "jackie" : luchador2,
        "tonny": luchador3,
        "tayson":luchador4,
        "brucelee" : luchador5,
        "ronda" : luchador6,
        "mcgregor":luchador7,
        "ipman" :luchador8
    }
      
    

  let seleccion = (jugador) => {
    if(jugador1 == ""){
      jugador1 = traductorDeTodosLosjugadores[jugador];
    

      document.getElementById("vida1").innerHTML += `${jugador1.vida}`;
      document.getElementById("nombre1").innerHTML += `${jugador1.nombre}`;
      document.getElementById("fuerza1").innerHTML += `${jugador1.fuerza}`;
      document.getElementById("suerte1").innerHTML += `${jugador1.suerte}`;
      document.getElementById("Contrincante1").innerHTML =`<div ><img src="img/${jugador1.nombre}.jpg" class="ImagenPantalla2"></div>`;
      document.getElementById("jugador1").innerHTML =  `<div ><img src="img/${jugador1.nombre}.jpg" class="ImagenPantalla1"></div>`;
      document.getElementById(jugador).className = "nuevosImagenesFighters";
      document.getElementById(jugador).onclick = "";
      
    }
    else{
      jugador2 = traductorDeTodosLosjugadores[jugador];
      
      document.getElementById("vida2").innerHTML += `${jugador2.vida}`;
      document.getElementById("nombre2").innerHTML += `${jugador2.nombre}`;
      document.getElementById("fuerza2").innerHTML += `${jugador2.fuerza}`;
      document.getElementById("suerte2").innerHTML += `${jugador2.suerte}`;
      document.getElementById("Contrincante2").innerHTML = `<div ><img src="img/${jugador2.nombre}.jpg" class="ImagenPantalla2" ></div>`;
      document.getElementById("jugador2").innerHTML = `<div ><img src="img/${jugador2.nombre}.jpg" class="ImagenPantalla1" ></div>`;
      document.getElementById(jugador).className = "nuevosImagenesFighters";
      document.getElementById(jugador).onclick = "";
      //document.getElementById("listoParaLaSiguientePantalla").innerHTML.style.display ='block';

          
         
      //cambioDePantalla("screenOne","screenTwo");

       }
  }
 // ataques 
 let Golpear = () => {
   
  
  let turno = Math.floor(Math.random() * 2);
  let combo=Math.floor(Math.random()*8);

  if(turno == 0){
      if(combo == 7){
          console.log("ATAQUE ESPECIAL");
          jugador1.combo(jugador2);
      }else{

          jugador1.attack(jugador2);
      }
  }else{
      if(combo == 8){
          console.log("ATAQUE ESPECIAL");
          jugador2.combo(jugador1);
      }else{
        jugador2.attack(jugador1);

      }
      
  };
  console.log("Vida del luchador1:" + jugador1.vida);
  console.log("Vida del luchador2:" + jugador2.vida);

  let mensaje = document.getElementById("mensaje");
  let mensaje2 = document.getElementById("mensaje2");
  let pantallaGanador = document.getElementById("Winner");
  let pantallaPerdedor = document.getElementById("looser");

  if(jugador1.vida <=0 ){
     mensaje.innerHTML = "Enhorabuena eres the best FIGHTER ever";
     mensaje2.innerHTML = " KO , Entrena un poco mas antes de vacilar";
     cambioPantallaGanador('screenOne','screenTwo','screenTree');
     pantallaGanador.innerHTML = `<div ><img src="img/${jugador2.nombre}.jpg" class="ImagenPantalla3" ></div>`;
     pantallaPerdedor.innerHTML = `<div ><img src="img/${jugador1.nombre}.jpg" class="ImagenPantalla3"></div>`;
  }
  else
  if(jugador2.vida <=0){
    cambioPantallaGanador('screenOne','screenTwo','screenTree');
    pantallaGanador.innerHTML = `<div ><img src="img/${jugador2.nombre}.jpg" class="ImagenPantalla3" ></div>`;
    pantallaPerdedor.innerHTML = `<div ><img src="img/${jugador1.nombre}.jpg" class="ImagenPantalla3"></div>`;
    mensaje.innerHTML = "Enhorabuena eres the best FIGHTER ever";
    mensaje2.innerHTML = " KO , Entrena un poco mas antes de vacilar ";
  }

  

}; 