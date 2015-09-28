'use strict';
var myApp = angular.module('myApp', []);
myApp.factory('messages', function() {
    var messages = {};
    messages.list = [];
    messages.addMessage = function(message) {
        messages.list.push({
            id: messages.list.length,
            text: message
        });
    }
    return messages;
});
myApp.controller('ListViewController', function(messages) {
    var self = this;
    this.messages = messages.list;
});
myApp.controller('FormController', function(messages) {
    var self = this;
    this.newMessage = 'Hello World!';
    this.addMessage = function(message) {
        messages.addMessage(message);
        this.newMessage = '';
    }
});
