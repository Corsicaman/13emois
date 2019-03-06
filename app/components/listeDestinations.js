/* ========================================================================*/
/* ========================================================================*/
/* JAVSCRIPT DE L'APPLICATION WEB - LE 13E MOIS*/
/* @author = Lucas Theillet*/
/* ========================================================================*/
/* COMPONENT : LISTE DES DESTINATIONS */
/* ========================================================================*/
/* ========================================================================*/


// Lien vers la base de donnée JSON
const urlJsonDestinations = "/app/BDD.json";


export const listeDestinations = {
    template: `<div id="bodyDestinations">
            <div id="logo">
                <router-link :to="{ name: 'accueil'}">
                    <img src="../images/logos/13EM_Logo_White_Blue.png" alt="13e LOGO">
                </router-link>
            </div>
            <main id="main_lesDestinations" v-if="destinations">
                <div id="header_liste">
                    <h1 id="titre_liste">LISTE DES DESTINATIONS</h1>
                    <div id="header_tri">
                        <h2>TRIER PAR : </h2>
                        <p v-on:click="ordre('popularite')" id="ordrePop"><i class="material-icons">accessibility_new</i><span>Popularité</span></p>
                        <p v-on:click="ordre('note')" id="ordreNote"><i class="material-icons">star</i><span>Avis</span></p>
                        <p v-on:click="ordre('prix')" id="ordrePrix"><i class="material-icons">attach_money</i><span>Prix</span></p>
                    </div>
                </div>
                <transition-group v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" name="list" tag="div" id="contenant_liste">
                    <div class="destination boxShadowHover" v-for="(desti, index) in destinations" v-bind:key="desti.region" v-bind:data-index="index" mode="out-in">
                        <router-link :to="{ name: 'destination', params: { region: desti.region }}">
                            <div class="destiImage" v-bind:style="desti.backgroundImageMinia"></div>
                            <div class="destiInfo">
                                <div class="destiInfoGauche">
                                    <div>{{desti.region}}, {{desti.pays}}</div>
                                    <div>DESTINATION #{{desti.rang}} EN 2018</div>
                                    <div><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i>
                                        <p>({{desti.notes}})</p>
                                    </div>
                                </div>
                                <div class="destiInfoDroite">
                                    <div class="bouton boutonTurquoiseOutline">{{desti.prix}} $</div>
                                    <div class="bouton boutonTurquoise">CONSULTER</div>
                                </div>
                            </div>
                            <div class="destiBorderBot"></div>
                        </router-link>
                    </div>
                </transition-group>
            </main>
        </div>
    


        `,
    data: () => ({
        destinations: []
    }),
    mounted() {
        this.getDestinations();
        
    },
    methods: {
        getDestinations() {
            axios.get(urlJsonDestinations).then(response => {
                this.destinations = response.data;
            }).catch(error => {
                console.log(error);
            })
        },

        beforeEnter: function(el) {
            el.style.opacity = 0
            el.style.transform = "translateY(-30px)"
        },

        enter: function(el, done) {
            var delay = el.dataset.index * 100 + 300
            setTimeout(function() {
                el.style.opacity = 1
                el.style.transform = "translateY(0px)"
            }, delay)
        },
        leave: function(el, done) {
            var delay = el.dataset.index * 10
            setTimeout(function() {
                el.style.opacity = 0
                el.style.transform = "translateY(-30px)"
            }, delay)
        },

        ordre: function(classement) {
            var nD = JSON.parse(JSON.stringify(this.destinations));
            let index = 0;
            let max = 50000;
            let maxIndex = 0;
            let dejaPasse = [];
            let length = this.destinations.length;
            let add = true;


            // CLASSER PAR PRIX
            if (classement == "prix") {


                // On parcourt le nouveau tableau pour le remplir case par case
                for (var i = 0; i < length; i++) {
                    max = 50000;
                    // On parcourt l'ensemble des destinations pour trouver la moins chère
                    for (var j = 0; j < length; j++) {

                        // Si c'est la moins chère temporaire, on essaie de la save 
                        if (parseInt(this.destinations[j].prix) < max) {
                            add = true;


                            // On loop les nombres déjà passés pour voir s'il y est déjà
                            for (var k = 0; k < dejaPasse.length; k++) {
                                if (dejaPasse[k] == j) {
                                    add = false;
                                }
                            }
                            if (add == true) {
                                max = parseInt(this.destinations[j].prix);
                                maxIndex = j;
                            }
                        }
                    }
                    dejaPasse.push(maxIndex);
                    nD[i] = this.destinations[maxIndex];
                }
            }


            // CLASSER PAR popularite
            else if (classement == "popularite") {

                // On parcourt le nouveau tableau pour le remplir case par case
                for (i = 0; i < length; i++) {
                    max = 50000;
                    // On parcourt l'ensemble des destinations pour trouver la moins chère
                    for (j = 0; j < length; j++) {

                        // Si c'est la moins chère temporaire, on essaie de la save 
                        if (parseInt(this.destinations[j].rang) < max) {
                            add = true;


                            // On loop les nombres déjà passés pour voir s'il y est déjà
                            for (k = 0; k < dejaPasse.length; k++) {
                                if (dejaPasse[k] == j) {
                                    add = false;
                                }
                            }
                            if (add == true) {
                                max = parseInt(this.destinations[j].rang);
                                maxIndex = j;
                            }
                        }
                    }
                    dejaPasse.push(maxIndex);
                    nD[i] = this.destinations[maxIndex];
                }
            }


            // CLASSER PAR note
            if (classement == "note") {

                // On parcourt le nouveau tableau pour le remplir case par case
                for (i = 0; i < length; i++) {
                    max = 0;
                    // On parcourt l'ensemble des destinations pour trouver la moins chère
                    for (j = 0; j < length; j++) {

                        // Si c'est la moins chère temporaire, on essaie de la save 
                        if (parseInt(this.destinations[j].notes) > max) {
                            add = true;


                            // On loop les nombres déjà passés pour voir s'il y est déjà
                            for (k = 0; k < dejaPasse.length; k++) {
                                if (dejaPasse[k] == j) {
                                    add = false;
                                }
                            }
                            if (add == true) {
                                max = parseInt(this.destinations[j].notes);
                                maxIndex = j;
                            }
                        }
                    }
                    dejaPasse.push(maxIndex);
                    nD[i] = this.destinations[maxIndex];
                }
            }


            this.destinations = nD;
        }



    }
};