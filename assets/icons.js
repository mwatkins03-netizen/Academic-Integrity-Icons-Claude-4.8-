/* =====================================================================
   UM Academic Integrity Icons — shared core
   Used by index.html (faculty builder), gallery.html (student icon
   gallery) and view.html (a shared badge set).
   No dependencies, no build step. Everything below is plain ES5-ish JS.
   ===================================================================== */
(function (root) {
'use strict';

/* ---------------- Glyphs (24×24 design space, drawn in white) -------- */
var G = {
  help:`<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="2"/>
        <circle cx="12" cy="12" r="3.4" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="12" y1="3" x2="12" y2="8.6" stroke="#fff" stroke-width="2"/>
        <line x1="12" y1="15.4" x2="12" y2="21" stroke="#fff" stroke-width="2"/>
        <line x1="3" y1="12" x2="8.6" y2="12" stroke="#fff" stroke-width="2"/>
        <line x1="15.4" y1="12" x2="21" y2="12" stroke="#fff" stroke-width="2"/>`,
  collab:`<circle cx="8.4" cy="8" r="3" fill="none" stroke="#fff" stroke-width="2"/>
          <circle cx="15.6" cy="8" r="3" fill="none" stroke="#fff" stroke-width="2"/>
          <path d="M3.4 19c0-3 2.3-5 5-5 1.4 0 2.7.5 3.6 1.4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
          <path d="M12 15.4c.9-.9 2.2-1.4 3.6-1.4 2.7 0 5 2 5 5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`,
  reuse:`<rect x="4.5" y="3" width="11" height="14" rx="2" fill="none" stroke="#fff" stroke-width="2"/>
         <rect x="8.5" y="7" width="11" height="14" rx="2" fill="var(--tile)" stroke="#fff" stroke-width="2"/>
         <line x1="11" y1="12" x2="17" y2="12" stroke="#fff" stroke-width="1.6"/>
         <line x1="11" y1="15.4" x2="17" y2="15.4" stroke="#fff" stroke-width="1.6"/>`,
  research:`<path d="M12 6.2C10 4.7 6.8 4.2 4 4.7V18c2.8-.5 6 0 8 1.5 2-1.5 5.2-2 8-1.5V4.7C17.2 4.2 14 4.7 12 6.2z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
            <line x1="12" y1="6.2" x2="12" y2="19.5" stroke="#fff" stroke-width="2"/>`,
  home:`<path d="M3.8 11.2 12 5l8.2 6.2" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        <path d="M6 10.2V19h12v-8.8" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
        <rect x="10" y="13.2" width="4" height="5.8" fill="none" stroke="#fff" stroke-width="1.6"/>`,
  ai:`<text x="12" y="16.4" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="12.5" fill="#fff">AI</text>`,
  cite:`<path d="M5.5 8h4.2v5c0 2.1-1.6 3.7-4.2 4.2v-2.1c1.3-.4 2.1-1.2 2.1-2.2H5.5z" fill="#fff"/>
        <path d="M14.3 8h4.2v5c0 2.1-1.6 3.7-4.2 4.2v-2.1c1.3-.4 2.1-1.2 2.1-2.2h-2.1z" fill="#fff"/>`,
  mode:`<circle cx="12" cy="8" r="3.2" fill="none" stroke="#fff" stroke-width="2"/>
        <path d="M5.5 19c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`,
  device:`<rect x="6" y="3" width="12" height="18" rx="2" fill="none" stroke="#fff" stroke-width="2"/>
          <rect x="8.4" y="5.4" width="7.2" height="3.4" rx="0.6" fill="none" stroke="#fff" stroke-width="1.4"/>
          <circle cx="9" cy="12.4" r="0.95" fill="#fff"/><circle cx="12" cy="12.4" r="0.95" fill="#fff"/><circle cx="15" cy="12.4" r="0.95" fill="#fff"/>
          <circle cx="9" cy="15.6" r="0.95" fill="#fff"/><circle cx="12" cy="15.6" r="0.95" fill="#fff"/><circle cx="15" cy="15.6" r="0.95" fill="#fff"/>
          <circle cx="9" cy="18.8" r="0.95" fill="#fff"/><circle cx="12" cy="18.8" r="0.95" fill="#fff"/><circle cx="15" cy="18.8" r="0.95" fill="#fff"/>`,
  deadline:`<circle cx="12" cy="13" r="8" fill="none" stroke="#fff" stroke-width="2"/>
            <path d="M12 8.4V13l3.2 2.2" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 3.2h6" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`
};

var STATUS = {
  yes:  { color:'#1E7A46', label:'Permitted' },
  no:   { color:'#CE1126', label:'Not permitted' },
  cond: { color:'#B4761F', label:'Conditions apply' },
  info: { color:'#475569', label:'Format' }
};
var AIAS_COLORS = ['#8C2A33','#B4551F','#8F6E1E','#2E7D5B','#2C6E8F'];

/* ---------------- Categories and their nuance options ---------------- */
var CAT = [
  { id:'help', label:'Getting Help', sub:'Who you may ask', glyph:G.help, options:[
    { id:'none',   short:'No outside help',          status:'no',   text:'Getting help is not permitted. Submit only your own independent work.' },
    { id:'instr',  short:'Instructor only',          status:'cond', text:'You may seek clarification from the instructor only.' },
    { id:'center', short:'Tutoring / writing center', status:'cond', text:'Help from official tutoring or the writing center is permitted.' },
    { id:'peers',  short:'Peers OK',                 status:'cond', text:'You may discuss with classmates, but the work you submit must be your own.' },
    { id:'any',    short:'Any source',               status:'yes',  text:'You may get help from any source.' }
  ]},
  { id:'collab', label:'Collaboration', sub:'Working with others', glyph:G.collab, options:[
    { id:'individual', short:'Individual only',      status:'no',   text:'This is an individual assignment; collaboration is not permitted.' },
    { id:'discuss',    short:'Discuss, submit own',  status:'cond', text:'You may discuss ideas with others, but must write and submit your own work.' },
    { id:'group',      short:'Group OK',             status:'yes',  text:'Collaborating and completing the work together is permitted.' }
  ]},
  { id:'reuse', label:'Reusing Prior Work', sub:'Existing or past work', glyph:G.reuse, options:[
    { id:'none',    short:'Not permitted',    status:'no',   text:'Copying or reusing previous work (yours or anyone else’s) is not permitted.' },
    { id:'owncite', short:'Own work, cited',  status:'cond', text:'You may build on your own prior work if you cite it clearly.' },
    { id:'allowed', short:'Reuse OK',         status:'yes',  text:'Reusing existing or template work is permitted.' }
  ]},
  { id:'research', label:'Open-Book Research', sub:'Outside resources', glyph:G.research, options:[
    { id:'closed', short:'Closed book',            status:'no',   text:'This is a closed-book assessment; outside resources are not permitted.' },
    { id:'course', short:'Course materials only',  status:'cond', text:'You may use course materials only (notes, textbook, the LMS).' },
    { id:'open',   short:'Open research',          status:'yes',  text:'Open-book research is permitted and encouraged — cite your sources.' }
  ]},
  { id:'home', label:'Where You Work', sub:'Location and conditions', glyph:G.home, options:[
    { id:'proctored', short:'In class / proctored', status:'no',  text:'Must be completed in class or under proctored conditions.' },
    { id:'takehome',  short:'Take-home OK',         status:'yes', text:'Working from home / take-home completion is permitted.' }
  ]},
  { id:'ai', label:'AI Use', sub:'AI Assessment Scale (AIAS)', glyph:G.ai, isAI:true, options:[
    { id:'l1', level:1, short:'1 · No AI',            status:'aias', text:'You must not use AI at any point. Demonstrate your core skills and knowledge.' },
    { id:'l2', level:2, short:'2 · AI Planning',      status:'aias', text:'You may use AI for planning, idea development, and research. Your final submission should show how you developed and refined those ideas.' },
    { id:'l3', level:3, short:'3 · AI Collaboration', status:'aias', text:'You may use AI to assist with drafting, refining, and evaluating your work. You must critically evaluate and modify any AI-generated content.' },
    { id:'l4', level:4, short:'4 · Full AI',          status:'aias', text:'You may use AI extensively, as you wish or as directed. Focus on directing AI to achieve your goals while demonstrating critical thinking.' },
    { id:'l5', level:5, short:'5 · AI Exploration',   status:'aias', text:'Use AI creatively to solve the task, potentially co-designing new approaches with your instructor.' }
  ]},
  { id:'cite', label:'Citation & Sources', sub:'Attribution rules', glyph:G.cite, options:[
    { id:'required', short:'Citation required', status:'cond', text:'You must cite all sources using the required citation style.' },
    { id:'notreq',   short:'Not required',      status:'yes',  text:'Formal citations are not required for this assignment.' }
  ]},
  { id:'mode', label:'Individual vs. Group', sub:'Submission structure', glyph:G.mode, options:[
    { id:'individual', short:'Individual',   status:'info', text:'Complete and submit as an individual.' },
    { id:'pairs',      short:'Pairs',        status:'info', text:'Work and submit in pairs.' },
    { id:'group',      short:'Group / team', status:'info', text:'Work and submit as a group or team.' }
  ]},
  { id:'device', label:'Devices & Calculators', sub:'Tools allowed', glyph:G.device, options:[
    { id:'none', short:'No devices',      status:'no',   text:'No phones, calculators, or other devices may be used.' },
    { id:'calc', short:'Calculator only', status:'cond', text:'Approved calculators only; no phones or internet-enabled devices.' },
    { id:'open', short:'Devices OK',      status:'yes',  text:'You may use devices and the internet.' }
  ]},
  { id:'late', label:'Deadlines & Late Work', sub:'Timing and revisions', glyph:G.deadline, options:[
    { id:'firm',   short:'Firm deadline',   status:'no',   text:'The deadline is firm; late submissions are not accepted.' },
    { id:'penalty',short:'Late with penalty', status:'cond', text:'Late work is accepted with a grade penalty — see the syllabus.' },
    { id:'revise', short:'Revision allowed', status:'yes',  text:'You may revise and resubmit this work after feedback.' }
  ]}
];

/* The six categories that start switched on in the builder. */
var DEFAULT_ON = ['help','collab','reuse','research','home','ai'];

var ATTRIBUTION = 'University of Mississippi · Academic Integrity Icons. AI guidance based on the AI Assessment Scale (AIAS), CC BY-NC-SA 4.0.';

/* ---------------- Small helpers -------------------------------------- */
function shade(hex, p) {
  var n = parseInt(hex.slice(1), 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  var f = function (c) { return Math.max(0, Math.min(255, Math.round(c * (100 + p) / 100))); };
  return '#' + [f(r), f(g), f(b)].map(function (x) { return x.toString(16).padStart(2, '0'); }).join('');
}
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function cat(id) { return CAT.filter(function (c) { return c.id === id; })[0]; }
function opt(c, id) { return c.options.filter(function (o) { return o.id === id; })[0]; }
function statusLabel(c, o) { return c.isAI ? ('AIAS Level ' + o.level) : STATUS[o.status].label; }
function statusColor(c, o) { return c.isAI ? AIAS_COLORS[o.level - 1] : STATUS[o.status].color; }

/* ---------------- Badge SVG ------------------------------------------ */
function chipSymbol(status) {
  if (status === 'yes')  return '<path d="M72 20l5 5 9-11" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>';
  if (status === 'no')   return '<path d="M74 14l12 12M86 14l-12 12" stroke="#fff" stroke-width="4" stroke-linecap="round"/>';
  if (status === 'cond') return '<path d="M80 11.5v9" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="80" cy="27" r="2.3" fill="#fff"/>';
  if (status === 'info') return '<path d="M80 18v8.5" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="80" cy="12.5" r="2.3" fill="#fff"/>';
  return '';
}
function badgeSVG(c, o, size, opts) {
  opts = opts || {};
  var tile, ring, chipFill, chipInner, aria;
  var glyph = (c.glyph || '').replace(/var\(--tile\)/g, c.isAI ? AIAS_COLORS[o.level - 1] : '#14213D');
  if (c.isAI) {
    tile = AIAS_COLORS[o.level - 1];
    ring = shade(tile, -22);
    chipFill = shade(tile, -22);
    chipInner = '<text x="80" y="27" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="20" fill="#fff">' + o.level + '</text>';
    aria = c.label + ': AIAS level ' + o.level + ' — ' + o.short.replace(/^\d+\s*·\s*/, '');
  } else {
    tile = '#14213D';
    ring = STATUS[o.status].color;
    chipFill = STATUS[o.status].color;
    chipInner = chipSymbol(o.status);
    aria = c.label + ': ' + STATUS[o.status].label + ' — ' + o.short;
  }
  return '<svg viewBox="0 0 100 100" width="' + size + '" height="' + size + '" role="img" aria-label="' + esc(aria) + '"'
    + (opts.standalone ? ' xmlns="http://www.w3.org/2000/svg"' : ' xmlns="http://www.w3.org/2000/svg"') + '>'
    + '<title>' + esc(aria) + '</title>'
    + '<rect x="6" y="6" width="88" height="88" rx="18" fill="' + tile + '"/>'
    + '<g transform="translate(50,52) scale(2.0) translate(-12,-12)">' + glyph + '</g>'
    + '<rect x="6" y="6" width="88" height="88" rx="18" fill="none" stroke="' + ring + '" stroke-width="5"/>'
    + '<circle cx="80" cy="20" r="15" fill="' + chipFill + '" stroke="#fff" stroke-width="3"/>'
    + chipInner
    + '</svg>';
}

/* ---------------- State <-> URL -------------------------------------- */
/* Encoded as  ?s=help-center.collab-discuss.ai-l3&t=Essay+2
   Readable, short, and safe to paste into an LMS. */
function encodeSet(items, title) {
  var p = new URLSearchParams();
  p.set('s', items.map(function (it) { return it.cat.id + '-' + it.opt.id; }).join('.'));
  if (title) p.set('t', title);
  return p.toString();
}
function decodeSet(search) {
  var p = new URLSearchParams(search || location.search);
  var raw = p.get('s') || '';
  var items = [];
  raw.split('.').forEach(function (tok) {
    if (!tok) return;
    var bits = tok.split('-'), c = cat(bits[0]);
    if (!c) return;
    var o = opt(c, bits[1]);
    if (!o) return;
    items.push({ cat: c, opt: o });
  });
  return { items: items, title: p.get('t') || '', embed: p.get('embed') === '1', only: p.get('cat') || '' };
}

/* ---------------- Static HTML export (LMS-sanitizer safe) ------------ */
/* Inline styles + inline SVG only. No <script>, no external files. */
function buildEmbedHTML(items, title) {
  var A = 'font-family:Arial,Helvetica,sans-serif;';
  var rows = '';
  items.forEach(function (it, i) {
    var border = i < items.length - 1 ? 'border-bottom:1px solid #e4e7ec;' : '';
    rows += '<tr><td style="padding:12px 12px 12px 0;vertical-align:top;width:64px;' + border + '">' + badgeSVG(it.cat, it.opt, 52) + '</td>'
      + '<td style="padding:12px 0;vertical-align:top;' + border + '">'
      + '<div style="' + A + 'font-weight:700;color:#14213D;font-size:15px;">' + esc(it.cat.label) + '</div>'
      + '<div style="' + A + 'font-weight:700;font-size:11px;letter-spacing:.4px;text-transform:uppercase;color:' + statusColor(it.cat, it.opt) + ';margin:2px 0;">' + esc(statusLabel(it.cat, it.opt)) + '</div>'
      + '<div style="' + A + 'color:#3a4250;font-size:14px;line-height:1.45;">' + esc(it.opt.text) + '</div>'
      + '</td></tr>';
  });
  return '<div style="max-width:680px;border:2px solid #14213D;border-radius:12px;overflow:hidden;' + A + '">'
    + '<div style="background:#14213D;color:#ffffff;padding:12px 16px;font-size:17px;font-weight:700;">' + esc(title) + '</div>'
    + '<div style="padding:0 16px;"><table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;"><tbody>' + rows + '</tbody></table></div>'
    + '<div style="background:#f8f8f8;color:#6d7683;font-size:11px;padding:8px 16px;border-top:1px solid #e4e7ec;">' + ATTRIBUTION + '</div>'
    + '</div>';
}

/* ---------------- Pure-SVG card (for reliable PNG / SVG export) ------ */
var _measureCtx = null;
function measure(text, font) {
  if (!_measureCtx) _measureCtx = document.createElement('canvas').getContext('2d');
  _measureCtx.font = font;
  return _measureCtx.measureText(text).width;
}
function wrap(text, font, maxW) {
  var words = String(text).split(/\s+/), lines = [], line = '';
  words.forEach(function (w) {
    var trial = line ? line + ' ' + w : w;
    if (measure(trial, font) > maxW && line) { lines.push(line); line = w; }
    else { line = trial; }
  });
  if (line) lines.push(line);
  return lines;
}
function cardSVG(items, title) {
  var W = 700, PAD = 18, BADGE = 52, TX = PAD + BADGE + 14, TW = W - TX - PAD;
  var bodyFont = '14px Arial, Helvetica, sans-serif';
  var head = 48, foot = 30, y = head, body = '';
  items.forEach(function (it, i) {
    var lines = wrap(it.opt.text, bodyFont, TW);
    var rowH = Math.max(BADGE + 8, 20 + 16 + lines.length * 19 + 8);
    var top = y + 14;
    body += '<g transform="translate(' + PAD + ',' + top + ')">' + badgeSVG(it.cat, it.opt, BADGE) + '</g>';
    body += '<text x="' + TX + '" y="' + (top + 13) + '" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="700" fill="#14213D">' + esc(it.cat.label) + '</text>';
    body += '<text x="' + TX + '" y="' + (top + 30) + '" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5" fill="' + statusColor(it.cat, it.opt) + '">' + esc(statusLabel(it.cat, it.opt).toUpperCase()) + '</text>';
    lines.forEach(function (ln, li) {
      body += '<text x="' + TX + '" y="' + (top + 49 + li * 19) + '" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#3a4250">' + esc(ln) + '</text>';
    });
    y += rowH + 14;
    if (i < items.length - 1) body += '<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="#e4e7ec" stroke-width="1"/>';
  });
  var H = y + 14 + foot;
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">'
    + '<rect x="1" y="1" width="' + (W - 2) + '" height="' + (H - 2) + '" rx="12" fill="#ffffff" stroke="#14213D" stroke-width="2"/>'
    + '<path d="M1 13a12 12 0 0 1 12-12h' + (W - 26) + 'a12 12 0 0 1 12 12v35H1z" fill="#14213D"/>'
    + '<text x="' + PAD + '" y="31" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700" fill="#ffffff">' + esc(title) + '</text>'
    + body
    + '<line x1="1" y1="' + (H - foot) + '" x2="' + (W - 1) + '" y2="' + (H - foot) + '" stroke="#e4e7ec"/>'
    + '<text x="' + PAD + '" y="' + (H - 11) + '" font-family="Arial, Helvetica, sans-serif" font-size="10.5" fill="#6d7683">' + esc(ATTRIBUTION) + '</text>'
    + '</svg>';
}

/* ---------------- Downloads ------------------------------------------ */
function download(name, content, type) {
  var b = new Blob([content], { type: type });
  var u = URL.createObjectURL(b);
  var a = document.createElement('a');
  a.href = u; a.download = name; document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(u); }, 1000);
}
function downloadSVG(name, svg) {
  download(name, '<?xml version="1.0" encoding="UTF-8"?>\n' + svg, 'image/svg+xml');
}
function svgToPNG(svg, w, h, scale, filename, onFail) {
  scale = scale || 2;
  var img = new Image();
  img.onload = function () {
    var c = document.createElement('canvas');
    c.width = w * scale; c.height = h * scale;
    var ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0, c.width, c.height);
    c.toBlob(function (b) {
      if (!b) { if (onFail) onFail(); return; }
      var u = URL.createObjectURL(b);
      var a = document.createElement('a');
      a.href = u; a.download = filename; document.body.appendChild(a); a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(u); }, 1000);
    }, 'image/png');
  };
  img.onerror = function () { if (onFail) onFail(); };
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* ---------------- Clipboard ------------------------------------------ */
function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise(function (resolve, reject) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); resolve(); } catch (e) { reject(e); }
    document.body.removeChild(ta);
  });
}

