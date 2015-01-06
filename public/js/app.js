/*global angular */
var flapperNews = angular.module('flapperNews', ['ui.router']);

flapperNews.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainController',
        });

    $urlRouterProvider.otherwise('home');

  }]);
