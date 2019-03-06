/* ========================================================================*/
/* ========================================================================*/
/* JAVSCRIPT DE L'APPLICATION WEB - LE 13E MOIS*/
/* @author = Lucas Theillet*/
/* ========================================================================*/
/* COMPONENT : OPTIONS ET PAIEMENT */
/* ========================================================================*/
/* ========================================================================*/


// Lien vers la base de donnée JSON
const urlJsonDestinations = "/13e-mois_Web/app/BDD.json";


export const paiement = {
    template: `
        <div id="bodyPaiement" v-if="destination">
            <router-link :to="{ name: 'accueil'}">
                <div id="logo">
                    <img src="../images/logos/13EM_Logo_Black_Blue.png" alt="13e LOGO">
                </div>
            </router-link>
            <router-link :to="{ name: 'listeDestinations'}" id="bodyPaiementRetour">
                < RETOUR À LA LISTE</router-link> <div id="lieu_background">{{destinations[destination].region}}, {{destinations[destination].pays}}
        </div>
        <main id="main_paiement">
            <section id="section_informations">
                <h1>VOS INFORMATIONS</h1>
                <form>
                    <p><label for="prenom">PRÉNOM</label>
                        <input type="text" id="prenom" name="prenom" placeholder="Votre prénom"></p>
                    <p><label for="nom">NOM</label>
                        <input type="text" id="nom" name="nom" placeholder="Votre nom"></p>
                    <p><label for="tel">NUMÉRO DE TÉLÉPHONE</label>
                        <input type="text" id="tel" name="tel" placeholder="Votre numéro"></p>
                    <p><label for="adresse">ADRESSE COMPLÈTE</label>
                        <input type="text" id="adresse" name="adresse" placeholder="Votre adresse"></p>
                </form>
            </section>
            <section id="section_hebergement">
                <h1>CHOIX DE L'HÉBERGEMENT</h1>
                <div>
                    <div id="suite">
                        <div class="hebergement_img" id="imgSuite"></div>
                        <h3>SUITE</h3>
                        <p>PAR DÉFAUT</p>
                    </div>
                    <div id="lodge">
                        <div class="hebergement_img"></div>
                        <h3>LODGE</h3>
                        <p>+ 5000 $</p>
                    </div>
                    <div id="villa">
                        <div class="hebergement_img"></div>
                        <h3>VILLA</h3>
                        <p>+ 10000 $</p>
                    </div>
                </div>
            </section>
            <section id="section_options">
                <h1>SERVICES & OPTIONS</h1>
                <div>
                    <div class="options_icon" id="options_icon_01"></div>
                    <div class="options_texte">
                        <h3>ASSURANCE BAGAGES</h3>
                        <p>2000 $</p>
                    </div>
                    <div class="leToggle center">
                        <input type="checkbox" id="option1" style="display : none">
                        <label for="option1" class="toggle"><span></span></label>
                    </div>
                </div>
                <div>
                    <div class="options_icon" id="options_icon_02"></div>
                    <div class="options_texte">
                        <h3>SERVICES VIP</h3>
                        <p>4000 $</p>
                    </div>
                    <div class="leToggle center">
                        <input type="checkbox" id="option2" style="display : none">
                        <label for="option2" class="toggle"><span></span></label>
                    </div>
                </div>
                <div>
                    <div class="options_icon" id="options_icon_03"></div>
                    <div class="options_texte">
                        <h3>PASSE EXPRESS</h3>
                        <p>1500 $</p>
                    </div>
                    <div class="leToggle center">
                        <input type="checkbox" id="option3" style="display : none">
                        <label for="option3" class="toggle"><span></span></label>
                    </div>
                </div>
                <div>
                    <div class="options_icon" id="options_icon_04"></div>
                    <div class="options_texte">
                        <h3>RESTAURANT 24/7</h3>
                        <p>3000 $</p>
                    </div>
                    <div class="leToggle center">
                        <input type="checkbox" id="option4" style="display : none">
                        <label for="option4" class="toggle"><span></span></label>
                    </div>
                </div>
            </section>
            <section id="section_finalisation">
                <h1>FINALISATION</h1>
                <form>
                    <p><label for="carte">NUMÉRO DE CARTE</label>
                        <input type="text" id="carte" name="carte" placeholder="1234-4567-8901-1234"></p>
                    <p><label for="titulaire">NOM DU TITULAIRE</label>
                        <input type="text" id="titulaire" name="titulaire" placeholder="Votre nom"></p>
                </form>
                <div>
                    <div id="total">
                        <div>
                            <p>PRIX TOTAL</p>
                            <p>(SOUS-TOTAL :&nbsp; </p>
                            <p id="sousTotal">{{destinations[destination].prix}}</p>
                            <p>&nbsp; $)</p>
                        </div>
                        <h4 id="montantTotal">{{destinations[destination].prix}} $</h4>
                    </div>
                    <router-link :to="{ name: 'confirmation', params: { region: destinations[destination].region}}" id="btnAppelPaiement">
                        <div class="bouton boutonTurquoiseOutline">CONFIRMER <i class="material-icons">send</i></div>
                    </router-link>
                </div>
            </section>
        </main>
        </div>
    `,
    data: () => ({
        destinations: [],
        destination: null
    }),
    mounted() {
        this.getLaDestination();
        this.overflowCheck();
    },
    beforeDestroy() {
        this.overflowCheck();
    },
    methods: {
        getLaDestination() {
            var region = this.$route.params.region;
            axios.get(urlJsonDestinations).then(response => {
                this.destinations = response.data;
                for (var desti in this.destinations) {
                    if (this.destinations[desti].region == region) {
                        this.destination = desti;
                        break;
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        },
        overflowCheck() {
            if ($('body').css("overflow-x") == "hidden") {
                $('body').css("overflow-x", "initial");

            } else {
                $('body').css("overflow-x", "hidden");
            }
        }
    }
};