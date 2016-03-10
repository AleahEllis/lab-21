// script.js, any js file that might perform AJAX operations
// var lyric = ''; $.get('/api/lyric').success(function(data){
// lyric = data; });
// logic to display lyric on the page

var app=angular.module('YonceApp',[]);
 app.factory('lyricService', function($http){
 	return $http.get('/api/queenbee');

 });

 
