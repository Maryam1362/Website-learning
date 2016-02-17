var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {
    $log.log("test");
    $log.info("this is some info");
    $log.warn("warning!");
});