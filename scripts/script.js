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

async function loadElement(nameElement) {
  

  // Carregar arquivo CSS com base no nome do elemento
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `./elements/${nameElement}/${nameElement}.css`;
  document.head.appendChild(link);

  // Carregar arquivo JS com base no nome do elemento
  var script = document.createElement('script');
  script.src = `./elements/${nameElement}/${nameElement}.js`;
  document.body.appendChild(script);
  // Carregar arquivo HTML com base no nome do elemento
  await fetch(`./elements/${nameElement}/${nameElement}.html`)
    .then(response => response.text())
    .then(html => {
      document.querySelector(`.${nameElement}`).innerHTML = html;
    });

}
