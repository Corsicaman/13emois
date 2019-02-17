// base Url of the API
const urlJsonDestinations = "/13e-mois_Web/app/BDD.json";
var s = 0;
var i = 1;

// Destinations component
const accueil = {
    template: '#accueil-template',
    mounted() {
        this.theLoop(1);
    },
    methods: {

        theLoop(i) {
            let self = this;
            setTimeout(function() {
                if (i < 14) {
                    $('#accueil > h1:nth-child(2)').html(i + "<p>e</p>");
                    i++;
                    self.theLoop(i);
                } else if (i == 14) {
                    setTimeout(function() {
                        i++;
                        self.theLoop(i);
                    }, 700)
                }
            }, 30 + i * 15);

            if (i > 14) {
                if (s == 0) {
                    $('#accueil > h1:nth-child(2) p').css("opacity", "0");
                    $('#accueil > h1:nth-child(1)').css("opacity", "0");
                    $('#accueil > h1:nth-child(3) div:last-child').css("opacity", "0");
                    $('#accueil > h1:nth-child(3) div:first-child').css("transform", "rotate(-90deg) translate(37%, -45%) scale(0.4)");
                    $('#accueil > h1:nth-child(2)').css("margin-left", "5vw");
                    // $('#accueil > h1:nth-child(3) div:first-child').css("color","#34A2FF");

                    setTimeout(function() {
                        s = 1;
                        self.theLoop(i);
                    }, 700)
                } else if (s == 1) {

                    $('#accueil > h1:nth-child(2)').css("color", "white");
                    // $('#accueil > h1:nth-child(3) div:first-child').css("color","white");
                    $('#accueil').css("background-color", "#34A2FF");

                    setTimeout(function() {
                        s = 2;
                        self.theLoop(i);
                    }, 1500)
                } else if (s == 2) {
                    $('#accueil > h1:nth-child(3) div:first-child').css("transform", "rotate(-90deg) translate(100%, -45%) scale(0.4)");
                    $('#accueil > h1:nth-child(3) div:first-child').css("opacity", "0");
                    $('#accueil > h1:nth-child(2)').css("transform", "translateY(-100px)");
                    $('#accueil > h1:nth-child(2)').css("opacity", "0");
                    $('#accueil').css("opacity", "0");
                    setTimeout(function() {
                        s = 3;
                        self.theLoop(i);
                    }, 500)
                } else if (s == 3) {
                    $('#accueil').css("display", "none");
                    s = 0;
                }
            }
        },









    }
};



// Destinations component
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
            var delay = el.dataset.index * 100 + 500
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



// Une Destination component
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



// Page paiement component
const paiement = {
    template: '#paiement-template',
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




// Create vue router
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
            component: lesDestinations
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
        }
    ]
});

// Create vue instance with our router, and mount onto #app
var vue = new Vue({ router });
var app = vue.$mount('#app')
// console.log(List);