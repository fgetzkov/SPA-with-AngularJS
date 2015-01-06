app.controller('AdsController',function  ($scope,mainData){
	mainData.getAllAds(function(resp){
		$scope.data=resp;

	});
	mainData.getAllTowns(function(resp){
		$scope.towns=resp;

	});
	mainData.getAllCategories(function(resp){
		$scope.categories=resp;

	});

	$scope.register=function (user){
		userData.register(user);
	}

})