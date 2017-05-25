var indexApp = angular.module('indexApp', ['ngSanitize']);

indexApp.controller('indexController', ['$scope', '$http', '$window', function($scope, $http, $window){
    console.log($scope);
    console.log($http);
    console.log($window);
}]);
