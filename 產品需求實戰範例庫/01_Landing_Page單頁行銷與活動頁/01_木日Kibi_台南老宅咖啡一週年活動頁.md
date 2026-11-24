# 範例 01：《木日 Kibi》台南老宅精品咖啡館 — 一週年活動頁 ☕

[🏠 返回本類別目錄](./README.md) ｜ [📋 返回範例庫總覽](../README.md) ｜ [➡️ 下一題：NoteFlow AI SaaS 推廣頁](./02_NoteFlow_AI_台灣團隊會議逐字稿SaaS推廣頁.md)

---

## 📋 專案基本定位

| 項目 | 內容規格 |
| :--- | :--- |
| **主題名稱** | 《木日 Kibi》台南老宅精品咖啡館 — 開店一週年暨限定豆預購活動 |
| **介面類型** | `Landing Page（單頁品牌行銷與活動頁）` |
| **目標受眾 (TA)** | 22–40 歲重視老宅空間美學、週末台南慢旅的手沖咖啡愛好者與熟客 |
| **核心轉換目標** | 點擊「立即訂位」完成無跳頁滑出抽屜（Drawer）座位預約 |
| **建議專案資料夾** | `kibi-anniversary/`（內含 `PRD.md`、`DESIGN.md`、`index.html`） |

---

## 📄 可直接複製的 `PRD.md`（請複製存成專案中的 `PRD.md`）

````markdown
# PRD：木日 Kibi 台南老宅咖啡館 — 一週年限定活動頁

## 1. 專案背景與核心痛點
位於台南中西區老巷弄內的兩層樓老宅咖啡館「木日 Kibi」即將迎來開幕一週年，希望推出專屬單頁活動網站，吸引熟客回流並曝光週年優惠。
* **要解決的痛點**：傳統咖啡店活動往往只有一張靜態海報圖，訂位要跳去外部表單或私訊粉專，造成訪客流失。

## 2. 頁面資訊架構與必備區塊
1. **Sticky 頂部導覽列**：左側品牌名 `木日 Kibi`，中間錨點連結（空間故事、限定風味、活動優惠、門市資訊），右側主要 CTA 按鈕「立即訂位」。
2. **首屏主視覺（Hero）**：活動期間標籤（`2026.11.20 — 11.30`）、主副標語、雙按鈕（「立即訂位」Primary ＋「探索限定豆」Secondary）。
3. **品牌空間故事**：雙欄圖文排版，講述老宅修復與慢手沖哲學。
4. **週年優惠橫幅 ＋ 三款限定單品卡**：醒目呈現「全品項咖啡第二杯半價」規則，並以 3 欄卡片展示限定咖啡豆。
5. **無縫式訂位抽屜（Slide-over Drawer）**：點擊頁面中任何「立即訂位」不跳離頁面，從右側滑出訂位面板（含日期、時段 `11:00 / 13:30 / 15:30`、人數、姓名與電話），送出後切換為預約成功確認單（含預約編號）。
6. **門市資訊與頁尾**：地址、營業時間、公休日與交通提醒。

## 3. 真實感繁體中文文案素材
* **主標語**：老宅裡的日常微光：木日 Kibi 開店一週年
* **副標語**：推開台南巷弄裡的五十歲老檜木門，在手沖水柱的蒸氣裡，與我們共度第一個冬日週年。
* **活動規則**：11/20 至 11/30 來店內用或外帶，任選咖啡全品項享第二杯半價（以價低者計）；購買限定配方豆再贈手沖濾紙乙包。
* **限定單品卡（3 款）**：
  1. 冬日老宅配方・中深焙｜NT$ 420 / 半磅｜風味：黑巧克力、烤核桃、焦糖尾韻
  2. 阿里山鄒築園水洗・淺焙｜NT$ 580 / 半磅｜風味：白桃、烏龍茶感、蜂蜜甜感
  3. 衣索比亞日曬古吉・中淺焙｜NT$ 480 / 半磅｜風味：藍莓果醬、玫瑰花香、可可
* **門市資訊**：台南市中西區信義街 88 巷 12 號｜週三至週日 10:30–18:30（週一、二公休）
````

---

## 🎨 提供 3 種不同風格的 `DESIGN.md`（請任選 1 種複製存成 `DESIGN.md`）

<details>
<summary>🎨 風格一：溫潤台南老宅木質雜誌風（Editorial & Warm Wood）— 推薦首選</summary>

