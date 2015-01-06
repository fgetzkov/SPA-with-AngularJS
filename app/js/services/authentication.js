app.factory('authentication', function(){
	
	function isAdmin (argument) {
		var isAdmin = getUserData().isAdmin;
		return isAdmin
	}
	return {
		isAdmin : isAdmin
	}
});