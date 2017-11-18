'use strict';

app.controller("NavCtrl", function($location, $rootScope, $scope, $window, LoginService){
	$scope.logoutUser = () => {
		delete $rootScope.uid;
		$window.localStorage.clear();
		LoginService.logout();
		$location.path('/login');
	};
});