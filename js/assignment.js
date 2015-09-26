'use strict';
var myApp = angular.module('myApp',[]);
myApp.factory('block', function() {
	var block = {};
	block.top = [];
	block.addTopBlock = function(name, age) {
		var obj = {};
		obj.name = name;
		obj.age = age;
		block.top.push(obj);
	}
	return block;
});
myApp.controller('mainController', function(block) {
	var self = this;
	this.topBlocks = block.top;
	this.bottomBlocks = [];
	this.name = '';
	this.age = '';
	this.addTopBlock = function(isValid) {
		if(isValid) {
			block.addTopBlock(this.name, this.age);
			this.form.$setPristine();
			// Since Angular 1.3, set back to untouched state.
			this.form.$setUntouched();

			this.name = '';
			this.age = '';
		}
	}
});
myApp.directive('topblock', function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="pull-left top"><ng-transclude></ng-transclude></div>'
	}
});

myApp.directive('leaving', function() {
	return function(scope, element, attrs) {
		element.bind('mouseleave', function() {
			element.removeClass(attrs.entering);
		});		
	}
});