$(function() {
	VueTaches = Backbone.View.extend({
		template: _.template($('#taches-tpl').html()),
		el: '#contenantTaches',
		events: {
			"click #boutonAjouter" : "gestEvenBtnAjouter",
			"click .glyphicon-floppy-disk" : "gestEvenBtnSauvegarde",
			"click .glyphicon-trash" : "gestEvenBtnPoubelle"
		},
		initialize: function () {
			_.bindAll(this, 'render');

			var self = this;

			this.collection.bind('sync add remove', function() {
				self.render();
			});
		},
		render: function () {
			this.$el.html(this.template({
				tasks: this.collection.toJSON()
			}));
		},
		gestEvenBtnAjouter: function(event) {
			this.collection.create({
				id: Math.floor((Math.random() * 5000) + 1),
				task: $('#txtNouvTache').val()
			}, {
				type: 'POST'
			})
		},
		gestEvenBtnSauvegarde: function (event) {
			var idTache = $(event.target).data('id');
			var modele = this.collection.get(idTache);

			modele.save({
				"task": $(event.target).parent().parent().parent().find('.form-control').val()
			})
		},
		gestEvenBtnPoubelle: function(event) {
			var idTache = $(event.target).data('id');
			var modele = this.collection.get(idTache);

			modele.destroy();
			this.collection.remove(idTache);
		}

	})
});