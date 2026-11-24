# 第四章：pen.dev、Google Stitch 與 Claude Design 實戰與跨工具協作 🛠️

[⬅️ 上一章：實戰 DESIGN.md → Figma → 網頁原型](./03_實戰_DESIGN_md到Figma到網頁.md) ｜ [🏠 返回單元主頁](./README.md)

除了業界標準 **Figma** 之外，AI 時代還誕生了三款定位截然不同、各自解決特定設計痛點的強大工具：**pen.dev（Pencil）**、**Google Stitch** 與 **Claude Design**。學會它們各自的強項，就算沒有 Figma 教育方案，也能流暢完成「發散 → 定稿 → 程式碼」的完整設計流程。

---

## 1. pen.dev（Pencil）— 住在開發環境裡的 AI 向量畫布 ✏️

**[pen.dev](https://www.pencil.dev/)**（原名 Pencil）是由 Adobe XD 共同創辦人 Tom Krcha 創立的 AI 原生設計工具，主打 **「Design-in-Code（程式碼中的設計）」**，目標是徹底消除設計稿與前端專案之間的交接摩擦。

### 為什麼 Builder 需要認識 pen.dev？
1. **設計檔就是程式碼（`.pen` JSON）**：它的設計稿使用開源的 `.pen` 格式，直接存放在你的程式碼專案資料夾裡，**可以跟著 Git 一起做版本控制、開分支與合併**，不再有「設計稿和網頁不同步」的問題。
2. **住在編輯器裡的輕量 Figma**：支援無限向量畫布、自動排版、樣式調整，而且可以直接從 **Figma 複製貼上圖層**，或將一個**線上網址／本機 `localhost` 畫面逆向還原成可編輯向量圖層**。
3. **內建雙向讀寫 MCP Server**：透過本地 MCP，AI Agent（如 Antigravity、Claude）可以直接讀寫 `.pen` 畫布，甚至支援**多 Agent 平行比稿**——同時在畫布上排出 3 種不同設計方案讓你挑。

### 如何在開發環境連接 pen.dev MCP？
1. **安裝工具**：前往 [pencil.dev](https://www.pencil.dev/) 下載桌面版應用程式，或安裝 VS Code / Cursor 擴充功能。
2. **建立設計檔**：在你的專案資料夾（如 `my-design-lab/`）中新增一個 `design.pen` 檔案。
3. **啟用 MCP 整合**：在 pen.dev 的 `Settings → MCP` 開啟 MCP 連線，將它連結至你使用的 AI 工具（如 Antigravity 的 MCP Servers 列表中會出現 `pencil`）。
4. **開始用自然語言操作畫布**：

```text
請依照專案根目錄的 @DESIGN.md，使用 pencil MCP 在 design.pen 中：
1. 建立一套 3 欄式的「SaaS 價格方案比較區塊」（含月繳/年繳切換標籤與推薦方案高亮）。
2. 在畫布右側再生成一版「極簡深色模式」變體供我比較。
```

等你在畫布上用滑鼠微調完文字與間距後，直接對 AI 說：

```text
我已手動微調好 design.pen 裡的價格方案畫框，請讀取該畫布並轉成乾淨的 HTML + CSS（或 React 元件）。
```

---

## 2. Google Stitch — 無限畫布氛圍探索與 `DESIGN.md` 發源地 🎨

**[Google Stitch](https://stitch.withgoogle.com/)** 是 Google 專為「從零探索視覺方向」打造的 AI 設計畫布工具，也是 **`DESIGN.md` 標準格式的發源地**。

### 核心強項
* **沒有設計稿也能快速開局**：只要貼上參考網址、截圖或一段產品描述，Stitch 就能在無限畫布上一次生成多個風格截然不同的頁面草圖。
* **畫面流程串接（User Flow）**：支援把生成的首頁、列表頁、詳情頁在畫布上連起來，方便與團隊討論點擊動線。
* **一鍵匯出 `DESIGN.md` 與轉貼 Figma**：探索出滿意的視覺方向後，可以直接從 Stitch 匯出 `DESIGN.md` 作為全站設計系統，或將畫面轉入 Figma 細修。

### 實作小練習：用 Stitch 探索氛圍並匯出規範
1. 開啟 [Google Stitch](https://stitch.withgoogle.com/)（使用免費 Google 帳號登入）。
2. 輸入你在 [產品需求實戰範例庫](../產品需求實戰範例庫/README.md) 挑選的題目需求，要求生成 **2～3 種不同視覺氛圍**（例如：雜誌暖木調 vs 極簡冷灰調）。
3. 選定最喜歡的一版後，匯出它的 `DESIGN.md` 或截圖，作為後續交給 Figma / pen.dev / Antigravity 的設計基準（詳見 [主題一：無設計稿的氛圍與視覺探索](../建立提案用的原型網頁/01_無設計稿的氛圍與視覺探索.md)）。

---

## 3. Claude Design（Claude Artifacts 內的 Design 模式）💬

在 **Claude.ai** 的對話右側面板（**Artifacts**）中，免費版使用者也能直接開啟 **Design 模式** 進行即時視覺生成與微調。

### 核心強項
* **零安裝、免費版可用**：打開瀏覽器就能用，非常適合課堂練習與即時提案演示。
* **專精單頁區塊重構與真實文案替換**：把現有網頁截圖或一段粗糙 HTML 貼給 Claude，請它用 Artifacts Design 模式重構「首屏 Hero 區」或「3 步驟預約表單」，並直接填入真實繁體中文文案檢查折行與字距。
* **即時互動預覽與程式碼匯出**：右側預覽可直接點擊測試 Hover、彈窗、分頁切換等互動狀態，確認滿意後一鍵複製或下載單一 HTML 檔／SVG 向量檔。

### 實作小練習：用 Claude Design 微調單頁區塊
```text
請使用 Artifacts Design 模式，幫我把這段「木日 Kibi 一週年活動」資訊重構成一個高留白的雙欄 Hero 區塊：
- 左欄：H1 主標題、兩行簡短故事副標、一顆主按鈕「立即訂位」與次按鈕「查看限定豆」
- 右欄：活動日期膠囊標籤（11/20–11/30）與「全品項第二杯半價」視覺焦點卡片
- 配色遵循暖米白（#FAF8F5）與木質棕（#8B5E3C），手機版需自動改為單欄。
```
（更多範例請參考 [主題二：修改單頁網頁的結構與內容](../建立提案用的原型網頁/02_修改單頁網頁的結構與內容.md)）

---

## 4. 四大工具怎麼選？跨工具黃金工作流 🔁

實務上不需要「只用一套工具到底」，而是讓每個工具在最擅長的階段接棒：

### 路線 A：團隊設計師協作流（標準 UI/UX 職場流程）
```text
1. Google Stitch / Claude Design（快速發散 3 種視覺方向與文案結構）
       ↓ 匯出 DESIGN.md
2. Figma × MCP（建立正式 Variables、Components 與團隊定稿）
       ↓ Figma MCP 讀稿
3. Antigravity（產出正式 HTML / React 專案並上線）
```

### 路線 B：獨立開發者／Builder 極速流（免 Figma 付費座位）
```text
1. Google Stitch / Claude Design（探索氛圍 + 確認單頁核心文案與互動）
       ↓ 產出 DESIGN.md
2. pen.dev × MCP（在程式碼專案內建立 .pen 向量畫布，用 AI 排多頁並手動微調）
       ↓ pen.dev MCP 同步轉碼
3. Antigravity（直接將定稿轉成網頁專案並推送 GitHub Pages）
```

---

## ✅ 本章實作檢核清單

- [ ] 我能說出 **Figma、pen.dev、Google Stitch、Claude Design** 四者各自的強項與適用階段。
- [ ] 我已試過至少兩種工具搭配 `DESIGN.md`（例如：先在 Google Stitch 或 Claude Design 生成第一版視覺，再整理出色彩與字體規範）。
- [ ] 若使用 **pen.dev**：我已在專案中建立 `.pen` 檔案並成功透過 MCP 讓 AI 生成畫布或轉出網頁程式碼。

---

[⬅️ 上一章：實戰 DESIGN.md → Figma → 網頁原型](./03_實戰_DESIGN_md到Figma到網頁.md) ｜ [🏠 返回單元主頁](./README.md)
