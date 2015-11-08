var MobileServiceClient = WindowsAzure.MobileServiceClient;
var client = new MobileServiceClient('https://matchdatabaase.azure-mobile.net/', 'pHwwMDKbzlFxGgZzWbGnhDZZxaHCZN56');

var casual = $('#Q1-Y').is(':checked');
var newComer = $('#Q2-Y').is(':checked');
var platforms = function() {
    var plats = [];
    if ($('#mob').is(':checked')) {
        plats.add("Mobile");
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
            url: "hackmatch.azurewebsites.net/api/matchuser.js",
            data: {

                },
            success: function() {
                console.log("it worked!");
            }
        });
    });
});

//User (first, last, casual, newComer, platforms, skillSet, lookingFor, bio)
