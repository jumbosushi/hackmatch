var skill_set = ["Web", "Development", "Android", "iOS", "Hardware", "HTML/CSS", "JavaScript", "Python", "Java", "C/C++", "PHP", "Objective-C", "C#", "Swift", "JSON", "Ruby", "XML", "Ajax", "Shell", "Processing", "Lua", "CoffeeScript", "Go", "MATLAB", "OpenGL", "R", "Groovy", "XAML", "Perl", "WebGL", "Applescript", "Scala", "GLSL", "JSP", "LaTeX"];


// split with comma first aaa,aaaa,aaaa,
// then with space

var final_string = "";

var casual = $('#Q1-Y').is(':checked');
final_string += casual.toString() + ",";

var newComer = $('#Q2-Y').is(':checked');
final_string += newComer.toString() + ",";

// check first two questions
console.log(final_string);



// functions for platforms
var plats = "";

function platforms() {
    plats += $('#mob').is(':checked').toString() + " ";
    plats += $('#web').is(':checked').toString() + " ";
    plats += $('#web').is(':checked').toString() + ",";
    final_string += plats;
}


var skills = "";
var skillset = function () {
    for (var i = 0; i <= 34; i++) {
        var num = "Q3-" + i;
        if (($('#' + num).is(':checked'))) {
            console.log("Its running");
            skills = skills + " " + skill_set[i]; // TODO
        }
    }
    final_string += skills + ",";

};


var look = "";
var looking = function () {
    for (var i = 0; i <= 34; i++) {
        var num = "checkboxes-" + i;
        var final = "#" + num;
        if (($(final).is(':checked'))) {
            console.log("Its running");
            look = look + skill_set[i] + " ";
        }
    }
    final_string += look + ",";
};

var bio = "";

function descrip() {
    var temp = document.getElementsByTagName('textarea')[0].value;
    final_string += temp;
}



$(document).ready(function () {

    // if not checked, then its is not false

    var state = {};

    $('#checkboxes-34').click(function () {
        state[this.id] = this.checked;
        console.log(state);
    });

    $("#singlebutton").click(function () {
        // add final platform info to final_string
        platforms();
        console.log(final_string);

        // add skillsets
        skillset();
        console.log(final_string);

        //add looking for
        looking();
        console.log(final_string);

        // put bio togeterh
        descrip();
        console.log(final_string);

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://matchdatabaase.azure-mobile.net/api/test", false);
        xhttp.send(final_string);
        console.log("This is the response" + xhttp.responseText);
    });
});

/*
$(document).ready(function() {
$("#singlebutton").click(function() {
        console.log(casual);
  $.ajax({
            type: "POST",
<<<<<<< HEAD
            url: "https://matchdatabaase.azure-mobile.net/api/test",
            contentType: "application/json",
//            dataType: 'jsonp',
=======
            url: "https://matchdatabaase.azure-mobile.net/api/match.js",
>>>>>>> 9ca252330119109e06f7135f409f331537125b17
            data: {
                casual: casual,
                newComer: newComer,
                platforms: platforms,
                skillSet: skillset,
                lookingFor: looking,
                bio: bio
                },
            headers: {
                Authorization: "Token " + token
            },
            success: function() {
                console.log("it worked!");
            }
        });
    });
}); */



//User (first, last, casual, newComer, platforms, skillSet, lookingFor, bio)

var skill_set = ["Web", "Development", "Android", "iOS", "Hardware", "HTML/CSS", "JavaScript", "Python", "Java", "C/C++", "PHP", "Objective-C", "C#", "Swift", "JSON", "Ruby", "XML", "Ajax", "Shell", "Processing", "Lua", "CoffeeScript", "Go", "MATLAB", "OpenGL", "R", "Groovy", "XAML", "Perl", "WebGL", "Applescript", "Scala", "GLSL", "JSP", "LaTeX"];
