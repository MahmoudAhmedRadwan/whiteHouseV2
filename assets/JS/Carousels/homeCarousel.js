
// start home carousel
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = '../assets/images/slider1.png';
imgArray[1] = new Image();
imgArray[1].src = '../assets/images/slider2.png';
imgArray[2] = new Image();
imgArray[2].src = '../assets/images/slider3.png';

var carouselSlide = document.querySelector('.carouselSlide');
var img = document.createElement("img");
offersLoop = function(){
  for( var i = 0; i < imgArray.length; i++ ){
    carouselSlide.innerHTML += `
    <div class="room" id="slider_body lastClove">
      <img src=${imgArray[i].src}></img>
    </div>`    
  }
}
offersLoop();
nextImg = function (){
  var room = document.querySelectorAll('.room');
  for(var i = 0; i<room.length; i++){
    room[i].remove();
  }
  this.imgArray.push(this.imgArray.shift())
  offersLoop();
}
previous = function (){
  var room = document.querySelectorAll('.room');
  for(var i = 0; i<room.length; i++){
    room[i].remove();
  }
  this.imgArray.unshift(this.imgArray.pop())
  offersLoop();
}

// end of home carousel