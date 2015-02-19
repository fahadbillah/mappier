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

     $scope.allMarkers = [];

     var getCurrentPosition = function() {
     	navigator.geolocation.getCurrentPosition(function(position){

               $scope.icon = 'http://img.informer.com/icons/png/48/3182/3182670.png';
               var latitude = position.coords.latitude + i;
               var longitude = position.coords.longitude + i;

               $scope.map = { 
                    center: { 
                         latitude: latitude, 
                         longitude: longitude
                    }, 
                    zoom: 18,
                    bounds: {}                    
               };
               $scope.marker = {
                  id: 1,
                  coords: null
             };
               // $scope.allMarkers.push({latitude:latitude, longitude:longitude});
             //   $scope.marker.coords = {
             //      accuracy: 9295,
             //      altitude: null,
             //      altitudeAccuracy: null,
             //      heading: null,
             //      latitude: latitude,
             //      longitude: longitude,
             //      speed: null
             // };
     		// $scope.marker.coords.latitude = position.coords.latitude;
     		// $scope.marker.coords.longitude = position.coords.longitude;





     		uiGmapGoogleMapApi.then(function(maps) {
     			// console.log(maps);
     		});

            $scope.$watch(function() {
                return $scope.map.bounds;
           }, function(nv, ov) {

               var ret = {
                    id: counter,
                    latitude: latitude,
                    longitude: longitude,
                    title: 'm' + counter
               };
               counter++;
               $scope.allMarkers.push(ret);
          // console.log($scope.allMarkers);
     },true);
            i+= 0.0001;
       })
var counter = 1;
$timeout(getCurrentPosition, 5000);

}
getCurrentPosition();
}]);