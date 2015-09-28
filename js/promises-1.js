'use strict';

function getData($timeout, $q) {

    return function() {
        var defer = $q.defer();
        // simulate async function
        $timeout(function() {
            if (Math.round(Math.random())) {
                defer.resolve(Math.floor(Math.random() * 10));
            } else {
                defer.reject('data failed');
            }
        }, 2000);

        return defer.promise;
    }
}
var myApp = angular.module('myApp', []);
myApp.factory('getData', getData).run(function(getData) {
    var promise = getData();
    promise.then(function(num) {
        console.log('Resolving the promise ', num)
        return num * 2;
    }).then(function(num) {
        console.log('Chaining the promise. Multiplied value is ', num);
    }, function(string) {
        console.error(string);
    }).finally(function() {
        console.log('Finished at ', new Date());
    })
});
