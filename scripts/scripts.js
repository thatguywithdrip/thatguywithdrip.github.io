
function redirectToZyciorys (){

   window.location.href = "http://localhost:3600/Zyciorys";
   
   }
   
   function redirectToMain (){
   
   
   window.location.href = "http://localhost:3600";

   }
   function redirectToButelka (){
   
   
      window.location.href = "http://localhost:3600/Butelka";

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
   
   localStorage.setItem("input1", input[1].value);
   localStorage.setItem("input2", input[2].value);
   localStorage.setItem("input3", input[3].value);
   localStorage.setItem("input4", input[4].value);
   localStorage.setItem("input5", input[5].value);
   localStorage.setItem("input6", input[6].value);
   
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