// Classe gérant la mise à jour du total du voyage

export class AnimTotal {

    constructor(hebergement) {
        this.updateTotal(hebergement);
    }

    updateTotal(hebergement) {
        let total = parseInt($("#sousTotal").html(), 10);
        if ($('#option1').is(':checked')) {
            total += 2000;
        }
        if ($('#option2').is(':checked')) {
            total += 4000;
        }
        if ($('#option3').is(':checked')) {
            total += 1500;
        }
        if ($('#option4').is(':checked')) {
            total += 3000;
        }
        if (hebergement == "villa") {
            total += 10000;
        }
        if (hebergement == "lodge") {
            total += 5000;
        }
        $("#montantTotal").html(total + " $");
    }

}