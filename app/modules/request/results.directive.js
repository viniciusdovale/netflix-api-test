angular.module("requestModule").directive("showResults", function() {
	return {
		templateUrl: "app/modules/request/results.view.html",
		replace: true,
		restric: "E",
		controllerAs: "GithubController"
	};
});

