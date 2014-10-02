$(document).ready(function() {

function getTasks() {
    $.ajax({
        url:'http://localhost:5000/tasks',
        type: 'GET'
    })
    .done(function(data){
        //Do something with returned data
        var iNbTasks = data.tasks.length;
        
        for (var i=0; i<iNbTasks; i++) {
            console.log('<tr><td>' + data.tasks[i].id + '</td><td>' + data.tasks[i].task + '</td></tr>');
            $('#tasktable tr:last').after('<tr><td>' + data.tasks[i].id + '</td><td>' + data.tasks[i].task + '</td></tr>');
        }
      
    })
    .fail(function(jqXHR, textStatus){
        //Do something about the error
    });
}

function getTask(id) {
    $.ajax({
        url:'http://localhost:5000/tasks/'+parseint(id),
        type: 'GET'
    })
    .done(function(data){
        //Do something with returned data
    })
    .fail(function(jqXHR, textStatus){
        //Do something about the error
    });
}
function postTasks(data) {
    $.ajax({
        url:'http://localhost:5000/tasks',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    })
    .done(function(data){
        //Do something with returned data
    })
    .fail(function(jqXHR, textStatus){
        //Do something about the error
    });
}

function putTasks(id, data) {
    $.ajax({
        url:'http://localhost:5000/tasks/'+parseint(id),
        type: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json'
    })
    .done(function(data){
        //Do something with returned data
    })
    .fail(function(jqXHR, textStatus){
        //Do something about the error
    });
}

function deleteTasks(id) {
    $.ajax({
        url:'http://localhost:5000/tasks/'+parseint(id),
        type: 'DELETE',
    })
    .done(function(data){
        //Do something with returned data
    })
    .fail(function(jqXHR, textStatus){
        //Do something about the error
    });
}

getTasks();

});