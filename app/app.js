// base Url of the API
const baseUrl = "http://jsonplaceholder.typicode.com";
const urlJsonDestinations = "/13e-mois_Web/app/BDD.json";




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
                        console.log(image);
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
            name: 'homepage',
            path: '/13e-mois_Web/destinations.htm',
            // redirect: '/',
            component: lesDestinations
        },

        {
            name: 'destination',
            path: '/13e-mois_Web/destinations.htm/:region',
            component: uneDestination
        }
    ]
});

// Create vue instance with our router, and mount onto #app
var vue = new Vue({ router });
var app = vue.$mount('#app')
// console.log(List);