'use strict';

app.controller("ContactDetailCtrl", function($location, $routeParams, $scope, ContactService){

	$scope.contact = {};

	const getContact = () => {
		ContactService.getSingleContact($routeParams.id).then((results) => {
			$scope.contact = results.data;
		}).catch((err) => {
			console.log("err in getSingleContact", err);
   		});	
	};

	$scope.deleteContact = ( contactId ) => {
		ContactService.deleteContactInFb(contactId).then((results) => {
			getContact();
		}).catch((err) => {
			console.log('error in deleteContactInFb:', err);
		});  
	};

    $scope.changeFav = (contact, contactId) => {
		contact.favorite = contact.favorite ? false: true;
		let favContact = ContactService.createContactObject (contact);
		ContactService.updateContact(favContact, contactId).then(() => {
			getContact();
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

	getContact();
});

