import {
    AnimPaiement
} from '../js/AnimPaiement.js'

import {
    AnimTotal
} from '../js/AnimTotal.js'

var total = 0;
var prenom = "Réservation";
var nom = "anonyme";
var nomHebergement = "Hébergement : Suite";
var assuranceBagages = "";
var serviceVIP = "";
var passeExpress = "";
var restaurant24 = "";



// On lance l'application d'animation de la page paiement en laissant
// un délai de 0.4 secondes pour permettre le chargement de Vue.js
$('body').on('click', '#btnAppelPaiement', function() {
    total = $("#montantTotal").html();
    if ($("#prenom").val() != "" && $("#prenom").length > 0) {
        console.log($("#prenom").val());
        prenom = $("#prenom").val();
        nom = $("#nom").val();
    }
    if ($('#option1').is(':checked')) {
        assuranceBagages = "Assurance bagages";
    }
    if ($('#option2').is(':checked')) {
        serviceVIP = "Service VIP";
    }
    if ($('#option3').is(':checked')) {
        passeExpress = "Passe Express";
    }
    if ($('#option4').is(':checked')) {
        restaurant24 = "Restaurant 24/7";
    }
    setTimeout(function() {

        // On met à jour le total// 
        let lancerAnimPaiement = new AnimPaiement(total, prenom, nom, nomHebergement, assuranceBagages, serviceVIP, passeExpress, restaurant24);
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
    nomHebergement = "Hébergement : Lodge";
    let lancerAnimTotal = new AnimTotal(hebergement);
    $("#lodge > .hebergement_img").css("box-shadow", "inset 0 -5px 0 #32D096");
    $("#villa > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
    $("#suite > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
});
$('body').on('click', '#villa', function() {
    hebergement = "villa";
    nomHebergement = "Hébergement : Villa";
    let lancerAnimTotal = new AnimTotal(hebergement);
    $("#villa > .hebergement_img").css("box-shadow", "inset 0 -5px 0 #32D096");
    $("#lodge > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
    $("#suite > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
});
$('body').on('click', '#suite', function() {
    hebergement = "suite";
    nomHebergement = "Hébergement : Suite";
    let lancerAnimTotal = new AnimTotal(hebergement);
    $("#imgSuite").css("box-shadow", "inset 0 -5px 0 #32D096");
    $("#villa > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
    $("#lodge > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
});