// Classe gérant les animations d'apparation sur la page

export class AnimPaiement {

    constructor() {
        this.animerHeader();
        this.animerSections()
    }

    // Animations du header
    animerHeader() {
        $("#bodyPaiementRetour").css("transform", "translate(0)");
        $("#bodyPaiementRetour").css("opacity", "1");

        $("#bodyPaiement #logo").css("transform", "translate(0)");
        $("#bodyPaiement #logo").css("opacity", "1");

        $("#lieu_background").css("transform", "translate(0)");
        $("#lieu_background").css("opacity", "1");
    }

    // Animations des 4 sections principales de la page
    animerSections() {
        $("#main_paiement > section").css("transform", "translate(0)");
        $("#main_paiement > section").css("opacity", "1");

        $("#main_paiement > section:nth-child(2)").css("transition-delay", "0.2s");
        $("#main_paiement > section:nth-child(3)").css("transition-delay", "0.4s");
        $("#main_paiement > section:nth-child(4)").css("transition-delay", "0.6s");

    }
}