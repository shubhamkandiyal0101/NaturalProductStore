var app = angular.module('naturalProductStore', []);
app.controller('mainController', function($scope) {
  // $scope.firstName = "John";
  // $scope.lastName = "Doe";

  // toggleClass("main");
  $scope.toggleProductDescriptionClass = function() {
  	// console.log('here i am ')
  	$('#productDescriptionDiv').toggleClass("displayDescriptionToggle");
  }
});