'use strict';
var myApp = angular.module('myApp', []);
myApp.controller('MyController', ['$scope', function($scope) {
    $scope.greeting = 'Bonjour!';
    $scope.username = '';
    $scope.getName = function() {
        return $scope.username;
    }
    $scope.setName = function(name) {
        $scope.username = name;
    }
}]);
