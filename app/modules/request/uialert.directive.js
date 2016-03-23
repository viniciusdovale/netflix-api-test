angular.module("requestModule").directive("uiAlert", function () {
	return {
		templateUrl: "app/modules/request/alert.view.html",
		replace: true,
		restric: "E"
	};
});