/* ---------------- Toast ---------------------------------------------- */
var _toastEl = null, _toastTimer = null;
function toast(msg) {
  if (!_toastEl) {
    _toastEl = document.createElement('div');
    _toastEl.className = 'toast';
    _toastEl.setAttribute('role', 'status');
    _toastEl.setAttribute('aria-live', 'polite');
    document.body.appendChild(_toastEl);
  }
  _toastEl.textContent = msg;
  _toastEl.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function () { _toastEl.classList.remove('show'); }, 2200);
}

/* ---------------- Embed height reporting ----------------------------- */
/* gallery.html / view.html post their height so a host page can resize
   the iframe. Harmless when not embedded. */
function reportHeight() {
  if (window.parent === window) return;
  var h = Math.ceil(document.body.getBoundingClientRect().height) + 8;
  try { window.parent.postMessage({ umIntegrityIcons: true, height: h }, '*'); } catch (e) {}
}
function watchHeight() {
  if (window.parent === window) return;
  reportHeight();
  window.addEventListener('load', reportHeight);
  window.addEventListener('resize', reportHeight);
  if (window.ResizeObserver) new ResizeObserver(reportHeight).observe(document.documentElement);
  setInterval(reportHeight, 1500);
}

root.UMIcons = {
  G: G, CAT: CAT, STATUS: STATUS, AIAS_COLORS: AIAS_COLORS,
  DEFAULT_ON: DEFAULT_ON, ATTRIBUTION: ATTRIBUTION,
  cat: cat, opt: opt, esc: esc, shade: shade,
  statusLabel: statusLabel, statusColor: statusColor,
  badgeSVG: badgeSVG, cardSVG: cardSVG, buildEmbedHTML: buildEmbedHTML,
  encodeSet: encodeSet, decodeSet: decodeSet,
  download: download, downloadSVG: downloadSVG, svgToPNG: svgToPNG,
  copyText: copyText, toast: toast, watchHeight: watchHeight, reportHeight: reportHeight
};
})(window);
