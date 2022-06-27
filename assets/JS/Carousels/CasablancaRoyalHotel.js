// start alflelawalelaHall carousel
var royalHotelArray = new Array();
royalHotelArray[0] = new Image();
royalHotelArray[0].src = '../../assets/images/royalHotel1.png';
royalHotelArray[1] = new Image();
royalHotelArray[1].src = '../../assets/images/royalHotel2.png';
royalHotelArray[2] = new Image();
royalHotelArray[2].src = '../../assets/images/royalHotel3.png';

var royalHotelcarouselSlide = document.getElementById('royalHotel_carousel');
royalHotelLoop = function(){
  for( var i = 0; i < royalHotelArray.length; i++ ){
    royalHotelcarouselSlide.innerHTML += `
    <div class="room royalHotelroom">
      <img src=${royalHotelArray[i].src}></img>
    </div>`    
  }
}
royalHotelLoop();
royalHotelNextImg = function (){
  var royalHotelroom = document.querySelectorAll('.royalHotelroom');
  for(var i = 0; i<royalHotelroom.length; i++){
    royalHotelroom[i].remove();
  }
  this.royalHotelArray.push(this.royalHotelArray.shift())
  royalHotelLoop();
}

royalHotelPrevious = function (){
  var royalHotelroom = document.querySelectorAll('.royalHotelroom');
  for(var i = 0; i<royalHotelroom.length; i++){
    royalHotelroom[i].remove();
  }
  this.royalHotelArray.unshift(this.royalHotelArray.pop())
  royalHotelLoop();
}
// end of royalHotel carousel

// start alflelawalelaHall carousel
var alflelawalelaHall_main_img = document.querySelector('.alflelawalelaHall_main_img');
alflelawalelaHall_main_img.innerHTML = `
<img src="../../assets/images/AlflelawalelaHall1.png" alt="">
`
var alflelawalelaHallArray = new Array();
alflelawalelaHallArray[0] = new Image();
alflelawalelaHallArray[0].src = '../../assets/images/AlflelawalelaHall1.png';
alflelawalelaHallArray[1] = new Image();
alflelawalelaHallArray[1].src = '../../assets/images/AlflelawalelaHall2.png';
alflelawalelaHallArray[2] = new Image();
alflelawalelaHallArray[2].src = '../../assets/images/AlflelawalelaHall3.png';

var alflelawalelaHallcarouselSlide = document.getElementById('alflelawalelaHall_carousel');
alflelawalelaHallLoop = function(){
  for( var i = 0; i < alflelawalelaHallArray.length; i++ ){
    alflelawalelaHallcarouselSlide.innerHTML += `
    <div class="room alflelawalelaHallroom">
      <img src=${alflelawalelaHallArray[i].src} onclick="alflelawalelaHallMasterImg('${alflelawalelaHallArray[i].src}')"></img>
    </div>`    
  }
}
alflelawalelaHallLoop();

alflelawalelaHallMasterImg = function(imgSrc){
  alflelawalelaHall_main_img.innerHTML = `
<img src='${imgSrc}' alt="">
` 
}

alflelawalelaHallNextImg = function (){
  var alflelawalelaHallroom = document.querySelectorAll('.alflelawalelaHallroom');
  for(var i = 0; i<alflelawalelaHallroom.length; i++){
    alflelawalelaHallroom[i].remove();
  }
  this.alflelawalelaHallArray.push(this.alflelawalelaHallArray.shift())
  alflelawalelaHallLoop();
}

alflelawalelaHallPrevious = function (){
  var alflelawalelaHallroom = document.querySelectorAll('.alflelawalelaHallroom');
  for(var i = 0; i<alflelawalelaHallroom.length; i++){
    alflelawalelaHallroom[i].remove();
  }
  this.alflelawalelaHallArray.unshift(this.alflelawalelaHallArray.pop())
  alflelawalelaHallLoop();
}

