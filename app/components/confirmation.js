/* ========================================================================*/
/* ========================================================================*/
/* JAVSCRIPT DE L'APPLICATION WEB - LE 13E MOIS*/
/* @author = Lucas Theillet*/
/* ========================================================================*/
/* COMPONENT : CONFIRMATION D'UNE RÉSERVATION */
/* ========================================================================*/
/* ========================================================================*/


// Lien vers la base de donnée JSON
const urlJsonDestinations = "/app/BDD.json";


export const confirmation = {
    template: `
        <div id="bodyPaiement" v-if="destination">
            <router-link :to="{ name: 'accueil'}">
                <div id="logo">
                    <img src="../images/logos/13EM_Logo_Black_Blue.png" alt="13e LOGO">
                </div>
            </router-link>
            <router-link :to="{ name: 'paiement', params: { region: destinations[destination].region }}" id="btnAppelPaiement">
                <div id="bodyConfirmationRetour">< RETOUR AUX OPTIONS</div></router-link> <div id="lieu_background">
        </div>
        <h1 id="titreConfirmation">IL EST L'HEURE DE FAIRE VOS BAGAGES!</h1>
        <div class="check_mark">
            <div class="sa-icon sa-success animate">
                <span class="sa-line sa-tip animateSuccessTip"></span>
                <span class="sa-line sa-long animateSuccessLong"></span>
                <div class="sa-placeholder"></div>
                <div class="sa-fix"></div>
            </div>
        </div>
        <main id="main_paiement">
            <section id="section_informations">
                <h1>VOUS AVEZ RÉSERVÉ VOTRE VOYAGE À :</h1>
                <h2>{{destinations[destination].region}}, {{destinations[destination].pays}}</h2>
            </section>
            <section id="section_hebergement">
                <h1>MONTANT TOTAL :</h1>
                <h2 id="confTotal"></h2>
            </section>
            <section id="section_optionsConf">
                <h1>OPTIONS</h1>
                <h2 id="lesOptionsConf" class="confSpan">
                    <p id="nomHebergement" class="confSpan"></p>
                    <p id="assuranceBagages"></p>
                    <p id="serviceVIP"></p>
                    <p id="passeExpress"></p>
                    <p id="restaurant24"></p>
                </h2>
            </section>
            <section id="section_facturation">
                <h1>FACTURATION</h1>
                <h2 class="confSpan">Merci pour votre réservation!</h2>
                <h2 id="confPrenom"></h2>
                <h2 id="confNom"></h2>
                <h2 id="confCarte"></h2>
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
        }
    }
};

