# 範例 12：《日日動 DailyMove》居家運動課表與習慣打卡應用 🔥

[⬅️ 上一題：GreenPulse 綠脈動能源後台](./03_GreenPulse綠脈動_商辦即時用電與碳排監控後台.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [📋 返回範例庫總覽](../README.md)

---

## 📋 專案基本定位

| 項目 | 內容規格 |
| :--- | :--- |
| **主題名稱** | 《日日動 DailyMove》每日 15 分鐘居家伸展與核心運動課表、計時器與連續打卡應用 |
| **介面類型** | `互動應用程式（PyQt6 精緻桌面習慣工具視窗，建議視窗 480×780）` |
| **目標受眾 (TA)** | 久坐電腦前的上班族與學生（想用桌面小工具輕鬆完成每日 15 分鐘伸展與核心打卡） |
| **核心技術組合** | `DESIGN.md` → `TOKENS` ＋ `QStackedWidget` ＋ `QTimer` ＋ `QPainter` 圓形倒數進度環 |
| **建議專案資料夾** | `dailymove-app/`（內含 `PRD.md`、`DESIGN.md`、`dailymove_app.py`） |

---

## 📄 可直接複製的 `PRD.md`（請複製存成專案中的 `PRD.md`）

````markdown
# PRD：日日動 DailyMove — 居家運動課表與習慣打卡應用（PyQt6）

## 1. 專案背景與核心痛點
久坐上班族想養成每日 15 分鐘運動習慣，卻常因健身房太遠或找不到適合當下狀態的課表而放棄。本桌面小工具主打「零阻力開練」，提供情境課表、專注倒數圓環與即時打卡正向回饋。

## 2. PyQt6 視窗架構與互動規格（預設視窗 480×780）
採用 `QStackedWidget` 切換兩個畫面：
* **第 1 頁【今日課表清單】**：
  1. **連續打卡與週進度激勵卡**：顯示 `🔥 已連續運動 6 天` 徽章與週一～週日 7 個圓點（前 6 天亮橘色，今日完成全部 4 項動作時亮起綠色且連續天數變成 `7 天`！）。
  2. **目標進度條**：美化版 `QProgressBar`（顯示 `已完成 X / 4 項動作`）。
  3. **三套情境課表切換鈕**：`💻 久坐肩頸舒緩`、`🔥 15分鐘居家燃脂`、`🌙 睡前拉伸放鬆`。
  4. **4 張動作任務卡片**：含完成核取方塊 `QCheckBox`、動作名稱、簡短動作要領、時間標籤與 `▶ 開始計時` 按鈕。
  5. **達標慶祝橫幅**：4 項全數勾選時顯示「🎉 今日運動達標！連續天數 +1」。
* **第 2 頁【專注倒數計時器】**：
  1. 中央以 **`QPainter`（`Antialiasing` + `RoundCap` 圓角筆端）繪製大圓形進度環**，中央顯示清晰剩餘時間（如 `02:00` → `01:59`⋯⋯），搭配 `QTimer` 真實每秒倒數。
  2. 下方提供 `暫停 / 繼續`、`直接完成此動作` 與 `返回清單` 大按鈕。
  3. 當倒數歸零時，自動標記該動作完成並返回第 1 頁更新進度！

## 3. 真實感繁體中文課表素材
* **久坐肩頸舒緩**：頸部側邊伸展 (`120秒`)、胸椎開展與貓牛式 (`180秒`)、靠牆天使臂肩胛啟動 (`180秒`)、坐姿梨狀肌臀部伸展 (`240秒`)
* **15 分鐘居家燃脂**：開合跳熱身 (`120秒`)、標準深蹲循環 (`240秒`)、交替平板支撐 (`180秒`)、高抬腿與緩步收操 (`360秒`)
* **睡前拉伸放鬆**：嬰兒式全身延展 (`180秒`)、仰臥抱膝左右搖擺 (`120秒`)、仰臥脊柱扭轉 (`180秒`)、腹式深呼吸靜心 (`120秒`)
````

---

## 🎨 提供 3 種不同風格的 `DESIGN.md`（請任選 1 種複製存成 `DESIGN.md`）

<details>
<summary>🎨 風格一：活力珊瑚橘明亮運動風（Vibrant Coral Move）— 推薦首選</summary>

````markdown
---
style: "活力珊瑚橘明亮運動風"
colors:
  canvas: "#F9FAFB"
  surface: "#FFFFFF"
  ink: "#18181B"
  muted: "#71717A"
  primary: "#F97316"
  success: "#10B981"
  hairline: "#E4E4E7"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "10px"
  lg: "14px"
---

# DESIGN.md：DailyMove（活力珊瑚橘明亮運動風）

## 1. Visual Theme & Atmosphere
充滿朝氣與陽光感的現代健康習慣工具，高明度背景搭配珊瑚橘啟動動力、青檸綠代表達標成就感。

## 2. Color Palette & Roles (PyQt6 QSS / QPainter)
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#F9FAFB` | 純淨明亮米白背景 |
| 卡片底色 | `surface` | `#FFFFFF` | 動作卡與計時器面板 |
| 主要文字 | `ink` | `#18181B` | 深炭黑動作名與倒數時間 |
| 次要文字 | `muted` | `#71717A` | 動作要領與週曆文字 |
| 主色 CTA | `primary` | `#F97316` | `▶ 開始計時`、倒數進度環弧線 |
| 達成狀態 | `success` | `#10B981` | 完成打勾、達標橫幅、週日亮綠 |
| 細框線 | `hairline` | `#E4E4E7` | 1px 細框線與進度環底軌 |

## 3. PyQt6 QSS & Do's and Don'ts
- **禁止使用 Qt 預設藍色 `QProgressBar`**，須用 QSS 客製化圓角橘條；`QPainter` 圓環筆畫端點必須設定 `Qt.PenCapStyle.RoundCap`。
````

</details>

<details>
<summary>🎨 風格二：柔和薄荷綠瑜伽舒緩風（Calm Mint Pilates）— 伸展舒壓路線</summary>

````markdown
---
style: "柔和薄荷綠瑜伽舒緩風"
colors:
  canvas: "#F4F7F5"
  surface: "#FFFFFF"
  ink: "#1F2924"
  muted: "#64726A"
  primary: "#0D9488"
  success: "#059669"
  hairline: "#DCE5DF"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "12px"
  lg: "18px"
---

# DESIGN.md：DailyMove（柔和薄荷綠瑜伽舒緩風）

## 1. Visual Theme & Atmosphere
以舒緩的鼠尾草薄荷綠替代高刺激橘色，特別適合搭配辦公肩頸拉伸與睡前瑜珈放鬆。

## 2. Color Palette & Roles (PyQt6 QSS / QPainter)
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#F4F7F5` | 舒緩淡薄荷灰白 |
| 卡片底色 | `surface` | `#FFFFFF` | 大圓角白色卡片 |
| 主要文字 | `ink` | `#1F2924` | 深墨綠文字 |
| 次要文字 | `muted` | `#64726A` | 動作指導文字 |
| 主色 CTA | `primary` | `#0D9488` | 沉靜青綠主按鈕與進度環 |
| 達成狀態 | `success` | `#059669` | 完成狀態綠 |
| 細框線 | `hairline` | `#DCE5DF` | 1px 柔和邊框 |

## 3. PyQt6 QSS & Do's and Don'ts
- 卡片與按鈕一律採柔和圓角（`12px–18px`），計時器數字使用等寬避免跳動。
````

</details>

<details>
<summary>🎨 風格三：暗黑螢光萊姆高燃脂訓練風（Dark Neon HIIT）— 高強度燃脂路線</summary>

````markdown
---
style: "暗黑螢光萊姆高燃脂訓練風"
colors:
  canvas: "#111113"
  surface: "#1B1B1F"
  ink: "#F4F4F5"
  muted: "#A1A1AA"
  primary: "#A3E635"
  success: "#22C55E"
  hairline: "#2C2C34"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "10px"
  lg: "14px"
---

# DESIGN.md：DailyMove（暗黑螢光萊姆高燃脂訓練風）

## 1. Visual Theme & Atmosphere
如同 Apple Fitness+ 或 Nike Training 的高燃脂暗黑運動儀表板，螢光萊姆進度環在深黑面板上視覺衝擊力極強。

## 2. Color Palette & Roles (PyQt6 QSS / QPainter)
| Role | Token | Hex | 用途 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#111113` | 深曜石黑背景 |
| 卡片底色 | `surface` | `#1B1B1F` | 深炭卡片 |
| 主要文字 | `ink` | `#F4F4F5` | 高對比亮白大字時間 |
| 次要文字 | `muted` | `#A1A1AA` | 動作提示文字 |
| 主色 CTA | `primary` | `#A3E635` | 螢光萊姆進度環與主按鈕（配深字 `#111113`） |
| 細框線 | `hairline` | `#2C2C34` | 1px 深框線 |

## 3. PyQt6 QSS & Do's and Don'ts
- `#A3E635` 主按鈕上的文字**必須為 `#111113`**；計時器大數字必須清晰不閃爍。
````

</details>

---

## 🚀 階段一：初版生成 — Prompt 撰寫注意事項

### ✍️ 請學生依據以下注意事項，1 個 1 個自己寫出你的 Prompt：
1. **指定技術棧與雙合約檔**：明確要求讀取 `@PRD.md` 與選定的 `@DESIGN.md`，以 **Python PyQt6** 實作單檔 `dailymove_app.py`（視窗 `480×780`）。
2. **描述 `QStackedWidget` 兩頁切換**：第 1 頁為課表清單＋打卡週點，第 2 頁為專注倒數計時器畫面。
3. **點名自繪 `CircularTimerWidget(QWidget)`**：規定使用 `QPainter`（開啟 `Antialiasing` 與 `RoundCap` 圓角端點）繪製大圓形進度環，搭配 `QTimer` 真的能一秒一秒倒數！
4. **寫清楚自動化完成與達標狀態**：規定計時歸零或按「直接完成」後要自動幫該項目打勾、返回清單；當 4 項全完成時顯示慶祝卡片且連續天數從 6 跳成 7、今日圓點亮綠！
5. **強調進度條與按鈕 QSS 美化**：明確禁止出現預設藍色 `QProgressBar` 與系統灰按鈕。

<details>
<summary>💡 點此展開：階段一「參考 Prompt」（建議先依上方注意事項自己寫完再打開對照）</summary>

```text
請嚴格讀取 @PRD.md 與 @DESIGN.md，使用 Python PyQt6 結合 Vibe Coding 實作《日日動 DailyMove》桌面運動課表與打卡應用程式，存成單一可執行的 `dailymove_app.py`（預設視窗 480×780）。

請務必滿足以下要求：
1. 視覺與 QSS：開頭定義 `TOKENS` 字典對應 @DESIGN.md，使用完整 QSS 美化所有卡片（圓角 14px）、按鈕、`QCheckBox` 與 `QProgressBar`（禁止預設藍條）。
2. 雙頁架構（`QStackedWidget`）：
   - 第 1 頁【今日課表】：顯示「🔥 已連續打卡 6 天」與週一～週日 7 個圓點（前 6 天亮 primary 色，第 7 天預設未亮）、美型進度條（已完成 X/4 項）、3 套課表切換按鈕（久坐肩頸舒緩 / 15分鐘居家燃脂 / 睡前拉伸放鬆）及 4 張真實中文動作卡（含打勾框與「▶ 開始計時」鈕）。
   - 第 2 頁【專注計時器】：實作自訂 `CircularTimerWidget(QWidget)`，使用 `QPainter`（開啟 `Antialiasing` 與 `Qt.PenCapStyle.RoundCap`）繪製直徑約 220px 的圓形倒數進度環，中央顯示超大清晰倒數秒數（如 `02:00`），搭配 `QTimer` 真實倒數！
3. 互動閉環：倒數歸零（或點擊「直接完成此動作」）時自動勾選該動作並返回第 1 頁；4 項全勾選完成時，顯示「🎉 今日運動達標！」慶祝橫幅，連續天數跳為 7 天且第 7 個週點亮起 `success` 綠色。
4. 完成後在終端機確認語法可順利執行。
```

</details>

---

## 🔄 階段二：模擬提案後修改情境（Change Request 演練）

> **模擬會議回饋**：你在課堂上要 Demo 這個軟體給同學和老師看，但一個動作就要 2 分鐘，現場等不到計時歸零，同時希望畫面更細緻，因此提出 **3 項修改需求**：
> 1. **新增「演示快轉模式」開關**：在計時器畫面或頂部加一個小巧的 `⚡ 5 秒演示模式` 開關（Toggle / CheckBox），開啟後任何動作計時都直接從 `00:05` 開始倒數，方便 Demo 展示「倒數歸零 → 自動打勾 → 達標慶祝」的完整閉環！
> 2. **計時器中央增加脈絡標籤**：在 `CircularTimerWidget` 圓環中央的大數字上下，分別加上「動作名稱小標題」與「剩餘秒數」小標籤，讓畫面更有專注感。
> 3. **已完成卡片視覺降噪**：清單頁中已經打勾完成的動作卡，除了打勾外請讓標題加上刪除線並改用 `muted` 柔灰色顯示，讓還沒做的項目成為視覺焦點，並把變更寫入 `PRD.md` 與 `DESIGN.md`（含 `Changelog`）。

### ✍️ 提案後修改 Prompt 注意事項（請依序 1 個 1 個自己寫）：
1. **先改雙合約文件**：先要求 AI 更新 `@PRD.md`（補上 5 秒演示模式與已完成項目樣式）與 `@DESIGN.md`（補上已完成卡片文字降噪規則，寫入 `## Changelog`）。
2. **說明快轉模式邏輯**：清楚告訴 AI 開啟 `5 秒演示模式` 後按「▶ 開始計時」，起始總秒數直接設為 `5`（圓環也要從滿圈 5 秒平穩縮到 0 秒）。
3. **描述 `QPainter` 文字排版位置**：明確寫出動作名稱在上方、大字倒數在正中、`剩餘時間` 小字在下方。

<details>
<summary>💡 點此展開：階段二提案後修改「參考 Prompt」（建議先自己寫完再打開對照）</summary>

```text
為了方便現場 Demo 並提升閱讀專注感，請先同步更新規格文件，再局部修改 `dailymove_app.py`：

【修改需求】
1. 新增「⚡ 5 秒演示模式」`QCheckBox` 開關：開啟後點擊任何動作的「▶ 開始計時」，計時總長度皆改為 5 秒（`00:05`），方便 Demo 展示計時歸零後自動返回打勾與達標慶祝效果！
2. 強化 `CircularTimerWidget` 的 `QPainter` 中央排版：大倒數時間上方繪製目前動作名稱、下方繪製「剩餘專注時間」小標籤。
3. 優化已完成動作卡片視覺：已勾選完成的動作名稱自動套用刪除線（strikethrough）並轉為 @DESIGN.md 的 muted 顏色，讓未完成任務更突出。

請執行：
Step 1：更新 @PRD.md 加入 5 秒演示模式與已完成狀態視覺規格；更新 @DESIGN.md 補上已完成任務卡片樣式並於文末新增 `## Changelog` 記錄 v1.1 原因。
Step 2：修改 `dailymove_app.py` 完成上述更新並測試啟動無誤。
```

</details>

---

## ✅ 成果驗收檢核清單

- [ ] `QPainter` 圓形進度環是否平滑無鋸齒（`RoundCap`），且中央已清楚顯示動作名稱與剩餘秒數？
- [ ] 開啟「⚡ 5 秒演示模式」後啟動計時，能否在 5 秒歸零時自動打勾並跳回清單？
- [ ] 已完成的動作卡片文字是否已套用刪除線與柔灰降噪，未完成卡片更加醒目？
- [ ] 4 項全完成時是否立刻觸發「🎉 今日運動達標！」且連續天數亮燈 `+1`？
- [ ] `PRD.md` 與 `DESIGN.md`（含 `Changelog`）是否與目前程式完全一致？

---

[⬅️ 上一題：GreenPulse 綠脈動能源後台](./03_GreenPulse綠脈動_商辦即時用電與碳排監控後台.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [📋 返回範例庫總覽](../README.md)
