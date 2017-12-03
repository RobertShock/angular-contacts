'use strict';

app.controller('ContactDetailCtrl', function($location, $routeParams, $scope, ContactService){

	$scope.contact = {};

	const getContacts = () => {
		ContactService.getSingleContact($routeParams.id).then((results) => {
			console.log("results", results);
			$scope.contact = results.data;
		}).catch((err) => {
			console.log('error in getSingleContact', err);
   		});	
	};

	$scope.switchFavorite = (contact) => {
		console.log("contact.id", contact.id);
		contact.favorite = contact.favorite ? false: true;
		let favoriteContact = ContactService.createContactObj (contact);
		ContactService.updateContact(favoriteContact, contact.id).then((result) => {
			getContacts();
		}).catch((err) => {
			console.log('error in favoriteContact', err);
		});
	};

	$scope.editContact = (contactId) => {
		$location.path(`/contacts/edit/${contactId}`);
	};

	getContacts();
});

