'use strict';
var myApp = angular.module('myApp',[]);

myApp.directive('welcome', function() {
	return {
		restrict: 'E',
		template: '<div>Bonjour User!</div>'
	}
})