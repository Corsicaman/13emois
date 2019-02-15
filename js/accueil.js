
(function theLoop (i) {
  setTimeout(function () {
    if (i<14) {        
      $('#accueil > h1:nth-child(2)').html(i+"e");
      i++;      
      theLoop(i);
    }
    else {
        fermerAccueil(0);
    }
  }, 30+i*20);
})(1);


function fermerAccueil(i) {
    if (i == 0) {
        $('#accueil > h1:nth-child(1)').css("opacity","0");
        $('#accueil > h1:nth-child(3)').css("opacity","0");

        setTimeout(function() {
            fermerAccueil(1);
        }, 700)
    }
    else if (i == 1) {
        
        $('#accueil > h1:nth-child(2)').css("margin-left","15vw");
        $('#accueil > h1:nth-child(2)').css("color","white");
        $('#accueil').css("background-color","#34A2FF");  

        setTimeout(function() {
            fermerAccueil(2);
        }, 1500) 
    }
    else if (i == 2) {
        $('#accueil > h1:nth-child(2)').css("transform","translateY(-100px)");
        $('#accueil > h1:nth-child(2)').css("opacity","0");
        $('#accueil').css("opacity","0");
 

        setTimeout(function() {
            fermerAccueil(3);
        }, 500) 
    }
    else if (i == 3) {
        $('#accueil').css("display","none");
    }
}