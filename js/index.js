$(document).ready(function() {

	$(function() {
		var collectionMeteoSemaine = new ColMeteoSemaine({});
		collectionMeteoSemaine.url = 'http://api.wunderground.com/api/15ae1c769d01b0fd/lang:FR/pws:0/forecast7day/q/Canada/Montreal.json';

		var vueMeteoSemaine = new VueMeteoSemaine({
			collection: collectionMeteoSemaine
		});

		var vueMeteoVille = new VueMeteoVille({	});  

		collectionMeteoSemaine.fetch({dataType: 'jsonp'});
		console.log(JSON.stringify(collectionMeteoSemaine));
	});

});