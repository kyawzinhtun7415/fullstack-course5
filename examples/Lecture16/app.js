(function () {
'use strict';

angular.module('BindingApp', [])
.controller('BindingController', BindingController);

BindingController.$inject = ['$scope'];
function BindingController($scope) {
  $scope.firstName = "Yaakov";
  // If `fullName` is defined here, it will be run one time only when the website is loaded
  // and `setFullName` will have no effect on this variable.
  // $scope.fullName = ""; 

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };

  // Although the fullName changes, the fullName shown in the view would not.
  $scope.setFullName = function () {
    $scope.fullName = $scope.firstName + " " + "Chaikin";
  };

  $scope.logFirstName = function () {
    console.log("First name is: ", $scope.firstName);
  };

  $scope.logFullName = function () {
    console.log("Full name is: ", $scope.fullName);
  };
}

})();
