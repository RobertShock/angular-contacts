'use strict';

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) { 

	$scope.newContact = {};

	$scope.submitForm = () => {
		$scope.newContact.favorite=false;
		$scope.newContact.uid=$rootScope.uid;
		let newContact = ContactService.createContactObj ($scope.newContact);
		ContactService.postNewContact(newContact).then((results) => {
			$location.path("/contacts/view");
		}).catch((error) => {
			console.log("error in postNewContact", error);
		});
	};
});