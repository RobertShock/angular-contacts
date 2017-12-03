'use strict';

app.controller("LoginCtrl", function($location, $rootScope, $scope, LoginService){
	$scope.login = () => {
		LoginService.authenticateGoogle().then((result) =>{ 
			$rootScope.uid = result.user.uid;
			$scope.$apply(() =>{
				$location.url("contacts/view");
			});
		}).catch((err) =>{
			console.log("error in authenticateGoogle", err);
		});
	};
});