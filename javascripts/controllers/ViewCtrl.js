'use strict';

app.controller("ViewCtrl", function($location, $rootScope, $scope, ContactService){
	$scope.contacts = [];

	const getContacts = () => {
		ContactService.getContacts($rootScope.uid).then((results) =>{
			$scope.contacts = results;
		}).catch((err) =>{
			console.log("error in getContacts", err);
		});
	};

	getContacts();

	$scope.deleteContact = (contactId) => {
		ContactService.deleteContact(contactId).then((result) => {
			getContacts();
		}).catch((err) =>{
			console.log("error in deleteContact", err);
		});
	};
});