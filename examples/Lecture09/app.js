(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);


// Inside DIController, the parameters $scope, $filter, and $injector are injected into the controller. These are services provided by AngularJS:

// $scope: An object that acts as the "glue" between the HTML view and the JavaScript controller. Properties and methods defined on the $scope object become accessible in the HTML.

// $filter: A service that provides filtering and formatting functionality. In this case, it's used to convert a string to uppercase.

// $injector: A service that provides dependency injection. This allows you to access other defined services.
function DIController ($scope,
                       $filter,
                       $injector) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  // that's the magic!!!
  // how angularJS is able to figure out where to inject the particular service
  console.log($injector.annotate(DIController));
}

function AnnonateMe(name, job, blah) {
  return "Blah!";
}

// this is how angularJS parses the code 
// and figures out where to insert the service
console.log(DIController.toString());

})();
