var cookie = $.cookie('cookie_authentification');

if (typeof cookie === 'undefined') {
	window.location.replace("./views/login.html");
} else {
    $.ajax({
        url:'http://localhost:5000/userprofile',
        type: 'GET',
        contentType: "application/json;charset=UTF-8",
        beforeSend : function (xhr) {
        	xhr.setRequestHeader("Authorization", cookie);
        }
    })
    .done(function(data){
        //Do something with returned data
        $('#profile_user').html("Utilisateur : " + data.username);
        $('#profile_mail').html("Courriel : " + data.email);
    });

}