````markdown
---
style: "溫潤台南老宅木質雜誌風"
colors:
  canvas: "#FAF8F5"
  surface: "#FFFFFF"
  surface_alt: "#F2ECE4"
  ink: "#1E1B18"
  muted: "#6B655E"
  primary: "#8B5E3C"
  primary_hover: "#734C2F"
  hairline: "#E5DFD7"
typography:
  display: "'Noto Serif TC', Georgia, serif"
  sans: "'Noto Sans TC', sans-serif"
radius:
  sm: "4px"
  md: "8px"
  lg: "14px"
spacing:
  section: "80px"
---

# DESIGN.md：木日 Kibi（溫潤老宅木質雜誌風）

## 1. Visual Theme & Atmosphere
台南老宅檜木光影與編輯雜誌排版結合，整體保持寬裕留白與溫潤呼吸感，文字像散文般容易閱讀。

## 2. Color Palette & Roles
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#FAF8F5` | 暖米白全站畫布 |
| 卡片底色 | `surface` | `#FFFFFF` | 商品卡與訂位抽屜 |
| 交替區塊 | `surface_alt` | `#F2ECE4` | 品牌故事區背景 |
| 主要文字 | `ink` | `#1E1B18` | 深焙咖啡墨色 |
| 次要文字 | `muted` | `#6B655E` | 風味標籤與時間 |
| 主按鈕 | `primary` | `#8B5E3C` | 溫潤木質棕 CTA |
| 細框線 | `hairline` | `#E5DFD7` | 1px 邊框與分隔線 |

## 3. Typography Rules
- 標題使用 `Noto Serif TC`，內文使用 `Noto Sans TC`（內文至少 `16px`，行高 `1.7`）。

## 4. Component Stylings & Elevation
- Primary 按鈕實心 `#8B5E3C` 配白字；Secondary 按鈕透明底搭 `1px solid #8B5E3C`。
- 卡片使用 `1px solid #E5DFD7` 扁平細線取代厚重陰影，圓角 `14px`。

## 5. Do's and Don'ts & Responsive
- 禁止使用純黑 `#000000`、禁止出現預設亮藍色或紫色漸層按鈕。
- 手機版（`< 768px`）多欄改單欄，所有按鈕高度至少 `44px`。
````

</details>

<details>
<summary>🎨 風格二：京都極簡宣紙禪風（Zen Paper & Matcha Ink）— 留白極簡路線</summary>

````markdown
---
style: "京都極簡宣紙禪風"
colors:
  canvas: "#F5F4EF"
  surface: "#FFFFFF"
  surface_alt: "#EAE8E1"
  ink: "#202421"
  muted: "#646963"
  primary: "#3D5245"
  primary_hover: "#2D3E34"
  hairline: "#DCDAD0"
typography:
  display: "'Noto Serif TC', serif"
  sans: "'Noto Sans TC', sans-serif"
radius:
  sm: "2px"
  md: "4px"
  lg: "6px"
spacing:
  section: "96px"
---

# DESIGN.md：木日 Kibi（京都極簡宣紙禪風）

## 1. Visual Theme & Atmosphere
受京都町家茶室啟發的極簡禪風，強調極大留白（`96px` 段落間距）、克制小圓角（`2px–6px`）與安靜的深苔綠點綴。

## 2. Color Palette & Roles
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#F5F4EF` | 宣紙米灰背景 |
| 卡片底色 | `surface` | `#FFFFFF` | 潔白商品與表單卡 |
| 交替區塊 | `surface_alt` | `#EAE8E1` | 故事與優惠交替底色 |
| 主要文字 | `ink` | `#202421` | 墨綠炭黑主文字 |
| 次要文字 | `muted` | `#646963` | 副標與日期文字 |
| 主按鈕 | `primary` | `#3D5245` | 沉靜深苔綠按鈕 |
| 細框線 | `hairline` | `#DCDAD0` | 極簡細框線 |

## 3. Typography Rules & Component Stylings
- 標題 `Noto Serif TC` 搭較寬字距（`0.06em`）；按鈕與卡片圓角皆極小（`4px`），不加任何陰影。

## 4. Do's and Don'ts
- 禁止花俏圓形膠囊與厚陰影卡片；保持整頁視覺安靜克制。
````

</details>

