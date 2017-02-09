angular.module('apiApp').controller('mainCTRL', function($scope, mainSvc) {


    $scope.getChars = function() {
        var promise = mainSvc.getData("characters");
        promise.then(function(apiObj){
            $scope.chars = apiObj;
        });
    }
    $scope.getChars();
});