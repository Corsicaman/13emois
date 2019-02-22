// $("#option1").click(updateTotal);
// $("#option2").click(updateTotal);
// $("#option3").click(updateTotal);
// $("#option4").click(updateTotal);

var hebergement = "suite";

$('body').on('click', '.leToggle', function() {
    updateTotal();
});

$('body').on('click', '#lodge', function() {
    hebergement = "lodge";
    updateTotal();
	$("#lodge > .hebergement_img").css("box-shadow","inset 0 -5px 0 #32D096");
	$("#villa > .hebergement_img").css("box-shadow","inset 0 0 0 #32D096");
	$("#suite > .hebergement_img").css("box-shadow","inset 0 0 0 #32D096");
});
$('body').on('click', '#villa', function() {
    hebergement = "villa";
    updateTotal();
	$("#villa > .hebergement_img").css("box-shadow","inset 0 -5px 0 #32D096");
	$("#lodge > .hebergement_img").css("box-shadow","inset 0 0 0 #32D096");
	$("#suite > .hebergement_img").css("box-shadow","inset 0 0 0 #32D096");
});
$('body').on('click', '#suite', function() {
    hebergement = "suite";
    updateTotal();
	$("#imgSuite").css("box-shadow","inset 0 -5px 0 #32D096");
	$("#villa > .hebergement_img").css("box-shadow","inset 0 0 0 #32D096");
	$("#lodge > .hebergement_img").css("box-shadow","inset 0 0 0 #32D096");
});



function updateTotal() {
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
    $("#montantTotal").html(total+ " $");
}