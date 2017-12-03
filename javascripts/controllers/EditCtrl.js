'use strict';

app.controller('EditCtrl', function($location, $rootScope, $routeParams, $scope, ContactService) {
console.log("hello");
    $scope.newContact = {};
    
    const getContact = () => {
        ContactService.getSingleContact($routeParams.id).then((results) => {
            $scope.newContact = results.data;
            console.log("$scope.newContact", $scope.newContact);
        }).catch((err) => {
            console.log('error in getSingleContact', err);
        });
    };

    $scope.submitForm = (contact) => {
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
