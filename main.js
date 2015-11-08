var skill_set = ["Web", "Development", "Android", "iOS", "Hardware", "HTML/CSS", "JavaScript", "Python","Java", "C/C++", "PHP", "Objective-C", "C#", "Swift", "JSON", "Ruby", "XML", "Ajax", "Shell", "Processing", "Lua", "CoffeeScript", "Go", "MATLAB", "OpenGL", "R", "Groovy", "XAML", "Perl", "WebGL", "Applescript", "Scala", "GLSL", "JSP", "LaTeX"];

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
    return plats;
};

var skillset = function() {
    var skills = [];
    for (var i = 0; i <= 34; i++) {
        var num = "Q3-" + i.toString;
        if (($('#'+num).is(':checked'))) {
            skills.add(skill_set[i]);
        }
    }
};

var looking = function() {
    var look = [];
    for (var i = 0; i <= 34; i++) {
        var num = "checkboxes-" + i.toString;
        if (($('#'+num).is(':checked'))) {
            look.add(skill_set[i]);
        }
    }
};

var bio = document.getElementById("textinput").text();

$(document).ready(function() {
$("#singlebutton").click(function() {
        console.log(casual);
        $.ajax({
            type: "POST",
            url: "https://hackmatch.azure-mobile.net/api/matchuser",
            data: {
                casual: casual,
                newComer: newComer,
                platforms: platforms,
                skillSet: skillset,
                lookingFor: looking,
                bio: bio
                },
            success: function() {
                console.log("it worked!");
            }
        });
    });
});

//User (first, last, casual, newComer, platforms, skillSet, lookingFor, bio)

var skill_set = ["Web", "Development", "Android", "iOS", "Hardware", "HTML/CSS", "JavaScript", "Python","Java", "C/C++", "PHP", "Objective-C", "C#", "Swift", "JSON", "Ruby", "XML", "Ajax", "Shell", "Processing", "Lua", "CoffeeScript", "Go", "MATLAB", "OpenGL", "R", "Groovy", "XAML", "Perl", "WebGL", "Applescript", "Scala", "GLSL", "JSP", "LaTeX"];


