angular.module('apiApp').service('mainSvc', function($http){

    var baseURL = "http://anapioficeandfire.com/api/";

	this.getData = function(type) {
        return $http({
            method: 'GET',
            url: baseURL+type
        }).then(function(response) {
            return response.data;
        })
	}

});