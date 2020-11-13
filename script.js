
const main=document.querySelector("main");
const voicesSelect=document.getElementById("voices");
const textarea=document.getElementById("text");
const readBtn=document.getElementById("read");
const toggleBtn=document.getElementById("toggle");
const closeBtn=document.getElementById("close");


const data=
[
    {
    image: './img/drink.jpg',
    textdata: "I'm Thirsty"
  },
  {
    image: './img/food.jpg',
    textdata: "I'm Hungry"
  },
  {
    image: './img/tired.jpg',
    textdata: "I'm Tired"
  },
  {
    image: './img/hurt.jpg',
    textdata: "I'm Hurt"
  },
  {
    image: './img/happy.jpg',
    textdata: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    textdata: "I'm Angry"
  },
  {
    image: './img/sad.jpg',
    textdata: "I'm Sad"
  },
  {
    image: './img/scared.jpg',
    textdata: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    textdata: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    textdata: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    textdata: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    textdata: 'I Want To Go To Grandmas'
  }
];

//console.log(datas.image);
// const newEl=document.createElement("div");

// document.body.appendChild(newEl);
// console.log(newEl);
// newEl.textdataContent=datas.image;

data.forEach(createBox);
//Create Speach boxes

function createBox(item){
const box=document.createElement("div");


const {image,textdata}=item;
//objet ==item;

box.classList.add("box");
box.innerHTML=`<img src="${image}"  alt="${textdata}" />
<p class="info">${textdata}</p>`;
box.addEventListener("click",()=>{
    setTextMessage(textdata);
    speakText();

    //Add Active effect
    box.classList.add("active");
    setTimeout(()=>box.classList.remove("active"),800);
});

main.appendChild(box);
//@todo - speak event
//main ceat balise
}
// Init speech synthesisi
const messages=new SpeechSynthesisUtterance();
// Store Voices 
let voices=[];

function getVoi() {
    voices=speechSynthesis.getVoices();
    console.log(voices);

    //getVoices function natif
    //speechSynthesis objet natif

  
    voices.forEach(voice => {
      const option = document.createElement('option');
  
      option.value=voice.name;
      option.innerText = `${voice.name} ${voice.lang}`;
  
      voicesSelect.appendChild(option);
    });
  }

  function setTextMessage(textdata)
  {     
           let myvoice="Fa Fa Fa";

      //C'est à dire message un objet 
      //TODOon l'accede par le point.réinitialiser la variable 
      //on a ajouter une propriete text en notre objet message

        messages.text=textdata;
  //text C'est text dedans l'objet lui meme
    
      
  }
  //Set text
  function speakText(){
    speechSynthesis.speak(messages);

    
  }
  //Set voice 
  function setVoice(e){
    messages.voice=voices.find(voice=>voice.name===e.target.value);
    console.log(messages.voice);
    //e.target.value==voice.name 
    //C'est à dire 
  }

speechSynthesis.addEventListener("voiceschanged",getVoi);


toggleBtn.addEventListener("click",()=>document.getElementById('text-box')
.classList.toggle('show'));

//Close button
closeBtn.addEventListener("click",()=>document.getElementById('text-box')
.classList.remove('show'));
voicesSelect.addEventListener("change",setVoice);
//Read text button
readBtn.addEventListener("click",()=>
{
  setTextMessage(textarea.value);
  speakText();
});

getVoi();
