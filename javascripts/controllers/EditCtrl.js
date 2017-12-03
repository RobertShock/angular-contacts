'use strict';

app.controller("EditCtrl", function($location, $rootScope, $routeParams, $scope, ContactService) {
console.log("hello");
    $scope.contact = {};
    
    const getContact = () => {
        ContactService.getSingleContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
            console.log("$scope.contact", $scope.contact);
        }).catch((err) => {
            console.log('error in getContact', err);
        });
    };

    $scope.editSubmit = (contact) => {
        contact.uid = $rootScope.uid;
        console.log("contact", contact);
        ContactService.updateContact(contact, $routeParams.id).then(() => {
            $location.path("/contacts/view");
        }).catch((err) => {
            console.log('error in submitForm', err);
        });
    };

    getContact();
});
