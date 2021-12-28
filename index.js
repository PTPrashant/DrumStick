
document.addEventListener('keypress', function( keyPressed){
  if( keyPressed.key == 'w' || keyPressed.key == 'W' ){

      var audio=  new Audio('tom-1.mp3');
      audio.play();
  }

  if (keyPressed.key == 'a'  || keyPressed.key == 'A') {
    var audio=  new Audio('tom-2.mp3');
    audio.play();

  }

  if (keyPressed.key == 's'  || keyPressed.key == 'S') {
    var audio=  new Audio('tom-3.mp3');
    audio.play();

  }

  if (keyPressed.key== 'd' || keyPressed.key == 'D') {
    var audio=  new Audio('tom-4.mp3');
    audio.play();

  }

  if( keyPressed.key == 'j'  || keyPressed.key == 'J'){
    var audio=  new Audio('crash.mp3');
    audio.play();

  }

  if(keyPressed.key == 'k' || keyPressed.key == 'K'){
    var audio=  new Audio('kick-bass.mp3');
    audio.play();

  }

  if(keyPressed.key == 'l' || keyPressed.key == 'L'){

    var audio=  new Audio('snare.mp3');
    audio.play();

  }

})


document.querySelectorAll('button')[0].addEventListener('click', function(){
  var audio=  new Audio('tom-1.mp3');
  audio.play();

});

document.querySelectorAll('button')[1].addEventListener('click', function(){
  var audio=  new Audio('tom-2.mp3');
  audio.play();
});

document.querySelectorAll('button')[2].addEventListener('click', function(){
  var audio=  new Audio('tom-3.mp3');
  audio.play();
});

document.querySelectorAll('button')[3].addEventListener('click', function(){
  var audio=  new Audio('tom-4.mp3');
  audio.play();
});

document.querySelectorAll('button')[4].addEventListener('click', function(){
 var audio=  new Audio('crash.mp3');
 audio.play();
});

document.querySelectorAll('button')[5].addEventListener('click', function(){
  var audio=  new Audio('kick-bass.mp3');
  audio.play();
});

document.querySelectorAll('button')[6].addEventListener('click', function(){
  var audio=  new Audio('snare.mp3');
  audio.play();
});
