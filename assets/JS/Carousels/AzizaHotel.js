// start alflelawalelaHall carousel
var casablancaPalaceHotelArray = new Array();
casablancaPalaceHotelArray[0] = new Image();
casablancaPalaceHotelArray[0].src = '../../assets/images/CasablancaPalaceHotel1.png';
casablancaPalaceHotelArray[1] = new Image();
casablancaPalaceHotelArray[1].src = '../../assets/images/CasablancaPalaceHotel2.png';
casablancaPalaceHotelArray[2] = new Image();
casablancaPalaceHotelArray[2].src = '../../assets/images/CasablancaPalaceHotel3.png';

var casablancaPalaceHotelcarouselSlide = document.getElementById('casablancaPalaceHotel_carousel');
casablancaPalaceHotelLoop = function(){
  for( var i = 0; i < casablancaPalaceHotelArray.length; i++ ){
    casablancaPalaceHotelcarouselSlide.innerHTML += `
    <div class="room casablancaPalaceHotelroom">
      <img src=${casablancaPalaceHotelArray[i].src}></img>
    </div>`    
  }
}
casablancaPalaceHotelLoop();
casablancaPalaceHotelNextImg = function (){
  var casablancaPalaceHotelroom = document.querySelectorAll('.casablancaPalaceHotelroom');
  for(var i = 0; i<casablancaPalaceHotelroom.length; i++){
    casablancaPalaceHotelroom[i].remove();
  }
  this.casablancaPalaceHotelArray.push(this.casablancaPalaceHotelArray.shift())
  casablancaPalaceHotelLoop();
}

casablancaPalaceHotelPrevious = function (){
  var casablancaPalaceHotelroom = document.querySelectorAll('.casablancaPalaceHotelroom');
  for(var i = 0; i<casablancaPalaceHotelroom.length; i++){
    casablancaPalaceHotelroom[i].remove();
  }
  this.casablancaPalaceHotelArray.unshift(this.casablancaPalaceHotelArray.pop())
  casablancaPalaceHotelLoop();
}
// end of casablancaPalaceHotel carousel