$(document).ready(function() {

	$(function() {
		var collectionTaches = new ColTaches({});
		collectionTaches.url = 'http://localhost:5000/tasks';

		var vueTaches = new VueTaches({
			collection: collectionTaches
		}); 

		collectionTaches.fetch();
	});

});