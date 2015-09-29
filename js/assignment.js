'use strict';
var myApp = angular.module('myApp', []);
myApp.factory('notes', function() {
    var notes = {};
    notes.officeNotes = [];
    notes.addOfficeNotes = function(task, priority) {
        var obj = {};
        obj.task = task;
        obj.priority = priority;
        obj.id = notes.officeNotes.length;
        notes.officeNotes.push(obj);
    }
    notes.personalNotes = [];
    notes.addPersonalNotes = function(task, priority, length, row) {
        var obj = {};
        obj.task = task;
        obj.priority = priority;
        obj.id = notes.personalNotes.length + 1;
        obj.length = length;
        obj.row = row;
        notes.personalNotes.push(obj);
    }
    return notes;
});
myApp.controller('mainController', function(notes) {
    var self = this;
    this.officeNotes = notes.officeNotes;
    this.personalNotes = notes.personalNotes;
    this.officeTask = '';
    this.officePriority = '';
    this.personalTask = '';
    this.personalPriority = '';
    this.personalTaskLength = 0;
    this.personalRow = 0;
    this.prioritiesList = ['High', 'Medium', 'Low'];
    this.addNotes = function(type, form) {
        if (form.$valid) {
            if (type === 'office') {
                notes.addOfficeNotes(this.officeTask, this.officePriority);
                this.officeTask = '';
                this.officePriority = '';
            } else {
                if (this.personalTaskLength > 5) {
                    this.personalRow++;
                    this.personalTaskLength = 1;
                } else {
                    this.personalTaskLength++;
                }
                notes.addPersonalNotes(this.personalTask, this.personalPriority, this.personalTaskLength, this.personalRow);
                this.personalTask = '';
                this.personalPriority = '';
            }
            form.$setPristine();
            form.$setUntouched();
        }
    }
});
myApp.directive('sticknote', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            task: '@',
            priority: '@',
            id: '@',
            len: '@',
            row: '@'
        },
        template: '<div class="note" style="right: {{ 177 * (len-1) }}px; bottom: {{ 127*row }}px"><p>{{ task }}</p><p>{{ priority }}</p><ng-transclude></ng-transclude></div>'
    }
});

myApp.directive('leaving', function() {
    return function(scope, element, attrs) {
        element.bind('mouseleave', function() {
            element.removeClass(attrs.entering);
        });
    }
});
