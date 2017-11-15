'use strict';

app.controller("SearchCtrl", function($scope, tmdbService){
	$scope.movies = [];

	$scope.enterPush = (event) => {
		if(event.keyCode === 13){
			console.log("event", event.target.value);
			tmdbService.searchMovies(event.target.value).then((results) => {
				$scope.movies = results.data.results;
				console.log("movies?", results.data.results);
		}).catch((err) => {
			console.log("error in searchMovies", err);
		});
		}
	};
});