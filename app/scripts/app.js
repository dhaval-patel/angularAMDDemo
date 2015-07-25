'use strict';

/**
 * @ngdoc overview
 * @name angularAmddemoApp
 * @description
 * # angularAmddemoApp
 *
 * Main module of the application.
 */

 define(['angularAMD', 'angular', 'angular-route'], function (angularAMD) {
  var app = angular.module('angularAmddemoApp', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', angularAMD.route({
          templateUrl: 'views/todoCreate.html',
          controllerUrl: 'controllers/todoCreate',
          controller: 'TodoCreateCtrl',
          controllerAs: 'vm'
        }))
        .when('/list', angularAMD.route({
          templateUrl: 'views/todoList.html',
          controllerUrl: 'controllers/todoList',
          controller: 'TodoListCtrl',
          controllerAs: 'vm'
        }))
        .otherwise({
          redirectTo: '/'
        });
    });

    return angularAMD.bootstrap(app, document.body);
 });
