angular.module('app').controller('mainCTRL', function($scope, appServ) {

    $scope.test = "this works";
    $scope.testa = appServ.test;


});