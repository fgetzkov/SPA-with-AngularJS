app.controller('AdsController',function  ($scope, $rootScope, $location,mainData, userData, pageSize, adsService){
	
	$scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

       $scope.reloadAds = function() {
          adsService.getAds(
              $scope.adsParams,
              function success(data) {
                  $scope.data = $scope.ads = data;
              }            
          );
      };

      $scope.reloadAds();
      $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });



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
		//location.reload();

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

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked = function(clickedTownId) {
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };
})