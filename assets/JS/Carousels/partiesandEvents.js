// start aziziaousel
var partiesandEventsArray = new Array();
partiesandEventsArray[0] = new Image();
partiesandEventsArray[0].src = '../assets/images/PartiesandEvents1.png';
partiesandEventsArray[1] = new Image();
partiesandEventsArray[1].src = '../assets/images/PartiesandEvents2.png';
partiesandEventsArray[2] = new Image();
partiesandEventsArray[2].src = '../assets/images/PartiesandEvents3.png';

var partiesandEventscarouselSlide = document.getElementById('partiesandEvents_carousel');
partiesandEventsLoop = function(){
  for( var i = 0; i < partiesandEventsArray.length; i++ ){
    partiesandEventscarouselSlide.innerHTML += `
    <div class="room partiesandEventsroom">
      <img src=${partiesandEventsArray[i].src}></img>
    </div>`    
  }
}
partiesandEventsLoop();
partiesandEventsNextImg = function (){
  var partiesandEventsroom = document.querySelectorAll('.partiesandEventsroom');
  for(var i = 0; i<partiesandEventsroom.length; i++){
    partiesandEventsroom[i].remove();
  }
  this.partiesandEventsArray.push(this.partiesandEventsArray.shift())
  partiesandEventsLoop();
}

partiesandEventsPrevious = function (){
  var partiesandEventsroom = document.querySelectorAll('.partiesandEventsroom');
  for(var i = 0; i<partiesandEventsroom.length; i++){
    partiesandEventsroom[i].remove();
  }
  this.partiesandEventsArray.unshift(this.partiesandEventsArray.pop())
  partiesandEventsLoop();
}
// end of partiesandEvents carousel