(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

// these string literals will never get minified because it is real data.
DIController.$inject = ['$scope', '$filter']; 
function DIController($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();
