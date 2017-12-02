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

	$scope.contactDetail = (contact, contactId) => {
		$location.path(`/contacts/detail/${contactId}`);
	};
	
	$scope.goToNewContacts = () => {
		$location.path(`"/contacts/new"`);
	};

});