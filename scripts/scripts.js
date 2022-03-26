
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
               //get 6 input elements from the DOM by their id
               var input1 = document.getElementById('input1');
               var input2 = document.getElementById('input2');
               var input3 = document.getElementById('input3');
               var input4 = document.getElementById('input4');
               var input5 = document.getElementById('input5');
               var input6 = document.getElementById('input6');
               var bottles1 = 40;
               var bottles2 = 90;
               var bottles3 = 120;
               

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