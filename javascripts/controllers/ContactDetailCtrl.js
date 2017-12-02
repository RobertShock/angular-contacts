'use strict';

app.controller('ContactDetailCtrl', function($location, $routeParams, $scope, ContactService){

	$scope.contact = {};

	const getContact = () => {
		ContactService.getSingleContact($routeParams.id).then((results) => {
			$scope.contact = results.data;
		}).catch((err) => {
			console.log('err in getSingleContact', err);
   		});	
	};

	$scope.deleteContact = ( contactId ) => {
		ContactService.deleteContact(contactId).then((results) => {
			getContact();
		}).catch((err) => {
			console.log('error in deleteContact', err);
		});  
	};

    $scope.changeFavorite = (contact, contactId) => {
		contact.favorite = contact.favorite ? false: true;
		let favoriteContact = ContactService.createContactObj (contact);
		ContactService.updateContact(favoriteContact, contactId).then(() => {
			getContact();
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

	getContact();
});

