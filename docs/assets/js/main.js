/* =========================================================
   框架圖鑑：資料 + 分頁 + demo 延遲載入 + 複製 Prompt
   ========================================================= */
const REPO = 'https://github.com/roberthsu2003/UI_UX_Prototype/blob/main/前端動態框架圖鑑/';

const CATEGORIES = [
  {
    id: 'canvas', name: 'Canvas 2D', color: 'var(--cat-canvas)', doc: '01_Canvas_2D繪圖.md',
    intro: '把網頁的一塊區域當成「畫布」，用程式逐格畫出圖形。適合一般 HTML 元素做不到的效果：上千個粒子、生成藝術、手繪感插畫、可拖曳的編輯器。',
    keywords: ['粒子效果', '生成藝術', '互動海報', '小遊戲', '線上編輯器', '手繪風'],
  },
  {
    id: '3d', name: '3D / WebGL', color: 'var(--cat-3d)', doc: '02_3D與WebGL.md',
    intro: '透過 WebGL 直接呼叫顯示卡運算，在瀏覽器裡呈現真正的 3D 空間與光影。適合產品 360° 展示、沉浸式主視覺、虛擬展間，以及會流動的液態背景。',
    keywords: ['產品 360° 展示', '3D 主視覺', '虛擬展間', '液態 / 光暈背景', '遊戲化活動'],
  },
  {
    id: 'motion', name: '動畫 / 動態影片感', color: 'var(--cat-motion)', doc: '03_動畫與動態影片感.md',
    intro: '讓介面元素像影片剪輯一樣有節奏地登場、轉場、回饋。這類框架提供「時間軸」「緩動曲線」「交錯延遲」等動態設計師熟悉的概念。',
    keywords: ['進場動畫', '時間軸', '微互動', '品牌動態 Logo', 'After Effects 匯出'],
  },
  {
    id: 'data', name: '資料視覺化 & 捲動互動', color: 'var(--cat-data)', doc: '04_資料視覺化與捲動互動.md',
    intro: '把數字變成看得懂的圖表，或讓使用者的「捲動」成為播放鍵，一段一段推進故事。常見於年報、儀表板、品牌故事頁與新聞專題。',
    keywords: ['儀表板', '互動圖表', '捲動敘事', '視差效果', '數據新聞'],
  },
];

