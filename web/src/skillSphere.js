// 3D 技能球：斐波那契点分布 + 拖拽惯性旋转 + 悬停查询。
// 用原生 canvas 而非 echarts-gl——graphGL 的力导向渲染循环在本机曾把主线程卡死，且百行内自绘更轻。

const LINEAR = {
  ink: '#f7f8f8', inkMuted: '#d0d6e0', inkSubtle: '#8a8f98',
  accent: '#5e6ad2', accentHover: '#828fff', hairline: '#34343a',
};

export function mountSkillSphere(el, skills, cooc, { topN = 26 } = {}) {
  el.style.position = 'relative';
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;cursor:grab;';
  const tooltip = document.createElement('div');
  tooltip.style.cssText = [
    'position:absolute', 'pointer-events:none', 'display:none', 'z-index:20',
    'background:#141516', 'border:1px solid #34343a', 'border-radius:8px',
    'padding:8px 12px', 'font-size:12px', 'color:#f7f8f8', 'line-height:1.7',
    'white-space:nowrap',
  ].join(';');
  el.appendChild(canvas);
  el.appendChild(tooltip);

  const dpr = window.devicePixelRatio || 1;
  let W = 0, H = 0;
  function resize() {
    W = el.clientWidth; H = el.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(el);

  // ---- 数据：斐波那契球面分布 + 共现伙伴索引 ----
  const entries = Object.entries(skills).slice(0, topN);
  const N = entries.length;
  const phi = Math.PI * (3 - Math.sqrt(5)); // 黄金角
  const points = entries.map(([name, count], i) => {
    const y = 1 - (i / (N - 1)) * 2;             // -1..1
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    return { name, count, x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });

  // 共现伙伴：cooc 形如 { 'A|B': count }
  const partners = {};
  for (const [pair, count] of Object.entries(cooc)) {
    const [a, b] = pair.split('|');
    (partners[a] ??= []).push([b, count]);
    (partners[b] ??= []).push([a, count]);
  }
  for (const k of Object.keys(partners)) {
    partners[k].sort((p, q) => q[1] - p[1]);
  }

  const maxCount = Math.max(...entries.map(([, c]) => c), 1);
  const top3 = new Set(entries.slice(0, 3).map(([n]) => n));

  // ---- 交互：拖拽惯性 + 悬停拾取 ----
  let rx = 0.35, ry = 0, vx = 0, vy = 0.004; // 初始绕 Y 缓慢自转
  let dragging = false, lastX = 0, lastY = 0, hover = null;
  let mx = 0, my = 0;

  function onDown(e) {
    dragging = true; lastX = e.clientX; lastY = e.clientY;
    canvas.style.cursor = 'grabbing';
    canvas.setPointerCapture(e.pointerId);
  }
  function onMove(e) {
    const rect = canvas.getBoundingClientRect();
    mx = e.clientX - rect.left; my = e.clientY - rect.top;
    if (dragging) {
      vy = (e.clientX - lastX) * 0.006;
      vx = (e.clientY - lastY) * 0.006;
      ry += vy; rx += vx;
      lastX = e.clientX; lastY = e.clientY;
    }
  }
  function onUp() {
    dragging = false;
    canvas.style.cursor = 'grab';
  }
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointerleave', () => { mx = my = -9999; if (!dragging) onUp(); });

  // ---- 渲染循环 ----
  let raf = 0;
  function frame() {
    if (!dragging) {
      ry += vy; rx += vx;
      vy *= 0.96; vx *= 0.96;
      vy += (0.004 - vy) * 0.01; // 缓慢回到自转
    }
    rx = Math.max(-1.2, Math.min(1.2, rx));

    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const cx = W / 2, cy = H / 2;
    const R = Math.min(W, H) * 0.34;
    const cam = 3.2; // 透视相机距离
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const cosX = Math.cos(rx), sinX = Math.sin(rx);

    const proj = points.map((p) => {
      // 绕 Y 旋转
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;
      // 绕 X 旋转
      const y1 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      const s = cam / (cam - z2); // 透视
      return { ...p, sx: cx + x1 * R * s, sy: cy + y1 * R * s, scale: s, depth: z2 };
    }).sort((a, b) => a.depth - b.depth); // 远的先画

    hover = null;
    for (const p of proj) {
      const t = (p.count / maxCount) ** 0.6;
      const fontSize = (11 + t * 12) * p.scale;
      const front = p.depth < 0; // z 朝向观察者为负
      const alpha = front ? 0.55 + 0.45 * (1 + p.depth / cam) : 0.28;
      const isHover = !dragging &&
        Math.abs(p.sx - mx) < p.name.length * fontSize * 0.35 && Math.abs(p.sy - my) < fontSize * 0.8;
      if (isHover) hover = p;

      ctx.font = `${front ? 500 : 400} ${fontSize.toFixed(1)}px Inter, 'Microsoft YaHei', sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = isHover ? LINEAR.accentHover : (top3.has(p.name) ? LINEAR.ink : LINEAR.inkSubtle);
      ctx.globalAlpha = Math.min(1, alpha);
      ctx.fillText(p.name, p.sx, p.sy);
      if (isHover) {
        ctx.globalAlpha = 1;
        ctx.fillText(`· ${p.count}`, p.sx + p.name.length * fontSize * 0.55, p.sy);
      }
    }
    ctx.globalAlpha = 1;

    if (hover && !dragging) {
      const list = (partners[hover.name] || []).slice(0, 3)
        .map(([n, c]) => `${n}(${c})`).join('、');
      tooltip.innerHTML = `<b>${hover.name}</b> · 出现 ${hover.count} 次` +
        (list ? `<br/><span style="color:#8a8f98">常共现：</span>${list}` : '');
      tooltip.style.display = 'block';
      tooltip.style.left = `${Math.min(mx + 14, W - 230)}px`;
      tooltip.style.top = `${Math.max(my - 14, 4)}px`;
    } else {
      tooltip.style.display = 'none';
    }

    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    canvas.remove();
    tooltip.remove();
  };
}
