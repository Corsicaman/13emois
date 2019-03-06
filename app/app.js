/* ========================================================================*/
/* ========================================================================*/
/* JAVSCRIPT DE L'APPLICATION WEB - LE 13E MOIS*/
/* @author = Lucas Theillet*/
/* ========================================================================*/
/* APPLICATION VUE */
// Gestion des différents components et de leur gestion via le router
/* ========================================================================*/
/* ========================================================================*/


// Importation des components
import {accueil} from '/app/components/accueil.js';
import {listeDestinations} from '/app/components/listeDestinations.js'
import {uneDestination} from '/app/components/destination.js'
import {paiement} from '/app/components/paiement.js'
import {confirmation} from '/app/components/confirmation.js'


// Exportation des compenents
export default {
  components: {
    accueil,
    listeDestinations,
    uneDestination,
    paiement,
    confirmation
  }
}



// =======================
// =======================
// VUE ROUTER : GESTIONS DES PAGES ET LIEN AVEC LES TEMPLATES
// =======================
// =======================
var router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'accueil',
            path: '',
            component: accueil
        },

        {
            name: 'listeDestinations',
            path: '/liste',
            component: listeDestinations
        },

        {
            name: 'destination',
            path: '/:region',
            component: uneDestination
        },

        {
            name: 'paiement',
            path: '/paiement-:region',
            component: paiement
        },

        {
            name: 'confirmation',
            path: '/confirmation-:region',
            component: confirmation
        }
    ]
});



// =======================
// Creation d'une instance vue à partir du router et "mount" sur #app
// =======================
var vue = new Vue({ router });
var app = vue.$mount('#app');