let ImageChange = false;

function Menu() {
   const Image = document.getElementById("MenuImg");
   Image.classList.toggle("change");
   const Menu = document.getElementById("MS");
   Menu.classList.toggle("MenuScreenChange");
   
   
  /* if (!ImageChange){
   Image.src = "images/amogus.png";
   ImageChange = true;
   }
   else if (ImageChange){
      Image.src = "images/menu.png";
      ImageChange = false;
   }
   */
}

function DownloadImage(){
   window.location.href = "https://download2265.mediafire.com/r5a5vmn18xkg/vwohn94b5abndqu/Zdj%C4%99cia.zip";
}

function redirectToZyciorys (){

   window.location.href = "/Zyciorys";
   
   }
   
   function redirectToMain (){
   
   
   window.location.href = "/";

   }
   function redirectToButelka (){
   
   
      window.location.href = "/Butelka";

      }
   function redirectToGit (){
   
   
      window.location.href = "https://github.com/thatguywithdrip/thatguywithdrip.github.io";
   
   }
   function redirectToKasjerka (){
   
   
      window.location.href = "/kasjerka";
   
   }
function Losuj (){
   var Random = Math.floor(Math.random() * (7 - 1)) + 1;
   var input = new Array(7);
   
   input[1] = document.getElementById('input1');
   input[2] = document.getElementById('input2');
   input[3] = document.getElementById('input3');
   input[4] = document.getElementById('input4');
   input[5] = document.getElementById('input5');
   input[6] = document.getElementById('input6');
   var bottles1 = 40;
   var bottles2 = 90;
   var bottles3 = 120;
   if (input[Random].value == ""){
      
   }
   
 
   
   var butelka = document.getElementById('butelka');
   
   const body = document.body;
   
      if (Random == 1){
         butelka.style["transform"] = "rotate(" + bottles1 + "deg)"
      }
      else if (Random == 2){
         butelka.style["transform"] = "rotate(" + bottles2 + "deg)"
      }
      else if (Random == 3){
         butelka.style["transform"] = "rotate(" + bottles3 + "deg)"
      }
      else if (Random == 4){
         butelka.style["transform"] = "rotate(" + -bottles3 + "deg)"
      }
      else if (Random == 5){
         butelka.style["transform"] = "rotate(" + -bottles2 + "deg)"
      }
      else if (Random == 6){
         butelka.style["transform"] = "rotate(" + -bottles1 + "deg)"
      
   }
   
}
function Reset() {
   localStorage.setItem("input1", "");
   localStorage.setItem("input2", "");
   localStorage.setItem("input3", "");
   localStorage.setItem("input4", "");
   localStorage.setItem("input5", "");
   localStorage.setItem("input6", "");
   
}
function buttonClick(ID){

document.getElementById(ID).style.backgroundColor = "black";
setTimeout(function() {
   document.getElementById(ID).style.backgroundColor = "burlywood";
 }, 100);

}

