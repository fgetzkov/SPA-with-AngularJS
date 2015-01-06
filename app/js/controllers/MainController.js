app.controller('AdsController',function  ($scope, $location,mainData, userData){
	
	mainData.getAllAds(function(resp){
		$scope.data=resp;

	});
	mainData.getAllTowns(function(resp){
		$scope.towns=resp;

	});
	mainData.getAllCategories(function(resp){
		$scope.categories=resp;

	});

	 $scope.isLoged=!!localStorage.getItem("username");
	 $scope.username = localStorage.getItem("username");


	$scope.register=function (user){
		userData.register(user)
		location.reload();

	}

	$scope.login=function (user){
		
		userData.login(user)
		.$promise
		.then(function(data){
			localStorage.setItem("username", data.username)
			$scope.isloged = true;
			location.reload();

		});
	}
	$scope.logout=function (){
		localStorage.removeItem("username");
		location.reload();
	}
})