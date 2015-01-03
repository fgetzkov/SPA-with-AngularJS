app.controller('AdsController',function  ($scope,mainData){
	mainData.getAllAds(function(resp){
		$scope.data=resp;

	});
})