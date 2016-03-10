// script.js, any js file that might perform AJAX operations
var lyric = ''; $.get('/api/lyric').success(function(data){
lyric = data; });
// logic to display lyric on the page