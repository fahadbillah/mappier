'use strict';

/**
 * @ngdoc function
 * @name mappierApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mappierApp
 */
 angular.module('mappierApp')
 .controller('MainCtrl',['$scope','$timeout','uiGmapGoogleMapApi', function ($scope,$timeout,uiGmapGoogleMapApi) {
     // Do stuff with your $scope.
     // Note: Some of the directives require at least something to be defined originally!
     // e.g. $scope.markers = []

     // uiGmapGoogleMapApi is a promise.
     // The "then" callback function provides the google.maps object.

     var i = 0;

     var getCurrentPosition = function() {
     	navigator.geolocation.getCurrentPosition(function(position){
     		console.log(position.coords);

     		var latitude = position.coords.latitude + i;
     		var longitude = position.coords.longitude + i;

     		$scope.map = { center: { latitude: latitude, longitude: longitude}, zoom: 18 };
     		$scope.marker = {
     			id: 1,
     			coords: null
     		};
     		$scope.marker.coords = {
     			accuracy: 9295,
     			altitude: null,
     			altitudeAccuracy: null,
     			heading: null,
     			latitude: latitude,
     			longitude: longitude,
     			speed: null
     		};
     		// $scope.marker.coords.latitude = position.coords.latitude;
     		// $scope.marker.coords.longitude = position.coords.longitude;

     		console.log($scope.map);




     		uiGmapGoogleMapApi.then(function(maps) {
     			console.log(maps);
     		});
     		i+= 0.0001;
     	})

     	$timeout(getCurrentPosition, 1000);

     }
     getCurrentPosition();
 }]);