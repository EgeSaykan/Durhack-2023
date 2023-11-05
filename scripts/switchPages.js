

// keep a track of which page is on right now
let currentPage = "page-1"

// hide a page and move to the other one
function show(shown, hidden) {
  currentPage = 'page-2'
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}