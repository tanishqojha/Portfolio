/* Dimensional-drawing motion film of the home "path card" (adapted from the
   dimensional-drawing-motion template scene-dialog.js). Pure function of time:
   render(t) sets every property from t alone. Runs in the site player
   (src/components/drawing-film.tsx) and in the skill's headless render.mjs.
   Values are measured from src/app/page.tsx Tailwind classes. */
const { seg, lerp, eo, eio, clamp01 } = kit;
const DW_NS = 'http://www.w3.org/2000/svg';
const DW_CAM = [
  { t: 0, cx: 904, cy: 318, z: 4.2 }, { t: 2.3, cx: 910, cy: 324, z: 4.0 },
  { t: 4.2, cx: 975, cy: 410, z: 1.75 }, { t: 5.3, cx: 977, cy: 412, z: 1.72 },
  { t: 7.2, cx: 360, cy: 750, z: 1.6 }, { t: 7.8, cx: 362, cy: 752, z: 1.58 },
  { t: 9.2, cx: 950, cy: 530, z: 0.998 }, { t: 13, cx: 950, cy: 530, z: 0.988 }];
kit.scene('path-card', {
  init(kit) {
    kit.css('.dwm-ground{position:absolute;inset:0;--ground:#fff;--main:#111;--second:#111112;--accent:#767676;background:var(--ground);color:var(--second);--sans:Arimo,Helvetica,Arial,sans-serif}' +
      '.dw-cam{position:absolute;left:0;top:0;width:1900px;height:1060px;transform-origin:0 0}.dw-svg{position:absolute;left:0;top:0;overflow:visible;--u:1}' +
      '.dw-svg text{font-family:var(--sans);text-transform:uppercase}.dw-svg .border{fill:none;stroke:var(--main);stroke-width:1.2}' +
      '.dw-svg .obj{fill:var(--ground);stroke:var(--main);stroke-width:calc(1.6px * var(--u));stroke-linejoin:round}' +
      '.dw-svg .well{fill:color-mix(in srgb,var(--second) 5%,var(--ground));stroke:var(--main);stroke-width:calc(1px * var(--u))}' +
      '.dw-svg .hug{fill:color-mix(in srgb,var(--second) 10%,var(--ground));stroke:var(--main);stroke-width:calc(1px * var(--u))}' +
      '.dw-svg .slot{fill:none;stroke:color-mix(in srgb,var(--second) 75%,var(--ground));stroke-width:calc(.8px * var(--u));stroke-dasharray:calc(4px * var(--u)) calc(3px * var(--u))}' +
      '.dw-svg .thin{fill:none;stroke:var(--main);stroke-width:calc(.8px * var(--u))}' +
      '.dw-svg .ph{fill:none;stroke:var(--accent);stroke-width:calc(.8px * var(--u));stroke-dasharray:calc(14px * var(--u)) calc(3px * var(--u)) calc(3px * var(--u)) calc(3px * var(--u))}' +
      '.dw-svg .cl{fill:none;stroke:var(--accent);stroke-width:.7;stroke-dasharray:16 3 2 3}.dw-svg .dl,.dw-svg .lead{stroke:var(--main);stroke-width:.7;fill:none}' +
      '.dw-svg .ext{stroke:var(--main);stroke-width:.55;fill:none}.dw-svg .arrow,.dw-svg .dot{fill:var(--main)}' +
      '.dw-svg .hl{stroke:color-mix(in srgb,var(--second) 70%,var(--ground));stroke-width:.7}.dw-svg .hs{stroke:var(--main);stroke-width:calc(.8px * var(--u))}' +
      '.dw-svg .nb{fill:var(--ground);stroke:var(--main);stroke-width:.9}' +
      '.dw-svg .dt{font-size:11px;fill:var(--main);paint-order:stroke;stroke:var(--ground);stroke-width:4px;stroke-linejoin:round}' +
      '.dw-svg .dts{font-size:9.5px;fill:color-mix(in srgb,var(--second) 75%,var(--ground));letter-spacing:.06em;paint-order:stroke;stroke:var(--ground);stroke-width:3px}' +
      '.dw-svg .sl{font-size:9px;fill:color-mix(in srgb,var(--second) 75%,var(--ground));letter-spacing:.08em}' +
      '.dw-svg .nt{font-size:11.5px;fill:var(--main);letter-spacing:.06em}.dw-svg .nth{font-size:13px;font-weight:700;fill:var(--main);letter-spacing:.06em}' +
      '.dw-svg .vt{font-size:12px;fill:var(--main);letter-spacing:.1em}.dw-svg .nbt{font-size:9.5px;fill:var(--main)}' +
      '.dw-svg .th{font-size:10.5px;fill:var(--main);letter-spacing:.05em}.dw-svg .tc{font-size:10.5px;fill:var(--main);text-transform:none}');
    const root = kit.h('<div class="dwm-ground"><div class="dw-cam"></div></div>');
    kit.stage.append(root);
    const camEl = root.querySelector('.dw-cam');
    this.cam = camEl.style;
    const svg = document.createElementNS(DW_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 1900 1060'); svg.setAttribute('width', '1900'); svg.setAttribute('height', '1060'); svg.setAttribute('class', 'dw-svg');
    camEl.appendChild(svg);
    const REG = this.reg = []; let sv = svg, CUR = { a: 0, s: 0, d: .6, i: 0 }, noreg = 0;
    const at = (a, s, d) => { CUR = { a: a, s: s || 0, d: d || .6, i: 0 }; };
    const kind = (e, t) => { if (t === 'text') return 'f'; const c = ' ' + (e.getAttribute('class') || '') + ' ';
      if (/ (slot|ph|cl|env|hs) /.test(c) || (e.getAttribute('fill') || '').indexOf('url') === 0) return 'f'; return 'd'; };
    function mk(t, a, p) { const e = document.createElementNS(DW_NS, t); for (const k in a) if (a[k] != null) e.setAttribute(k, a[k]); (p || sv).appendChild(e);
      if (!noreg && t !== 'g') { const s = CUR.a + CUR.i * CUR.s; CUR.i++; const k = kind(e, t); if (k === 'd') e.setAttribute('pathLength', '1'); e.style.opacity = 0; REG.push({ e: e, a: s, b: s + CUR.d, k: k, last: -1 }); }
      return e; }
    function tx(x, y, s, c, a, p) { const t = mk('text', Object.assign({ x: x, y: y, class: c || 'dt' }, a || {}), p); t.textContent = s; return t; }
    noreg = 1; const d = mk('defs', {}); const m = mk('marker', { id: 'dwar', viewBox: '0 0 10 10', refX: 10, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse', markerUnits: 'userSpaceOnUse' }, d);
    mk('path', { d: 'M0,1.7 L10,5 L0,8.3 z', class: 'arrow' }, m);
    const pt = mk('pattern', { id: 'dwhat', width: 5, height: 5, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, d); mk('line', { x1: 0, y1: 0, x2: 0, y2: 5, class: 'hl' }, pt); noreg = 0;
    const A = 'url(#dwar)', HAT = 'url(#dwhat)';
    function dimH(x1, x2, y, e1, e2, l, o) { o = o || {}; [[x1, e1], [x2, e2]].forEach(([x, e]) => { if (e == null) return; const s = Math.sign(y - e) || 1; mk('line', { x1: x, y1: e + s * 3, x2: x, y2: y + s * 5, class: 'ext' }); });
      if (x2 - x1 >= 28) mk('line', { x1: x1, y1: y, x2: x2, y2: y, class: 'dl', 'marker-start': A, 'marker-end': A }); else { mk('line', { x1: x1 - 13, y1: y, x2: x1, y2: y, class: 'dl', 'marker-end': A }); mk('line', { x1: x2 + 13, y1: y, x2: x2, y2: y, class: 'dl', 'marker-end': A }); }
      tx((x1 + x2) / 2 + (o.dx || 0), (o.below ? y + 13 : y - 4) + (o.dy || 0), l, o.c || 'dt', { 'text-anchor': 'middle' }); }
    function dimV(y1, y2, x, e1, e2, l, o) { o = o || {}; [[y1, e1], [y2, e2]].forEach(([y, e]) => { if (e == null) return; const s = Math.sign(x - e) || 1; mk('line', { x1: e + s * 3, y1: y, x2: x + s * 5, y2: y, class: 'ext' }); });
      if (y2 - y1 >= 28) mk('line', { x1: x, y1: y1, x2: x, y2: y2, class: 'dl', 'marker-start': A, 'marker-end': A }); else { mk('line', { x1: x, y1: y1 - 13, x2: x, y2: y1, class: 'dl', 'marker-end': A }); mk('line', { x1: x, y1: y2 + 13, x2: x, y2: y2, class: 'dl', 'marker-end': A }); }
      const c = (y1 + y2) / 2; if (o.side) { const r = o.side === 'r'; tx(r ? x + 6 : x - 6, c + 4, l, o.c || 'dt', { 'text-anchor': r ? 'start' : 'end' }); } else tx(x - 5, c, l, o.c || 'dt', { 'text-anchor': 'middle', transform: 'rotate(-90 ' + (x - 5) + ' ' + c + ')' }); }
    function callout(px, py, ex, ey, l, dir, c) { const s = dir || (ex >= px ? 1 : -1); mk('circle', { cx: px, cy: py, r: 1.8, class: 'dot' }); mk('polyline', { points: px + ',' + py + ' ' + ex + ',' + ey + ' ' + (ex + s * 10) + ',' + ey, class: 'lead' }); tx(ex + s * 14, ey + 4, l, c || 'dt', { 'text-anchor': s > 0 ? 'start' : 'end' }); }
    function nb(x, y, n) { mk('rect', { x: x - 6, y: y - 6, width: 12, height: 12, class: 'nb' }); tx(x, y + 3.5, String(n), 'nbt', { 'text-anchor': 'middle' }); }
    function rr(x, y, w, h, r, c, p) { return mk('rect', { x: x, y: y, width: w, height: h, rx: r, class: c }, p); }
    function slotLabel(x, y, w, h, l, al, p) { tx(al === 'l' ? x + 6 : x + w / 2, y + h / 2 + 3.2, l, 'sl', { 'text-anchor': al === 'l' ? 'start' : 'middle' }, p); }
    function title(x, y, t, s) { tx(x, y, t, 'vt', { 'text-anchor': 'middle' }); if (s) tx(x, y + 14, s, 'dts', { 'text-anchor': 'middle' }); }
    function detailRef(cx, cy, r, lbl, lx, ly) { mk('circle', { cx: cx, cy: cy, r: r, class: 'ph' }); const a = Math.atan2(ly - cy, lx - cx); mk('line', { x1: cx + r * Math.cos(a), y1: cy + r * Math.sin(a), x2: lx, y2: ly, class: 'lead' }); tx(lx + (lx < cx ? -4 : 4), ly + 4, lbl, 'dts', { 'text-anchor': lx < cx ? 'end' : 'start' }); }
    function table(x, y, ttl, rows) { const ws = [40, 88, 96], rh = 17; tx(x, y - 8, ttl, 'vt'); [['Code', 'Variable', 'Value']].concat(rows).forEach((r, i) => { let c2 = x; r.forEach((c, j) => { mk('rect', { x: c2, y: y + i * rh, width: ws[j], height: rh, class: 'thin' }); tx(c2 + (j ? ws[j] / 2 : 6), y + i * rh + 12, c, i ? 'tc' : 'th', { 'text-anchor': j ? 'middle' : 'start' }); c2 += ws[j]; }); }); return y + (rows.length + 1) * rh + 36; }
    function notes(list) { tx(50, 58, 'Notes:', 'nth'); tx(112, 58, '(unless otherwise specified)', 'nt'); list.forEach(([n, t], i) => { const y = 88 + i * 24; nb(56, y - 4, n); tx(72, y, t, 'nt'); }); }

    /* Card in its own units (px at 1280 container): B 3 · S1 24 · H4 16 · S2 24 · H6 42 · S3 8 · H7 24 · S4 48 · H3 59 → H 275 */
    const W = 395, H = 275, CX0 = 27, CW = 341, YT = 67, YL = 117, YA = 189, HA = 59;
    /* ---------- plan view (draws first, camera starts on the index + title) ---------- */
    const k = 1.2, PX = 760, PY = 250, X = v => PX + v * k, Y = v => PY + v * k;
    const r = (x, y, w, h, c, l, al) => { rr(X(x), Y(y), w * k, h * k, 0, c); if (l) slotLabel(X(x), Y(y), w * k, h * k, l, al); };
    at(2.35, 0, .9); rr(X(8), Y(8), W * k, H * k, 0, 'hug');
    at(-0.95, 0, 2.4); { const x0 = X(0), y0 = Y(0), w = W * k, h = H * k; mk('path', { d: 'M' + x0 + ',' + (y0 + h * .55) + ' V' + y0 + ' H' + (x0 + w) + ' V' + (y0 + h) + ' H' + x0 + ' Z', class: 'obj' }); }
    at(-0.3, 0, .6); r(CX0, 27, 40, 16, 'slot', 'Index', 'l');
    at(0.3, .2, .5); r(CX0, YT, CW, 42, 'slot', 'Title slot · fill', 'l');
    const ty = Y(-30);
    at(1.0, .1, .45); dimH(X(3), X(27), ty, Y(0), Y(27), 'S1'); dimV(Y(27), Y(43), X(-22), X(0), X(0), 'H4', { side: 'l' });
    at(1.5, .1, .5); r(CX0, YL, CW, 24, 'slot', 'Line slot · fill · wraps', 'l');
    at(2.0, .1, .6); r(CX0, YA, CW, HA, 'hug'); r(45.5, 207.5, 60, 22, 'slot', 'Label', 'l'); r(335.5, 207.5, 14, 22, 'slot');
    at(2.6, .1, .5); mk('line', { x1: X(1), y1: Y(141), x2: X(394), y2: Y(141), class: 'ph' });
    at(2.8, .1, .6); mk('line', { x1: X(-16), y1: Y(218.5), x2: X(411), y2: Y(218.5), class: 'cl' }); mk('line', { x1: X(197.5), y1: Y(-16), x2: X(197.5), y2: Y(291), class: 'cl' });
    at(3.0, .05, .4); dimH(X(27), X(368), ty, null, Y(27), 'FILL', { c: 'dts' }); dimH(X(368), X(392), ty, null, Y(27), 'S1');
    at(3.15, .03, .4); dimH(X(0), X(W), Y(-62), Y(-34), Y(-34), 'W'); tx(X(197.5), Y(-80), 'W = (C − 2·G) ÷ 3 ≈ 395 @ 1280', 'dts', { 'text-anchor': 'middle' });
    const by = Y(H + 30);
    at(3.3, .03, .4); dimH(X(29.5), X(45.5), by, Y(248), Y(229.5), 'S5', { below: true, dx: -8 }); dimH(X(45.5), X(105.5), by, null, Y(229.5), 'HUG', { below: true, c: 'dts' }); dimH(X(105.5), X(335.5), by, null, Y(229.5), 'FLEX', { below: true, c: 'dts' }); dimH(X(335.5), X(349.5), by, null, Y(229.5), 'HUG', { below: true, c: 'dts', dy: 12 }); dimH(X(349.5), X(365.5), by, null, Y(248), 'S5', { below: true, dx: 8 });
    at(3.5, .05, .45); dimV(Y(27), Y(141), X(-58), null, X(0), 'HUG', { c: 'dts' }); dimV(Y(141), Y(189), X(-58), null, X(0), 'S4'); dimV(Y(189), Y(248), X(-58), null, X(0), 'H3'); dimV(Y(0), Y(H), X(-96), X(-62), X(-62), '(REF ' + H + ')');
    at(3.7, .012, .35); [[3, 27, 'S1'], [27, 43, 'H4'], [43, 67, 'S2'], [67, 109, 'H6'], [109, 117, 'S3'], [117, 141, 'H7'], [141, 189, 'S4'], [189, 248, 'H3'], [248, 272, 'S1']].forEach(([a, b, l]) => dimV(Y(a), Y(b), X(430), X(W + 8), X(W + 8), l, { side: 'r' }));
    at(4.0, .05, .45); callout(X(0), Y(0), X(-30), Y(-14), 'R1 = 0', -1); callout(X(W + 8), Y(H + 8), X(W + 34), Y(H + 22), 'Y', 1);
    at(4.2, .05, .4); nb(X(380), Y(88), 1); nb(X(380), Y(129), 2); nb(X(14), Y(218.5), 3); nb(X(W + 16), Y(H - 20), 4);
    at(4.35, .06, .45); detailRef(X(342.5), Y(218.5), 26, 'DETAIL A', X(300), Y(170)); detailRef(X(W + 4), Y(H + 4), 22, 'DETAIL B', X(W + 70), Y(H - 40));
    at(4.5, .1, .5); title(X(197.5), Y(H + 72), 'Plan view', 'Scale 1.2:1 · path card');
    /* ---------- exploded view: static bottom layers + three layers that lift off the plan ---------- */
    const sc = .75, TX = 300, TY = 650, gap = 40, ia = .94 * sc, ib = .17 * sc, ic = -.34 * sc, id = .47 * sc;
    const P = (x, y, z) => [TX + ia * x + ic * y, TY + ib * x + id * y - z];
    const uIso = 1 / Math.sqrt(ia * id - ib * ic);
    const G = z => { const g = mk('g', { transform: 'matrix(' + ia + ',' + ib + ',' + ic + ',' + id + ',' + TX + ',' + (TY - z) + ')' }); g.style.setProperty('--u', uIso); return g; };
    at(6.15, .12, .8); let g = G(0); rr(-40, -40, 475, 355, 0, 'thin', g);
    g = G(gap); const sh = rr(8, 8, W, H, 0, 'hs', g); sh.setAttribute('fill', HAT);
    noreg = 1; const MG = this.morph = [];
    const mg = (z, a0) => { const g2 = mk('g', {}); g2.style.opacity = 0; MG.push({ g: g2, z: z, a: a0 }); return g2; };
    let q = mg(gap * 2, 5.4); rr(0, 0, W, H, 0, 'obj', q);
    q = mg(gap * 3, 5.5); rr(CX0, 27, 40, 16, 0, 'slot', q); rr(CX0, YT, CW, 42, 0, 'slot', q); rr(CX0, YL, CW, 24, 0, 'slot', q);
    q = mg(gap * 4, 5.6); rr(CX0, YA, CW, HA, 0, 'hug', q); rr(45.5, 207.5, 60, 22, 0, 'slot', q); rr(335.5, 207.5, 14, 22, 0, 'slot', q);
    noreg = 0; this.iso = [ia, ib, ic, id, TX, TY]; this.flat = [k, 0, 0, k, PX, PY];
    at(6.85, .04, .45); [[0, 0], [W, 0], [W, H], [0, H]].forEach(([x, y]) => { const p1 = P(x + 8, y + 8, gap), p2 = P(x, y, gap * 2); mk('line', { x1: p1[0], y1: p1[1], x2: p2[0], y2: p2[1], class: 'ph' }); });
    at(7.0, .07, .45); const LX = 175;
    [[0, [-40, 315], 'L0 · Page', 'Surface #faf9f5'], [gap, [8, H + 8], 'L1 · Shadow', 'Offset Y · no blur'], [gap * 2, [0, H], 'L2 · Card', 'B · R1 = 0 · pad S1'], [gap * 3, [CX0, YL + 24], 'L3 · Content', 'Index · title · line'], [gap * 4, [CX0, YA + HA], 'L4 · Action', 'B2 · label · arrow']].forEach(([z, [x, y], t, st], i) => {
      const p1 = P(x, y, z), ly = TY + 107 - i * 48; mk('circle', { cx: p1[0], cy: p1[1], r: 1.8, class: 'dot' }); mk('polyline', { points: p1[0] + ',' + p1[1] + ' ' + (LX + 10) + ',' + ly + ' ' + LX + ',' + ly, class: 'lead' });
      tx(LX - 4, ly - 2, t, 'vt', { 'text-anchor': 'end' }); tx(LX - 4, ly + 11, st, 'dts', { 'text-anchor': 'end' }); });
    at(7.5, .1, .5); title(400, TY + 215, 'Exploded view', 'Axonometric · z gaps not to scale');
    /* ---------- the rest of the sheet, drawn after the pull-back ---------- */
    at(7.7, 0, 1.6); rr(20, 20, 1860, 1020, 16, 'border');
    at(8.55, .045, .4); notes([[1, 'Title slot fills the card width (FILL); long titles wrap.'], [2, 'Line slot hugs its text and wraps; card height follows.'], [3, 'Action bar sits at the bottom, at least S4 below the content.'], [4, 'Hard shadow: offset Y, no blur, square corners (R1 = 0).'], [5, 'Hover lifts the card by L and grows the shadow to Y2 over T.'], [6, 'Three cards share a row: W = (C − 2·G) ÷ 3. Below lg they stack.']]);
    at(8.8, .006, .25); let yy = table(1606, 86, 'Spacing', [['S1', 'card-pad', '24'], ['S2', 'index-gap', '24'], ['S3', 'title-gap', '8'], ['S4', 'action-gap', '48'], ['S5', 'action-pad-x', '16'], ['S6', 'action-pad-y', '16'], ['G', 'column-gap', '24']]);
    yy = table(1606, yy, 'Size', [['B', 'card-border', '3'], ['B2', 'action-border', '2.5'], ['H4', 'index-h', '16'], ['H6', 'title-h', '42'], ['H7', 'line-h', '24 · hug'], ['H3', 'action-h', '2·B2+2·S6+22 = 59'], ['C', 'container-w', '1232'], ['W', 'card-w', '(C−2·G)÷3 ≈ 395'], ['H', 'card-h (ref)', 'Σ = 275']]);
    yy = table(1606, yy, 'Radius', [['R1', 'r-card', '0'], ['R2', 'r-action', '0']]);
    table(1606, yy, 'Shadow & state', [['Y', 'shadow-y', '8'], ['Y2', 'shadow-y-hover', '14'], ['L', 'hover-lift', '12'], ['T', 'hover-ease', '0.35 s']]);
    { const s = .35, RX = 90, RY = 300, cw = W * s, gw = 24 * s, ch = H * s; at(9.0, .05, .45);
      [0, 1, 2].forEach(i => { rr(RX + i * (cw + gw) + 8 * s, RY + 8 * s, cw, ch, 0, 'hug'); rr(RX + i * (cw + gw), RY, cw, ch, 0, 'obj'); });
      dimH(RX, RX + 3 * cw + 2 * gw, RY - 40, RY - 6, RY - 6, 'C'); dimH(RX, RX + cw, RY - 16, RY, RY, 'W'); dimH(RX + cw, RX + cw + gw, RY - 16, RY, RY, 'G'); dimH(RX + cw + gw, RX + 2 * cw + gw, RY - 16, RY, RY, 'W');
      nb(RX + 3 * cw + 2 * gw + 16, RY + 10, 6); title(RX + (3 * cw + 2 * gw) / 2, RY + ch + 34, 'Detail C · row', 'Scale 0.35:1 · container C'); }
    { const AX = 720, AY = 800, aw = CW, ah = HA; at(9.3, .05, .45);
      rr(AX, AY, aw, ah, 0, 'hug'); rr(AX + 18.5, AY + 18.5, 60, 22, 0, 'slot'); slotLabel(AX + 18.5, AY + 18.5, 60, 22, 'Label', 'l'); rr(AX + aw - 32.5, AY + 18.5, 14, 22, 0, 'slot');
      mk('line', { x1: AX - 10, y1: AY + ah / 2, x2: AX + aw + 10, y2: AY + ah / 2, class: 'cl' });
      dimV(AY, AY + ah, AX - 16, AX, AX, 'H3', { side: 'l' }); dimV(AY + 2.5, AY + 18.5, AX + aw + 18, AX + aw, AX + aw, 'S6', { side: 'r' });
      dimH(AX + 2.5, AX + 18.5, AY - 14, AY, AY + 18.5, 'S5', { dx: -10 }); dimH(AX, AX + 2.5, AY + ah + 16, AY + ah, AY + ah, 'B2', { below: true, dx: -12 });
      dimH(AX + 78.5, AX + aw - 32.5, AY - 14, null, AY + 18.5, 'FLEX', { c: 'dts' }); nb(AX + aw + 18, AY + ah + 6, 3);
      title(AX + aw / 2, AY + ah + 52, 'Detail A · action bar', 'Scale 1:1'); }
    { const S = 3, BX = 1240, BY = 900, L = 90; at(9.6, .05, .45);
      const corner = (cx, cy, y) => { const s2 = mk('path', { d: 'M' + (cx - L + y * S) + ',' + (cy + y * S) + ' H' + (cx + y * S) + ' V' + (cy - L + y * S), class: 'hs', fill: 'none' }); mk('path', { d: 'M' + (cx - L) + ',' + cy + ' H' + cx + ' V' + (cy - L), class: 'obj', fill: 'none' }); return s2; };
      corner(BX, BY, 8); dimH(BX, BX + 8 * S, BY + 40, BY, BY + 8 * S, 'Y', { below: true }); tx(BX - 45, BY - L - 12, 'Rest', 'sl', { 'text-anchor': 'middle' });
      const HX = BX + 170, HY = BY - 12 * S; mk('line', { x1: HX - L - 10, y1: BY, x2: HX + 60, y2: BY, class: 'ph' }); corner(HX, HY, 14);
      dimH(HX, HX + 14 * S, BY + 40, HY, HY + 14 * S, 'Y2', { below: true }); dimV(HY, BY, HX - L - 24, HX - L, HX - L - 10, 'L', { side: 'l' }); tx(HX - 45, HY - L - 12, 'Hover', 'sl', { 'text-anchor': 'middle' });
      nb(HX + 60, HY - L, 5); title(BX + 90, BY + 92, 'Detail B · hover state', 'Scale 3:1 · ease T'); }
  },
  render(t) {
    t = t / 0.85;
    let i = 0; while (i < DW_CAM.length - 2 && t > DW_CAM[i + 1].t) i++;
    const c0 = DW_CAM[i], c1 = DW_CAM[i + 1], p = eio(seg(t, c0.t, c1.t));
    const z = Math.exp(lerp(Math.log(c0.z), Math.log(c1.z), p)), cx = lerp(c0.cx, c1.cx, p), cy = lerp(c0.cy, c1.cy, p);
    this.cam.transform = 'translate(' + (960 - cx * z) + 'px,' + (540 - cy * z) + 'px) scale(' + z + ')';
    for (const it of this.reg) {
      let v = clamp01((t - it.a) / (it.b - it.a)); v = Math.round(v * 400) / 400;
      if (v === it.last) continue; it.last = v; const s = it.e.style;
      if (it.k === 'f') { s.opacity = eo(v); continue; }
      const e = eio(v); s.opacity = Math.min(1, v * 6);
      if (v >= 1) { s.strokeDasharray = ''; s.strokeDashoffset = ''; } else { s.strokeDasharray = '1 2'; s.strokeDashoffset = 1 - e; }
      s.fillOpacity = eo(seg(v, .55, 1));
    }
    const F = this.flat, I = this.iso;
    this.morph.forEach((m) => {
      const v = eio(seg(t, m.a, m.a + 1.5)), M = F.map((f, n) => lerp(f, I[n], v));
      M[5] -= m.z * v;
      m.g.style.opacity = eo(seg(t, m.a + 0.05, m.a + 0.5));
      const fo = eo(seg(t, m.a + 0.55, m.a + 1.25)); if (fo !== m.fo) { m.fo = fo; m.fills = m.fills || m.g.querySelectorAll('.obj,.well,.hug'); m.fills.forEach(e => { e.style.fillOpacity = fo; }); }
      m.g.setAttribute('transform', 'matrix(' + M.join(',') + ')');
      m.g.style.setProperty('--u', 1 / Math.sqrt(Math.abs(M[0] * M[3] - M[1] * M[2])));
    });
  },
});
