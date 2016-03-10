var app=angular.module('YonceApp');
	app.controller('YonceCont',['$scope', 'lyricService', function($scope, lyricService){
		lyricService.then(function(response){

			$scope.showLyric=response.data;

		});
		// $scope.something=lyricService.array
	}]);

