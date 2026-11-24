# 範例 11：《GreenPulse 綠脈動》商辦即時用電與碳排監控後台 ⚡

[⬅️ 上一題：SubTrack 訂閱管家儀表板](./02_SubTrack訂閱管家_個人每月扣款追蹤儀表板.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [➡️ 下一題：日日動 DailyMove 運動打卡應用](./04_日日動DailyMove_居家運動課表與習慣打卡應用.md)

---

## 📋 專案基本定位

| 項目 | 內容規格 |
| :--- | :--- |
| **主題名稱** | 《GreenPulse 綠脈動》企業總部與商辦大樓即時用電、空調負載與異常警示桌面系統 |
| **介面類型** | `互動應用程式（PyQt6 B2B 數據監控桌面應用程式，建議視窗 1360×860）` |
| **目標受眾 (TA)** | 企業廠務工程師、總務設施管理人員、ESG 永續管理師 |
| **核心技術組合** | `DESIGN.md` → `TOKENS` ＋ `QStackedWidget` ＋ `QPainter` 平滑趨勢折線圖 ＋ CSV 匯出 |
| **建議專案資料夾** | `greenpulse-monitor/`（內含 `PRD.md`、`DESIGN.md`、`greenpulse_app.py`） |

---

## 📄 可直接複製的 `PRD.md`（請複製存成專案中的 `PRD.md`）

````markdown
# PRD：GreenPulse 綠脈動 — 商辦即時用電與碳排監控後台（PyQt6）

## 1. 專案背景與核心痛點
傳統機電監控軟體常像 1990 年代工業螢幕，滿屏紅綠閃爍令人視覺疲勞，且看到超標數字不知從何查起。本桌面系統透過 `DESIGN.md` 打造「冷靜、克制、異常排查明確」的 B2B 戰情監控後台。

## 2. PyQt6 視窗架構與互動規格（預設視窗 1360×860）
1. **左側固定垂直導覽列（240px）＋ 右側 `QStackedWidget`**：
   * 導覽頁籤：`即時戰情總覽`、`樓層用電明細`（雙主頁切換，選中頁籤有明確視覺指示）。
2. **頂部全域狀態列**：
   * 大樓切換 `QComboBox`（`台北信義總部` / `新竹研發園區`）。
   * **時間區間切換按鈕組（`今日即時` / `近 7 日` / `本月累計`）**：切換大樓或時間維度時，下方 4 張 KPI 卡與趨勢折線圖須同步切換對應模擬數據！
   * 右上角 `匯出盤查 CSV` 按鈕（真實寫出 `energy_report.csv` 並給予成功提示）。
3. **4 欄核心 KPI 數據卡**：即時用電負載（`kW`）、累計碳排（`kgCO₂e`）、節電率（`%`）、異常警示數。
4. **中段雙欄（70% 折線圖 ＋ 30% 異常警示清單）**：
   * 左欄：**`QPainter` 自繪平滑用電趨勢折線圖**（含座標刻度、淡色漸層填充，以及一條**紅色虛線「契約容量警戒線」**）。
   * 右欄：「即時異常警示清單」，點擊任一警示卡片彈出「AI 設備排查診斷建議」`QDialog`，支援按下「標記已派工處理」更新狀態！
5. **樓層用電明細頁（`QTableWidget`）**：1F–5F 照明用電、空調用電、總度數與狀態膠囊（`● 正常運作`、`▲ 接近警戒`、`■ 尖峰超標`，圖示與文字並存）。

## 3. 真實感繁體中文素材
* **台北信義總部（今日即時）**：總負載 `482 kW`｜碳排 `2,140 kgCO₂e`｜節電 `-6.4%`｜異常 `2 件`
* **新竹研發園區（今日即時）**：總負載 `635 kW`｜碳排 `2,819 kgCO₂e`｜節電 `+2.1%`｜異常 `1 件`
* **2 筆異常排查**：
  1. `5F 核心機房・空調冰水主機負載過高（+18%）` → 建議：`檢查 2 號備援冰機是否誤同步啟動，並確認冷通道擋板氣密狀態。`
  2. `3F 研發中心・離峰照明迴路未關閉（24 kW）` → 建議：`B 區會議室群組自動排程感測器離線，建議遠端重啟照明迴路控制器。`
````

---

## 🎨 提供 3 種不同風格的 `DESIGN.md`（請任選 1 種複製存成 `DESIGN.md`）

<details>
<summary>🎨 風格一：深色導覽配冷灰白控制室風（Dark Sidebar & Crisp Control）— 推薦首選</summary>

````markdown
---
style: "深色導覽配冷灰白控制室風"
colors:
  canvas: "#F4F6F8"
  sidebar: "#0F172A"
  surface: "#FFFFFF"
  ink: "#111827"
  muted: "#64748B"
  primary: "#0F766E"
  danger: "#DC2626"
  warning: "#D97706"
  hairline: "#E2E8F0"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "8px"
  lg: "12px"
---

# DESIGN.md：GreenPulse（深色導覽配冷灰白控制室風）

## 1. Visual Theme & Atmosphere
沉穩的企業能源控制室，左側深色導覽區隔系統層級，右側極淨冷灰白讓折線圖與數據一目了然。

## 2. Color Palette & Roles (PyQt6 QSS / QPainter)
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 左側導覽 | `sidebar` | `#0F172A` | 240px 深藍黑左側導覽列 |
| 主背景 | `canvas` | `#F4F6F8` | 右側戰情區冷灰白底色 |
| 卡片底色 | `surface` | `#FFFFFF` | KPI 卡、圖表與表格底色 |
| 主要文字 | `ink` | `#111827` | 深灰黑數據主文字 |
| 次要文字 | `muted` | `#64748B` | 單位與座標刻度 |
| 主色 CTA | `primary` | `#0F766E` | 永續青綠主色與趨勢折線 |
| 超標警戒 | `danger` | `#DC2626` | 契約容量虛線與超標膠囊 |
| 細框線 | `hairline` | `#E2E8F0` | 1px 細框線與網格 |

## 3. PyQt6 QSS & Do's and Don'ts
- 禁止整張樓層卡片塗紅底；異常膠囊使用淡紅淺底 `#FEE2E2` 配深紅字 `#B91C1C` 並加符號。
````

</details>

<details>
<summary>🎨 風格二：全深色高對比戰情中心風（24/7 NOC Dark Operations）— 機房大螢幕路線</summary>

````markdown
---
style: "全深色高對比戰情中心風"
colors:
  canvas: "#090D16"
  sidebar: "#0F1624"
  surface: "#151E2E"
  ink: "#F1F5F9"
  muted: "#94A3B8"
  primary: "#14B8A6"
  danger: "#F87171"
  warning: "#FBBF24"
  hairline: "#243047"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "6px"
  lg: "10px"
---

# DESIGN.md：GreenPulse（全深色高對比戰情中心風）

## 1. Visual Theme & Atmosphere
專為 24 小時機房戰情大螢幕設計的深色環境，減少夜間長盯螢幕的眩光刺激，讓青綠折線與警戒紅虛線極為醒目。

## 2. Color Palette & Roles (PyQt6 QSS / QPainter)
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#090D16` | 極深戰情夜藍底色 |
| 左側導覽 | `sidebar` | `#0F1624` | 左側導覽底色 |
| 卡片底色 | `surface` | `#151E2E` | 深藍灰數據卡片 |
| 主要文字 | `ink` | `#F1F5F9` | 柔白文字 |
| 次要文字 | `muted` | `#94A3B8` | 座標刻度與單位 |
| 主色 CTA | `primary` | `#14B8A6` | 明亮翡翠青主折線與按鈕（配深字 `#090D16`） |
| 細框線 | `hairline` | `#243047` | 1px 深藍邊框 |

## 3. PyQt6 QSS & Do's and Don'ts
- 確保深底上折線與圖表數值標籤清晰不模糊；`#14B8A6` 按鈕配深黑字 `#090D16`。
````

</details>

<details>
<summary>🎨 風格三：極簡白底科技青綠永續風（Clean ESG Light）— 企業ESG報告路線</summary>

````markdown
---
style: "極簡白底科技青綠永續風"
colors:
  canvas: "#FFFFFF"
  sidebar: "#F8FAFC"
  surface: "#F8FAFC"
  ink: "#0F172A"
  muted: "#64748B"
  primary: "#059669"
  danger: "#E11D48"
  warning: "#D97706"
  hairline: "#E2E8F0"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "8px"
  lg: "12px"
---

# DESIGN.md：GreenPulse（極簡白底科技青綠永續風）

## 1. Visual Theme & Atmosphere
全白潔淨感宛如 ESG 永續年報與高階主管簡報介面，左側淺灰欄保持極度輕盈的呼吸空間。

## 2. Color Palette & Roles (PyQt6 QSS / QPainter)
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#FFFFFF` | 純白背景 |
| 左側導覽 | `sidebar` | `#F8FAFC` | 極簡淺灰導覽列 |
| 卡片底色 | `surface` | `#F8FAFC` | 輕灰卡片面板 |
| 主要文字 | `ink` | `#0F172A` | 深藍黑文字 |
| 次要文字 | `muted` | `#64748B` | 輔助刻度文字 |
| 主色 CTA | `primary` | `#059669` | 科技翡翠綠 |
| 細框線 | `hairline` | `#E2E8F0` | 1px 細框線 |

## 3. Do's and Don'ts
- 維持簡報般潔淨對齊；選中導覽項目改以淺綠底搭深綠文字與左邊條標示。
````

</details>

---

## 🚀 階段一：初版生成 — Prompt 撰寫注意事項

### ✍️ 請學生依據以下注意事項，1 個 1 個自己寫出你的 Prompt：
1. **指定技術棧與雙合約檔**：讀取 `@PRD.md` 與選定的 `@DESIGN.md`，以 **Python PyQt6** 實作單檔 `greenpulse_app.py`（視窗 `1360×860`）。
2. **設計左側導覽 ＋ `QStackedWidget`**：明確要求「即時戰情總覽」與「樓層用電明細」兩頁可透過左側導覽列點擊切換。
3. **點名自繪 `PowerTrendChart(QWidget)` 折線圖**：要求使用 `QPainter`（`Antialiasing`）畫出平滑用電曲線、淡色漸層填充與一條**紅色虛線「契約容量警戒線」**。
4. **寫清楚多維數據切換連動**：切換 `台北信義總部 / 新竹研發園區` 或 `今日即時 / 近 7 日 / 本月累計` 時，KPI 數字與折線圖必須同步更新曲線。
5. **點名異常排查彈窗與真實 CSV 匯出**：點擊異常警示卡片開啟診斷 `QDialog` 並可標記「已派工」；點擊匯出按鈕真實生成 `energy_report.csv`。

<details>
<summary>💡 點此展開：階段一「參考 Prompt」（建議先依上方注意事項自己寫完再打開對照）</summary>

```text
請嚴格讀取 @PRD.md 與 @DESIGN.md，使用 Python PyQt6 結合 Vibe Coding 實作《GreenPulse 綠脈動》商辦能源監控後台 `greenpulse_app.py`（預設視窗 1360×860）。

請務必滿足以下要求：
1. 視覺與骨架：開頭定義 `TOKENS` 字典對應 @DESIGN.md，套用完整 QSS 美化 240px 左側導覽列、KPI 卡片、美化版 `QComboBox` 與 `QTableWidget`。透過 `QStackedWidget` 實作「即時戰情總覽」與「樓層用電明細」分頁切換。
2. `QPainter` 自繪折線圖：建立 `PowerTrendChart(QWidget)` 類別，開啟 `Antialiasing` 繪製用電趨勢折線、漸層面積與座標軸文字，並在圖表上方畫出一條紅色虛線標示「契約容量警戒線」。
3. 數據連動與互動：
   - 切換大樓下拉選單（台北信義總部 / 新竹研發園區）或時間膠囊（今日即時 / 近 7 日 / 本月累計）時，4 張 KPI 卡與折線圖即時切換對應模擬曲線並重繪！
   - 點擊右側異常警示卡跳出「AI 設備排查建議 QDialog」，點擊「標記已派工處理」後該事件狀態轉為已處理。
   - 點擊「匯出盤查 CSV」真實將當前數據寫入 `energy_report.csv` 並提示成功。
4. 完成後檢查語法並測試啟動確認無報錯。
```

</details>

---

## 🔄 階段二：模擬提案後修改情境（Change Request 演練）

> **模擬會議回饋**：廠務主管看過你的 PyQt6 戰情中心後非常滿意，但針對實際值班操作提出 **3 項強化需求**：
> 1. **折線圖滑鼠互動 Tooltip**：看趨勢折線圖時，滑鼠移到某個時段點上方，希望能即時在點旁邊畫出一個精緻浮動提示框（顯示該時段名稱與精確 `kW` 數值）！
> 2. **派工處理留下紀錄**：在異常排查彈窗按下「標記已派工處理」時，希望能輸入一行簡單的**「值班人員處理備註」**（如：`已通知機電課李工程師查看`），並顯示在該異常卡片上。
> 3. **美化原生下拉選單**：頂部大樓切換 `QComboBox` 下拉清單的樣式目前有點生硬，請依 `@DESIGN.md` 統一改為圓角細框線、與主色調一致的質感清單，並將變更寫入 `DESIGN.md` `Changelog`。

### ✍️ 提案後修改 Prompt 注意事項（請依序 1 個 1 個自己寫）：
1. **先改雙合約文件**：先要求 AI 更新 `@PRD.md`（補上折線圖滑鼠 Tooltip 與派工處理備註規格）與 `@DESIGN.md`（補上 `QComboBox` 下拉清單 QSS 與 Tooltip 配色，寫入 `## Changelog`）。
2. **描述 `QPainter` 滑鼠追蹤實作細節**：明確提示在 `PowerTrendChart` 開啟 `setMouseTracking(True)` 並實作 `mouseMoveEvent` 計算最近資料點後重繪 Tooltip。
3. **保護既有 `TOKENS` 與多頁架構**：僅局部擴充折線圖互動、派工輸入框與下拉選單 QSS。

<details>
<summary>💡 點此展開：階段二提案後修改「參考 Prompt」（建議先自己寫完再打開對照）</summary>

```text
廠務主管試用 `greenpulse_app.py` 後提出 3 項實務優化，請先同步更新規格文件，再局部修改程式碼：

【修改需求】
1. `PowerTrendChart` 加入滑鼠懸停提示：啟用 `setMouseTracking(True)` 與 `mouseMoveEvent`，當滑鼠在圖表上移動時，高亮顯示最接近的時間資料點並用 `QPainter` 在旁繪製圓角小浮動框（顯示「時段：XXX kW」）。
2. 異常排查彈窗中新增一個「派工處理備註」`QLineEdit` 輸入框，按下「標記已派工處理」後將該備註文字直接更新顯示在右側異常事件卡片上。
3. 美化頂部大樓 `QComboBox` 及下拉清單 `QAbstractItemView` 的 QSS 樣式，讓邊框圓角與選中反白顏色與 @DESIGN.md 一致。

請執行：
Step 1：更新 @PRD.md 加入滑鼠 Tooltip 與派工備註規格；更新 @DESIGN.md 補上 `QComboBox` 與 Tooltip 配色規範，並在底端新增 `## Changelog` 記錄 v1.1 原因。
Step 2：修改 `greenpulse_app.py` 完成以上功能並確認可正常啟動。
```

</details>

---

## ✅ 成果驗收檢核清單

- [ ] 滑鼠移過 `QPainter` 趨勢折線圖時，是否能順暢亮起對應節點並顯示精確 `kW` Tooltip？
- [ ] 切換大樓或「今日／近 7 日／本月」時間膠囊時，KPI 與折線圖是否立刻切換重繪？
- [ ] 異常排查彈窗填寫備註並按下「標記已派工處理」後，右側清單卡片是否同步顯示備註與已處理狀態？
- [ ] 點擊「匯出盤查 CSV」能否在資料夾產出真實可用的 `.csv` 檔案？
- [ ] `PRD.md` 與 `DESIGN.md`（含 `Changelog`）是否與程式完全一致？

---

[⬅️ 上一題：SubTrack 訂閱管家儀表板](./02_SubTrack訂閱管家_個人每月扣款追蹤儀表板.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [➡️ 下一題：日日動 DailyMove 運動打卡應用](./04_日日動DailyMove_居家運動課表與習慣打卡應用.md)
