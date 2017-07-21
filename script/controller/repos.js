app.controller('repoCtrl', ['$scope', '$http', 'apiService', function($scope, $http, api) {
	$scope.loading = false;
	$scope.repos=[];
	
	$scope.runSearch = function(){
		$scope.repos=[];
		$scope.loading = true;
		api.searchRepos($scope.search).then(function(result){
			$scope.loading = false;
			$scope.repos = result;
		});
	}
}]);