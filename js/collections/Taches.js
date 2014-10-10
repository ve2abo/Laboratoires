//$(document).ready(function() {
	$(function() {
		ColTaches = Backbone.Collection.extend({
		    model: TaskModel,
		    parse: function(response) {
		        return response.tasks;
		    },
			initialize: function(){
				console.log("Création collection " + this.id);
			}
		});
	});

//});