(function() {
  // Default to the local version.
  var path = 'vendor/jquery-1.11.1.min.js';
  // Get any jquery=___ param from the query string.
  var jqversion = location.search.match(/[?&]jquery=(.*?)(?=&|$)/);
  // If a version was specified, use that version from code.jquery.com.
  if (jqversion) {
    console.log
    path = 'vendor/jquery-' + jqversion[1] + '.min.js';
  }
  // This is the only time I'll ever use document.write, I promise!
  document.write('<script src="' + path + '"></script>');
}());
