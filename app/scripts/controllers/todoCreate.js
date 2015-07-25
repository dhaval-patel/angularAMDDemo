'use strict';

/**
 * @ngdoc function
 * @name angularAmddemoApp.controller:TodoCreateCtrl
 * @description
 * # TodoCreateCtrl
 */

define(['app', 'todoService'], function (angularAPP) {

	// Definition
	var TodoCreateCtrl = function (todoService) {
		this.todo = '';
		this.todoService = todoService;
	};

	TodoCreateCtrl.prototype.save = function () {
		this.todoService.save(this.todo).then((function (_this) {			// 'this' problem with ES5
			return function () {
				_this.todo = '';
			};
		})(this));
	};

	// Service Injection
	TodoCreateCtrl.$inject = ['TodoService'];

	// Controller Injection to Angular Scope
  	angularAPP.controller('TodoCreateCtrl', TodoCreateCtrl);
});