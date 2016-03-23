(function () {
angular.module('requestModule', []);  

})();

angular.module("requestModule").controller('GithubController', GithubController);

function GithubController($scope, $http) {

  $scope.sendMessage = function (search) {
	
	$scope.data = [];
	var results = [];
  	$scope.loading = true;
  	$scope.showFilm = false;

  	var director = "director=" + search.director;
  	var actor = "actor=" + search.actor;
  	var minRating = search.minRatings;
  	var maxRating = search.maxRatings;
  	var typeOf = search.typeOf;

  	if (search.actor !== undefined) {
  		$scope.API_URL = "http://netflixroulette.net/api/api.php?" + actor;
  	} else if (search.director !== undefined) {
  		$scope.API_URL = "http://netflixroulette.net/api/api.php?" + director;
  	} else if(search.director !== undefined && search.actor !== undefined){
  		$scope.API_URL = "http://netflixroulette.net/api/api.php?" + director + "&" + actor;
  	}

		var REQ = {
	    url: $scope.API_URL,
	    method: 'GET'
	  };

	  $http(REQ)
	    .success(function(data){

	    	var results = [];
	    	angular.forEach(data, function(data, key) {
	    		if (data.rating >= minRating && data.rating <= maxRating && data.mediatype === typeOf) {
	    			results.push(data);
						$scope.showFilm = true;
						$scope.loading = false;
						$scope.noFilm = false;
	    		} else {
	    			$scope.loading = false;
	    			$scope.noFilm = true;
	    		}
	      });
	      $scope.result = results[0];
	    })
	    .error(function(err){
	    	$scope.loading = false;
	      $scope.error = true;
	      $scope.noFilm = true;
	    });
  };    
}

GithubController.$inject = ['$scope', '$http'];
angular.module("requestModule").directive("showResults", function() {
	return {
		templateUrl: "app/modules/request/results.view.html",
		replace: true,
		restric: "E",
		controllerAs: "GithubController"
	};
});


angular.module("requestModule").directive("uiAlert", function () {
	return {
		templateUrl: "app/modules/request/alert.view.html",
		replace: true,
		restric: "E"
	};
});