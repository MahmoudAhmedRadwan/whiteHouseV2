// start aziziaousel
var hajjandOmrahArray = new Array();
hajjandOmrahArray[0] = new Image();
hajjandOmrahArray[0].src = '../assets/images/HajjandOmrah1.png';
hajjandOmrahArray[1] = new Image();
hajjandOmrahArray[1].src = '../assets/images/HajjandOmrah2.png';
hajjandOmrahArray[2] = new Image();
hajjandOmrahArray[2].src = '../assets/images/HajjandOmrah3.png';

var hajjandOmrahcarouselSlide = document.getElementById('hajjandOmrah_carousel');
hajjandOmrahLoop = function(){
  for( var i = 0; i < hajjandOmrahArray.length; i++ ){
    hajjandOmrahcarouselSlide.innerHTML += `
    <div class="room hajjandOmrahroom">
      <img src=${hajjandOmrahArray[i].src}></img>
    </div>`    
  }
}
hajjandOmrahLoop();
hajjandOmrahNextImg = function (){
  var hajjandOmrahroom = document.querySelectorAll('.hajjandOmrahroom');
  for(var i = 0; i<hajjandOmrahroom.length; i++){
    hajjandOmrahroom[i].remove();
  }
  this.hajjandOmrahArray.push(this.hajjandOmrahArray.shift())
  hajjandOmrahLoop();
}

hajjandOmrahPrevious = function (){
  var hajjandOmrahroom = document.querySelectorAll('.hajjandOmrahroom');
  for(var i = 0; i<hajjandOmrahroom.length; i++){
    hajjandOmrahroom[i].remove();
  }
  this.hajjandOmrahArray.unshift(this.hajjandOmrahArray.pop())
  hajjandOmrahLoop();
}
// end of hajjandOmrah carousel