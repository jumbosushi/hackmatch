var user_email = "asdasd"; //document.getElementById("#inputEmail").value;

$(document).ready(function() {
$("#singlebutton").click(function() {
        console.log(user_email);
        $.ajax({
            type: "POST",
            url: "https://hackmatch.azure-mobile.net/api/matchuser",
            data: {
                    email: user_email
                },
            success: function() {
                console.log("it worked!");
            }
        });
    });
});
