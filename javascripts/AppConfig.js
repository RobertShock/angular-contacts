'use strict';

let isAuth = (LoginService) => new Promise ((resolve, reject) => {
	if(LoginService.isAuthenticated()){
	  resolve();
	} else {
	  reject();
	}
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, LoginService){
	firebase.initializeApp(FIREBASE_CONFIG);
	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {

	var logged = LoginService.isAuthenticated();
	
	var appTo;
	
    	if (currRoute.originalPath) {
      	appTo = currRoute.originalPath.indexOf('/login') !== -1;
		}
		
    	if (!appTo && !logged) {
      	event.preventDefault();
      	$location.path('/login');
    	}
  	});
});

app.config(function($routeProvider){
	$routeProvider
	.when("/login", {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	})
	.when("/contacts/favorites", {
		templateUrl: 'partials/favorites.html',
		controller: 'FavoritesCtrl',
		resolve: {isAuth}
	})
	.when("/contacts/new", {
		templateUrl: 'partials/new.html',
		controller: 'NewCtrl',
		resolve: {isAuth}
	})
	.when("/contacts/view", {
		templateUrl: 'partials/view.html',
		controller: 'ViewCtrl',
		resolve: {isAuth}
	})
	.when("/contacts/edit/:id", {
		templateUrl: 'partials/new.html',
		controller: 'EditCtrl',
		resolve: {isAuth}
	})
	.when("/contacts/detail/:id", {
		templateUrl: 'partials/contact_detail.html',
		controller: 'ContactDetailCtrl',
		resolve: {isAuth}
	})
	.otherwise('/login');
});