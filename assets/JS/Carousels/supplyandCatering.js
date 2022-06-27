// start aziziaousel
var supplyandCateringArray = new Array();
supplyandCateringArray[0] = new Image();
supplyandCateringArray[0].src = '../assets/images/SupplyandCatering1.png';
supplyandCateringArray[1] = new Image();
supplyandCateringArray[1].src = '../assets/images/SupplyandCatering2.png';
supplyandCateringArray[2] = new Image();
supplyandCateringArray[2].src = '../assets/images/SupplyandCatering3.png';

var supplyandCateringcarouselSlide = document.getElementById('supplyandCatering_carousel');
supplyandCateringLoop = function(){
  for( var i = 0; i < supplyandCateringArray.length; i++ ){
    supplyandCateringcarouselSlide.innerHTML += `
    <div class="room supplyandCateringroom">
      <img src=${supplyandCateringArray[i].src}></img>
    </div>`    
  }
}
supplyandCateringLoop();
supplyandCateringNextImg = function (){
  var supplyandCateringroom = document.querySelectorAll('.supplyandCateringroom');
  for(var i = 0; i<supplyandCateringroom.length; i++){
    supplyandCateringroom[i].remove();
  }
  this.supplyandCateringArray.push(this.supplyandCateringArray.shift())
  supplyandCateringLoop();
}

supplyandCateringPrevious = function (){
  var supplyandCateringroom = document.querySelectorAll('.supplyandCateringroom');
  for(var i = 0; i<supplyandCateringroom.length; i++){
    supplyandCateringroom[i].remove();
  }
  this.supplyandCateringArray.unshift(this.supplyandCateringArray.pop())
  supplyandCateringLoop();
}
// end of supplyandCatering carousel