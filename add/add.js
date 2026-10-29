/* Shared by add/, add/x/ and add/r/: hand the link to Gym Scribe.
   What was shared rides after the "#", which the browser never sends here;
   it is read on this phone, to name it, and passed to the app as it is. */
(function () {
  var hash = location.hash || '';
  var app = 'gymtracker://add' + hash;
  document.getElementById('open').href = app;
  try {
    var b = hash.slice(1).replace(/-/g, '+').replace(/_/g, '/');
    while (b.length % 4) b += '=';
    var data = JSON.parse(decodeURIComponent(escape(atob(b))));
    if (data && data.t === 'x' && typeof data.n === 'string') {
      document.getElementById('what').textContent = data.n.slice(0, 60);
      document.getElementById('kind').textContent = 'An exercise shared from Gym Scribe';
    } else if (data && data.t === 'r' && Array.isArray(data.d)) {
      document.getElementById('what').textContent = typeof data.n === 'string' && data.n ? data.n.slice(0, 60) : 'A workout routine';
      document.getElementById('kind').textContent = data.d.length + ' workouts shared from Gym Scribe';
    }
  } catch (err) { /* not a link this page can read; the buttons still work */ }
  if (hash.length > 1) setTimeout(function () { location.href = app; }, 300);
})();
