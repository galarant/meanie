/*global angular */
angular.module('flapperNews', ['ui.router']).config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainController as main',
        });

    $urlRouterProvider.otherwise('home');

  }]);
