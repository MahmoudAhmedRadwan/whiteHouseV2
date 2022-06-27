// start transportationServices
var transportationServicesArray = new Array();
transportationServicesArray[0] = new Image();
transportationServicesArray[0].src = '../assets/images/TransportationServices1.png';
transportationServicesArray[1] = new Image();
transportationServicesArray[1].src = '../assets/images/TransportationServices2.png';
transportationServicesArray[2] = new Image();
transportationServicesArray[2].src = '../assets/images/TransportationServices3.png';

var transportationServicescarouselSlide = document.getElementById('transportationServices_carousel');
transportationServicesLoop = function(){
  for( var i = 0; i < transportationServicesArray.length; i++ ){
    transportationServicescarouselSlide.innerHTML += `
    <div class="room transportationServicesroom">
      <img src=${transportationServicesArray[i].src}></img>
    </div>`    
  }
}
transportationServicesLoop();
transportationServicesNextImg = function (){
  var transportationServicesroom = document.querySelectorAll('.transportationServicesroom');
  for(var i = 0; i<transportationServicesroom.length; i++){
    transportationServicesroom[i].remove();
  }
  this.transportationServicesArray.push(this.transportationServicesArray.shift())
  transportationServicesLoop();
}

transportationServicesPrevious = function (){
  var transportationServicesroom = document.querySelectorAll('.transportationServicesroom');
  for(var i = 0; i<transportationServicesroom.length; i++){
    transportationServicesroom[i].remove();
  }
  this.transportationServicesArray.unshift(this.transportationServicesArray.pop())
  transportationServicesLoop();
}
// end of transportationServices carousel