
app.factory('userData', ['$resource','baseServiceUrl',function($resource, baseServiceUrl){
	
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