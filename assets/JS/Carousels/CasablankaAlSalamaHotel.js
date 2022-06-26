
// start salamaHotel carousel
// var empressHall_main_img = document.querySelector('.empressHall_main_img');
// empressHall_main_img.innerHTML = `
// <img src="../../assets/images/EmpressHall1.png" alt="">
// `
var salamaHotelArray = new Array();
salamaHotelArray[0] = new Image();
salamaHotelArray[0].src = '../../assets/images/salamaHotel1.png';
salamaHotelArray[1] = new Image();
salamaHotelArray[1].src = '../../assets/images/salamaHotel2.png';
salamaHotelArray[2] = new Image();
salamaHotelArray[2].src = '../../assets/images/salamaHotel3.png';

var salamaHotelcarouselSlide = document.getElementById('salamaHotel_carousel');
salamaHotelLoop = function(){
  for( var i = 0; i < salamaHotelArray.length; i++ ){
    salamaHotelcarouselSlide.innerHTML += `
    <div class="room salamaHotelroom">
      <img src=${salamaHotelArray[i].src} onclick="salamaHotelMasterImg('${salamaHotelArray[i].src}')"></img>
    </div>`    
  }
}
salamaHotelLoop();

salamaHotelMasterImg = function(imgSrc){
    salamaHotel_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

salamaHotelNextImg = function (){
  var salamaHotelroom = document.querySelectorAll('.salamaHotelroom');
  for(var i = 0; i<salamaHotelroom.length; i++){
    salamaHotelroom[i].remove();
  }
  this.salamaHotelArray.push(this.salamaHotelArray.shift())
  salamaHotelLoop();
}

salamaHotelPrevious = function (){
  var salamaHotelroom = document.querySelectorAll('.salamaHotelroom');
  for(var i = 0; i<salamaHotelroom.length; i++){
    salamaHotelroom[i].remove();
  }
  this.salamaHotelArray.unshift(this.salamaHotelArray.pop())
  salamaHotelLoop();
}

// end of salamaHotel carousel

// start empressHall carousel
var empressHall_main_img = document.querySelector('.empressHall_main_img');
empressHall_main_img.innerHTML = `
<img src="../../assets/images/EmpressHall1.png" alt="">
`
var empressHallArray = new Array();
empressHallArray[0] = new Image();
empressHallArray[0].src = '../../assets/images/EmpressHall1.png';
empressHallArray[1] = new Image();
empressHallArray[1].src = '../../assets/images/EmpressHall2.png';
empressHallArray[2] = new Image();
empressHallArray[2].src = '../../assets/images/EmpressHall3.png';

var empressHallcarouselSlide = document.getElementById('empressHall_carousel');
empressHallLoop = function(){
  for( var i = 0; i < empressHallArray.length; i++ ){
    empressHallcarouselSlide.innerHTML += `
    <div class="room empressHallroom">
      <img src=${empressHallArray[i].src} onclick="empressHallMasterImg('${empressHallArray[i].src}')"></img>
    </div>`    
  }
}
empressHallLoop();

empressHallMasterImg = function(imgSrc){
    empressHall_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

empressHallNextImg = function (){
  var empressHallroom = document.querySelectorAll('.empressHallroom');
  for(var i = 0; i<empressHallroom.length; i++){
    empressHallroom[i].remove();
  }
  this.empressHallArray.push(this.empressHallArray.shift())
  empressHallLoop();
}

empressHallPrevious = function (){
  var empressHallroom = document.querySelectorAll('.empressHallroom');
  for(var i = 0; i<empressHallroom.length; i++){
    empressHallroom[i].remove();
  }
  this.empressHallArray.unshift(this.empressHallArray.pop())
  empressHallLoop();
}

// end of empressHall carousel

// start scheherazadeHall carousel
var scheherazadeHall_main_img = document.querySelector('.scheherazadeHall_main_img');
scheherazadeHall_main_img.innerHTML = `
<img src="../../assets/images/ScheherazadeHall1.png" alt="">
`
var scheherazadeHallArray = new Array();
scheherazadeHallArray[0] = new Image();
scheherazadeHallArray[0].src = '../../assets/images/ScheherazadeHall1.png';
scheherazadeHallArray[1] = new Image();
scheherazadeHallArray[1].src = '../../assets/images/ScheherazadeHall2.png';
scheherazadeHallArray[2] = new Image();
scheherazadeHallArray[2].src = '../../assets/images/ScheherazadeHall3.png';

var scheherazadeHallcarouselSlide = document.getElementById('scheherazadeHall_carousel');
scheherazadeHallLoop = function(){
  for( var i = 0; i < scheherazadeHallArray.length; i++ ){
    scheherazadeHallcarouselSlide.innerHTML += `
    <div class="room scheherazadeHallroom">
      <img src=${scheherazadeHallArray[i].src} onclick="scheherazadeHallMasterImg('${scheherazadeHallArray[i].src}')"></img>
    </div>`    
  }
}
scheherazadeHallLoop();

scheherazadeHallMasterImg = function(imgSrc){
    scheherazadeHall_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

scheherazadeHallNextImg = function (){
  var scheherazadeHallroom = document.querySelectorAll('.scheherazadeHallroom');
  for(var i = 0; i<scheherazadeHallroom.length; i++){
    scheherazadeHallroom[i].remove();
  }
  this.scheherazadeHallArray.push(this.scheherazadeHallArray.shift())
  scheherazadeHallLoop();
}

scheherazadeHallPrevious = function (){
  var scheherazadeHallroom = document.querySelectorAll('.scheherazadeHallroom');
  for(var i = 0; i<scheherazadeHallroom.length; i++){
    scheherazadeHallroom[i].remove();
  }
  this.scheherazadeHallArray.unshift(this.scheherazadeHallArray.pop())
  scheherazadeHallLoop();
}

// end of scheherazadeHall carousel

// start cleopatraHall carousel
var cleopatraHall_main_img = document.querySelector('.cleopatraHall_main_img');
cleopatraHall_main_img.innerHTML = `
<img src="../../assets/images/CleopatraHall1.png" alt="">
`
var cleopatraHallArray = new Array();
cleopatraHallArray[0] = new Image();
cleopatraHallArray[0].src = '../../assets/images/CleopatraHall1.png';
cleopatraHallArray[1] = new Image();
cleopatraHallArray[1].src = '../../assets/images/CleopatraHall2.png';
cleopatraHallArray[2] = new Image();
cleopatraHallArray[2].src = '../../assets/images/CleopatraHall3.png';

var cleopatraHallcarouselSlide = document.getElementById('cleopatraHall_carousel');
cleopatraHallLoop = function(){
  for( var i = 0; i < cleopatraHallArray.length; i++ ){
    cleopatraHallcarouselSlide.innerHTML += `
    <div class="room cleopatraHallroom">
      <img src=${cleopatraHallArray[i].src} onclick="cleopatraHallMasterImg('${cleopatraHallArray[i].src}')"></img>
    </div>`    
  }
}
cleopatraHallLoop();

cleopatraHallMasterImg = function(imgSrc){
    cleopatraHall_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

cleopatraHallNextImg = function (){
  var cleopatraHallroom = document.querySelectorAll('.cleopatraHallroom');
  for(var i = 0; i<cleopatraHallroom.length; i++){
    cleopatraHallroom[i].remove();
  }
  this.cleopatraHallArray.push(this.cleopatraHallArray.shift())
  cleopatraHallLoop();
}

cleopatraHallPrevious = function (){
  var cleopatraHallroom = document.querySelectorAll('.cleopatraHallroom');
  for(var i = 0; i<cleopatraHallroom.length; i++){
    cleopatraHallroom[i].remove();
  }
  this.cleopatraHallArray.unshift(this.cleopatraHallArray.pop())
  cleopatraHallLoop();
}

// end of cleopatraHall carousel

// start versaiHall carousel
var versaiHall_main_img = document.querySelector('.versaiHall_main_img');
versaiHall_main_img.innerHTML = `
<img src="../../assets/images/VersaiHall1.png" alt="">
`
var versaiHallArray = new Array();
versaiHallArray[0] = new Image();
versaiHallArray[0].src = '../../assets/images/VersaiHall1.png';
versaiHallArray[1] = new Image();
versaiHallArray[1].src = '../../assets/images/VersaiHall2.png';
versaiHallArray[2] = new Image();
versaiHallArray[2].src = '../../assets/images/VersaiHall3.png';

var versaiHallcarouselSlide = document.getElementById('versaiHall_carousel');
versaiHallLoop = function(){
  for( var i = 0; i < versaiHallArray.length; i++ ){
    versaiHallcarouselSlide.innerHTML += `
    <div class="room versaiHallroom">
      <img src=${versaiHallArray[i].src} onclick="versaiHallMasterImg('${versaiHallArray[i].src}')"></img>
    </div>`    
  }
}
versaiHallLoop();

versaiHallMasterImg = function(imgSrc){
    versaiHall_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

versaiHallNextImg = function (){
  var versaiHallroom = document.querySelectorAll('.versaiHallroom');
  for(var i = 0; i<versaiHallroom.length; i++){
    versaiHallroom[i].remove();
  }
  this.versaiHallArray.push(this.versaiHallArray.shift())
  versaiHallLoop();
}

versaiHallPrevious = function (){
  var versaiHallroom = document.querySelectorAll('.versaiHallroom');
  for(var i = 0; i<versaiHallroom.length; i++){
    versaiHallroom[i].remove();
  }
  this.versaiHallArray.unshift(this.versaiHallArray.pop())
  versaiHallLoop();
}

// end of versaiHall carousel

// start palaceHallforCelebrations carousel
var palaceHallforCelebrations_main_img = document.querySelector('.palaceHallforCelebrations_main_img');
palaceHallforCelebrations_main_img.innerHTML = `
<img src="../../assets/images/PalaceHallforCelebrations1.png" alt="">
`
var palaceHallforCelebrationsArray = new Array();
palaceHallforCelebrationsArray[0] = new Image();
palaceHallforCelebrationsArray[0].src = '../../assets/images/PalaceHallforCelebrations1.png';
palaceHallforCelebrationsArray[1] = new Image();
palaceHallforCelebrationsArray[1].src = '../../assets/images/PalaceHallforCelebrations2.png';
palaceHallforCelebrationsArray[2] = new Image();
palaceHallforCelebrationsArray[2].src = '../../assets/images/PalaceHallforCelebrations3.png';

var palaceHallforCelebrationscarouselSlide = document.getElementById('palaceHallforCelebrations_carousel');
palaceHallforCelebrationsLoop = function(){
  for( var i = 0; i < palaceHallforCelebrationsArray.length; i++ ){
    palaceHallforCelebrationscarouselSlide.innerHTML += `
    <div class="room palaceHallforCelebrationsroom">
      <img src=${palaceHallforCelebrationsArray[i].src} onclick="palaceHallforCelebrationsMasterImg('${palaceHallforCelebrationsArray[i].src}')"></img>
    </div>`    
  }
}
palaceHallforCelebrationsLoop();

palaceHallforCelebrationsMasterImg = function(imgSrc){
    palaceHallforCelebrations_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

palaceHallforCelebrationsNextImg = function (){
  var palaceHallforCelebrationsroom = document.querySelectorAll('.palaceHallforCelebrationsroom');
  for(var i = 0; i<palaceHallforCelebrationsroom.length; i++){
    palaceHallforCelebrationsroom[i].remove();
  }
  this.palaceHallforCelebrationsArray.push(this.palaceHallforCelebrationsArray.shift())
  palaceHallforCelebrationsLoop();
}

palaceHallforCelebrationsPrevious = function (){
  var palaceHallforCelebrationsroom = document.querySelectorAll('.palaceHallforCelebrationsroom');
  for(var i = 0; i<palaceHallforCelebrationsroom.length; i++){
    palaceHallforCelebrationsroom[i].remove();
  }
  this.palaceHallforCelebrationsArray.unshift(this.palaceHallforCelebrationsArray.pop())
  palaceHallforCelebrationsLoop();
}

// end of palaceHallforCelebrations carousel

// start jasmineHall carousel
var jasmineHall_main_img = document.querySelector('.jasmineHall_main_img');
jasmineHall_main_img.innerHTML = `
<img src="../../assets/images/JasmineHall1.png" alt="">
`
var jasmineHallArray = new Array();
jasmineHallArray[0] = new Image();
jasmineHallArray[0].src = '../../assets/images/JasmineHall1.png';
jasmineHallArray[1] = new Image();
jasmineHallArray[1].src = '../../assets/images/JasmineHall2.png';
jasmineHallArray[2] = new Image();
jasmineHallArray[2].src = '../../assets/images/JasmineHall3.png';

var jasmineHallcarouselSlide = document.getElementById('jasmineHall_carousel');
jasmineHallLoop = function(){
  for( var i = 0; i < jasmineHallArray.length; i++ ){
    jasmineHallcarouselSlide.innerHTML += `
    <div class="room jasmineHallroom">
      <img src=${jasmineHallArray[i].src} onclick="jasmineHallMasterImg('${jasmineHallArray[i].src}')"></img>
    </div>`    
  }
}
jasmineHallLoop();

jasmineHallMasterImg = function(imgSrc){
    jasmineHall_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

jasmineHallNextImg = function (){
  var jasmineHallroom = document.querySelectorAll('.jasmineHallroom');
  for(var i = 0; i<jasmineHallroom.length; i++){
    jasmineHallroom[i].remove();
  }
  this.jasmineHallArray.push(this.jasmineHallArray.shift())
  jasmineHallLoop();
}

jasmineHallPrevious = function (){
  var jasmineHallroom = document.querySelectorAll('.jasmineHallroom');
  for(var i = 0; i<jasmineHallroom.length; i++){
    jasmineHallroom[i].remove();
  }
  this.jasmineHallArray.unshift(this.jasmineHallArray.pop())
  jasmineHallLoop();
}

// end of jasmineHall carousel