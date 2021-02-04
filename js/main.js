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
       let factorRandom= Math.floor(Math.random()*2);
       contrincante.vida -= this.fuerza + contrincante.defensa -(this.suerte * factorRandom);
       
      }
       combo(contrincante){
         //Como sera el ataque especial
       contrincante.vida -= this.fuerza*2 +(contrincante.defensa *2)-((this.suerte) *factorRandom);
       
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
  let arrayDeLosJugadores=[luchador1,luchador2,luchador3,luchador4,luchador5,luchador6,luchador7,luchador8];
  console.log(arrayDeLosJugadores);
  let jugador1 ="";
  let jugador2 ="";

  let inicio = ()=>{
    let vidaInicial = 200;
    jugador1.vida= vidaInicial;
    jugador2.vida= vidaInicial;

  }
  
    
     

     
  /*let cambioDePantalla = () => {
    let pantallaPrincipal = document.getElementById("screenOne");
    let pantallasegundaria = document.getElementById("screenTwo");
    pantallaPrincipal.style.display = "none";
    pantallasegundaria.style.display = "block";
  }*/

  let cambioDePantalla = (stage1,stage2,stage3) => {
    let pantalla1 = document.getElementById(stage1);

    let pantalla2 = document.getElementById(stage2);

    let pantalla3 = document.getElementById(stage3);
    pantalla1.style.display = 'none';
    pantalla2.style.display = 'block';
    pantalla3.style.display = 'none';


    //resolveIn(2000).then(delay => {
     // changeScreen("stage1","stage2");
  //});
    


};


let cambioPantallaGanador =(uno,dos,tres) =>{
    let pantalla1 = document.getElementById(uno);

    let pantalla2 = document.getElementById(dos);

    let pantalla3 = document.getElementById(tres);
    pantalla1.style.display = 'none';
    pantalla2.style.display = 'none';
    pantalla3.style.display = 'block';

}


    // seleccion de los jugadores

    let arrayJugadoresSelecionados = [];
    console.log(arrayJugadoresSelecionados);
    if(jugador1 =="jetlee"){
      jugador1 = luchador1;
    }

  let seleccion = (jugador) => {
    if(jugador1 == ""){
      jugador1 = jugador;
    arrayJugadoresSelecionados.push(jugador1);

     
      document.getElementById("nombre1").innerHTML += `${jugador1.nombre}`;
      document.getElementById("fuerza1").innerHTML += jugador.fuerza;
      document.getElementById("suerte1").innerHTML += jugador.suerte;
      document.getElementById("Contrincante1").innerHTML =`<div ><img src="img/${jugador1}.jpg" class="ImagenPantalla2"></div>`;
      document.getElementById("jugador1").innerHTML =  `<div ><img src="img/${jugador1}.jpg" class="ImagenPantalla1"></div>`;
      document.getElementById(jugador).className = "nuevosImagenesFighters";
      document.getElementById(jugador).onclick = "";
      
    }
    else{
      jugador2 = jugador;
      arrayJugadoresSelecionados.push(jugador2);
      
      document.getElementById("nombre2").innerHTML += jugador.nombre;
      document.getElementById("fuerza2").innerHTML += jugador.fuerza;
      document.getElementById("suerte2").innerHTML += jugador.suerte;
      document.getElementById("Contrincante2").innerHTML = `<div ><img src="img/${jugador2}.jpg" class="ImagenPantalla2" ></div>`;
      document.getElementById("jugador2").innerHTML = `<div ><img src="img/${jugador2}.jpg" class="ImagenPantalla1" ></div>`;
      document.getElementById(jugador).className = "nuevosImagenesFighters";
      document.getElementById(jugador).onclick = "";
      //document.getElementById("listoParaLaSiguientePantalla").innerHTML.style.display ='block';

          
         
      //cambioDePantalla("screenOne","screenTwo");

       }
  }
 // ataques 
 let Golpear = () => {
  
  let turno = Math.floor(Math.random() * 2);
  let combo=2;

  if(turno == 0){
      if(combo == 3){
          console.log("ATAQUE ESPECIAL");
          luchador1.combo(luchador2);
      }else{

          luchador2.attack(luchador2);
      }
  }else{
      if(combo == 3){
          console.log("ATAQUE ESPECIAL");
          luchador1.combo(luchador2);
      }else{
        luchador2.attack(luchador1);

      }
      
  };
  console.log("Vida del luchador1:" + luchador1.vida);
  console.log("Vida del luchador1:" + luchador2.vida);

  let mensaje = document.getElementById("mensaje");
  let mensaje2 = document.getElementById("mensaje2");
  let pantallaGanador = document.getElementById("Winner");
  let pantallaPerdedor = document.getElementById("looser");

  if(luchador1.vida <=0 ){

    console.log(jugador1 +  "ha ganado y " + jugador2 +" ha mordido el polvo");
    
    mensaje.innerHTML = "Enhorabuena eres the best FIGHTER ever";
    cambioPantallaGanador('screenOne','screenTwo','screenTree');
    pantallaGanador.innerHTML = `<div ><img src="img/${jugador2}.jpg" class="ImagenPantalla3" ></div>`;
  }
  else
  if(luchador2.vida <=0){

    console.log(jugador2 + " esta mas que KO " + " Entrena un poco mas antes de vacilar" + " enhorabuena " + jugador1)
    pantallaPerdedor.innerHTML = `<div ><img src="img/${jugador1}.jpg" class="ImagenPantalla3"></div>`;
    mensaje2.innerHTML = " KO , Entrena un poco mas antes de vacilar "
  }

  

}; 