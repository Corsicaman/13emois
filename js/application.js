import {
    AnimPaiement
} from '../js/AnimPaiement.js'


// On lance l'application d'animation de la page paiement en laissant
// un délai de 0.2 secondes pour permettre le chargement de Vue.js
$('body').on('click', '#btnAppelPaiement', function() {
    setTimeout(function() {
        let lancerAnimPaiement = new  AnimPaiement();
    }, 500);
});