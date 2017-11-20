'use strict';

app.controller("NewCtrl", function($http, $location, $rootScope, $scope, ContactService) { 
	$scope.newContact = {};


	$scope.submitForm = () => {
		let newContact = {
			"first_name": $scope.newContact.firstname,
			"last_name": $scope.newContact.lastname,
			"phone_number": $scope.newContact.phonenumber,
            "email": $scope.newContact.email,
            "company": $scope.newContact.company,
			"twitter": $scope.newContact.twitter,
			"facebook_page": $scope.newContact.facebook_page,
			"uid": $rootScope.uid
		};

		ContactService.addNewContact(newContact).then(() => {
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("err in addNewContact", err);
		});
	};
});