'use strict';
var myApp = angular.module('myApp', []);

myApp.controller('myController', function() {
    var self = this;
    self.people = [{
        name: 'Siva',
        age: '27'
    }, {
        name: 'Rams',
        age: '25'
    }, {
        name: 'Surya',
        age: '22'
    }, {
        name: 'Bala',
        age: '27'
    }, {
        name: 'Kumar',
        age: '28'
    }];
});
