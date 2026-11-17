/* =========================================================
   無縫式介面互動圖鑑：資料 + 渲染（共用 main.js 的延遲載入與複製功能）
   ========================================================= */
const PATTERNS = [
  {
    id: 'compare', no: '01', name: '什麼是不切換畫面？', en: 'Seamless Interface',
    oneline: '只更新受影響的局部，而不是整頁重新載入。使用者能清楚看到「我做了什麼 → 哪裡有回應」。',
    watch: ['左邊：畫面閃白、捲動位置跳回最上方', '右邊：只有按鈕與購物車數字變化，視線不中斷'],
    uses: ['加入購物車、按讚、收藏', '表單即時驗證', '篩選、排序商品列表'],
    avoid: '局部更新要有明確的視覺回饋（數字跳動、按鈕變色），否則使用者不知道有沒有成功。',
    prompt: '請做一個咖啡店商品列表頁：點「加入購物車」時不要重新整理頁面，只更新右上角購物車數字（數字要有彈跳動畫），按鈕暫時變成「✓ 已加入」1 秒後恢復。請輸出成單一 HTML 檔。',
  },
  {
    id: 'overlay', no: '02', name: '覆蓋式介面', en: 'Overlay / Modal',
    oneline: '在原本畫面上「蓋」一層彈出視窗，關掉後一切維持原樣——適合中斷一下、又要回到原處的操作。',
    watch: ['背後的頁面變暗但還看得到，捲動位置不變', '在彈窗中加入購物車，背景的數字直接更新', '切換「底部抽屜」：手機上更好單手操作'],
    uses: ['商品快速預覽、圖片放大', '登入 / 註冊', '確認對話框、重要提醒'],
    avoid: '不要彈窗裡再開彈窗；一定要能用 ✕、點背景、Esc 三種方式關閉。',
    prompt: '請做一個商品網格頁，點任一商品卡片時以覆蓋式彈窗（modal）顯示商品大圖、說明與「加入購物車」按鈕，背景加上半透明遮罩，可用關閉按鈕、點擊遮罩或 Esc 關閉，關閉後回到原本捲動位置。手機版改為從底部滑出的 bottom sheet。請輸出成單一 HTML 檔。',
  },
  {
    id: 'accordion', no: '03', name: '嵌入式介面', en: 'Inlay / Accordion',
    oneline: '像蛇腹一樣在原地展開、收合，用很少的空間收納大量資訊。',
    watch: ['展開時下方內容被平順地往下推', '「一次只開一個」頁面永遠整齊', '「可同時展開」方便對照，但頁面會變長'],
    uses: ['FAQ 常見問題', '商品規格、運送說明', '手機版的分類選單'],
    avoid: '重要資訊不要藏在收合裡；問題標題要寫清楚，讓使用者不用全部打開也找得到。',
    prompt: '請做一個 FAQ 手風琴（accordion）區塊，共 6 題，點問題時答案以平滑動畫展開，右側的「＋」旋轉成「×」。提供切換開關：「一次只能展開一題」或「可同時展開多題」。需要支援鍵盤操作與 aria-expanded。請輸出成單一 HTML 檔。',
  },
  {
    id: 'slide', no: '04', name: '滑動式介面', en: 'Slide / Drawer',
    oneline: '從螢幕左右兩側滑出的面板，用一個畫面做出「虛擬的雙欄、三欄」版型。',
    watch: ['左邊放導覽選單、右邊放購物車：位置符合使用者習慣', '「覆蓋」：面板蓋在畫面上', '「推開」：整個畫面被推走，空間感更強'],
    uses: ['手機版漢堡選單', '購物車側欄', '篩選條件面板'],
    avoid: '要有清楚的關閉方式與背景遮罩；最重要的導覽項目不要只藏在抽屜裡。',
    prompt: '請做一個手機版網站畫面：左上角漢堡按鈕從左側滑出導覽選單，右上角購物車按鈕從右側滑出購物車面板，背景加上遮罩。提供兩種模式切換：「覆蓋在畫面上」與「把主畫面推開」。請輸出成單一 HTML 檔。',
  },
  {
    id: 'infinite-scroll', no: '05', name: '增量捲動介面', en: 'Incremental Scroll',
    oneline: '捲到底自動接上下一批內容，沒有分頁、沒有盡頭。',
    watch: ['快到底時先出現骨架（skeleton），再換成真正內容', '按「點進評論再按上一頁」：回來後從頭開始', '「載入更多」按鈕版本讓使用者自己決定'],
    uses: ['社群動態牆、評論牆', '圖片瀑布流', '搜尋結果'],
    avoid: '「上一頁」會遺失捲動位置；頁尾資訊永遠看不到。內容需要被找回時，改用增量翻頁或「載入更多」。',
    prompt: '請做一個顧客評論牆，捲到底部時自動載入下一批 8 則評論，載入中顯示骨架畫面（skeleton），最多載入 64 則後顯示「已經到底了」。提供切換：自動載入 / 「載入更多」按鈕。請輸出成單一 HTML 檔。',
  },
  {
    id: 'paging', no: '06', name: '增量翻頁介面', en: 'Incremental Paging',
    oneline: '一頁一頁切換內容但不重新載入頁面；只要同步更新網址，「上一頁」就能正常運作。',
    watch: ['翻頁時內容左右滑動，網址列的 ?page= 跟著變', '「網址不變」模式下按 ←：直接離開了網站', '這就是 Gmail 這類應用的做法'],
    uses: ['商品列表、搜尋結果分頁', '相簿、型錄', '後台資料表格'],
    avoid: '翻頁時一定要更新網址（History API），使用者才能「上一頁」、分享或收藏特定頁。',
    prompt: '請做一個商品列表的無縫分頁：共 5 頁，每頁 6 項商品，切換頁碼時內容以左右滑動動畫轉場、不重新整理頁面，並使用 History API 把頁碼寫入網址（?page=3），讓瀏覽器的上一頁 / 下一頁可以正常運作。請輸出成單一 HTML 檔。',
  },
  {
    id: 'panning', no: '07', name: '增量平移介面', en: 'Incremental Panning',
    oneline: '在畫面中上下左右自由拖曳，移到哪裡就載入哪裡——Google Maps 是最經典的例子。',
    watch: ['拖到新區域時，格子先是斜線（載入中）再出現內容', '左上角計數：只有看過的區域才被載入', '可搭配縮放，點圖釘看門市資訊'],
    uses: ['地圖、門市查詢', '大型平面圖、座位圖', '無限畫布、心智圖'],
    avoid: '要提供「回到中心」與縮放按鈕；手機上要注意與頁面捲動的手勢衝突。',
    prompt: '請做一個可拖曳平移、可滾輪縮放的門市地圖：地圖由 10×8 個區塊組成，區塊進入畫面時才「載入」（先顯示斜線佔位再淡入內容），地圖上有門市圖釘，點擊顯示門市資訊卡。右上角提供放大、縮小、回到中心按鈕。請輸出成單一 HTML 檔，不使用地圖 API。',
  },
  {
    id: 'carousel', no: '08', name: '輪播式介面', en: 'Carousel',
    oneline: '用水平方向收納多張內容，節省垂直空間；重點是讓使用者「看得出來可以滑」。',
    watch: ['露出下一張的一角，就是在暗示「還有更多」', '關掉截斷、箭頭、圓點後，幾乎認不出能滑', '比較「循環」與「到底後停止」'],
    uses: ['新品、活動 Banner', '商品推薦列', '手機上的圖片相簿'],
    avoid: '不適合放長篇文字；自動輪播容易讓人來不及看，要能暫停。',
    prompt: '請用 CSS scroll-snap 做一個商品輪播：每張卡片寬 72%，露出下一張的一角，提供左右箭頭與圓點指示器，支援觸控滑動與滑鼠拖曳；到最後一張時「下一張」箭頭消失。請輸出成單一 HTML 檔，不使用輪播套件。',
  },
  {
    id: 'steps', no: '09', name: '無縫式步驟', en: 'Seamless Step',
    oneline: '在同一個畫面裡完成多步驟流程，讓使用者感覺「很快、很簡單」，比較不會半途放棄。',
    watch: ['上方進度條清楚顯示「在第幾步、還剩幾步」', '第 2 步故意留空按下一步：錯誤提示就在欄位旁', '切換「傳統每步換頁」再走一次，比較花費時間'],
    uses: ['訂位、預約、報名', '結帳流程', '會員註冊'],
    avoid: '步驟要能「上一步」且保留已填資料；步驟不宜超過 3–5 步。',
    prompt: '請做一個「包場預約」的無縫式步驟流程：點「立即預約」後開啟覆蓋式視窗，內含 3 個步驟（日期人數 → 聯絡資料 → 確認），上方有進度條，步驟之間左右滑動轉場，可回上一步且保留已填資料，第 2 步需驗證姓名與手機格式，完成後顯示成功畫面。請輸出成單一 HTML 檔。',
  },
];

