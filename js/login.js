$('#login_bouton_connexion').click(function(event){
    var sBase64pw = $.base64.btoa( $('#login_textbox_password').val());
    console.log('username: ' + $('#login_textbox_user').val(), "password: "+sBase64pw);
    postAuthorize({username: $('#login_textbox_user').val(), password: sBase64pw});
})


function postAuthorize(data) {
    $.ajax({
        url:'http://localhost:5000/authorize',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json;charset=UTF-8"
    })
    .done(function(data){
        //Do something with returned data
        $.cookie('cookie_authentification', data.token, { path : '/'});
        window.location.replace("../index.html");
    })
    .fail(function(jqXHR, textStatus){
        //Do something about the error
        if (jqXHR.status === 401) {
            console.log("Nom utilisateur inexistant.");
        } else if (jqXHR.status === 403) {
            console.log("Mot de passe inexistant.");
        }
    });
}
