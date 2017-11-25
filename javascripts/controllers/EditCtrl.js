'use strict';

app.controller("EditCtrl", function($location, $rootScope, $routeParams, $scope, ContactService) {
    
    const getContact = () => {
        ContactService.getSingleContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
        }).catch((error) => {
            console.log("error in getContacts");
        });
    };

    $scope.submitForm = (contact) => {
        let updatedContact = {};

         updatedContact = {
            "first_name": $scope.newContact.firstname,
			"last_name": $scope.newContact.lastname,
			"phone_number": $scope.newContact.phonenumber,
            "email": $scope.newContact.email,
            "company": $scope.newContact.company,
			"twitter": $scope.newContact.twitter,
			"facebook_page": $scope.newContact.facebook_page,
			"uid": $rootScope.uid,
            "isFavorite": contact.isFavorite
        };

        ContactService.updateContact(updatedContact, $routeParams.id).then(() => {
            $location.path("/contacts/view");
        }).catch((error) => {
            console.log("error in submitForm", error);
        });
    };

    getContact();
    
});
