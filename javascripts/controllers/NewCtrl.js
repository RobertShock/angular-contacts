'use strict';

app.controller("NewCtrl", function($http, $location, $routeParams, $rootScope, $scope, ContactService) { 
	$scope.newContact = {};

$scope.submitForm = (contact) => {
	let updatedContact = {};

	//  updatedContact = {
	//     "first_name": $scope.newContact.firstname,
	// 	"last_name": $scope.newContact.lastname,
	// 	"phone_number": $scope.newContact.phonenumber,
	//     "email": $scope.newContact.email,
	//     "company": $scope.newContact.company,
	// 	"twitter": $scope.newContact.twitter,
	// 	"facebook_page": $scope.newContact.facebook_page,
	// 	"uid": $rootScope.uid,
	//     "isFavorite": contact.isFavorite
	// };

	ContactService.updateContact(contact, $routeParams.id).then(() => {
		$location.path("/contacts/view");
	}).catch((error) => {
		console.log("error in submitForm", error);
	});
};
});