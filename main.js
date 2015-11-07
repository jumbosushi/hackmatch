var user_email = document.getElementById("inputEmail");
console.log(user_email);

$("#submit").click(function() {
    var user_email = document.getElementById("inputEmail");
    console.log(user_email);
    $.ajax({
        type: "POST",
        url: "https://hackmatch.azure-mobile.net/api/matchuser",
        contentType: "application/json",
        data: {
                email: user_email
            },
        success: function() {
            console.log("it worked");
        }
    });
})
