'use strict';

app.controller("FavoritesCtrl", function($location, $rootScope, $scope, ContactService){
	$scope.contacts = [];

	const getContacts = () => {
		ContactService.getFavoriteContacts($rootScope.uid).then((results) =>{
			$scope.contacts = results;
		}).catch((err) =>{
			console.log("error in getFavoriteContacts", err);
		});
	};

	$scope.deleteContact = ( contactId ) => {
		ContactService.deleteContactInFb(contactId).then((results) => {
			getContacts();
		}).catch((err) => {
			console.log('error in deleteContactInFb:', err);
		});  
	};

	$scope.changeFav = (contact, contactId) => {
		contact.favorite = contact.favorite ? false: true;
		let favContact = ContactService.createContactObject (contact);
		ContactService.updateContact(favContact, contactId).then(() => {
			getContacts();
		}).catch((err) => {
			console.log("error in favContact", err);
		});
	};

	$scope.editContact = (contactId) => {
		$location.path(`/contacts/edit/${contactId}`);
	};
	
	$scope.goToNewContacts = () => {
		$location.path(`"/contacts/new"`);
	};


	getContacts();
	
});