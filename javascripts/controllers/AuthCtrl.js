'use strict';

app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthService){
	$scope.auth = () => {
		AuthService.authenticateGoogle().then((result) =>{ 
			$rootScope.uid = result.user.uid;
			$scope.$apply(() =>{
				$location.url("/view");
			});
		}).catch((err) =>{
			console.log("error in authenticateGoogle", err);
		});
	};
});