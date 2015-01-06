var baseServiceUrl='http://softuni-ads.azurewebsites.net/api/';
app2.factory('userData', ['$resource','baseServiceUrl',function($resource){
	
	function registerUser (user) {
		return $resource(baseServiceUrl+'user/register').save(user);
	}
	function loginUser (user) {
		// body...
	}
	function logoutUser () {
		// body...
	}

	return {
		 register:registerUser,
		 login:loginUser,
		 logout:logoutUser 
	}
}])