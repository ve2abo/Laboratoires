$(document).ready(function() {
	(function() {
		ModeleTache = Backbone.Model.extend({
			defaults: {
				id: '',
				task: ''
			},
			parse: function(response) {
				this.id = response.id;
				return response;
			}
		});
	})();
});