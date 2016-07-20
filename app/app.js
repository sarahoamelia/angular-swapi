'use strict';

angular.module('myStarWarsApp', ['xyz.angular.swapi']).

controller('jediController', ['swapiService', 
  function($scope, swapiService) {
    // get luke skywalker data
    swapiService.peope('1').
    then(function(lukeData){
      $scope.luke = lukeData;
    });
  }
])