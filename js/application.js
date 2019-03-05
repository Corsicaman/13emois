import {
    AnimPaiement
} from '../js/AnimPaiement.js'

import {
    AnimTotal
} from '../js/AnimTotal.js'

var total = 0;
var prenom = "Réservation";
var nom = "anonyme";
var carte = "3214"
var nomHebergement = "Hébergement : <span class='turquoise'>&nbsp Suite</span>";
var assuranceBagages = "";
var serviceVIP = "";
var passeExpress = "";
var restaurant24 = "";




// On lance l'application d'animation de la page paiement en laissant
// un délai de 0.4 secondes pour permettre le chargement de Vue.js
$('body').on('click', '#btnAppelPaiement', function() {
    total = $("#montantTotal").html();
    if ($("#prenom").val() != "" && $("#prenom").length > 0) {
        prenom = $("#prenom").val();
        nom = $("#nom").val();
    }
    if ($("#carte").val() != "" && $("#carte").length > 0) {
        carte = $("#carte").val().substring(1, 5);
    }
    if ($('#option1').is(':checked')) {
        assuranceBagages = "<p>Assurance bagages</p> <i class='material-icons'>check</i>";
    }
    if ($('#option2').is(':checked')) {
        serviceVIP = "<p>Service VIP</p> <i class='material-icons'>check</i>";
    }
    if ($('#option3').is(':checked')) {
        passeExpress = "<p>Passe Express</p> <i class='material-icons'>check</i>";
    }
    if ($('#option4').is(':checked')) {
        restaurant24 = "<p>Restaurant 24/7</p> <i class='material-icons'>check</i>";
    }
    setTimeout(function() {

        // On met à jour le total// 
        let lancerAnimPaiement = new AnimPaiement(total, prenom, nom, carte, nomHebergement, assuranceBagages, serviceVIP, passeExpress, restaurant24);
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
    nomHebergement = "Hébergement : <span class='turquoise'>&nbsp Lodge</span>";
    let lancerAnimTotal = new AnimTotal(hebergement);
    $("#lodge > .hebergement_img").css("box-shadow", "inset 0 -5px 0 #32D096");
    $("#villa > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
    $("#suite > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
});
$('body').on('click', '#villa', function() {
    hebergement = "villa";
    nomHebergement = "Hébergement : <span class='turquoise'>&nbsp Villa</span>";
    let lancerAnimTotal = new AnimTotal(hebergement);
    $("#villa > .hebergement_img").css("box-shadow", "inset 0 -5px 0 #32D096");
    $("#lodge > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
    $("#suite > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
});
$('body').on('click', '#suite', function() {
    hebergement = "suite";
    nomHebergement = "Hébergement : <span class='turquoise'>&nbsp Suite</span>";
    let lancerAnimTotal = new AnimTotal(hebergement);
    $("#imgSuite").css("box-shadow", "inset 0 -5px 0 #32D096");
    $("#villa > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
    $("#lodge > .hebergement_img").css("box-shadow", "inset 0 0 0 #32D096");
});