'use strict';

app.controller("ViewCtrl", function($location, $rootScope, $scope, ContactService) {

	const getContacts = () => {
		ContactService.getContacts($rootScope.uid).then((results) =>{
			$scope.contacts = results;
		}).catch((err) =>{
			console.log('error in getContacts', err);
		});
	};

	getContacts();

	$scope.deleteContact = (contactId) => {
		ContactService.deleteContact(contactId).then((result) => {
			getContacts();
		}).catch((err) =>{
			console.log('error in deleteContact', err);
		});
	};

	getContacts();

	// $scope.switchContact = (contact) => {
	// 	contact.favorite = true;
	// 	let updatedContact = ContactService.createContactObj (contact);
	// 	console.lob("contact.id", contact.id)
	// 	ContactService.updateContact(updatedContact, contact.id).then((result) => {
	// 		getContacts();
	// 		console.log("result", result);
	// 	}).catch((err) => {
	// 		console.log("error in updateContact", err);
	// 	});
	// };

	$scope.switchFavorite = (contact) => {
		contact.favorite = contact.favorite ? false: true;
		let favoriteContact = ContactService.createContactObj (contact);
		ContactService.updateContact(favoriteContact, contact.id).then(() => {
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

});