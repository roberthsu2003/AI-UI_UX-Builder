# 範例 10：《SubTrack 訂閱管家》個人每月扣款追蹤儀表板 💳

[⬅️ 上一題：好食光 POS 觸控點餐](./01_好食光POS_餐廳觸控點餐與客製化結帳系統.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [➡️ 下一題：GreenPulse 綠脈動能源後台](./03_GreenPulse綠脈動_商辦即時用電與碳排監控後台.md)

---

## 📋 專案基本定位

| 項目 | 內容規格 |
| :--- | :--- |
| **主題名稱** | 《SubTrack 訂閱管家》個人串流、AI 工具與雲端服務每月扣款追蹤桌面儀表板 |
| **介面類型** | `互動應用程式（PyQt6 個人財務儀表板桌面程式，建議視窗 1280×820）` |
| **目標受眾 (TA)** | 同時訂閱多個串流、AI 工具（Claude/Figma）與雲端空間的現代數位工作者 |
| **核心技術組合** | `DESIGN.md` → `TOKENS` ＋ `QSS` ＋ `QPainter` 抗鋸齒環圈圖 ＋ `QDialog` 新增表單 |
| **建議專案資料夾** | `subtrack-desktop/`（內含 `PRD.md`、`DESIGN.md`、`subtrack_app.py`） |

---

## 📄 可直接複製的 `PRD.md`（請複製存成專案中的 `PRD.md`）

````markdown
# PRD：SubTrack 訂閱管家 — 個人每月扣款追蹤儀表板（PyQt6）

## 1. 專案背景與核心痛點
現代人每月自動扣款項目越積越多，直到帳單來了才發現超支。本桌面儀表板利用 PyQt6 呈現清楚的財務視覺：一眼看懂「每月固定流出多少」、「各類別佔比」與「7 天內誰要扣款」。

## 2. PyQt6 視窗架構與互動規格（預設視窗 1280×820）
1. **頂部工具列**：標題 `SubTrack 訂閱管家`、分類篩選按鈕列（`全部`、`AI 生產力`、`影音娛樂`、`雲端與工具`）、搜尋框 `QLineEdit` 與醒目 `+ 新增訂閱` 主按鈕。
2. **三大即時 KPI 摘要卡（3 欄）**：
   * `本月預估總支出`（`NT$ X,XXX` — 年繳自動除以 12 計入，新增/刪除即時重算）
   * `目前有效訂閱數`（`X 項服務`）
   * `7 日內即將扣款`（加總 7 天內到期金額並以警示色強調）
3. **中段雙欄視覺分析區（45% / 55%）**：
   * 左欄：**`QPainter` 自繪「各分類月支出佔比」環圈圖（Doughnut Chart）**（開啟 `Antialiasing` 抗鋸齒，中央顯示總額，右側顯示色塊圖例與金額百分比，資料異動即時 `update()` 重繪）。
   * 右欄：「7 日內即將扣款提醒列表」，顯示近期服務與倒數天數標籤（如 `2 天後扣款`）。
4. **下方訂閱明細清單（自訂美型 `QTableWidget`）**：
   * 顯示服務名稱、分類徽章、計費週期、折合月均金額（靠右對齊）、下次扣款天數與「刪除」按鈕。
5. **「+ 新增訂閱」`QDialog` 彈窗**：輸入名稱、分類 `QComboBox`、金額、週期（每月／每年）、距離下次扣款天數，送出後即時新增並連動更新上方所有指標與圖表。

## 3. 真實感預設訂閱素材（6 筆）
1. Claude Pro｜AI 生產力｜`NT$ 650 / 月`｜下次扣款：2 天後
2. Figma Professional｜AI 生產力｜`NT$ 480 / 月`｜下次扣款：5 天後
3. Netflix 高級方案｜影音娛樂｜`NT$ 460 / 月`｜下次扣款：11 天後
4. YouTube Premium｜影音娛樂｜`NT$ 199 / 月`｜下次扣款：18 天後
5. iCloud+ 2TB｜雲端與工具｜`NT$ 300 / 月`｜下次扣款：4 天後
6. Notion Plus｜雲端與工具｜`NT$ 3,600 / 年（約 NT$ 300/月）`｜下次扣款：24 天後
````

---

## 🎨 提供 3 種不同風格的 `DESIGN.md`（請任選 1 種複製存成 `DESIGN.md`）

<details>
<summary>🎨 風格一：深曜石天空藍 Fintech 風（Obsidian Sky Fintech）— 推薦首選</summary>

````markdown
---
style: "深曜石天空藍 Fintech 風"
colors:
  canvas: "#0F172A"
  surface: "#1E293B"
  ink: "#F8FAFC"
  muted: "#94A3B8"
  primary: "#38BDF8"
  warning: "#F59E0B"
  danger: "#EF4444"
  hairline: "#334155"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "8px"
  lg: "14px"
---

# DESIGN.md：SubTrack（深曜石天空藍 Fintech 風）

## 1. Visual Theme & Atmosphere
現代個人金融科技（Linear / Stripe）深色質感，數字極度清晰易掃描。

## 2. Color Palette & Roles (PyQt6 QSS / QPainter)
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#0F172A` | 主視窗深曜石底 |
| 卡片底色 | `surface` | `#1E293B` | KPI 卡、圖表與表格底色 |
| 主要文字 | `ink` | `#F8FAFC` | 柔白主文字與金額大數字 |
| 次要文字 | `muted` | `#94A3B8` | 週期與輔助文字 |
| 主色 CTA | `primary` | `#38BDF8` | `+ 新增訂閱` 按鈕（配深字 `#0F172A`）與圖表主色 |
| 提醒色 | `warning` | `#F59E0B` | 7 日內扣款標籤 |
| 細框線 | `hairline` | `#334155` | 1px 細框線 |

## 3. PyQt6 QSS & Do's and Don'ts
- **嚴禁保留刺眼白底 `QTableWidget` 原生格子線**，須將表頭與列距全數改為深色質感；`QPainter` 必須開啟 `Antialiasing`。
````

</details>

<details>
<summary>🎨 風格二：北歐淺灰極簡理財風（Nordic Clean Ledger）— 明亮清爽路線</summary>

````markdown
---
style: "北歐淺灰極簡理財風"
colors:
  canvas: "#F3F4F6"
  surface: "#FFFFFF"
  ink: "#111827"
  muted: "#6B7280"
  primary: "#2563EB"
  warning: "#D97706"
  danger: "#DC2626"
  hairline: "#E5E7EB"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "8px"
  lg: "14px"
---

# DESIGN.md：SubTrack（北歐淺灰極簡理財風）

## 1. Visual Theme & Atmosphere
像北歐極簡記帳軟體般明亮乾淨，適合偏好白天長時間辦公與高明度介面的使用者。

## 2. Color Palette & Roles (PyQt6 QSS / QPainter)
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#F3F4F6` | 極簡淺灰底色 |
| 卡片底色 | `surface` | `#FFFFFF` | 純白 KPI 與圖表卡 |
| 主要文字 | `ink` | `#111827` | 深炭黑主文字 |
| 次要文字 | `muted` | `#6B7280` | 輔助文字 |
| 主色 CTA | `primary` | `#2563EB` | 晴空鈷藍按鈕與主曲線 |
| 提醒色 | `warning` | `#D97706` | 7 日提醒琥珀色 |
| 細框線 | `hairline` | `#E5E7EB` | 1px 淺灰邊框 |

## 3. PyQt6 QSS & Do's and Don'ts
- 表格列高設為 `46px`、移除垂直格線僅保留水平細線，維持極簡空間感。
````

</details>

<details>
<summary>🎨 風格三：暗夜翡翠綠財富管理風（Midnight Emerald Wealth）— 精品私銀路線</summary>

````markdown
---
style: "暗夜翡翠綠財富管理風"
colors:
  canvas: "#0C1512"
  surface: "#15221D"
  ink: "#ECFDF5"
  muted: "#8BA89B"
  primary: "#10B981"
  warning: "#FBBF24"
  danger: "#F87171"
  hairline: "#22382F"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "8px"
  lg: "12px"
---

# DESIGN.md：SubTrack（暗夜翡翠綠財富管理風）

## 1. Visual Theme & Atmosphere
低調奢華的私人銀行深墨綠視覺，翡翠綠代表健康的現金流掌控，柔金色代表重要到期提醒。

## 2. Color Palette & Roles (PyQt6 QSS / QPainter)
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#0C1512` | 深夜墨綠底 |
| 卡片底色 | `surface` | `#15221D` | 深翡翠面板 |
| 主要文字 | `ink` | `#ECFDF5` | 薄荷柔白主文字 |
| 次要文字 | `muted` | `#8BA89B` | 霧灰綠輔助字 |
| 主色 CTA | `primary` | `#10B981` | 翡翠綠按鈕（配深字 `#0C1512`） |
| 細框線 | `hairline` | `#22382F` | 1px 深綠細線 |

## 3. PyQt6 QSS & Do's and Don'ts
- 保持高對比可讀性，環圈圖顏色使用和諧的翡翠、青藍、霧金與鼠尾草綠階。
````

</details>

---

## 🚀 階段一：初版生成 — Prompt 撰寫注意事項

### ✍️ 請學生依據以下注意事項，1 個 1 個自己寫出你的 Prompt：
1. **指定技術棧與雙文件**：要求 AI 讀取 `@PRD.md` 與選定的 `@DESIGN.md`，用 **Python PyQt6** 實作單檔 `subtrack_app.py`（預設視窗 `1280×820`）。
2. **強制美型化 `QTableWidget` 與全域 QSS**：警告 AI 不准出現預設白色表格或灰色格子線，必須定義 `TOKENS` 字典並完整套用 QSS。
3. **點名自繪 `CategoryDonutChart(QWidget)` 類別**：明確要求使用 `QPainter` ＋ `Antialiasing` 繪製環圈圖（含中央總額與右側圖例），不要只畫一個靜態方塊或佔位文字。
4. **寫清楚數據動態連動機制**：明確要求「年繳自動除以 12 計入月均」，且新增或刪除任何一筆訂閱時，KPI 卡片、7 日提醒與 `CategoryDonutChart` 都要立刻重算重繪。
5. **測試語法與啟動**：請 AI 執行基本啟動確認沒有 syntax 或 PyQt6 屬性名稱錯誤。

<details>
<summary>💡 點此展開：階段一「參考 Prompt」（建議先依上方注意事項自己寫完再打開對照）</summary>

```text
請嚴格讀取 @PRD.md 與 @DESIGN.md，使用 Python PyQt6 結合 Vibe Coding 為「SubTrack 訂閱管家」實作美觀的桌面財務儀表板 `subtrack_app.py`（預設視窗 1280×820）。

請務必滿足以下要求：
1. 視覺與 QSS：開頭定義 `TOKENS` 字典對應 @DESIGN.md 色碼，用完整 QSS 美化全視窗、KPI 圓角卡片、`QTableWidget`（隱藏原生格線、美化表頭與 46px 列高）、搜尋框與圓角 `QDialog`。
2. 內建 @PRD.md 的 6 筆真實訂閱資料，實作「年繳自動除以 12」的月均換算邏輯；所有 KPI 數字皆由程式動態計算。
3. `QPainter` 自繪圖表：建立繼承 `QWidget` 的 `CategoryDonutChart`，開啟 `QPainter.RenderHint.Antialiasing` 繪製分類支出環圈圖，中央顯示月支出總額、右側列出分類色塊、金額與百分比。
4. 完整互動閉環：支援分類按鈕切換與搜尋過濾表格；點擊「+ 新增訂閱」開啟 `QDialog` 寫入資料、點擊每列刪除鈕移除資料，兩者皆須立即重算 KPI、7 日扣款提醒並呼叫 `update()` 重繪環圈圖。
5. 完成後幫我檢查語法並確認無誤。
```

</details>

---

## 🔄 階段二：模擬提案後修改情境（Change Request 演練）

> **模擬會議回饋**：你自己每天使用並跟同學展示後，發現兩個很實用的個人痛點，決定新增 **3 項強化功能**：
> 1. **新增「每月預算上限警戒進度條」**：希望設定一個每月預算上限（預設 `NT$ 3,000`，且可以在介面微調上限數字），頂部顯示一條 `QProgressBar`（例如 `目前已使用 79%｜NT$ 2,389 / NT$ 3,000`）；一旦超過 100% 時進度條自動變紅色警示！
> 2. **支援「暫停追蹤」開關**：有時候某個影音平台只是先「暫停訂閱一個月」，不想整個刪掉資料。希望列表每列多一顆「暫停／啟用」按鈕，暫停的項目文字變淡、且**不計入本月總支出與環圈圖**！
> 3. **圖表環圈加粗微調**：`QPainter` 環圈圖線條太細，請加粗環寬（約 `26px`）並讓刪除／暫停按鈕保持低調細框線（Hover 才顯色），同步更新進 `PRD.md` 與 `DESIGN.md` 的 `Changelog`。

### ✍️ 提案後修改 Prompt 注意事項（請依序 1 個 1 個自己寫）：
1. **先改雙合約文件**：指示 AI 先更新 `@PRD.md`（補上預算警戒條邏輯與暫停追蹤狀態）與 `@DESIGN.md`（補上超支警戒色進度條與暫停列變淡規則，並寫入 `## Changelog`）。
2. **精確寫出「暫停不計入統計」邏輯**：提醒 AI 每筆訂閱資料新增 `active: True/False` 狀態，KPI 與環圈圖只加總 `active == True` 的項目。
3. **保護圖表 `QPainter` 美觀**：設定圓環厚度 `26px`、並確保超支時 `QProgressBar` 才切換 `danger` 紅條。

<details>
<summary>💡 點此展開：階段二提案後修改「參考 Prompt」（建議先自己寫完再打開對照）</summary>

```text
試用後決定為 `subtrack_app.py` 加上「預算警戒」與「暫停訂閱」功能，請先同步規格文件再修改程式碼：

【修改需求】
1. 新增「每月預算警戒條」：在 KPI 下方加入預算列（內建 `QSpinBox` 或輸入框調整預算，預設 3000 元），搭配客製化 QSS 圓角 `QProgressBar` 顯示「本月支出 / 預算上限（%）」，若總支出 > 預算，進度條變為 @DESIGN.md 的 danger 色並顯示「⚠️ 已超出預算！」。
2. 每列新增「暫停 / 啟用」按鈕：點擊「暫停」時該列保留顯示但文字轉為 muted 淺灰，且**不計入本月總支出、預算條與環圈圖統計**；再點「啟用」即恢復計算。
3. 加粗 `CategoryDonutChart` 環圈寬度至約 26px，且表格內的「暫停／刪除」按鈕改為低調細框線樣式。

請執行：
Step 1：更新 @PRD.md 加入預算條與暫停狀態規格；更新 @DESIGN.md 補上超支警戒與環圈寬度規範，並在底部加入 `## Changelog` 記錄 v1.1 原因。
Step 2：修改 `subtrack_app.py` 完成上述更新並測試啟動無誤。
```

</details>

---

## ✅ 成果驗收檢核清單

- [ ] `QPainter` 環圈圖是否已加粗至約 `26px`，邊緣平滑無鋸齒且數字異動時即時重繪？
- [ ] 把某項訂閱按「暫停」後，總支出 KPI、預算進度條與環圈圖是否立刻扣除該筆金額？
- [ ] 調低每月預算上限低於總支出時，預算進度條是否自動轉紅並顯示超支提示？
- [ ] 新增「年繳」訂閱項目時，是否正確自動除以 12 換算成月均支出？
- [ ] `PRD.md` 與 `DESIGN.md`（含 `Changelog`）是否與程式完全一致？

---

[⬅️ 上一題：好食光 POS 觸控點餐](./01_好食光POS_餐廳觸控點餐與客製化結帳系統.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [➡️ 下一題：GreenPulse 綠脈動能源後台](./03_GreenPulse綠脈動_商辦即時用電與碳排監控後台.md)