const FRAMEWORKS = [
  // ---------- Canvas 2D ----------
  {
    cat: 'canvas', name: 'p5.js', demo: 'demos/canvas-p5.html', url: 'https://p5js.org/',
    oneline: '為藝術家與設計師打造的「創意程式」工具，用很少的程式碼畫出生成藝術。',
    uses: ['品牌主視覺的生成式圖紋', '互動海報、展覽裝置', '跟隨滑鼠的粒子 / 筆刷效果'],
    avoid: '需要上萬個物件同時流暢運作時，改用 PixiJS',
    prompt: '請用 p5.js 製作一個全螢幕的生成藝術背景：上千條細線沿著 Perlin noise 流場流動並留下拖尾，滑鼠附近會產生漩渦，點擊畫面可切換 4 組配色。請輸出成單一 HTML 檔，p5.js 從 CDN 載入。',
  },
  {
    cat: 'canvas', name: 'PixiJS', demo: 'demos/canvas-pixi.html', url: 'https://pixijs.com/',
    oneline: '用 GPU 加速的 2D 繪圖引擎，一次畫上萬個圖形仍然維持 60fps。',
    uses: ['大量粒子 / 圖示動畫', '2D 網頁小遊戲', '互動式插畫、角色動畫'],
    avoid: '只是幾個簡單圖形時，CSS 或 SVG 就夠了',
    prompt: '請用 PixiJS 製作一個全螢幕粒子場景：3000 顆發光圓點在畫面中漂浮，滑鼠靠近時粒子被推開，點擊時產生爆炸擴散，右下角顯示 FPS。請輸出成單一 HTML 檔，PixiJS 從 CDN 載入。',
  },
  {
    cat: 'canvas', name: 'Fabric.js', demo: 'demos/canvas-fabric.html', url: 'http://fabricjs.com/',
    oneline: '讓 Canvas 上的每個圖形都可以被選取、拖曳、縮放、旋轉——像一個迷你 Canva。',
    uses: ['線上客製化（T 恤、名片、貼紙設計器）', '白板 / 標註工具', '活動海報產生器'],
    avoid: '純展示、不需要使用者編輯的動畫',
    prompt: '請用 Fabric.js 製作一個「活動海報編輯器」：畫布上預設放入標題文字、圓形、圓角方塊，使用者可以拖曳、縮放、旋轉並雙擊編輯文字；工具列提供新增方塊、新增圓形、新增文字、刪除與匯出 PNG。請輸出成單一 HTML 檔。',
  },
  // ---------- 3D ----------
  {
    cat: '3d', name: 'Three.js', demo: 'demos/3d-three.html', url: 'https://threejs.org/',
    oneline: '網頁 3D 最普及的函式庫，從產品展示到得獎網站的沉浸式體驗都看得到它。',
    uses: ['產品 360° 旋轉展示與換色', '3D 互動主視覺', '載入設計師做好的 3D 模型（glTF / GLB）'],
    avoid: '手機效能有限時要控制模型面數與特效',
    prompt: '請用 Three.js 製作一個產品 3D 展示頁：中央是一個保溫瓶模型（可用 LatheGeometry 產生），帶有柔和反射與地面陰影，使用者可以拖曳旋轉、滾輪縮放，下方有 5 個顏色按鈕可以平滑切換瓶身顏色。請輸出成單一 HTML 檔，Three.js 用 importmap 從 CDN 載入。',
  },
  {
    cat: '3d', name: 'Babylon.js', demo: 'demos/3d-babylon.html', url: 'https://www.babylonjs.com/',
    oneline: '由微軟維護的完整 3D 遊戲引擎，內建點選、碰撞、發光、物理等現成功能。',
    uses: ['3D 虛擬展間、導覽', '遊戲化行銷活動', '需要大量互動邏輯的 3D 場景'],
    avoid: '只是放一個會轉的模型時，Three.js 更輕量',
    prompt: '請用 Babylon.js 製作一個 3D 互動場景：地板上排列 5×5 個彩色方塊，有陰影與霓虹發光效果，攝影機可拖曳環繞；點擊任一方塊時它會跳起來、旋轉並換成隨機顏色。請輸出成單一 HTML 檔。',
  },
  {
    cat: '3d', name: 'WebGL Shader', demo: 'demos/3d-shader.html', url: 'https://thebookofshaders.com/?lan=ch',
    oneline: '直接寫給顯示卡的「著色器」程式，逐像素計算顏色，做出液態、光暈、扭曲等效果。',
    uses: ['會流動的液態 / 漸層背景', '圖片 hover 扭曲轉場', '品牌主視覺的光影質感'],
    avoid: '可讀性低、除錯困難，建議請 AI 生成後只調整參數',
    prompt: '請用 Three.js 的 ShaderMaterial 製作一個全螢幕液態背景：用 fbm 雜訊產生像咖啡拿鐵般緩慢流動的漸層，滑鼠移動時產生水波漣漪，並提供 4 組主題色按鈕切換。中央放置大標題「LIQUID COFFEE」。請輸出成單一 HTML 檔。',
  },
  // ---------- Motion ----------
  {
    cat: 'motion', name: 'GSAP', demo: 'demos/motion-gsap.html', url: 'https://gsap.com/',
    oneline: '專業網頁動畫的業界標準，用「時間軸」把多段動畫像剪輯影片一樣精準排列。',
    uses: ['首頁進場動畫、產品發表頁', '逐字 / 逐行文字動畫', '搭配 ScrollTrigger 做捲動動畫'],
    avoid: '只有按鈕 hover 這類簡單效果時，用 CSS transition 即可',
    prompt: '請用 GSAP 的 timeline 製作一張「新品上市」宣傳卡片的進場動畫：卡片彈出 → 背景色塊依序登場 → 標籤落下 → 標題逐字翻轉出現 → 副標滑入 → CTA 按鈕彈出。下方提供播放、倒轉、重播按鈕與可拖曳的進度條。請輸出成單一 HTML 檔，GSAP 從 CDN 載入。',
  },
  {
    cat: 'motion', name: 'Anime.js', demo: 'demos/motion-anime.html', url: 'https://animejs.com/',
    oneline: '輕巧好上手的動畫函式庫，特別擅長讓一群元素「依序、交錯」動起來。',
    uses: ['格狀 / 列表的交錯進場', 'SVG 線條描繪動畫', '輕量的微互動'],
    avoid: '需要複雜時間軸與捲動整合時，GSAP 生態較完整',
    prompt: '請用 Anime.js 製作一個 14×9 的方塊格狀動畫：點擊任何一格，動畫會以該格為中心向外波紋擴散（使用 anime.stagger 的 grid 與 from 參數），並提供「波紋 / 旋轉 / 變色」三種模式按鈕。請輸出成單一 HTML 檔。',
  },
  {
    cat: 'motion', name: 'Lottie', demo: 'demos/motion-lottie.html', url: 'https://airbnb.io/lottie/',
    oneline: '把設計師在 After Effects 做好的動畫匯出成 JSON，在網頁上以向量清晰播放。',
    uses: ['Loading 動畫、空狀態插圖', '成功 / 失敗等回饋動畫', '品牌吉祥物、動態 Logo'],
    avoid: '需要隨使用者操作即時變化的動畫（改用 Rive 或 GSAP）',
    prompt: '請用 lottie-web 在網頁上播放這個 Lottie JSON 動畫（附件），並加上播放 / 暫停按鈕、速度滑桿與逐格拖曳的進度條。如果沒有附件，請先自行產生一個小球彈跳（含擠壓伸展與影子）的 Lottie JSON。',
  },
  // ---------- Data & Scroll ----------
  {
    cat: 'data', name: 'D3.js', demo: 'demos/data-d3.html', url: 'https://d3js.org/',
    oneline: '資料視覺化的瑞士刀，把資料綁定到 SVG 圖形上，做出任何你想得到的客製化圖表。',
    uses: ['網站架構圖、關係網路圖', '數據新聞的客製化圖表', '地圖、樹狀圖、桑基圖'],
    avoid: '只需要標準長條 / 折線圖時，Chart.js 快很多',
    prompt: '請用 D3.js 的 forceSimulation 畫出一個咖啡品牌網站的 Sitemap 力導向圖：首頁為中心，往外是第一層與第二層頁面，依層級使用不同顏色與大小；節點可以拖曳、畫面可以縮放，滑鼠移到節點時高亮它的上下層路徑。請輸出成單一 HTML 檔。',
  },
  {
    cat: 'data', name: 'Chart.js', demo: 'demos/data-chartjs.html', url: 'https://www.chartjs.org/',
    oneline: '最容易上手的圖表函式庫，幾行設定就有漂亮、有動畫、可互動的標準圖表。',
    uses: ['後台儀表板、KPI 報表', '活動成果頁的統計圖', '原型中快速放入「看起來真實」的圖表'],
    avoid: '需要非常特殊的視覺形式時，改用 D3.js',
    prompt: '請用 Chart.js 製作一個網站流量儀表板：左邊是 12 個月的流量比較折線圖（兩年度、平滑曲線、半透明填色），右邊是流量來源甜甜圈圖；提供「隨機更新資料」與「切換長條 / 折線」按鈕，並支援 RWD。請輸出成單一 HTML 檔。',
  },
  {
    cat: 'data', name: 'GSAP ScrollTrigger + Lenis', demo: 'demos/scroll-gsap.html', url: 'https://gsap.com/docs/v3/Plugins/ScrollTrigger/',
    oneline: '把動畫綁在捲軸位置上（ScrollTrigger），再搭配平滑捲動（Lenis），做出「捲動即敘事」。',
    uses: ['品牌故事頁、一鏡到底', '畫面釘選後轉為水平捲動', '捲動時逐字點亮、數字跳動'],
    avoid: '資訊型頁面不要過度使用，避免讓使用者找不到內容',
    prompt: '請用 GSAP ScrollTrigger 搭配 Lenis 平滑捲動，製作一個品牌故事單頁：頂部有閱讀進度條；第一屏光球隨捲動放大、標題淡出；第二屏文字隨捲動逐字點亮；第三屏釘選畫面並轉為水平捲動 4 張卡片；第四屏數字隨捲動跳到 128,000+。請支援 prefers-reduced-motion，輸出成單一 HTML 檔。',
  },
];

