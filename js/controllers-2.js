'use strict';
var myApp = angular.module('myApp', []);
myApp.controller('GrandparentController', ['$scope', function($scope) {
    $scope.familyname = 'Tesla';
}]);
myApp.controller('ParentController', ['$scope', function($scope) {
    $scope.name = 'Duka';
}]);
myApp.controller('ChildController', ['$scope', function($scope) {
    $scope.name = 'Nikola';
}]);
