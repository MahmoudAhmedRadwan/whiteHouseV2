// start aziziaousel
var aziziaArray = new Array();
aziziaArray[0] = new Image();
aziziaArray[0].src = '../../assets/images/Azizia1.png';
aziziaArray[1] = new Image();
aziziaArray[1].src = '../../assets/images/Azizia2.png';
aziziaArray[2] = new Image();
aziziaArray[2].src = '../../assets/images/Azizia3.png';

var aziziacarouselSlide = document.getElementById('azizia_carousel');
aziziaLoop = function(){
  for( var i = 0; i < aziziaArray.length; i++ ){
    aziziacarouselSlide.innerHTML += `
    <div class="room aziziaroom">
      <img src=${aziziaArray[i].src}></img>
    </div>`    
  }
}
aziziaLoop();
aziziaNextImg = function (){
  var aziziaroom = document.querySelectorAll('.aziziaroom');
  for(var i = 0; i<aziziaroom.length; i++){
    aziziaroom[i].remove();
  }
  this.aziziaArray.push(this.aziziaArray.shift())
  aziziaLoop();
}

aziziaPrevious = function (){
  var aziziaroom = document.querySelectorAll('.aziziaroom');
  for(var i = 0; i<aziziaroom.length; i++){
    aziziaroom[i].remove();
  }
  this.aziziaArray.unshift(this.aziziaArray.pop())
  aziziaLoop();
}
// end of azizia carousel