
document.addEventListener('keypress', function( keyPressed){
  if( keyPressed.key == 'w' ){

      var audio=  new Audio('sounds/tom-1.mp3');
      audio.play();
  }

  if (keyPressed.key == 'a') {
    var audio=  new Audio('sounds/tom-2.mp3');
    audio.play();

  }

  if (keyPressed.key == 's') {
    var audio=  new Audio('sounds/tom-3.mp3');
    audio.play();

  }

  if (keyPressed.key== 'd') {
    var audio=  new Audio('sounds/tom-4.mp3');
    audio.play();

  }

  if( keyPressed.key == 'j' ){
    var audio=  new Audio('sounds/crash.mp3');
    audio.play();

  }

  if(keyPressed.key == 'k'){
    var audio=  new Audio('sounds/kick-bass.mp3');
    audio.play();

  }

  if(keyPressed.key == 'l'){

    var audio=  new Audio('sounds/snare.mp3');
    audio.play();

  }

})


document.querySelectorAll('button')[0].addEventListener('click', function(){
  var audio=  new Audio('sounds/tom-1.mp3');
  audio.play();

});

document.querySelectorAll('button')[1].addEventListener('click', function(){
  var audio=  new Audio('sounds/tom-2.mp3');
  audio.play();
});

document.querySelectorAll('button')[2].addEventListener('click', function(){
  var audio=  new Audio('sounds/tom-3.mp3');
  audio.play();
});

document.querySelectorAll('button')[3].addEventListener('click', function(){
  var audio=  new Audio('sounds/tom-4.mp3');
  audio.play();
});

document.querySelectorAll('button')[4].addEventListener('click', function(){
 var audio=  new Audio('sounds/crash.mp3');
 audio.play();
});

document.querySelectorAll('button')[5].addEventListener('click', function(){
  var audio=  new Audio('sounds/kick-bass.mp3');
  audio.play();
});

document.querySelectorAll('button')[6].addEventListener('click', function(){
  var audio=  new Audio('sounds/snare.mp3');
  audio.play();
});
