// Responsive audit. Paste into the browser console on any page, or run it
// through a headless browser, at a phone width (375) and a tablet width (768).
// It reports five kinds of problem and prints them as JSON:
//   overflow     something wider than the screen (check it is not inside an
//                overflow:hidden parent — the shelf and hero loop are, on purpose)
//   narrowtext   real text set in a column under 55% of the screen
//   wrongcolumn  a grid item that fell into a narrow implicit column
//   tinytype     visible body text under 13px
//   taptarget    a link or button under 30px tall
// It was used to review every page for the small-screen pass in global.css.

(function(){
  var vw = innerWidth, out = {url: location.pathname, vw: vw, issues: []};
  function sel(el){
    var c = String(el.className || '').trim().split(/\s+/).slice(0,2).join('.');
    return el.tagName.toLowerCase() + (c ? '.' + c : '');
  }
  // 1. horizontal overflow
  document.querySelectorAll('body *').forEach(function(el){
    var r = el.getBoundingClientRect();
    if (r.width > vw + 2 && getComputedStyle(el).overflowX === 'visible')
      out.issues.push(['overflow', sel(el), Math.round(r.width)]);
  });
  // 2. text rendering in a column too narrow to read
  document.querySelectorAll('p, li, h1, h2, h3, h4, figcaption, .kicker, .ld, .t, .sub').forEach(function(el){
    if (el.querySelector('p,li,div')) return;
    var t = el.textContent.trim();
    if (t.length < 30) return;
    var r = el.getBoundingClientRect();
    if (r.width > 4 && r.width < vw * 0.55)
      out.issues.push(['narrowtext', sel(el), Math.round(r.width), t.slice(0,34)]);
  });
  // 3. grid children that fell into a narrow implicit column
  document.querySelectorAll('*').forEach(function(el){
    var cs = getComputedStyle(el);
    if (cs.display !== 'grid') return;
    var cols = cs.gridTemplateColumns.split(' ').filter(Boolean);
    if (cols.length < 2) return;
    var kids = el.children.length;
    if (kids > cols.length && cols.length === 2 && parseFloat(cols[0]) < 90) {
      var wide = el.getBoundingClientRect().width;
      [].forEach.call(el.children, function(k, i){
        var r = k.getBoundingClientRect();
        if (i >= cols.length && r.width < wide * 0.4)
          out.issues.push(['wrongcolumn', sel(el) + ' > ' + sel(k), Math.round(r.width)]);
      });
    }
  });
  // 4. type too small to read on a phone
  document.querySelectorAll('p, li, figcaption, .ld, td').forEach(function(el){
    var t = el.textContent.trim(); if (t.length < 20) return;
    if (!el.getClientRects().length) return;        // hidden: not a problem
    var fs = parseFloat(getComputedStyle(el).fontSize);
    if (fs && fs < 13) out.issues.push(['tinytype', sel(el), fs]);
  });
  // 5. tap targets
  document.querySelectorAll('a, button').forEach(function(el){
    var r = el.getBoundingClientRect();
    if (r.width > 0 && r.height > 0 && r.height < 30 && el.textContent.trim().length < 40 &&
        getComputedStyle(el).display !== 'inline')
      out.issues.push(['taptarget', sel(el), Math.round(r.width) + 'x' + Math.round(r.height)]);
  });
  // dedupe by first two fields
  var seen = {}, keep = [];
  out.issues.forEach(function(i){ var k = i[0] + '|' + i[1]; if (!seen[k]) { seen[k] = 1; keep.push(i); } });
  out.issues = keep.slice(0, 24);
  out.n = keep.length;
  return JSON.stringify(out);
})()
