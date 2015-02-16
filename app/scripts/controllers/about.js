'use strict';

/**
 * @ngdoc function
 * @name mappierApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mappierApp
 */
angular.module('mappierApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
