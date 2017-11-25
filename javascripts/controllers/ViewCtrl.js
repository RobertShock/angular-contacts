'use strict';

app.controller("ViewCtrl", function($location, $rootScope, $scope, ContactService){
	$scope.contacts = [];

	const getContacts = () => {
		ContactService.getContacts($rootScope.uid).then((results) =>{
			$scope.contacts = results;
		}).catch((err) =>{
			console.log("error in getContacts", err);
		});
	};

	getContacts();

	$scope.deleteContact = (contactId) => {
		ContactService.deleteContact(contactId).then((result) => {
			getContacts();
		}).catch((err) =>{
			console.log("error in deleteContact", err);
		});
	};

	getContacts();

	$scope.favoriteContact = (contact) => {
		let updatedContact = {};
		if (!contact.isFavorite) {
			updatedContact = ContactService.createContactObject(contact); 
		} else {
			updatedContact = ContactService.createContactObject(contact);
			updatedContact.isFavorite = false;
		}
		ContactService.updateContact(updatedContact, contact.id).then((result) => {
			getContacts();
			console.log("result", result);
		}).catch((err) => {
			console.log("error in favoriteContact", err);
		});
    };

	

	$scope.starChange = (event, contact) =>{
		if(event.favorite){
			contact.favorite = event.favorite;
			let updatedContact = ContactService.createContactObject(contact);
			ContactService.updateContact(updatedContact, contact.id).then(() => {
				getContacts();
			}).catch((err) => {
				console.log("error in updateContact", err);
			});
		}
	};

	$scope.contactDetail = (contactId) => {
		$location.path(`/contact/${contactId}`);
	};
});