/*global angular */
var flapperNews = angular.module('flapperNews', ['ngRoute'])
  .config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider

          .when('/', {
              templateUrl: 'views/home.html',
              controller: 'MainController',
              controllerAs: 'main',
          })

          .otherwise({ templateUrl: 'index.html', controller: 'MainController' });

      $locationProvider.html5Mode(true);
    }
  ]);
