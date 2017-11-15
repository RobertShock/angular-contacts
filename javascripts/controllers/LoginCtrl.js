'use strict';

app.controller("LoginCtrl", function($location, $rootScope, $scope, AuthService){
	$scope.login = () => {
		AuthService.authenticateGoogle().then((result) =>{ 
			$rootScope.uid = result.user.uid;
			$scope.$apply(() =>{
				$location.url("/search");
			});
		}).catch((err) =>{
			console.log("error in authenticateGoogle", err);
		});
	};
});