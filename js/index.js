var user;
var socket = io.connect();

$('#bouton_connexion').click(function() {
    user = $('#textbox_user').val()

    if (user === "") {
        $('#label_erreur').html("Le nom d'utilisateur ne peut être vide.");
    } else {
        $('#info_user').hide();
        $('#fenetre_chat').show();
    }
});

$('#bouton_message').click(function() {
    var unMessage = $('#textbox_message').val();
    socket.emit('nouveauMessage', {'user':user, 'contenu':unMessage});
    ajouterMessage({'user':user, 'contenu':unMessage});
    $('#textbox_message').val('');
});

socket.on('tousLesMessages', function (messages) {
   $('#fenetreChat').empty();
   for (var i = 0; i < messages.length; i++) {
        ajouterMessage(messages[i]);
   }
});

socket.on('unMessage', function (message) {
    ajouterMessage(message);
});

function ajouterMessage(message) {
    $('#liste_messages_chat').append($('<li></li>').addClass('message').html('<div class="user_message">'+message.user+'</div><div class="contenu_message">'+message.contenu+'</div>'));
}