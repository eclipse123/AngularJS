'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controller','myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'front_firstpage.html', controller: ''});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial1.html', controller: ''});
    $routeProvider.otherwise({redirectTo: '/view2'});
  }]);
