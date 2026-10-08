/* Apply saved theme before first paint to avoid flash. Loaded as a blocking
   file in <head> (not inline) so the Content-Security-Policy can stay script-src 'self'. */
(function () {
  try {
    var s = JSON.parse(localStorage.getItem('mca.v1') || '{}');
    var t = s.theme || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();
