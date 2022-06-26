var main_img = document.querySelector('.main_img');
main_img.innerHTML = `
<img src="../../assets/images/EwanRestaurant1.png" alt="">
`
// start ewan hotel
var ewanArray = new Array();
ewanArray[0] = new Image();
ewanArray[0].src = '../../assets/images/EwanRestaurant1.png';
ewanArray[1] = new Image();
ewanArray[1].src = '../../assets/images/EwanRestaurant2.png';
ewanArray[2] = new Image();
ewanArray[2].src = '../../assets/images/EwanRestaurant3.png';

var ewancarouselSlide = document.getElementById('ewanRooms_carousel');
ewanLoop = function(){
  for( var i = 0; i < ewanArray.length; i++ ){
    ewancarouselSlide.innerHTML += `
    <div class="room ewanroom">
      <img src=${ewanArray[i].src} onclick="ewanMasterImg('${ewanArray[i].src}')"></img>
    </div>`    
  }
}
ewanLoop();

ewanMasterImg = function(imgSrc){
  main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

ewanNextImg = function (){
  var ewanroom = document.querySelectorAll('.ewanroom');
  for(var i = 0; i<ewanroom.length; i++){
    ewanroom[i].remove();
  }
  this.ewanArray.push(this.ewanArray.shift())
  ewanLoop();
}

ewanPrevious = function (){
  var ewanroom = document.querySelectorAll('.ewanroom');
  for(var i = 0; i<ewanroom.length; i++){
    ewanroom[i].remove();
  }
  this.ewanArray.unshift(this.ewanArray.pop())
  ewanLoop();
}

// end of home carousel

// start bostan carousel
var bostan_man_img = document.querySelector('.bostan_man_img');
bostan_man_img.innerHTML = `
<img src="../../assets/images/bostan2.jpg" alt="">
`
// start ewan hotel
var bostanArray = new Array();
bostanArray[0] = new Image();
bostanArray[0].src = '../../assets/images/bostan2.jpg';
bostanArray[1] = new Image();
bostanArray[1].src = '../../assets/images/AlBustanRestaurant2.png';
bostanArray[2] = new Image();
bostanArray[2].src = '../../assets/images/AlBustanRestaurant3.png';

var bostancarouselSlide = document.getElementById('bostanRooms_carousel');
bostanLoop = function(){
  for( var i = 0; i < bostanArray.length; i++ ){
    bostancarouselSlide.innerHTML += `
    <div class="room bostanroom">
      <img src=${bostanArray[i].src} onclick="bostanMasterImg('${bostanArray[i].src}')"></img>
    </div>`    
  }
}
bostanLoop();

bostanMasterImg = function(imgSrc){
  bostan_man_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

bostanNextImg = function (){
  var bostanroom = document.querySelectorAll('.bostanroom');
  for(var i = 0; i<bostanroom.length; i++){
    bostanroom[i].remove();
  }
  this.bostanArray.push(this.bostanArray.shift())
  bostanLoop();
}

bostanPrevious = function (){
  var bostanroom = document.querySelectorAll('.bostanroom');
  for(var i = 0; i<bostanroom.length; i++){
    bostanroom[i].remove();
  }
  this.bostanArray.unshift(this.bostanArray.pop())
  bostanLoop();
}

// end of bostan carousel


// start coffeegarden carousel
var coffeegarden_man_img = document.querySelector('.coffeegarden_man_img');
coffeegarden_man_img.innerHTML = `
<img src="../../assets/images/Coffeegarden1.png" alt="">
`
// start ewan hotel
var coffeegardenArray = new Array();
coffeegardenArray[0] = new Image();
coffeegardenArray[0].src = '../../assets/images/Coffeegarden1.png';
coffeegardenArray[1] = new Image();
coffeegardenArray[1].src = '../../assets/images/Coffeegarden2.png';
coffeegardenArray[2] = new Image();
coffeegardenArray[2].src = '../../assets/images/Coffeegarden3.png';

var coffeegardencarouselSlide = document.getElementById('coffeegardenRooms_carousel');
coffeegardenLoop = function(){
  for( var i = 0; i < coffeegardenArray.length; i++ ){
    coffeegardencarouselSlide.innerHTML += `
    <div class="room coffeegardenroom">
      <img src=${coffeegardenArray[i].src} onclick="coffeegardenMasterImg('${coffeegardenArray[i].src}')"></img>
    </div>`    
  }
}
coffeegardenLoop();

coffeegardenMasterImg = function(imgSrc){
  coffeegarden_man_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

coffeegardenNextImg = function (){
  var coffeegardenroom = document.querySelectorAll('.coffeegardenroom');
  for(var i = 0; i<coffeegardenroom.length; i++){
    coffeegardenroom[i].remove();
  }
  this.coffeegardenArray.push(this.coffeegardenArray.shift())
  coffeegardenLoop();
}

coffeegardenPrevious = function (){
  var coffeegardenroom = document.querySelectorAll('.coffeegardenroom');
  for(var i = 0; i<coffeegardenroom.length; i++){
    coffeegardenroom[i].remove();
  }
  this.coffeegardenArray.unshift(this.coffeegardenArray.pop())
  coffeegardenLoop();
}

// end of coffeegarden carousel


// start baristaCafe carousel
var baristaCafe_main_img = document.querySelector('.baristaCafe_main_img');
baristaCafe_main_img.innerHTML = `
<img src="../../assets/images/BaristaCafeI1.png" alt="">
`
var baristaCafeArray = new Array();
baristaCafeArray[0] = new Image();
baristaCafeArray[0].src = '../../assets/images/BaristaCafeI1.png';
baristaCafeArray[1] = new Image();
baristaCafeArray[1].src = '../../assets/images/BaristaCafeI2.png';
baristaCafeArray[2] = new Image();
baristaCafeArray[2].src = '../../assets/images/BaristaCafeI3.png';

var baristaCafecarouselSlide = document.getElementById('baristaCafeRooms_carousel');
baristaCafeLoop = function(){
  for( var i = 0; i < baristaCafeArray.length; i++ ){
    baristaCafecarouselSlide.innerHTML += `
    <div class="room baristaCaferoom">
      <img src=${baristaCafeArray[i].src} onclick="baristaCafeMasterImg('${baristaCafeArray[i].src}')"></img>
    </div>`    
  }
}
baristaCafeLoop();

baristaCafeMasterImg = function(imgSrc){
  baristaCafe_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

baristaCafeNextImg = function (){
  var baristaCaferoom = document.querySelectorAll('.baristaCaferoom');
  for(var i = 0; i<baristaCaferoom.length; i++){
    baristaCaferoom[i].remove();
  }
  this.baristaCafeArray.push(this.baristaCafeArray.shift())
  baristaCafeLoop();
}

baristaCafePrevious = function (){
  var baristaCaferoom = document.querySelectorAll('.baristaCaferoom');
  for(var i = 0; i<baristaCaferoom.length; i++){
    baristaCaferoom[i].remove();
  }
  this.baristaCafeArray.unshift(this.baristaCafeArray.pop())
  baristaCafeLoop();
}

// end of baristaCafe carousel


// start lemongrassRestaurant carousel
var lemongrassRestaurant_main_img = document.querySelector('.lemongrassRestaurant_main_img');
lemongrassRestaurant_main_img.innerHTML = `
<img src="../../assets/images/LemongrassRestaurant1.png" alt="">
`
var lemongrassRestaurantArray = new Array();
lemongrassRestaurantArray[0] = new Image();
lemongrassRestaurantArray[0].src = '../../assets/images/LemongrassRestaurant1.png';
lemongrassRestaurantArray[1] = new Image();
lemongrassRestaurantArray[1].src = '../../assets/images/LemongrassRestaurant2.png';
lemongrassRestaurantArray[2] = new Image();
lemongrassRestaurantArray[2].src = '../../assets/images/LemongrassRestaurant3.png';

var lemongrassRestaurantcarouselSlide = document.getElementById('lemongrassRestaurantRooms_carousel');
lemongrassRestaurantLoop = function(){
  for( var i = 0; i < lemongrassRestaurantArray.length; i++ ){
    lemongrassRestaurantcarouselSlide.innerHTML += `
    <div class="room lemongrassRestaurantroom">
      <img src=${lemongrassRestaurantArray[i].src} onclick="lemongrassRestaurantMasterImg('${lemongrassRestaurantArray[i].src}')"></img>
    </div>`    
  }
}
lemongrassRestaurantLoop();

lemongrassRestaurantMasterImg = function(imgSrc){
  lemongrassRestaurant_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

lemongrassRestaurantNextImg = function (){
  var lemongrassRestaurantroom = document.querySelectorAll('.lemongrassRestaurantroom');
  for(var i = 0; i<lemongrassRestaurantroom.length; i++){
    lemongrassRestaurantroom[i].remove();
  }
  this.lemongrassRestaurantArray.push(this.lemongrassRestaurantArray.shift())
  lemongrassRestaurantLoop();
}

lemongrassRestaurantPrevious = function (){
  var lemongrassRestaurantroom = document.querySelectorAll('.lemongrassRestaurantroom');
  for(var i = 0; i<lemongrassRestaurantroom.length; i++){
    lemongrassRestaurantroom[i].remove();
  }
  this.lemongrassRestaurantArray.unshift(this.lemongrassRestaurantArray.pop())
  lemongrassRestaurantLoop();
}

// end of lemongrassRestaurant carousel


// start alfursanHallll carousel
var alfursanHallll_main_img = document.querySelector('.alfursanHallll_main_img');
alfursanHallll_main_img.innerHTML = `
<img src="../../assets/images/AlfursanHallll1.png" alt="">
`
var alfursanHallllArray = new Array();
alfursanHallllArray[0] = new Image();
alfursanHallllArray[0].src = '../../assets/images/AlfursanHallll1.png';
alfursanHallllArray[1] = new Image();
alfursanHallllArray[1].src = '../../assets/images/AlfursanHallll2.png';
alfursanHallllArray[2] = new Image();
alfursanHallllArray[2].src = '../../assets/images/AlfursanHallll3.png';

var alfursanHallllcarouselSlide = document.getElementById('alfursanHallllRooms_carousel');
alfursanHallllLoop = function(){
  for( var i = 0; i < alfursanHallllArray.length; i++ ){
    alfursanHallllcarouselSlide.innerHTML += `
    <div class="room alfursanHallllroom">
      <img src=${alfursanHallllArray[i].src} onclick="alfursanHallllMasterImg('${alfursanHallllArray[i].src}')"></img>
    </div>`    
  }
}
alfursanHallllLoop();

alfursanHallllMasterImg = function(imgSrc){
  alfursanHallll_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

alfursanHallllNextImg = function (){
  var alfursanHallllroom = document.querySelectorAll('.alfursanHallllroom');
  for(var i = 0; i<alfursanHallllroom.length; i++){
    alfursanHallllroom[i].remove();
  }
  this.alfursanHallllArray.push(this.alfursanHallllArray.shift())
  alfursanHallllLoop();
}

alfursanHallllPrevious = function (){
  var alfursanHallllroom = document.querySelectorAll('.alfursanHallllroom');
  for(var i = 0; i<alfursanHallllroom.length; i++){
    alfursanHallllroom[i].remove();
  }
  this.alfursanHallllArray.unshift(this.alfursanHallllArray.pop())
  alfursanHallllLoop();
}

// end of alfursanHallll carousel


// start myflowerHall carousel
var myflowerHall_main_img = document.querySelector('.myflowerHall_main_img');
myflowerHall_main_img.innerHTML = `
<img src="../../assets/images/MyflowerHall1.png" alt="">
`
var myflowerHallArray = new Array();
myflowerHallArray[0] = new Image();
myflowerHallArray[0].src = '../../assets/images/MyflowerHall1.png';
myflowerHallArray[1] = new Image();
myflowerHallArray[1].src = '../../assets/images/MyflowerHall2.png';
myflowerHallArray[2] = new Image();
myflowerHallArray[2].src = '../../assets/images/MyflowerHall3.png';

var myflowerHallcarouselSlide = document.getElementById('myflowerHallRooms_carousel');
myflowerHallLoop = function(){
  for( var i = 0; i < myflowerHallArray.length; i++ ){
    myflowerHallcarouselSlide.innerHTML += `
    <div class="room myflowerHallroom">
      <img src=${myflowerHallArray[i].src} onclick="myflowerHallMasterImg('${myflowerHallArray[i].src}')"></img>
    </div>`    
  }
}
myflowerHallLoop();

myflowerHallMasterImg = function(imgSrc){
  myflowerHall_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

myflowerHallNextImg = function (){
  var myflowerHallroom = document.querySelectorAll('.myflowerHallroom');
  for(var i = 0; i<myflowerHallroom.length; i++){
    myflowerHallroom[i].remove();
  }
  this.myflowerHallArray.push(this.myflowerHallArray.shift())
  myflowerHallLoop();
}

myflowerHallPrevious = function (){
  var myflowerHallroom = document.querySelectorAll('.myflowerHallroom');
  for(var i = 0; i<myflowerHallroom.length; i++){
    myflowerHallroom[i].remove();
  }
  this.myflowerHallArray.unshift(this.myflowerHallArray.pop())
  myflowerHallLoop();
}

// end of myflowerHall carousel


// start elyseehall carousel
var elyseehall_main_img = document.querySelector('.elyseehall_main_img');
elyseehall_main_img.innerHTML = `
<img src="../../assets/images/Elyseehall1.png" alt="">
`
var elyseehallArray = new Array();
elyseehallArray[0] = new Image();
elyseehallArray[0].src = '../../assets/images/Elyseehall1.png';
elyseehallArray[1] = new Image();
elyseehallArray[1].src = '../../assets/images/Elyseehall2.png';
elyseehallArray[2] = new Image();
elyseehallArray[2].src = '../../assets/images/Elyseehall3.png';

var elyseehallcarouselSlide = document.getElementById('elyseehallRooms_carousel');
elyseehallLoop = function(){
  for( var i = 0; i < elyseehallArray.length; i++ ){
    elyseehallcarouselSlide.innerHTML += `
    <div class="room elyseehallroom">
      <img src=${elyseehallArray[i].src} onclick="elyseehallMasterImg('${elyseehallArray[i].src}')"></img>
    </div>`    
  }
}
elyseehallLoop();

elyseehallMasterImg = function(imgSrc){
  elyseehall_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

elyseehallNextImg = function (){
  var elyseehallroom = document.querySelectorAll('.elyseehallroom');
  for(var i = 0; i<elyseehallroom.length; i++){
    elyseehallroom[i].remove();
  }
  this.elyseehallArray.push(this.elyseehallArray.shift())
  elyseehallLoop();
}

elyseehallPrevious = function (){
  var elyseehallroom = document.querySelectorAll('.elyseehallroom');
  for(var i = 0; i<elyseehallroom.length; i++){
    elyseehallroom[i].remove();
  }
  this.elyseehallArray.unshift(this.elyseehallArray.pop())
  elyseehallLoop();
}

// end of elyseehall carousel