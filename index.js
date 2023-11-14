//Project to incorporate various sounds of drums into different images and keys
//below function plays sound based on the respective keys alloted to them
function playSound(clickedElement){
    switch(clickedElement){
        case "w" :
           var crash=new Audio("./sounds/crash.mp3"); 
           crash.play();
           break;
        case "a" :
            var kick=new Audio("./sounds/kick-bass.mp3"); 
            kick.play();
            break;
        case "s" :
           var snare=new Audio("./sounds/snare.mp3"); 
           snare.play();
           break;
        case "d" :
            var tom1=new Audio("./sounds/tom-1.mp3"); 
            tom1.play();
            break; 
        case "j" :
           var tom2=new Audio("./sounds/tom-2.mp3"); 
           tom2.play();
           break;
        case "k" :
            var tom3=new Audio("./sounds/tom-3.mp3"); 
            tom3.play();
            break;  
        case "l" :
            var tom4=new Audio("./sounds/tom-4.mp3"); 
            tom4.play();
            break;  
        default:
            console.log(clickedElement);
            alert(clickedElement +" The sound couldnt be played");      
    }
   
   }

var numberOfDrumButtons= document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
     var clickedButton=this.innerHTML;
     playSound(clickedButton);
     buttonAnimation(clickedButton);    
   
}); 
} 

   document.addEventListener("keydown", function(event){
    var clickedKey=event.key;
    playSound(clickedKey);
    buttonAnimation(clickedKey);
   });

   function buttonAnimation(currentKey){
    var activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
   }
 

   