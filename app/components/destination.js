/* ========================================================================*/
/* ========================================================================*/
/* JAVSCRIPT DE L'APPLICATION WEB - LE 13E MOIS*/
/* @author = Lucas Theillet*/
/* ========================================================================*/
/* COMPONENT : PRÉSENTATION D'UNE DESTINATION */
/* ========================================================================*/
/* ========================================================================*/


// Lien vers la base de donnée JSON
const urlJsonDestinations = "/app/BDD.json";


export const uneDestination = {
    template: `
        <div id="bodyDestinations" v-if="destination">
            <main id="main_uneDestination">
                <div id="uneDestination">
                    <transition name="entreePhoto" mode="out-in" appear>
                        <div id="uneDestinationImage" :style="destinations[destination].backgroundImage">
                            <transition name="entreeResume" mode="out-in" appear>
                                <router-link :to="{ name: 'listeDestinations'}" id="link">
                                    < RETOUR À LA LISTE</router-link> </transition> <div>
                                        <transition name="entreeResume" mode="out-in" appear>
                                            <p id="sousTitre">VOTRE 13e CIEL</p>
                                        </transition>
                                        <transition name="entreeTitre" mode="out-in" appear>
                                            <h1>{{destinations[destination].region}}, {{destinations[destination].pays}}</h1>
                                        </transition>
                        </div>
                        <transition name="entreeResume" mode="out-in" appear>
                            <div id="resumeInfos">
                                <div>
                                    <div><i class="material-icons">person</i>{{destinations[destination].notes}}</div>
                                    <div>VISITES</div>
                                </div>
                                <div>
                                    <div><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i></div>
                                    <div>NOTE MOYENNE</div>
                                </div>
                                <div>
                                    <div>#{{destinations[destination].rang}}</div>
                                    <div>EN 2018</div>
                                </div>
                            </div>
                        </transition>
                </div>
                </transition>
                <transition name="entreeInfos" mode="out-in" appear>
                    <div id="uneDestinationInfos">
                        <transition name="entreeSubInfo" mode="out-in" appear>
                            <h1>{{destinations[destination].region}}, {{destinations[destination].pays}}</h1>
                        </transition>
                        <transition name="entreeSubInfo" mode="out-in" appear>
                            <div>DESTINATION #{{destinations[destination].rang}} LA PLUS VISITÉE EN 2018</div>
                        </transition>
                        <transition name="entreeSubInfo" mode="out-in" appear>
                            <div><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i> ({{destinations[destination].notes}})</div>
                        </transition>
                        <transition name="entreeSubInfo" mode="out-in" appear>
                            <div id="description" class="boxShadow">
                                <h3>DESCRIPTION</h3>
                                <p>{{destinations[destination].description}}</p>
                            </div>
                        </transition>
                        <transition name="entreeSubInfo" mode="out-in" appear>
                            <div id="activites" class="boxShadow">
                                <h3>ACTIVITÉS</h3>
                                <div>
                                    <div v-bind:style="destinations[destination].activite_01_icon"></div>
                                    <p>{{destinations[destination].activite_01_nom}}</p>
                                </div>
                                <div>
                                    <div v-bind:style="destinations[destination].activite_02_icon"></div>
                                    <p>{{destinations[destination].activite_02_nom}}</p>
                                </div>
                                <div>
                                    <div v-bind:style="destinations[destination].activite_03_icon"></div>
                                    <p>{{destinations[destination].activite_03_nom}}</p>
                                </div>
                            </div>
                        </transition>
                        <transition name="entreeSubInfo" mode="out-in" appear>
                            <div id="suivant">
                                <p>SOUS TOTAL: 8500 $</p>
                                <router-link :to="{ name: 'paiement', params: { region: destinations[destination].region }}">
                                    <div class="bouton boutonTurquoiseOutline" id="btnAppelPaiement">SUIVANT <i class="material-icons">send</i></div>
                                </router-link>
                            </div>
                        </transition>
                    </div>
                </transition>
        </div>
        </main>
        </div>
    `,
    data: () => ({
        destinations: [],
        destination: null
    }),
    mounted() {
        this.getLaDestination();
    },
    methods: {
        getLaDestination() {
            var region = this.$route.params.region;
            axios.get(urlJsonDestinations).then(response => {
                this.destinations = response.data;
                for (var desti in this.destinations) {
                    if (this.destinations[desti].region == region) {
                        this.destination = desti;
                        // console.log(image);
                        break;
                    }
                }
                // console.log(this.post);
            }).catch(error => {
                console.log(error);
            })
        }
    }
};