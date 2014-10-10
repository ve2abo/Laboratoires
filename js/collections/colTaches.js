$(document).ready(function() {
	$(function() {
		ColTaches = Backbone.Collection.extend({
		    model: ModeleTache,
		    parse: function(response) {
		        return response.tasks;
		    }
		});
	});

});