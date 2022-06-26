var domain = "https://www.casablanca-ksa.com";
// var domain = "file:///C:/Users/mahmo/Desktop/white-house2/white-house";
// https://www.casablanca-ksa.com/ar/Home.html

function selectFun(event) {
    // var lang = document.querySelector('.language');
    // var langSelected = lang.options[lang.selectedIndex].text;
    var option = event.target.value;

    if(option == 'AR'){
        window.location = (domain + "/ar/Home.html")
    } else if (option == 'EN'){
        window.location = (domain + "/en/Home.html")
    }
    
  }

  var mobile_menu = document.querySelector('.mobile_menu');
  var mobile_menu_icone = document.querySelector('.mobile_menu_icone');
  var close_icone = document.querySelector('.close_icone');

  mobile_menu_icone.addEventListener('click', function(){
    mobile_menu.classList.remove('display_none');
  })
  close_icone.addEventListener('click', function(){
    mobile_menu.classList.add('display_none');
  })



