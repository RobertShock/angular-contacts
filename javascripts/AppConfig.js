'use strict';

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
	.when("/auth", {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when("/favorites", {
		templateUrl: 'partials/favorites.html',
		controller: 'FavoritesCtrl'
	})
	.when("/login", {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	})
	.when("/new", {
		templateUrl: 'partials/new.html',
		controller: 'NewCtrl'
	})
	.when("/view", {
		templateUrl: 'partials/view.html',
		controller: 'ViewCtrl'
	})
	.otherwise('/auth');
});