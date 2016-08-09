angular.module('todoListApp', [])
.controller('mainCtrl', function($scope, dataService) {

	$scope.helloConsole = dataService.helloConsole;

	$scope.learningNgChange = function() {
		console.log("An input changed.");
	};

	$scope.todos = [
		{"name": "task 1"},
		{"name": "task 2"},
		{"name": "task 3"},
		{"name": "task 4"},
		{"name": "task 5"}
	]
})
.service('dataService', function(){
	this.helloConsole = function() {
		console.log('This is the hello console service!')
	}
});