<details>
<summary>🎨 風格三：深夜烘豆室深色質感風（Night Roastery Dark Mode）— 沉穩夜色路線</summary>

````markdown
---
style: "深夜烘豆室深色質感風"
colors:
  canvas: "#14110F"
  surface: "#1F1A17"
  surface_alt: "#28211D"
  ink: "#F4EDE4"
  muted: "#A89C91"
  primary: "#C88A4B"
  primary_hover: "#B3773B"
  hairline: "#382F29"
typography:
  display: "'Noto Serif TC', serif"
  sans: "'Noto Sans TC', sans-serif"
radius:
  sm: "6px"
  md: "10px"
  lg: "16px"
spacing:
  section: "80px"
---

# DESIGN.md：木日 Kibi（深夜烘豆室深色質感風）

## 1. Visual Theme & Atmosphere
如深夜點著暖黃燈泡的精品烘豆室，以深黑咖啡豆烘焙色為基底，搭配暖焦糖銅金色點綴，呈現大人系的低調奢華感。

## 2. Color Palette & Roles
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#14110F` | 深夜深焙底色 |
| 卡片底色 | `surface` | `#1F1A17` | 卡片與訂位抽屜底色 |
| 交替區塊 | `surface_alt` | `#28211D` | 優惠與頁尾深褐區 |
| 主要文字 | `ink` | `#F4EDE4` | 奶霜白主文字 |
| 次要文字 | `muted` | `#A89C91` | 暖灰棕輔助文字 |
| 主按鈕 | `primary` | `#C88A4B` | 焦糖銅金主按鈕（配深文字 `#14110F`） |
| 細框線 | `hairline` | `#382F29` | 深棕 1px 細邊框 |

## 3. Do's and Don'ts
- 在焦糖金主按鈕（`#C88A4B`）上**必須使用深色文字 `#14110F`** 確保對比度，禁止配白字；圖片加上微暗暖色遮罩融合背景。
````

</details>

---

## 🚀 階段一：初版生成 — Prompt 撰寫注意事項

### ✍️ 請學生依據以下注意事項，1 個 1 個自己寫出你的 Prompt：
1. **指定參考雙合約檔**：明確寫出要求 AI 讀取專案裡的 `@PRD.md` 與你挑選的 `@DESIGN.md`（不可讓 AI 自由猜測）。
2. **規定輸出格式與技術**：要求產出單一可直接用瀏覽器開啟的 `index.html`（可使用 Tailwind CSS CDN 並引入 Google Fonts 繁體中文字體）。
3. **點名必備區塊與真實文案**：要求完整放入 `@PRD.md` 的 Sticky 導覽列、Hero、空間故事、第二杯半價橫幅、3 款限定單品卡與門市頁尾，禁止出現 `Lorem ipsum` 假字。
4. **寫清楚無縫訂位互動流程**：詳細要求「點擊任何『立即訂位』按鈕 → 從右側滑出訂位抽屜（Drawer） → 填寫資料送出後切換成預約編號確認畫面」。
5. **強調視覺限制與 RWD**：要求嚴格使用 `@DESIGN.md` 的色票與 `Don'ts` 禁令，並確保 `375px` 手機版多欄自動變單欄、按鈕高度至少 `44px`。

<details>
<summary>💡 點此展開：階段一「參考 Prompt」（建議先依上方注意事項自己寫完再打開對照）</summary>

```text
請嚴格讀取專案中的 @PRD.md 與 @DESIGN.md，為台南老宅咖啡館「木日 Kibi」製作一週年活動網站的單一檔案原型 `index.html`（可使用 Tailwind CSS CDN）。

請務必滿足以下 5 項要求：
1. 規格與文案：完整實作 @PRD.md 中的 Sticky 導覽列、Hero、雙欄空間故事、第二杯半價橫幅、3 款限定單品卡與門市頁尾，全部使用繁體中文真實文案。
2. 視覺規範：嚴格將 @DESIGN.md 頂部的 YAML colors 與字體定義為 CSS 變數並引入 Google Fonts（Noto Serif TC 與 Noto Sans TC），並徹底遵守 @DESIGN.md 的 Do's and Don'ts。
3. 核心無縫互動：點擊頁面中任何「立即訂位」按鈕時，不要跳轉頁面，而是從右側平滑滑出訂位抽屜（Slide-over Drawer，附半透明遮罩）；內含日期、時段（11:00 / 13:30 / 15:30）、人數、姓名電話，送出後顯示「預約成功編號與注意事項」確認畫面。
4. 響應式設計：在手機寬度（375px）下，故事雙欄與 3 欄單品卡自動堆疊為單欄，所有按鈕高度至少 44px。
5. 完成後請幫我檢查是否有任何未定義在 DESIGN.md 的突兀顏色。
```

