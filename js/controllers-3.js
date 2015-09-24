//'use strict';
var myApp = angular.module('myApp',[]);
myApp.controller('FormController', function() {
	var self = this;
	this.name = '';
	this.age = '';
	this.setDetails = function(name, age) {
		this.name = name;
		this.age = age;
	}
});