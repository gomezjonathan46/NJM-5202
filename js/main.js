var myText = document.querySelectorAll('.textWrap p');
var myTime = 0;

//Loop through all the intro text pieces
for(i = 1; i < myText.length + 1; i++){
  //Add up myTime so we know how long to delay each frame, then set the timeout
  myTime += parseInt(textSlide(i).getAttribute('data-time'), 10);
  myTimer(myTime, i);
}
//Get a specific piece of text from the intro
function textSlide(pos){
  return document.querySelector('.textWrap p:nth-child('+pos+')');
}
//Set timeouts for each of the frames based on their data-time
function myTimer(delay, pos){
  setTimeout(function(){
    //Animate out the last slide, animate in the next slide
    var nextText = document.querySelector('.textWrap p:nth-child('+pos+')');
    nextText.className = 'in';
    if(pos > 1) textSlide(pos).previousElementSibling.className = 'out';
    //Animate in the final lockup after all other slides are done
    if(pos == myText.length){
      setTimeout(function(){
        document.querySelector('body').className = 'lockup';
      }, parseInt(textSlide(pos).getAttribute('data-time'), 10));
    }
  }, delay - 2200);
}
//End the background shape animations after 15 seconds
setTimeout(function(){
  document.querySelector('.ring1').style.animation = 'none';
  document.querySelector('.ring2').style.animation = 'none';
  document.querySelector('.ring3').style.animation = 'none';
  document.querySelector('.ring4').style.animation = 'none';
  document.querySelector('.ring5').style.animation = 'none';
  document.querySelector('.ring6').style.animation = 'none';
}, 15000);