</details>

---

## 🔄 階段二：模擬提案後修改情境（Change Request 演練）

> **模擬會議回饋**：你把初版 `index.html` 提案給「木日 Kibi」店長看，店長很喜歡整體氛圍，但提出了 **3 個修改需求**：
> 1. **功能新增**：很多客人訂位時會問「能不能帶寵物或需要靠窗座位」，希望訂位抽屜裡新增一個**「飲食禁忌／座位備註」**輸入框，且預約確認畫面也要顯示這行備註。
> 2. **行銷補強**：店長希望第 2 款「阿里山鄒築園水洗」加上一個醒目的**「🏆 烘豆師推薦」**標籤，讓它比另外兩款更突出。
> 3. **視覺微調**：店長覺得所有主要 CTA 按鈕滑鼠移過去時變化太不明顯，希望 Hover 時除了變色外，還要加上微幅上浮陰影，並把這些變更寫回文件紀錄中。

### ✍️ 提案後修改 Prompt 注意事項（請依序 1 個 1 個自己寫）：
1. **先改文件、再改程式碼**：先要求 AI 同步更新 `@PRD.md`（補上訂位備註欄位與推薦標籤需求）與 `@DESIGN.md`（補上按鈕 Hover 微浮起規範，並在檔案末尾新增 `## Changelog` 記錄本次修改原因）。
2. **精準描述局部修改範圍**：明確指出只要改動「第 2 款單品卡片」、「右側訂位抽屜表單與確認頁」以及「Primary 按鈕 Hover 樣式」，**不要重寫整個網站**而破壞原本排版。
3. **要求修改後自我檢查**：請 AI 改完後列出這次修改了哪幾個檔案的哪幾行重點。

<details>
<summary>💡 點此展開：階段二提案後修改「參考 Prompt」（建議先自己寫完再打開對照）</summary>

```text
我剛才拿 `index.html` 跟「木日 Kibi」店長提案，店長提出以下三點修改要求。請依照「先同步更新規範文件，再局部修改網頁」的順序執行：

【本次提案修改內容】
1. 訂位抽屜（Drawer）新增一個「座位偏好／飲食備註」選填欄位（例如：靠窗、不喝奶），按下送出後的「預約成功確認單」也要把這行備註顯示出來。
2. 3 款限定單品中的「阿里山鄒築園水洗・淺焙」卡片左上角新增「🏆 烘豆師推薦」徽章標籤，並用 2px primary 外框稍微突顯。
3. Primary 按鈕的 Hover 狀態除了加深底色，請增加微幅上浮（translateY(-1px)）與柔和陰影回饋。

請幫我依序執行：
Step 1：先更新 @PRD.md（補入訂位備註與推薦徽章需求）與 @DESIGN.md（更新第 4 章按鈕 Hover 規則，並在最下方新增 `## Changelog` 記錄 v1.1 提案修改原因）。
Step 2：僅針對上述 3 個局部區塊修改 `index.html`，保留原本滿意的版面結構與色票不變。
```

</details>

---

## ✅ 成果驗收檢核清單

- [ ] 專案資料夾內是否確實存放了 `PRD.md`、`DESIGN.md`（含 `Changelog`）與 `index.html`？
- [ ] 初版是否完全對齊選定的那一款 `DESIGN.md` 風格，沒有出現亂跳色？
- [ ] 點擊「立即訂位」是否以右側滑出抽屜運作，且提案修改後已能填寫並顯示「座位／飲食備註」？
- [ ] 第 2 款「阿里山鄒築園水洗」是否已正確加上推薦徽章且視覺突顯？
- [ ] 切換至 `375px` 手機寬度時，抽屜表單與 3 欄卡片是否皆不破版、單手好點擊？

---

[🏠 返回本類別目錄](./README.md) ｜ [📋 返回範例庫總覽](../README.md) ｜ [➡️ 下一題：NoteFlow AI SaaS 推廣頁](./02_NoteFlow_AI_台灣團隊會議逐字稿SaaS推廣頁.md)
