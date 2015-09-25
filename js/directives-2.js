'use strict';
var myApp = angular.module('myApp',[]);

myApp.directive('welcome', function() {
	return {
		restrict: 'A',
		link: function() {
			alert('Custom attribute creating this alert!');
		}
	}
});