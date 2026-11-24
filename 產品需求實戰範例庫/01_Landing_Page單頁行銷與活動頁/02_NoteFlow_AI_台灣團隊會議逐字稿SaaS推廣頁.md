# 範例 02：《NoteFlow AI》台灣團隊會議逐字稿與待辦工具推廣頁 🎙️

[⬅️ 上一題：木日 Kibi 咖啡週年頁](./01_木日Kibi_台南老宅咖啡一週年活動頁.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [➡️ 下一題：2026 台灣未來設計週](./03_2026台灣未來設計週_策展購票與講者陣容頁.md)

---

## 📋 專案基本定位

| 項目 | 內容規格 |
| :--- | :--- |
| **主題名稱** | 《NoteFlow AI》專為台灣職場設計的國台英夾雜會議逐字稿與待辦工具 |
| **介面類型** | `Landing Page（SaaS 軟體產品推廣與轉換頁）` |
| **目標受眾 (TA)** | 台灣科技業 PM、新創團隊負責人、每天要開多場跨部門會議的職場工作者 |
| **核心轉換目標** | 透過月／年繳方案切換比較後，點擊「免費試用 14 天」 |
| **建議專案資料夾** | `noteflow-landing/`（內含 `PRD.md`、`DESIGN.md`、`index.html`） |

---

## 📄 可直接複製的 `PRD.md`（請複製存成專案中的 `PRD.md`）

````markdown
# PRD：NoteFlow AI — 台灣團隊會議逐字稿 SaaS 推廣頁

## 1. 專案背景與核心痛點
台灣職場開會經常「中英文夾雜（晶晶體）」並偶爾穿插台語，國外會議軟體辨識率低，導致 PM 會後仍須花 1 小時整理待辦事項。NoteFlow AI 主打台灣口音最佳化，會後 30 秒生成摘要與待辦清單並同步到團隊工具。

## 2. 頁面架構與互動功能
1. **頂部導覽列**：Logo `NoteFlow AI`、功能特色、價格方案、常見問題、「登入」與「免費試用 14 天」主按鈕。
2. **首屏 Hero ＋ 產品軟體介面 Mockup**：左／上方為主標語與雙按鈕（「免費試用 14 天」＋「查看範例報告」），下方呈現擬真的雙欄軟體介面示意卡片（左欄逐字稿片段、右欄 AI 提取的待辦勾選清單）。
3. **三大核心賣點 Bento Grid**：中英台語混雜高精度辨識、自動指派 Action Items 同步 Notion／Slack、支援開立台灣三聯式統一編號發票。
4. **互動式價格方案（Pricing Table）**：上方設置「月繳 ／ 年繳（享 8 折）」切換開關（Toggle），切換時三欄方案價格數字需即時動態更新！
5. **手風琴常見問題（FAQ Accordion）**：5 題支援點擊平滑展開／收合。

## 3. 真實感繁體中文文案與價格素材
* **主標語**：開完會，會議紀錄與待辦清單也寫好了。
* **副標語**：專為台灣職場「中英夾雜」口音訓練的 AI 會議助理，30 秒產出逐字稿、決議摘要並同步至 Slack 與 Notion。
* **Mockup 示範文字**：
  * 逐字稿：`Alex：這週五前先把 Design Token 的 PR merge 進來，下週一跟客戶 demo 時要確保手機版不會破版。`
  * 待辦項目：`[ ] 完成 Design Token PR 合併（負責人：Alex・期限：週五 18:00）`
* **三種方案價格**：
  1. 個人體驗版：月繳 `NT$ 0` ／ 年繳 `NT$ 0`（每月 120 分鐘錄音轉寫、基本摘要匯出）
  2. Pro 團隊版（最受歡迎）：月繳 `NT$ 390 / 人` ／ 年繳 `NT$ 310 / 人`（無限時數、Notion／Slack 雙向同步、團隊共用詞庫）
  3. 企業客製版：月繳 `NT$ 890 / 人` ／ 年繳 `NT$ 710 / 人`（私有雲部署、SSO 單一登入、台灣三聯式發票）
* **FAQ 5 題**：支援中英台語混雜嗎？／錄音資料會用來訓練公開模型嗎？／可以匯出哪些格式？／試用期結束前可以隨時取消嗎？／台灣公司報帳能開統一編號發票嗎？
````

---

## 🎨 提供 3 種不同風格的 `DESIGN.md`（請任選 1 種複製存成 `DESIGN.md`）

<details>
<summary>🎨 風格一：清爽青碧現代 SaaS 風（Clean Teal SaaS）— 推薦首選</summary>

````markdown
---
style: "清爽青碧現代 SaaS 風"
colors:
  canvas: "#F8FAFC"
  surface: "#FFFFFF"
  ink: "#0F172A"
  muted: "#475569"
  primary: "#0D9488"
  primary_hover: "#0F766E"
  accent: "#CCFBF1"
  hairline: "#E2E8F0"
typography:
  sans: "'Noto Sans TC', 'Inter', sans-serif"
  mono: "'JetBrains Mono', monospace"
radius:
  md: "10px"
  lg: "16px"
spacing:
  section: "80px"
---

# DESIGN.md：NoteFlow AI（清爽青碧現代 SaaS 風）

## 1. Visual Theme & Atmosphere
乾淨透明、高信任度的現代雲端工作流質感，像 Notion 與 Linear 結合台灣在地團隊的清晰度。

## 2. Color Palette & Roles
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#F8FAFC` | 極簡冷白畫布 |
| 卡片底色 | `surface` | `#FFFFFF` | Bento 卡片與價格表 |
| 主要文字 | `ink` | `#0F172A` | 深石板藍黑標題與內文 |
| 次要文字 | `muted` | `#475569` | 方案細項與說明 |
| 主色 CTA | `primary` | `#0D9488` | 青碧綠按鈕與推薦方案邊框 |
| 強調淺底 | `accent` | `#CCFBF1` | 標籤與年繳省錢徽章 |
| 細框線 | `hairline` | `#E2E8F0` | 1px 細邊框 |

## 3. Do's and Don'ts
- 禁止使用千篇一律的紫藍色漸層與發光霓虹陰影；價格數字使用 `tabular-nums` 等寬對齊。
````

</details>

<details>
<summary>🎨 風格二：深曜石極客開發者風（Obsidian Developer Dark）— 科技暗黑路線</summary>

````markdown
---
style: "深曜石極客開發者風"
colors:
  canvas: "#09090B"
  surface: "#18181B"
  ink: "#F4F4F5"
  muted: "#A1A1AA"
  primary: "#38BDF8"
  primary_hover: "#0EA5E9"
  accent: "#0C4A6E"
  hairline: "#27272A"
typography:
  sans: "'Noto Sans TC', 'Inter', sans-serif"
  mono: "'JetBrains Mono', monospace"
radius:
  md: "8px"
  lg: "12px"
spacing:
  section: "80px"
---

# DESIGN.md：NoteFlow AI（深曜石極客開發者風）

## 1. Visual Theme & Atmosphere
專為工程團隊與科技 PM 打造的暗黑極客風格，對比鮮明、線條銳利，產品 Mockup 如同真實的深色桌面端軟體。

## 2. Color Palette & Roles
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#09090B` | 深曜石黑背景 |
| 卡片底色 | `surface` | `#18181B` | Bento 格狀卡與價格表 |
| 主要文字 | `ink` | `#F4F4F5` | 柔白主文字 |
| 次要文字 | `muted` | `#A1A1AA` | 次要說明文字 |
| 主色 CTA | `primary` | `#38BDF8` | 天空電藍主按鈕（配深黑字 `#09090B`） |
| 細框線 | `hairline` | `#27272A` | 1px 細線區分卡片層次 |

## 3. Do's and Don'ts
- 主按鈕 `#38BDF8` 上請用深黑字 `#09090B` 維持高對比；避免大片刺眼純白區塊。
````

</details>

<details>
<summary>🎨 風格三：溫暖人文協作筆記風（Warm Paper Productivity）— 親和文字路線</summary>

````markdown
---
style: "溫暖人文協作筆記風"
colors:
  canvas: "#F9F7F4"
  surface: "#FFFFFF"
  ink: "#292524"
  muted: "#78716C"
  primary: "#D97706"
  primary_hover: "#B45309"
  accent: "#FEF3C7"
  hairline: "#E7E5E4"
typography:
  sans: "'Noto Sans TC', sans-serif"
  mono: "'JetBrains Mono', monospace"
radius:
  md: "10px"
  lg: "16px"
spacing:
  section: "76px"
---

# DESIGN.md：NoteFlow AI（溫暖人文協作筆記風）

## 1. Visual Theme & Atmosphere
如質感紙本筆記本般溫暖親和，降低 AI 工具的冰冷距離感，讓一般非工程團隊也覺得親切好上手。

## 2. Color Palette & Roles
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#F9F7F4` | 暖紙白底色 |
| 卡片底色 | `surface` | `#FFFFFF` | 筆記 Mockup 與價格卡 |
| 主要文字 | `ink` | `#292524` | 暖炭灰文字 |
| 次要文字 | `muted` | `#78716C` | 輔助說明 |
| 主色 CTA | `primary` | `#D97706` | 暖琥珀橘主按鈕 |
| 細框線 | `hairline` | `#E7E5E4` | 1px 暖灰框線 |

## 3. Do's and Don'ts
- 禁止出現冷冰冰的深藍黑陰影；強調卡片結構與閱讀舒適度。
````

</details>

---

## 🚀 階段一：初版生成 — Prompt 撰寫注意事項

### ✍️ 請學生依據以下注意事項，1 個 1 個自己寫出你的 Prompt：
1. **指定參考雙合約檔**：明確引用 `@PRD.md` 與選定的 `@DESIGN.md`，規定產出單檔 `index.html`。
2. **要求精細繪製軟體 Mockup**：指示 AI 用純 HTML/CSS 排出雙欄「會議紀錄＋待辦勾選介面」示意卡，且裡面必須使用真實繁體中文示範內容。
3. **寫清楚價格方案動態切換邏輯**：明確要求「月繳 ／ 年繳切換開關」必須用 JavaScript 實作點擊後三欄價格數字即時切換，並高亮標出「Pro 團隊版」。
4. **點名 FAQ 手風琴互動**：要求 5 題台灣職場常見問題必須能點擊展開／收合，不可寫成死文字。
5. **鎖定視覺規範與禁令**：要求嚴格套用 `@DESIGN.md` 的色碼、字體與等寬數字對齊，並做好 `375px` 手機版單欄響應式。

<details>
<summary>💡 點此展開：階段一「參考 Prompt」（建議先依上方注意事項自己寫完再打開對照）</summary>

```text
請嚴格讀取 @PRD.md 與 @DESIGN.md，為「NoteFlow AI」設計高轉換率的 SaaS Landing Page（單一檔案 `index.html`，可使用 Tailwind CSS CDN）。

請務必滿足以下要求：
1. 頁面結構：頂部導覽列、Hero＋雙欄「會議紀錄與待辦清單介面 Mockup」（使用 @PRD.md 的真實中文範例）、Bento Grid 三大特色、互動式 3 欄價格方案與 5 題 FAQ 手風琴。
2. 價格切換互動：在價格區上方實作「月繳 / 年繳（享 8 折）」切換開關（Toggle），點擊切換時三種方案的 NT$ 價格與計費週期文字必須即時更新；「Pro 團隊版」需以 primary 外框與「最受歡迎」標籤高亮顯示。
3. FAQ 互動：5 題常見問題支援點擊平滑展開／收合與箭頭旋轉提示。
4. 設計規範：嚴格將 @DESIGN.md 的色彩 Tokens 與字體定義為 CSS 變數，數字套用 tabular-nums，禁止任何未定義的紫藍漸層。手機版（375px）三欄價格卡自動垂直堆疊。
```

</details>

---

## 🔄 階段二：模擬提案後修改情境（Change Request 演練）

> **模擬會議回饋**：產品經理與業務主管看過初版後，決定調整促銷策略與介面細節，提出 **3 項修改需求**：
> 1. **價格策略調整**：年繳優惠力度不夠吸引人，決定將年繳折扣從「8 折」改為**「75 折（現省 25%）」**（Pro 團隊版年繳改為 `NT$ 290 / 人`、企業客製版改為 `NT$ 670 / 人`）。
> 2. **增加免費試用彈窗**：點擊「免費試用 14 天」目前沒有反應，希望彈出一個簡潔的「輸入工作信箱立即開通試用」Overlay Modal（含送出成功確認畫面）。
> 3. **視覺精修**：價格切換開關旁的「省 25%」徽章太低調，請用 `@DESIGN.md` 的 `accent` 強調色做成圓潤膠囊標籤，並同步記錄於 `DESIGN.md` 的 `Changelog`。

### ✍️ 提案後修改 Prompt 注意事項（請依序 1 個 1 個自己寫）：
1. **要求先更新雙規格檔**：明確指示 AI 先修改 `@PRD.md` 中的年繳價格表與新增試用 Modal 需求，並在 `@DESIGN.md` 新增 `## Changelog` 記錄本次改動。
2. **精準指定 JS 與 UI 改動處**：點名只修改「價格 Toggle 數據與折扣徽章樣式」並新增「試用 Modal」，保持 Bento Grid 與 FAQ 不動。
3. **驗證按鈕與表單狀態**：要求試用 Modal 在輸入空白信箱時能提示錯誤、送出後能顯示開通成功訊息。

<details>
<summary>💡 點此展開：階段二提案後修改「參考 Prompt」（建議先自己寫完再打開對照）</summary>

```text
主管看過 NoteFlow AI 初版後提出 3 項調整需求，請先同步規格文件，再局部修改 `index.html`：

【修改需求】
1. 折扣調整：年繳優惠從 8 折改為「75 折（省 25%）」，Pro 團隊版年繳改為 `NT$ 290 / 人`、企業客製版年繳改為 `NT$ 670 / 人`，且切換開關旁新增亮眼的「省 25%」膠囊徽章（使用 @DESIGN.md 的 accent 與 primary 色）。
2. 新增試用 Modal：點擊頁面任何「免費試用 14 天」按鈕時，彈出覆蓋式試用開通視窗（輸入工作信箱，有基本空白驗證，送出後顯示「已寄出 14 天免費試用邀請」確認狀態）。
3. 保留原本的 Hero Mockup、Bento Grid 與 FAQ 不變。

請執行：
Step 1：更新 @PRD.md 價格數據並補上試用 Modal 規格；更新 @DESIGN.md 新增折扣徽章規則，並在最下方加入 `## Changelog` 記錄 v1.1 調整原因。
Step 2：局部修改 `index.html` 完成以上功能與視覺。
```

</details>

---

## ✅ 成果驗收檢核清單

- [ ] `PRD.md` 與 `DESIGN.md`（含 `Changelog`）是否已同步反映年繳 `75 折` 與試用 Modal？
- [ ] 點擊月／年繳切換開關時，三欄價格（含 `NT$ 290` / `NT$ 670`）與徽章是否正確即時更新？
- [ ] 點擊「免費試用 14 天」能否順暢彈出試用視窗並完成表單驗證與送出？
- [ ] 首屏的雙欄「會議紀錄 Mockup」在電腦與手機版是否都排版清晰、不擠壓？
- [ ] 5 題 FAQ 手風琴開合流暢且文字閱讀無障礙？

---

[⬅️ 上一題：木日 Kibi 咖啡週年頁](./01_木日Kibi_台南老宅咖啡一週年活動頁.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [➡️ 下一題：2026 台灣未來設計週](./03_2026台灣未來設計週_策展購票與講者陣容頁.md)
