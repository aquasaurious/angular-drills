angular.module('arrayApp').controller('arrayController', function($scope, arrayServ) {

    $scope.test = "controller works";
    $scope.testa = arrayServ.test;

    $scope.people = arrayServ.getData();

});