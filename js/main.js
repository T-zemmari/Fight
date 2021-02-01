let elegir = (parametro)=>{
  if(arrayEquipo1.lenght <3){
     arrayEquipo1.push(parametro);
     document.getElementById(parametro).className="eligido";
     document.getElementById(parametro).onclick="";
  }
  if(arrayEquipo1 == 3){
     for(i=0 ; i< arryEquipo.lenght ; i++){
        document.getElementById("arrayEquipo1[I]").style="visibility : hidden";
     };

  };


}
var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}