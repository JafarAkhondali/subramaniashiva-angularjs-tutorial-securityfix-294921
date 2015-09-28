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
}).filter('startsWith', function() {
    return function(items, letter) {
        var selected = [];
        if (letter) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].name.toLowerCase().indexOf(letter.toLowerCase()) === 0) {
                    selected.push(items[i]);
                }
            }
        } else {
            return items;
        }
        return selected;
    }
});
