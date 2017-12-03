'use strict';

app.controller('ContactDetailCtrl', function($location, $routeParams, $scope, ContactService){

	$scope.contact = {};

	const getContact = () => {
		ContactService.getSingleContact($routeParams.id).then((results) => {
			console.log("results", results);
			$scope.contact = results.data;
		}).catch((err) => {
			console.log('err in getSingleContact', err);
   		});	
	};

	$scope.switchFavorite = (contact) => {
		contact.favorite = contact.favorite ? false: true;
		let favoriteContact = ContactService.createContactObj (contact);
		ContactService.updateContact(favoriteContact, contact.id).then(() => {
			getContact();
		}).catch((err) => {
			console.log('error in favoriteContact', err);
		});
	};

	getContact();
});

