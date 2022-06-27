// start aziziaousel
var outdoorPartiesArray = new Array();
outdoorPartiesArray[0] = new Image();
outdoorPartiesArray[0].src = '../assets/images/OutdoorParties1.png';
outdoorPartiesArray[1] = new Image();
outdoorPartiesArray[1].src = '../assets/images/OutdoorParties2.png';
outdoorPartiesArray[2] = new Image();
outdoorPartiesArray[2].src = '../assets/images/OutdoorParties3.png';

var outdoorPartiescarouselSlide = document.getElementById('outdoorParties_carousel');
outdoorPartiesLoop = function(){
  for( var i = 0; i < outdoorPartiesArray.length; i++ ){
    outdoorPartiescarouselSlide.innerHTML += `
    <div class="room outdoorPartiesroom">
      <img src=${outdoorPartiesArray[i].src}></img>
    </div>`    
  }
}
outdoorPartiesLoop();
outdoorPartiesNextImg = function (){
  var outdoorPartiesroom = document.querySelectorAll('.outdoorPartiesroom');
  for(var i = 0; i<outdoorPartiesroom.length; i++){
    outdoorPartiesroom[i].remove();
  }
  this.outdoorPartiesArray.push(this.outdoorPartiesArray.shift())
  outdoorPartiesLoop();
}

outdoorPartiesPrevious = function (){
  var outdoorPartiesroom = document.querySelectorAll('.outdoorPartiesroom');
  for(var i = 0; i<outdoorPartiesroom.length; i++){
    outdoorPartiesroom[i].remove();
  }
  this.outdoorPartiesArray.unshift(this.outdoorPartiesArray.pop())
  outdoorPartiesLoop();
}
// end of outdoorParties carousel