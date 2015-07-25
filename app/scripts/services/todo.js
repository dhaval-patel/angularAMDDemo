'use strict';

/**
 * @ngdoc function
 * @name angularAmddemoApp.service:TodoService
 * @description
 * # TodoService
 * 
 */

define(['app'], function (angularAPP) {

	// Definition
	var TodoService = function ($q) {
		this.todos = [];
		this.$q = $q;
	};

	TodoService.prototype.save = function (todo) {
		this.todos.push({
			id: this.todos.lenth,
			todo: todo
		});

		var def = this.$q.defer();
		def.resolve();
		return def.promise;
	};

	TodoService.prototype.get = function () {
		var def = this.$q.defer();
		def.resolve(this.todos);
		return def.promise;
	};

	TodoService.prototype.delete = function (todo) {
		this.todos.splice(this.todos.indexOf(todo), 1);
		var def = this.$q.defer();
		def.resolve(this.todos);
		return def.promise;
	};

	// Service Injection
	TodoService.$inject = ['$q'];

	// Injection to Angular Scope
  	angularAPP.service('TodoService', TodoService);
});