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
import {accueil} from '/13e-mois_Web/app/components/accueil.js';
import {listeDestinations} from '/13e-mois_Web/app/components/listeDestinations.js'
import {uneDestination} from '/13e-mois_Web/app/components/destination.js'
import {paiement} from '/13e-mois_Web/app/components/paiement.js'
import {confirmation} from '/13e-mois_Web/app/components/confirmation.js'


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
            path: '/13e-mois_Web/index.htm',
            component: accueil
        },

        {
            name: 'listeDestinations',
            path: '/13e-mois_Web/index.htm/liste',
            component: listeDestinations
        },

        {
            name: 'destination',
            path: '/13e-mois_Web/index.htm/:region',
            component: uneDestination
        },

        {
            name: 'paiement',
            path: '/13e-mois_Web/index.htm/paiement-:region',
            component: paiement
        },

        {
            name: 'confirmation',
            path: '/13e-mois_Web/index.htm/confirmation-:region',
            component: confirmation
        }
    ]
});



// =======================
// Creation d'une instance vue à partir du router et "mount" sur #app
// =======================
var vue = new Vue({ router });
var app = vue.$mount('#app');