/* ---------- 渲染 ---------- */
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function renderFrameworks() {
  const tabs = document.getElementById('tabs');
  const panels = document.getElementById('panels');
  if (!tabs || !panels) return;

  CATEGORIES.forEach((cat, i) => {
    const count = FRAMEWORKS.filter(f => f.cat === cat.id).length;
    tabs.insertAdjacentHTML('beforeend', `
      <button class="tab" role="tab" id="tab-${cat.id}" aria-controls="panel-${cat.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-cat="${cat.id}">
        <span class="dot" style="background:${cat.color}"></span>${cat.name}<span class="chip">${count}</span>
      </button>`);

    const cards = FRAMEWORKS.filter(f => f.cat === cat.id).map(f => `
      <article class="fw-card" id="${f.demo.replace(/^demos\/|\.html$/g, '')}">
        <div class="fw-demo" data-src="${f.demo}">
          <div class="placeholder">捲動到這裡時載入 demo…</div>
        </div>
        <div class="fw-body">
          <div class="fw-title">
            <h3>${esc(f.name)}</h3>
            <span class="fw-tag" style="background:${cat.color}">${cat.name}</span>
          </div>
          <p class="fw-oneline">${esc(f.oneline)}</p>
          <div>
            <h4>適合用在</h4>
            <ul>${f.uses.map(u => `<li>${esc(u)}</li>`).join('')}</ul>
          </div>
          <div>
            <h4>注意</h4>
            <p style="margin:0">${esc(f.avoid)}</p>
          </div>
          <div>
            <h4>給 AI 的 Prompt 範本</h4>
            <p class="prompt-box">${esc(f.prompt)}</p>
          </div>
          <div class="fw-actions">
            <button class="btn btn-primary btn-sm" data-copy="${esc(f.prompt)}">📋 複製 Prompt</button>
            <a class="btn btn-sm" href="${f.demo}" target="_blank" rel="noopener">⛶ 全螢幕 demo</a>
            <a class="btn btn-sm" href="${f.url}" target="_blank" rel="noopener">官方網站 ↗</a>
          </div>
        </div>
      </article>`).join('');

    panels.insertAdjacentHTML('beforeend', `
      <section class="tab-panel" role="tabpanel" id="panel-${cat.id}" aria-labelledby="tab-${cat.id}" ${i === 0 ? '' : 'hidden'}>
        <div class="cat-intro">
          <h2>${cat.name}</h2>
          <p>${cat.intro}</p>
          <div class="kw">${cat.keywords.map(k => `<span class="chip"># ${k}</span>`).join('')}</div>
          <p style="margin-top:12px"><a href="${REPO}${cat.doc}" target="_blank" rel="noopener">📖 閱讀完整教學文件 ↗</a></p>
        </div>
        <div class="fw-list">${cards}</div>
      </section>`);
  });

  setupTabs();
  setupLazyDemos();
  setupCopy();
}

/* ---------- 分頁（支援網址 #canvas、方向鍵） ---------- */
function setupTabs() {
  const tabs = [...document.querySelectorAll('.tab')];
  const select = (id, focus) => {
    tabs.forEach(t => {
      const on = t.dataset.cat === id;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById('panel-' + t.dataset.cat).hidden = !on;
      if (on && focus) t.focus();
      if (on) t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
    history.replaceState(null, '', '#' + id);
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t.dataset.cat));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) select(tabs[(i + d + tabs.length) % tabs.length].dataset.cat, true);
    });
  });
  const hash = decodeURIComponent(location.hash.slice(1));
  if (!hash) return;
  const cat = CATEGORIES.find(c => c.id === hash) ? hash
    : (FRAMEWORKS.find(f => f.demo.includes(hash + '.html')) || {}).cat;
  if (cat) {
    select(cat);
    const card = document.getElementById(hash);
    if (card) requestAnimationFrame(() => card.scrollIntoView());
  }
}

/* ---------- demo 延遲載入：進入畫面才載入，離開就卸載（節省 WebGL 資源） ---------- */
function setupLazyDemos() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      const frame = target.querySelector('iframe');
      if (isIntersecting && !frame) {
        const f = document.createElement('iframe');
        f.src = target.dataset.src;
        f.title = 'demo';
        f.loading = 'lazy';
        f.allow = 'clipboard-write';
        target.appendChild(f);
      } else if (!isIntersecting && frame) {
        frame.remove();
      }
    });
  }, { rootMargin: '200px 0px' });
  document.querySelectorAll('.fw-demo').forEach(el => io.observe(el));
}

/* ---------- 複製 Prompt ---------- */
function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 1800);
}
function setupCopy() {
  document.addEventListener('click', async e => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = Object.assign(document.createElement('textarea'), { value: text });
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    toast('已複製 Prompt，貼到 Claude / ChatGPT / Gemini 試試看！');
  });
}

/* ---------- 首頁 Hero：純 Canvas 2D 星座動畫 ---------- */
function heroCanvas() {
  const c = document.getElementById('hero-canvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w, h, pts = [];
  const mouse = { x: -1e4, y: -1e4 };
  const colors = ['#e0663a', '#2f80ed', '#c03fbf', '#1f9d74', '#8b7fff'];
  function resize() {
    const r = c.getBoundingClientRect();
    const dpr = Math.min(2, devicePixelRatio);
    w = r.width; h = r.height;
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(110, Math.round(w * h / 9000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, c: colors[Math.floor(Math.random() * colors.length)] }));
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      if (!reduce) { p.x += p.vx; p.y += p.vy; }
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 120 && !reduce) { p.x += dx / d; p.y += dy / d; }
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) { ctx.strokeStyle = a.c; ctx.globalAlpha = (1 - d / 130) * .35; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
    }
    ctx.globalAlpha = .9;
    for (const p of pts) { ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2); ctx.fill(); }
    ctx.globalAlpha = 1;
    if (!reduce) requestAnimationFrame(frame);
  }
  resize();
  addEventListener('resize', resize);
  c.parentElement.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  c.parentElement.addEventListener('pointerleave', () => { mouse.x = mouse.y = -1e4; });
  frame();
}

/* ---------- 深淺色切換（記住偏好） ---------- */
function themeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const root = document.documentElement;
  try { const saved = localStorage.getItem('theme'); if (saved) root.dataset.theme = saved; } catch {}
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const label = () => { btn.textContent = isDark() ? '☀️' : '🌙'; btn.setAttribute('aria-label', isDark() ? '切換為淺色' : '切換為深色'); };
  label();
  btn.addEventListener('click', () => {
    root.dataset.theme = isDark() ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch {}
    label();
  });
}

/* ---------- 首頁：學習路線切換（記住偏好） ---------- */
function trackSwitch() {
  const btns = [...document.querySelectorAll('.track-switch [data-track]')];
  if (!btns.length) return;
  const apply = track => {
    btns.forEach(b => b.setAttribute('aria-checked', String(b.dataset.track === track)));
    document.querySelectorAll('.unit-card[data-pm]').forEach(card => {
      const d = card.querySelector('.depth');
      if (d) d.textContent = card.dataset[track] || '';
    });
  };
  let saved = 'pm';
  try { saved = localStorage.getItem('track') || 'pm'; } catch {}
  apply(saved === 'dev' ? 'dev' : 'pm');
  btns.forEach(b => b.addEventListener('click', () => {
    apply(b.dataset.track);
    try { localStorage.setItem('track', b.dataset.track); } catch {}
  }));
}

themeToggle();
trackSwitch();
heroCanvas();
renderFrameworks();
