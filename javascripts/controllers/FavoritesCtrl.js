'use strict';

app.controller('FavoritesCtrl', function($location, $rootScope, $scope, ContactService) {


	const getContacts = () => {
		ContactService.getFavoriteContacts($rootScope.uid).then((results) =>{
			$scope.contacts = results;
		}).catch((err) =>{
			console.log('error in getFavoriteContacts', err);
		});
	};

	$scope.deleteContact = ( contactId ) => {
		ContactService.deleteContact(contactId).then((results) => {
			getContacts();
		}).catch((err) => {
			console.log('error in deleteContact:', err);
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

	$scope.contactDetail = (contact, contactId) => {
		$location.path(`/contacts/detail/${contactId}`);
	};
	
	$scope.goToNewContacts = () => {
		$location.path("/contacts/new");
	};

	getContacts();
	
});