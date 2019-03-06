// base Url of the API
const urlJsonDestinations = "/13e-mois_Web/app/BDD.json";
var s = 0;
var i = 1;




// =======================
// =======================
// PAGE D'ACCUEIL
// =======================
// =======================
export const accueil = {
    name: 'accueil',
    template: `<div id="bodyAccueil">
            <div id="accueil">
                <h1>LE</h1>
                <h1>1<p>er</p>
                </h1>
                <h1>
                    <div>M</div>
                    <div>OIS</div>
                </h1>
            </div>
            <div id="fondBlanc"></div>
            <router-link :to="{ name: 'accueil'}">
                <div id="logo">
                    <img src="images/logos/13EM_Logo_White_Blue.png" alt="13e LOGO">
                    <p>VOYAGES DE LUXE</p>
                </div>
            </router-link>
            <main>
                <section id="infos">
                    <div>
                        <h1>1</h1>
                        <div class="boxShadow">CHOISIR UNE DESTINATION PARADISIAQUE</div>
                        <div>
                            <div class="boxShadow" id="icon_pays"></div>
                            <div class="boxShadow" id="icon_prix"></div>
                            <div class="boxShadow" id="icon_note"></div>
                        </div>
                    </div>
                    <div>
                        <h1>2</h1>
                        <div class="boxShadow">EN APPRENDRE PLUS SUR UN VOYAGE</div>
                        <div>
                            <div class="boxShadow" id="icon_activites"></div>
                            <div class="boxShadow" id="icon_services"></div>
                            <div class="boxShadow" id="icon_climat"></div>
                        </div>
                    </div>
                    <div>
                        <h1>3</h1>
                        <div class="boxShadow">RÉSERVEZ VOTRE MOIS AU 3e CIEL</div>
                        <div>
                        <div class="boxShadow" id="icon_date"></div>
                            <div class="boxShadow" id="icon_options"></div>
                            <div class="boxShadow" id="icon_paiement"></div>
                        </div>
                    </div>
                </section>
                <router-link :to="{ name: 'listeDestinations'}">
                    <div id="btnListe" class="bouton boutonBlanc boxShadow">LISTE DES DESTINATIONS <i class="material-icons">send</i></div>
                </router-link>
            </main>
        </div>`,
    mounted() {
        this.theLoop(1);
    },
    methods: {

        theLoop(i) {
            let self = this;
            setTimeout(function() {
                if (i == 1) {
                    setTimeout(function() {
                        i++;
                        self.theLoop(i);

                    }, 700)
                } else if (i < 14) {
                    $('#accueil > h1:nth-child(2)').html(i + "<p>e</p>");
                    i++;
                    self.theLoop(i);
                }


                if (i == 14) {
                    setTimeout(function() {
                        i++;
                        self.theLoop(i);
                    }, 700)
                }
            }, 25 + i * 15);

            if (i > 14) {
                if (s == 0) {
                    $('#accueil > h1:nth-child(2) p').css("opacity", "0");
                    $('#accueil > h1:nth-child(1)').css("opacity", "0");
                    $('#accueil > h1:nth-child(3) div:last-child').css("opacity", "0");
                    $('#accueil > h1:nth-child(3) div:first-child').css("transform", "rotate(-90deg) translate(37%, -45%) scale(0.4)");
                    $('#accueil > h1:nth-child(2)').css("margin-left", "5vw");

                    setTimeout(function() {
                        s = 1;
                        self.theLoop(i);
                    }, 500)
                } else if (s == 1) {

                    $('#accueil > h1:nth-child(2)').css("color", "white");
                    $('#accueil').css("background-color", "#34A2FF");

                    setTimeout(function() {
                        s = 2;
                        self.theLoop(i);
                    }, 900)
                } else if (s == 2) {
                    $('#fondBlanc').css("display", "none");
                    $('#bodyAccueil main').css("display", "block");
                    $('#accueil > h1:nth-child(3) div:first-child').css("transform", "rotate(-90deg) translate(100%, -45%) scale(0.4)");
                    $('#accueil > h1:nth-child(3) div:first-child').css("opacity", "0");
                    $('#accueil > h1:nth-child(2)').css("transform", "translateY(-100px)");
                    $('#accueil > h1:nth-child(2)').css("opacity", "0");
                    $('#accueil').css("opacity", "0");
                    // $('html').scrollTop(0);
                    setTimeout(function() {
                        s = 3;
                        self.theLoop(i);
                    }, 300)
                } else if (s == 3) {
                    $('#accueil').css("display", "none");
                    $('html').css("overflow-y", "initial");
                    s = 0;
                }
            }


        },
    }
};