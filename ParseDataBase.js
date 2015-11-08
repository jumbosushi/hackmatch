var profiles[];
$.get("https://hackmatch.azure-mobile.net/tables/profiles", 
      function(data, status){
        $.each(data, function(key,val){
            profiles.push(parseProfile())
        })
    })
function parseProfile(data) 