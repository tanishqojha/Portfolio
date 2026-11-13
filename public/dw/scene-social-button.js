/* Dimensional-drawing motion film of the footer social button (adapted from scene-path-card.js and the skill template). Pure function of time; values measured from src/components/footer.tsx. */
const { seg, lerp, eo, eio, clamp01 } = kit;
const DW_NS = 'http://www.w3.org/2000/svg';
const DW_CAM = [
  { t: 0, cx: 904, cy: 318, z: 4.2 }, { t: 2.3, cx: 910, cy: 324, z: 4.0 },
  { t: 4.2, cx: 975, cy: 410, z: 1.75 }, { t: 5.3, cx: 977, cy: 412, z: 1.72 },
  { t: 7.2, cx: 360, cy: 750, z: 1.6 }, { t: 7.8, cx: 362, cy: 752, z: 1.58 },
  { t: 9.2, cx: 950, cy: 530, z: 0.998 }, { t: 13, cx: 950, cy: 530, z: 0.988 }];
kit.scene('social-button', {
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

    /* Button: Z1 56 · B 2.5 · icon I1 24 → inset P = (Z1 − 2·B − I1) ÷ 2 = 13.5 · shadow Y 4 → Y2 7 on hover */
    const Z = 56, Bw = 2.5, I1 = 24, PADI = 13.5, k = 4.2, PX = 700, PY = 300, X = v => PX + v * k, Y = v => PY + v * k;
    const GL = 'M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z';
    const glyph = (x, y, s) => mk('path', { d: GL, class: 'dot', transform: 'translate(' + x + ',' + y + ') scale(' + s + ')' });
    /* plan: shadow, outline, icon slot, glyph, centerlines, dimensions */
    at(2.35, 0, .9); rr(X(4), Y(4), Z * k, Z * k, 0, 'hug');
    at(-0.9, 0, 2.2); rr(X(0), Y(0), Z * k, Z * k, 0, 'obj');
    at(0.6, 0, .9); rr(X(Bw + PADI), Y(Bw + PADI), I1 * k, I1 * k, 0, 'slot'); slotLabel(X(Bw + PADI), Y(Bw + PADI) + 62, I1 * k, I1 * k, 'Icon slot', 'm');
    at(1.2, .3, 1.1); glyph(X(Bw + PADI), Y(Bw + PADI), I1 * k / 24);
    at(1.9, .05, .5); mk('line', { x1: X(-10), y1: Y(Z / 2), x2: X(Z + 12), y2: Y(Z / 2), class: 'cl' }); mk('line', { x1: X(Z / 2), y1: Y(-10), x2: X(Z / 2), y2: Y(Z + 12), class: 'cl' });
    at(2.4, .05, .45); dimH(X(0), X(Z), Y(-14), Y(0), Y(0), 'Z1'); dimV(Y(0), Y(Z), X(-16), X(0), X(0), 'Z1');
    at(3.0, .05, .4); dimH(X(0), X(Bw), Y(Z + 18), Y(Z), Y(Z), 'B', { below: true, dx: -12 }); dimH(X(Bw), X(Bw + PADI), Y(Z + 18), null, Y(Z), 'P', { below: true });
    dimH(X(Bw + PADI), X(Bw + PADI + I1), Y(Z + 18), null, Y(Z), 'I1', { below: true }); dimH(X(Bw + PADI + I1), X(Bw + 2 * PADI + I1), Y(Z + 18), null, Y(Z), 'P', { below: true });
    at(3.5, .05, .45); dimV(Y(Z), Y(Z + 4), X(Z + 22), X(Z + 4), X(Z + 4), 'Y', { side: 'r' });
    at(3.9, .05, .45); callout(X(0), Y(0), X(-14), Y(-7), 'R1 = 0', -1); nb(X(Z + 16), Y(Z / 2), 1); nb(X(Z / 2), Y(-26), 2);
    at(4.2, .05, .45); detailRef(X(Z + 2), Y(Z + 2), 40, 'DETAIL A', X(Z + 18), Y(Z + 24));
    at(4.4, .1, .5); title(X(Z / 2), Y(Z + 36), 'Plan view', 'Scale 4.2:1 · social button');
    /* exploded: page, shadow, button, icon */
    const sc = .8, TX = 330, TY = 700, gap = 46, ia = .94 * sc, ib = .17 * sc, ic = -.34 * sc, id = .47 * sc;
    const P = (x, y, z) => [TX + ia * x + ic * y, TY + ib * x + id * y - z];
    const uIso = 1 / Math.sqrt(ia * id - ib * ic);
    const G = z => { const g = mk('g', { transform: 'matrix(' + ia + ',' + ib + ',' + ic + ',' + id + ',' + TX + ',' + (TY - z) + ')' }); g.style.setProperty('--u', uIso); return g; };
    at(6.15, .12, .8); let g = G(0); rr(-30, -30, 130, 130, 0, 'thin', g);
    g = G(gap); const sh = rr(4, 4, Z, Z, 0, 'hs', g); sh.setAttribute('fill', HAT);
    noreg = 1; const MG = this.morph = [];
    const mg = (z, a0) => { const g2 = mk('g', {}); g2.style.opacity = 0; MG.push({ g: g2, z: z, a: a0 }); return g2; };
    let q = mg(gap * 2, 5.4); rr(0, 0, Z, Z, 0, 'obj', q); rr(Bw + PADI, Bw + PADI, I1, I1, 0, 'slot', q);
    q = mg(gap * 3, 5.6); mk('path', { d: GL, class: 'dot', transform: 'translate(' + (Bw + PADI) + ',' + (Bw + PADI) + ')' }, q);
    noreg = 0; this.iso = [ia, ib, ic, id, TX, TY]; this.flat = [k, 0, 0, k, PX, PY];
    at(7.0, .07, .45); const LX = 150;
    [[0, [-30, 100], 'L0 · Page', 'Footer surface'], [gap, [4, Z + 4], 'L1 · Shadow', 'Y · no blur'], [gap * 2, [0, Z], 'L2 · Button', 'B · R1 = 0 · Z1'], [gap * 3, [Bw + PADI, Bw + PADI + I1], 'L3 · Icon', 'I1 · fill · rotates']].forEach(([z, [x, y], t, st], i) => {
      const p1 = P(x, y, z), ly = TY + 110 - i * 56; mk('circle', { cx: p1[0], cy: p1[1], r: 1.8, class: 'dot' }); mk('polyline', { points: p1[0] + ',' + p1[1] + ' ' + (LX + 10) + ',' + ly + ' ' + LX + ',' + ly, class: 'lead' });
      tx(LX - 4, ly - 2, t, 'vt', { 'text-anchor': 'end' }); tx(LX - 4, ly + 11, st, 'dts', { 'text-anchor': 'end' }); });
    at(7.5, .1, .5); title(380, TY + 150, 'Exploded view', 'Axonometric · z gaps not to scale');
    /* sheet */
    at(7.7, 0, 1.6); rr(20, 20, 1860, 1020, 16, 'border');
    at(8.55, .045, .4); notes([[1, 'Hit area equals the drawn box: Z1 square, above the 44 px touch minimum.'], [2, 'Icon glyph is a 24 unit path, filled, centered by P = (Z1 − 2·B − I1) ÷ 2.'], [3, 'Pointer move pulls the button toward the cursor by M × offset; release springs to 0.'], [4, 'Hover: shadow Y to Y2, fill becomes accent, glyph turns one full rotation over T.'], [5, 'Press removes the shadow (button seats onto the page).']]); tx(56, 88 + 5 * 24, 'Not to scale unless stated. Units are px. Grayscale reference only.', 'nt');
    at(8.8, .006, .25); let yy = table(1606, 86, 'Size', [['Z1', 'btn-size', '56'], ['B', 'btn-border', '2.5'], ['I1', 'icon-size', '24'], ['P', 'icon-inset', '13.5']]);
    yy = table(1606, yy, 'Spacing', [['S1', 'btn-gap', '16'], ['ROW', 'row-w', '4·Z1+3·S1 = 272'], ['M', 'magnet', '0.35']]);
    yy = table(1606, yy, 'Radius', [['R1', 'r-btn', '0']]);
    table(1606, yy, 'Shadow & state', [['Y', 'shadow-y', '4'], ['Y2', 'shadow-y-hover', '7'], ['T', 'spin-time', '0.5 s'], ['T2', 'release', '0.8 s']]);
    { const s = 2, RX = 1000, RY = 330, w = Z * s, gp = 16 * s; at(9.1, .05, .45);
      [0, 1, 2, 3].forEach(i => { rr(RX + i * (w + gp) + 4 * s, RY + 4 * s, w, w, 0, 'hug'); rr(RX + i * (w + gp), RY, w, w, 0, 'obj'); });
      dimH(RX, RX + 4 * w + 3 * gp, RY - 36, RY - 6, RY - 6, 'ROW'); dimH(RX + w, RX + w + gp, RY - 14, RY, RY, 'S1'); dimH(RX, RX + w, RY - 14, RY, RY, 'Z1');
      mk('line', { x1: RX - 14, y1: RY + w / 2, x2: RX + 4 * w + 3 * gp + 14, y2: RY + w / 2, class: 'cl' });
      title(RX + (4 * w + 3 * gp) / 2, RY + w + 40, 'Detail B · icon row', 'Scale 2:1 · gap S1 · ROW = 4·Z1 + 3·S1 = 272'); }
    { const S = 3, BX = 1240, BY = 900, L = 90; at(9.6, .05, .45);
      const corner = (cx, cy, y) => { const s2 = mk('path', { d: 'M' + (cx - L + y * S) + ',' + (cy + y * S) + ' H' + (cx + y * S) + ' V' + (cy - L + y * S), class: 'hs', fill: 'none' }); mk('path', { d: 'M' + (cx - L) + ',' + cy + ' H' + cx + ' V' + (cy - L), class: 'obj', fill: 'none' }); return s2; };
      corner(BX, BY, 4); dimH(BX, BX + 4 * S, BY + 40, BY, BY + 4 * S, 'Y', { below: true }); tx(BX - 45, BY - L - 12, 'Rest', 'sl', { 'text-anchor': 'middle' });
      const HX = BX + 170; corner(HX, BY, 7); dimH(HX, HX + 7 * S, BY + 40, BY, BY + 7 * S, 'Y2', { below: true }); tx(HX - 45, BY - L - 12, 'Hover', 'sl', { 'text-anchor': 'middle' });
      nb(HX + 60, BY - L, 4); title(BX + 90, BY + 92, 'Detail A · shadow state', 'Scale 3:1'); }
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