// end of alflelawalelaHall carousel

    // start cinderellaHall carousel
    var cinderellaHall_main_img = document.querySelector('.cinderellaHall_main_img');
    cinderellaHall_main_img.innerHTML = `
    <img src="../../assets/images/CinderellaHall1.png" alt="">
    `
    var cinderellaHallArray = new Array();
    cinderellaHallArray[0] = new Image();
    cinderellaHallArray[0].src = '../../assets/images/CinderellaHall1.png';
    cinderellaHallArray[1] = new Image();
    cinderellaHallArray[1].src = '../../assets/images/CinderellaHall2.png';
    cinderellaHallArray[2] = new Image();
    cinderellaHallArray[2].src = '../../assets/images/CinderellaHall3.png';

    var cinderellaHallcarouselSlide = document.getElementById('cinderellaHall_carousel');
    cinderellaHallLoop = function(){
    for( var i = 0; i < cinderellaHallArray.length; i++ ){
        cinderellaHallcarouselSlide.innerHTML += `
        <div class="room cinderellaHallroom">
        <img src=${cinderellaHallArray[i].src} onclick="cinderellaHallMasterImg('${cinderellaHallArray[i].src}')"></img>
        </div>`    
    }
    }
    cinderellaHallLoop();

    cinderellaHallMasterImg = function(imgSrc){
    cinderellaHall_main_img.innerHTML = `
    <img src='${imgSrc}' alt="">
    ` 
    }

    cinderellaHallNextImg = function (){
    var cinderellaHallroom = document.querySelectorAll('.cinderellaHallroom');
    for(var i = 0; i<cinderellaHallroom.length; i++){
        cinderellaHallroom[i].remove();
    }
    this.cinderellaHallArray.push(this.cinderellaHallArray.shift())
    cinderellaHallLoop();
    }

    cinderellaHallPrevious = function (){
    var cinderellaHallroom = document.querySelectorAll('.cinderellaHallroom');
    for(var i = 0; i<cinderellaHallroom.length; i++){
        cinderellaHallroom[i].remove();
    }
    this.cinderellaHallArray.unshift(this.cinderellaHallArray.pop())
    cinderellaHallLoop();
    }

    // end of cinderellaHall carousel

    // start alLualuaHall carousel
    var alLualuaHall_main_img = document.querySelector('.alLualuaHall_main_img');
    alLualuaHall_main_img.innerHTML = `
    <img src="../../assets/images/AlLualuaHall1.png" alt="">
    `
    var alLualuaHallArray = new Array();
    alLualuaHallArray[0] = new Image();
    alLualuaHallArray[0].src = '../../assets/images/AlLualuaHall1.png';
    alLualuaHallArray[1] = new Image();
    alLualuaHallArray[1].src = '../../assets/images/AlLualuaHall2.png';
    alLualuaHallArray[2] = new Image();
    alLualuaHallArray[2].src = '../../assets/images/AlLualuaHall3.png';

    var alLualuaHallcarouselSlide = document.getElementById('alLualuaHall_carousel');
    alLualuaHallLoop = function(){
    for( var i = 0; i < alLualuaHallArray.length; i++ ){
        alLualuaHallcarouselSlide.innerHTML += `
        <div class="room alLualuaHallroom">
        <img src=${alLualuaHallArray[i].src} onclick="alLualuaHallMasterImg('${alLualuaHallArray[i].src}')"></img>
        </div>`    
    }
    }
    alLualuaHallLoop();

    alLualuaHallMasterImg = function(imgSrc){
    alLualuaHall_main_img.innerHTML = `
    <img src='${imgSrc}' alt="">
    ` 
    }

    alLualuaHallNextImg = function (){
    var alLualuaHallroom = document.querySelectorAll('.alLualuaHallroom');
    for(var i = 0; i<alLualuaHallroom.length; i++){
        alLualuaHallroom[i].remove();
    }
    this.alLualuaHallArray.push(this.alLualuaHallArray.shift())
    alLualuaHallLoop();
    }

    alLualuaHallPrevious = function (){
    var alLualuaHallroom = document.querySelectorAll('.alLualuaHallroom');
    for(var i = 0; i<alLualuaHallroom.length; i++){
        alLualuaHallroom[i].remove();
    }
    this.alLualuaHallArray.unshift(this.alLualuaHallArray.pop())
    alLualuaHallLoop();
    }

    // end of alLualuaHall carousel