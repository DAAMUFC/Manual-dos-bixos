function typeWriter(dialogueText,i) {
  if (i < dialogueText.length) {
    text = dialogueText.charAt(i);
    if (text !== '\n') document.getElementById("textDialogue").innerHTML += text;
    else document.getElementById("textDialogue").innerHTML += '<br />';
    i++;
    if(i%2 == 1) typeWriterSound();
    
    setTimeout(typeWriter, speed, dialogueText,i);
  }
  else {
    fristMensage = ""
  }
}



function typeWriterSound() {
  soundTypeWriter = new Audio('./sounds/click.mp3');
  soundTypeWriter.play();
}

function setDialogue(dialogueText) {
  var i = 0;
  document.getElementById("textDialogue").innerHTML = "";
  typeWriter(dialogueText,i);
}

const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get('course') === 'EngComp' ? 'Engenharia de Computação' : 'Engenharia de Telecomunicações'

var fristMensage  = `Bom dia.\nVocê parece ser novo por aqui. Espero que goste do curso de  ${course}`;
var speed = 50;

