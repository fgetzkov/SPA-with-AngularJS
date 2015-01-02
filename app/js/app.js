var app = angular.module('AdsModule',['ngRoute']).config(function ($routeProvider) {
	$routeProvider.when('/register',{
		templateUrl:'templates/register.html',
		controler:'app'
	});

	$routeProvider.when('/ads',{
		templateUrl:'templates/all-ads.html ';
	})

});