function renderSeamless() {
  const list = document.getElementById('pattern-list');
  const jump = document.getElementById('jump');
  if (!list) return;
  jump.innerHTML = PATTERNS.map(p => `<a class="chip" href="#${p.id}">${p.no} ${esc(p.name)}</a>`).join('');
  list.innerHTML = PATTERNS.map(p => `
    <article class="fw-card" id="${p.id}">
      <div class="fw-demo" data-src="demos/seamless/${p.id}.html"><div class="placeholder">捲動到這裡就會載入 demo…</div></div>
      <div class="fw-body">
        <div class="fw-title">
          <span class="no">${p.no}</span><h3>${esc(p.name)}</h3><span class="fw-tag">${esc(p.en)}</span>
        </div>
        <p class="fw-oneline">${esc(p.oneline)}</p>
        <div><h4>👀 操作時觀察</h4><ul>${p.watch.map(w => `<li>${esc(w)}</li>`).join('')}</ul></div>
        <div><h4>適合用在</h4><ul>${p.uses.map(u => `<li>${esc(u)}</li>`).join('')}</ul></div>
        <div><h4>注意</h4><p style="margin:0">${esc(p.avoid)}</p></div>
        <details><summary>給 AI 的 Prompt 範本</summary><p class="prompt-box">${esc(p.prompt)}</p></details>
        <div class="fw-actions">
          <button class="btn btn-primary btn-sm" data-copy="${esc(p.prompt)}">📋 複製 Prompt</button>
          <a class="btn btn-sm" href="demos/seamless/${p.id}.html" target="_blank" rel="noopener">⛶ 全螢幕 demo</a>
        </div>
      </div>
    </article>`).join('');
  setupLazyDemos();
  setupCopy();
  if (location.hash) { const el = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant' })); }
}
renderSeamless();
