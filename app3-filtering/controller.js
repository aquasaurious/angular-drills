angular.module('arrayApp').controller('arrayController', function($scope, arrayServ) {

    $scope.people = arrayServ.getData();

});