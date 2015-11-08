//EXPRESS VARIABLES
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');
var https = require('https');
var express = require('express');
var url = "https://matchdatabaase.azure-mobile.net/";
var app = express();





var skill_set = ["Web", "Development", "Android", "iOS", "Hardware", "HTML/CSS", "JavaScript", "Python", "Java", "C/C++", "PHP", "Objective-C", "C#", "Swift", "JSON", "Ruby", "XML", "Ajax", "Shell", "Processing", "Lua", "CoffeeScript", "Go", "MATLAB", "OpenGL", "R", "Groovy", "XAML", "Perl", "WebGL", "Applescript", "Scala", "GLSL", "JSP", "LaTeX"];


// split with comma first
// then with space


var skill_set = ["Web", "Development", "Android", "iOS", "Hardware", "HTML/CSS", "JavaScript", "Python","Java", "C/C++", "PHP", "Objective-C", "C#", "Swift", "JSON", "Ruby", "XML", "Ajax", "Shell", "Processing", "Lua", "CoffeeScript", "Go", "MATLAB", "OpenGL", "R", "Groovy", "XAML", "Perl", "WebGL", "Applescript", "Scala", "GLSL", "JSP", "LaTeX"];

var casual = $('#Q1-Y').is(':checked');
var newComer = $('#Q2-Y').is(':checked');
var platforms = function () {
    var plats = [];
    if ($('#mob').is(':checked')) {
        plats.push("Mobile");
    } else if ($('#web').is(':checked')) {
        plats.push("Web App");
    } else if ($('#har').is(':checked')) {
        plats.push("Hardware");
    }
    return plats;
};

var skillset = function () {
    var skills = [];
    for (var i = 0; i <= 34; i++) {
        var num = "Q3-" + i;
        if (($('#' + num).is(':checked'))) {
            skills.push(skill_set[i]);
        }
    }
    return skills;
};

var looking = function () {
    var look = [];
    for (var i = 0; i <= 34; i++) {
        var num = "checkboxes-" + i;
        var final = "#" + num;
        if (($(final).is(':checked'))) {
            look.prop(skill_set[i]);
        }
    }
    return look;
};

var bio = $("#Description").val;

var object = {
                casual: casual,
                newComer: newComer,
                platforms: platforms(),
                skillSet: skillset(),
                lookingFor: looking(),
                bio: bio
                };

$(document).ready(function () {



var result = JSON.stringify(object);

console.log(result);

// if not checked, then its is not false
//
var state = {};

$('#checkboxes-34').click(function () {
    state[this.id] = this.checked;
    console.log(state);
});
});

$(document).ready(function () {
    var state = {};

$('.checkbox2').click(function () {

    if (this.checked) {
        state[this.id] = this.checked;
    } else {
        delete state[this.id];
    }
    console.log(state);
});

    $("#singlebutton").click(function () {
        //JAYS EDIT THING
        postData();
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


//FUNCTION FOR POSTING TO SERVER
function postData() {

    var profile = {
                casual: casual,
                newComer: newComer,
                platforms: platforms(),
                skillSet: skillset(),
                lookingFor: looking(),
                bio: bio
                };

    var profileString = JSON.stringify(profile);

    var headers = {
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'Content-Length': profileString.length,
        'X-ZUMO-APPLICATION': config.appkey
    };

    var options = {
        host: config.mobileservices + '.azure-mobile.net',
        port: 443,
        path: '/tables/' + config.table,
        method: 'POST',
        headers: headers
    };

    // Setup the request.  The options parameter is
    // the object we defined above.
    var req = https.request(options, function (res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function (data) {
            responseString += data;
        });

        res.on('end', function () {
            var resultObject = JSON.parse(responseString);
        });
    });

    req.on('error', function (e) {
        // TODO: handle error.
    }) ;

    req.write(userString); //THIS IS WHERE WE MAKE THE UPLOAD TO THE SERVER
    req.end();
}



//User (first, last, casual, newComer, platforms, skillSet, lookingFor, bio)

var skill_set = ["Web", "Development", "Android", "iOS", "Hardware", "HTML/CSS", "JavaScript", "Python", "Java", "C/C++", "PHP", "Objective-C", "C#", "Swift", "JSON", "Ruby", "XML", "Ajax", "Shell", "Processing", "Lua", "CoffeeScript", "Go", "MATLAB", "OpenGL", "R", "Groovy", "XAML", "Perl", "WebGL", "Applescript", "Scala", "GLSL", "JSP", "LaTeX"];
