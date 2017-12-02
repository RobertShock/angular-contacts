'use strict';

app.controller("EditCtrl", function($location, $rootScope, $routeParams, $scope, ContactService) {

    $scope.contact = {};
    
    const getContact = () => {
        ContactService.getSingleContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
        }).catch((error) => {
            console.log("error in getSingleContacts");
        });
    };

    $scope.submitForm = (contact) => {
        let updatedContact = {};


        ContactService.updateContact(contact, $routeParams.id).then(() => {
            $location.path("/contacts/view");
        }).catch((error) => {
            console.log("error in submitForm", error);
        });
    };

    getContact();
    
});
