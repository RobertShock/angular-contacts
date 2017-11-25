'use strict';

app.controller("ContactDetailCtrl", function($routeParams, $scope, ContactService){
	const getContact = () => {
		ContactService.getSingleContact($routeParams.id).then((results) => {
			$scope.contact = results.data;
		}).catch((err) => {
			console.log("err in getSingleContact", err);
    });
};

getContact();

    $scope.favoriteContact = (contact) => {
		let updatedContact = {};
		if (!contact.isFavorite) {
			updatedContact = ContactService.createContactObject(contact); 
		} else {
			updatedContact = ContactService.createContactObject(contact);
			updatedContact.isFavorite = false;
		}
		ContactService.updateContact(updatedContact, $routeParams.id).then((result) => {
			getContact();
			console.log("result", result);
		}).catch((err) => {
			console.log("error in favoriteContact", err);
		});
    };
});