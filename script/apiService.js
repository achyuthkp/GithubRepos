app.service('apiService', ['$http', function ($http) {
	var domain = "https://api.github.com";
	return {
		searchRepos: function(param){
			var req = {method: 'GET',url: domain+'/search/repositories?q=user:'+param+'&sort=stars&order=desc'}; 
			return $http(req).then(function(res){
				return res.data.items;
			}, function(err){
				console.log(err);
			});
		}
	};
}]);