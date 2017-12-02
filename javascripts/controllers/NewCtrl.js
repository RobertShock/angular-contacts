'use strict';

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) { 

	$scope.submitForm = (contact) => {
		contact.uid = $rootScope.uid;

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

		ContactService.postNewContact(contact).then((results) => {
			$location.path("/contacts/view");
		}).catch((error) => {
			console.log("error in postNewContact", error);
		});
	};
});