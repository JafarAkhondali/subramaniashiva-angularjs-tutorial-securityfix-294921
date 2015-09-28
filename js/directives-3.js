'use strict';
var myApp = angular.module('myApp', []);

myApp.directive('entering', function() {
    return function(scope, element, attrs) {
        element.bind('mouseenter', function() {
            element.addClass(attrs.entering);
        });
    }
});

myApp.directive('leaving', function() {
    return function(scope, element, attrs) {
        element.bind('mouseleave', function() {
            element.removeClass(attrs.entering);
        });
    }
});
