'use strict';

app.controller('ContactDetailCtrl', function($location, $routeParams, $scope, ContactService){

	// $scope.contact = {};

	const getContacts = () => {
		ContactService.getSingleContact($routeParams.id).then((results) => {
			$scope.contact = results.data;
		}).catch((err) => {
			console.log('error in getSingleContact', err);
   		});	
	};

	// const getContact = () => {
    //     ContactService.getSingleContact($routeParams.id).then((results) => {
    //         $scope.contact = results.data;
    //     }).catch((err) => {
    //         console.log('error in getContact', err);
    //     });
    // };

	$scope.switchFavorite = (contact) => {
		contact.favorite = contact.favorite ? false: true;
		let favoriteContact = ContactService.createContactObj (contact);
		ContactService.updateContact(favoriteContact, contact.id).then((result) => {
			getContact();
		}).catch((err) => {
			console.log('error in favoriteContact', err);
		});
	};
	
	$scope.editContact = (contactId) => {
		$location.path(`/contacts/edit/${contactId}`);
	};

	getContacts();
});

