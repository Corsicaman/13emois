import {
    AnimPaiement
} from '../js/AnimPaiement.js'

import {
    AnimTotal
} from '../js/AnimTotal.js'



// On lance l'application d'animation de la page paiement en laissant
// un délai de 0.4 secondes pour permettre le chargement de Vue.js
$('body').on('click', '#btnAppelPaiement', function() {
    setTimeout(function() {
    	// On met à jour le total
        let lancerAnimPaiement = new AnimPaiement();
    }, 400);
});



// Hébergement par défaut
var hebergement = "suite";

// Lorsqu'on active une option...
$('body').on('click', '.leToggle', function() {
	// On met à jour le total
    let lancerAnimTotal = new AnimTotal(hebergement);
});

$('body').on('click', '#lodge', function() {
    hebergement = "lodge";
    let lancerAnimTotal = new AnimTotal(hebergement);
    $("#lodge > .hebergement_img").css("box-shadow", "inset 0 -5px 0 #32D096");
    $("#villa > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
    $("#suite > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
});
$('body').on('click', '#villa', function() {
    hebergement = "villa";
    let lancerAnimTotal = new AnimTotal(hebergement);
    $("#villa > .hebergement_img").css("box-shadow", "inset 0 -5px 0 #32D096");
    $("#lodge > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
    $("#suite > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
});
$('body').on('click', '#suite', function() {
    hebergement = "suite";
    let lancerAnimTotal = new AnimTotal(hebergement);
    $("#imgSuite").css("box-shadow", "inset 0 -5px 0 #32D096");
    $("#villa > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
    $("#lodge > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
});