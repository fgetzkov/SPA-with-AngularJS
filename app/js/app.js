var app = angular.module('AdsModule',['ngRoute', 'ngResource']).config(function ($routeProvider) {
	$routeProvider.when('/register',{
		templateUrl:'templates/register.html',
		controler:'app'
	});

	$routeProvider.when('/ads',{
		templateUrl:'templates/all-ads.html '
	});
	$routeProvider.when('/login',{
		templateUrl:'templates/login.html '
	});
	$routeProvider.otherwise({redirectTo: '/ads'});

});

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');