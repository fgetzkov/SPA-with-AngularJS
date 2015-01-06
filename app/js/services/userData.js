
app.factory('userData', ['$resource','baseServiceUrl',function($resource, baseServiceUrl){
	
	function registerUser (user) {
		return $resource(baseServiceUrl+'user/register').save(user);
	}
	function loginUser (user) {
		return $resource(baseServiceUrl+'user/login').save(user);
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