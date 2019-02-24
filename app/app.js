// base Url of the API
const urlJsonDestinations = "/app/BDD.json";
var s = 0;
var i = 1;


// =======================
// =======================
// PAGE D'ACCUEIL
// =======================
// =======================
const accueil = {
    template: '#accueil-template',
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
                    }, 1000)
                } else if (s == 2) {
                    $('#fondBlanc').css("display", "none");
                    $('#accueil > h1:nth-child(3) div:first-child').css("transform", "rotate(-90deg) translate(100%, -45%) scale(0.4)");
                    $('#accueil > h1:nth-child(3) div:first-child').css("opacity", "0");
                    $('#accueil > h1:nth-child(2)').css("transform", "translateY(-100px)");
                    $('#accueil > h1:nth-child(2)').css("opacity", "0");
                    $('#accueil').css("opacity", "0");
                    $('html').scrollTop(0);
                    setTimeout(function() {
                        s = 3;
                        self.theLoop(i);
                    }, 500)
                } else if (s == 3) {
                    $('#accueil').css("display", "none");
                    $('html').css("overflow-y", "initial");
                    s = 0;
                }
            }


        },
    }
};



// =======================
// =======================
// PAGE LISTE DES DESTINATIONS
// =======================
// =======================
const lesDestinations = {
    template: '#lesDestinations-template',
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
        }



    }
};



// =======================
// =======================
// PAGE DE LA DESTINATION SELECTIONEE
// =======================
// =======================
const uneDestination = {
    template: '#uneDestination-template',
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




// =======================
// =======================
// PAGE DE CONFIRMATION ET PAIEMENT
// =======================
// =======================
const paiement = {
    template: '#paiement-template',
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
                        // console.log(image);
                        break;
                    }
                }
                // console.log(this.post);
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






// =======================
// =======================
// VUE ROUTER : GESTIONS DES PAGES
// =======================
// =======================
var router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'accueil',
            path: '/',
            component: accueil
        },
        
        {
            name: 'listeDestinations',
            path: '/liste',
            component: lesDestinations
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
        }
    ]
});



// =======================
// Creation d'une instance vue à partir du router et "mount" sur #app
// =======================
var vue = new Vue({ router });
var app = vue.$mount('#app');