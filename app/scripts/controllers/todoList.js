'use strict';

/**
 * @ngdoc function
 * @name angularAmddemoApp.controller:TodoListCtrl
 * @description
 * # TodoListCtrl
 */

define(['app', 'todoService'], function (angularAPP) {

	// Definition
	var TodoListCtrl = function (todoService) {
		this.todos = [];
		this.todoService = todoService;

		// load todos
		this.loadTodo();
	};

	TodoListCtrl.prototype.loadTodo = function () {
		this.todoService.get().then((function (_this) {					// 'this' problem with ES5
			return function (todos) {
				Array.prototype.push.apply(_this.todos, todos);
			};
		})(this));
	};

	TodoListCtrl.prototype.deleteTodo = function (todo) {
		this.todoService.delete(todo).then((function (_this) {			// 'this' problem with ES5
			return function (todos) {
				_this.todos.length = 0;
				Array.prototype.push.apply(_this.todos, todos);
			};
		})(this));
	};

	// Service Injection
	TodoListCtrl.$inject = ['TodoService'];

	// Controller Injection to Angular Scope
  	angularAPP.controller('TodoListCtrl', TodoListCtrl);
});