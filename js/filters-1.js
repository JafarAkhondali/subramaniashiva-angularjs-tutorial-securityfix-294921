'use strict';
var myApp = angular.module('myApp', []);

myApp.controller('myController', function() {
    var self = this;
    self.name = '';
}).filter('capitalize', function() {
    return function(text) {
        return text.toUpperCase();
    }
});
