var fruitbasket=['grapes','mango','lemon','apple'];
        var win=0;
        var loss=0;
        var totguesses=7;
        var remainingguess=7;
        var guessit='';
        var fruit='';
        var arraylength=0;
        var fruitletters='';
        var guessitarr='';

    
document.onkeyup = function(event) {

      var inpletter = event.key.toLowerCase();
      if(inpletter==='s')
            {
                  console.log(inpletter);
                  document.getElementById("presskey").innerHTML="let's play!!!";
                  document.getElementById("tot").innerHTML="total guess"+totguesses;
                  document.getElementById("remaining").innerHTML="remaining guess"+remainingguess;
                  randomfruit(); 

            }


function sound(){
      var audio = document.createElement("audio");
      audio.src = "http://soundbible.com/grab.php?id=1003&type=mp3";
     
      audio.play();   
                }
                    
   
  function randomfruit(){

         document.getElementById("loss").innerHTML="loss:"+0;
         fruit =   fruitbasket[(Math.random() * fruitbasket.length)|0];
         var str =fruit;
         console.log(str);
         fruitletters = str.split("");
         arraylength=fruitletters.length;
         console.log("fruitlength:"+arraylength);
         for(var i=0;i<arraylength;i++)
              {
  
                    guessit+=("_ ");


              }
                    
          guessitarr=guessit.split(' ');
          console.log("split"+guessitarr);
          document.getElementById("Guessit").innerHTML=guessitarr;
                 
                  

                

                    }

   document.onkeyup = function(event) {

        if(remainingguess>0)
              {

                    var inpletter = event.key.toLowerCase();
                    console.log("insideevent:"+guessitarr);
                    remainingguess-=1;
                    document.getElementById("remaining").innerHTML="remaining guesses"+remainingguess;
                    console.log("remaining guess:"+remainingguess);
                    console.log("input"+inpletter);
                    var index=fruitletters.indexOf(inpletter);
                    var lindex=fruitletters.lastIndexOf(inpletter);
                    if(index>=0)
                          {
                                if(guessitarr[index]!==inpletter)
                                      {

                                            console.log("index"+index);
                                                        
                                            guessitarr[index]=inpletter;
                                            document.getElementById("Guessit").innerHTML=guessitarr;
                                            console.log(guessitarr);
                                                  if(lindex!=index)
                                                        {
                                                              guessitarr[lindex]=inpletter  ;
                                                             // document.getElementById("Guessit").innerHTML=guessitarr;
                                                        }
                                      }


                                 if(guessitarr[arraylength-1]=="")
                                      {
                                             guessitarr.pop();
                                             console.log("afterpop:"+guessitarr);
                                             console.log(fruitletters);
                                                              
                                      }


                                  var correct=0;
                                                              
                                  for(var i=0;i<arraylength;i++)
                                          {
                                                if(guessitarr[i]==fruitletters[i])
                                                        {
                                                              correct+=1;
                                                              console.log("inside for");
                                                                   
                                                        }
                                                if(correct==arraylength){
                                                      win=win+1;
                                                                   
                                                      sound();
                                                                
                                                      document.getElementById("win").innerHTML="win"+win;
                                                      console.log("winner");
                                                      document.getElementById("presskey").innerHTML="You win!!fruit is.."+guessitarr;
                                                      if(confirm("word guessed is correct!!Do you want to continue game??")==true){

                                                            document.getElementById("presskey").innerHTML="you won!!word is:!!!"+fruit+ "Let's continue!!guess the fruit";

                                                            remainingguess=7;
                                                            fruitletters='';
                                                            guessit='';
                                                            fruit=''
                                                            guessitarr='';
                                                            loss=0;
                                                            document.getElementById("Guessit").innerHTML=guessitarr;
                                                            document.getElementById("remaining").innerHTML="remainingguess"+remainingguess;
                                                            randomfruit(); 
                                                                }
                                                      else{
                                                            if(confirm("word guessed is correct!!Do you want to continue game??")==false){

                                                            remainingguess=7;
                                                            fruitletters='';
                                                            guessit='';
                                                            fruit=''
                                                            loss=0;
                                                            guessitarr='';
                                                            document.getElementById("Guessit").innerHTML="CONGRATS YOU WON!!!!!!!";
                                                            document.getElementById("remaining").innerHTML="remainingguess"+remainingguess;
                                                               }
                                                            }
                                               

                                          }
                                    
                                                 
                                          }
                                    }   
                  else{

                          if(index<0){
                                              loss+=1;
                                              document.getElementById("loss").innerHTML="loss"+loss;
                                              console.log("better luck next time");
                                             }  
                                               }             
                                                          
                                     
                                          }         
                        

                   

                             
                       if(remainingguess==0)
                                      {
                                                                      
                                               if(confirm("word guessed is wrong!!Better luck next time!Do you want to continue game??")==true){
                                                        document.getElementById("presskey").innerHTML="let's play !";
                                                                       
                                                        remainingguess=7;
                                                        fruitletters='';
                                                        guessit='';
                                                        fruit=''
                                                        guessitarr='';
                                                        loss="";
                                                        document.getElementById("Guessit").innerHTML=guessitarr;
                                                        randomfruit(); 
                                                                                                                 }

                                                else{
                                                      
                                               if(confirm("word guessed is wrong!!Better luck next time!Do you want to continue game??")==false){
                                                                     
                                                      remainingguess=7;
                                                      fruitletters='';
                                                      guessit='';
                                                      fruit=''
                                                      loss=0;
                                                      guessitarr='';
                                                      document.getElementById("Guessit").innerHTML="Better luck next time";
                                                      document.getElementById("remaining").innerHTML=remainingguess;
                                                      document.getElementById("remaining").innerHTML=loss;
                                                      
                                                                            
                                                                                                                                     }       
                                                }
                                                }
                                                                

                                                                
                                                            }

                                                               
                                                      }    
                                          