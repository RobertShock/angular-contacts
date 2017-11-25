'use strict';

app.controller("FavoritesCtrl", function($location, $rootScope, $scope, ContactService){
	$scope.contacts = [];

	const getContacts = () => {
		ContactService.getFavoriteContacts($rootScope.uid).then((results) =>{
			$scope.contacts = results;
		}).catch((err) =>{
			console.log("error in getFavoriteContacts", err);
		});
	};

	getContacts();
	
});