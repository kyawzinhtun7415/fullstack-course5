// so that no variable bleeds into global scope # IIFE 
(function () {
'use strict'; // to protect ourselves from making mistakes

angular.module('myFirstApp', [])

.controller('MyFirstController', function () {

});

})();
