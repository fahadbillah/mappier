'use strict';

/**
 * @ngdoc function
 * @name mappierApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mappierApp
 */
 angular.module('mappierApp')
 .controller('MainCtrl',['$scope', 'uiGmapGoogleMapApi', function ($scope, uiGmapGoogleMapApi) {
     // Do stuff with your $scope.
     // Note: Some of the directives require at least something to be defined originally!
     // e.g. $scope.markers = []

     // uiGmapGoogleMapApi is a promise.
     // The "then" callback function provides the google.maps object.

     $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

     
     uiGmapGoogleMapApi.then(function(maps) {
     	console.log(maps);
     });
 }]);