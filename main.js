var casual = $('#Q1-Y').is(':checked');
var newComer = $('#Q2-Y').is(':checked');
var platforms = function() {
    var plats = [];
    if ($('#mob').is(':checked')) {
        platss.add("Mobile");
    } else if ($('#web').is(':checked')) {
        plats.add("Web App");
    } else if ($('#har').is(':checked')) {
        plats.add("Hardware");
    }
};

$(document).ready(function() {
$("#singlebutton").click(function() {
        console.log(casual);
        $.ajax({
            type: "POST",
            url: "https://hackmatch.azure-mobile.net/api/matchuser",
            data: {

                },
            success: function() {
                console.log("it worked!");
            }
        });
    });
});

//User (first, last, casual, newComer, platforms, skillSet, lookingFor, bio)
