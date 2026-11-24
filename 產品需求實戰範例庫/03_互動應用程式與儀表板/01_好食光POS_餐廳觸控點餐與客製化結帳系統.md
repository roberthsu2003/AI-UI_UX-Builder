# 範例 09：《好食光 POS》餐廳觸控點餐與客製化結帳系統 🍜

[⬅️ 上一類：沐光美學牙醫診所預約網](../02_多頁式品牌與服務網站/04_沐光美學牙醫診所_安心看診指南與初診預約網.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [➡️ 下一題：SubTrack 訂閱管家儀表板](./02_SubTrack訂閱管家_個人每月扣款追蹤儀表板.md)

---

## 📋 專案基本定位

| 項目 | 內容規格 |
| :--- | :--- |
| **主題名稱** | 《好食光 POS》餐廳內用桌邊／櫃台觸控點餐、客製化加料與出單系統 |
| **介面類型** | `互動應用程式（PyQt6 桌面／觸控 POS 應用程式，建議視窗 1280×800）` |
| **目標受眾 (TA)** | 餐廳外場店員與現場自助點餐客人（需高辨識度大按鈕、無卡頓加料與明確出單回饋） |
| **核心技術組合** | `DESIGN.md` → `TOKENS` + 全域 `QSS` 樣式表 + `QDialog` 客製化彈窗 |
| **建議專案資料夾** | `goodtime-pos/`（內含 `PRD.md`、`DESIGN.md`、`pos_app.py`） |

---

## 📄 可直接複製的 `PRD.md`（請複製存成專案中的 `PRD.md`）

````markdown
# PRD：好食光 POS — 餐廳觸控點餐與客製化結帳系統（PyQt6）

## 1. 專案背景與核心痛點
傳統餐飲 POS 桌面軟體常呈現 90 年代灰色方框表單，字體小又擁擠、加料常按錯。本專案利用 PyQt6 搭配 QSS 設計系統，打造如現代平板 POS 般流暢美觀的桌面觸控點餐系統。

## 2. PyQt6 視窗架構與互動規格（預設視窗 1280×800）
整體採 **左右雙欄佈局（左側 65% 點餐區 ＋ 右側 35% 結帳明細面板）**：
1. **頂部狀態列**：左側餐廳名 `好食光食堂 POS`，中間醒目膠囊標籤 `桌號 A05・內用 2 位`，右側「已出單紀錄」按鈕（點擊開啟歷史訂單彈窗）。
2. **分類切換列 ＋ `QScrollArea` 格狀餐點卡**：
   * 分類按鈕：`全部`、`主廚招牌`、`暖心飯麵`、`台味小菜`、`手作茶飲`。
   * 卡片顯示菜名、標籤、單價與 `+ 選擇` 按鈕。
3. **客製化加料彈窗（自訂圓角 `QDialog`）**：
   * 點擊卡片彈出客製化視窗：單選（份量 `正常` / `加大 +$30`、辣度/甜度）、複選加料（`溏心蛋 +$25`、`炙燒起司 +$20`、`加白飯 +$15`）、備註 `QLineEdit`、數量 `+ / -`。
   * 底部確認按鈕即時計算這筆單價（例如 `加入訂單・NT$ 215`）。
4. **右側常駐訂單明細與結帳區**：
   * 列出已選餐點、客製化備註小字、數量加減與移除按鈕。
   * 底部顯示總金額與滿版「送出訂單至廚房」主按鈕，送出後清空明細、存入已出單紀錄並跳出「✅ 廚房已接單・單號 #018」提示框。

## 3. 真實感繁體中文菜單素材（8 道）
1. 主廚私房紅燒牛肉麵（主廚招牌）｜`NT$ 220`｜人氣必點
2. 剝皮辣椒雞湯烏龍麵（主廚招牌）｜`NT$ 210`｜微辣暖胃
3. 古早味手切滷肉飯套餐（暖心飯麵）｜`NT$ 145`｜附溏心蛋
4. 松露奶油野菇燉飯（暖心飯麵）｜`NT$ 260`｜蛋奶素可
5. 酥炸金沙豆腐（台味小菜）｜`NT$ 110`｜外酥內嫩
6. 胡麻涼拌龍鬚菜（台味小菜）｜`NT$ 85`｜清爽開胃
7. 日月潭紅玉冷泡茶（手作茶飲）｜`NT$ 75`｜無糖回甘
8. 黑糖珍珠鮮奶（手作茶飲）｜`NT$ 95`｜少冰手炒
````

---

## 🎨 提供 3 種不同風格的 `DESIGN.md`（請任選 1 種複製存成 `DESIGN.md`）

<details>
<summary>🎨 風格一：暖白開胃橘紅現代 POS 風（Appetizing Coral POS）— 推薦首選</summary>

````markdown
---
style: "暖白開胃橘紅現代 POS 風"
colors:
  canvas: "#FAF9F7"
  surface: "#FFFFFF"
  ink: "#1E1E1E"
  muted: "#666666"
  primary: "#E0522C"
  primary_hover: "#C74320"
  accent: "#FFF1EC"
  hairline: "#E7E5E4"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "8px"
  lg: "14px"
---

# DESIGN.md：好食光 POS（暖白開胃橘紅風）

## 1. Visual Theme & Atmosphere
潔淨暖白底色搭配開胃暖橘紅主操作按鈕，像 iPad 現代精品餐廳點餐系統般俐落好按。

## 2. Color Palette & Roles (PyQt6 QSS)
| Role | Token | Hex | PyQt6 元件對應 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#FAF9F7` | `QMainWindow` 底色 |
| 卡片底色 | `surface` | `#FFFFFF` | `QFrame#MenuCard`、右側結帳面板、`QDialog` |
| 主要文字 | `ink` | `#1E1E1E` | 菜名與結帳總額 |
| 次要文字 | `muted` | `#666666` | 客製化明細與小標籤 |
| 主色 CTA | `primary` | `#E0522C` | 選中分類、「送出至廚房」按鈕、桌號膠囊 |
| 強調淺底 | `accent` | `#FFF1EC` | 推薦標籤底色 |
| 細框線 | `hairline` | `#E7E5E4` | `1px solid` 卡片與面板邊線 |

## 3. PyQt6 QSS & Do's and Don'ts
- 按鈕高度至少 `40px`、卡片圓角 `14px`、內距 `18px`。
- **禁止出現 Qt 原生灰色系統按鈕與預設捲軸外觀**，需以 QSS 全面美化。
````

</details>

<details>
<summary>🎨 風格二：深夜居酒屋深色木質風（Izakaya Dark Amber）— 夜間餐酒館路線</summary>

````markdown
---
style: "深夜居酒屋深色木質風"
colors:
  canvas: "#161412"
  surface: "#221E1B"
  ink: "#F5EFE6"
  muted: "#A69B8F"
  primary: "#E08B3C"
  primary_hover: "#C9782D"
  accent: "#332920"
  hairline: "#362F2A"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "8px"
  lg: "12px"
---

# DESIGN.md：好食光 POS（深夜居酒屋深色木質風）

## 1. Visual Theme & Atmosphere
專為燈光昏暗的餐酒館、串燒居酒屋與深夜食堂設計，低眩光深黑木色保護店員雙眼，搭配暖琥珀金主按鈕。

## 2. Color Palette & Roles (PyQt6 QSS)
| Role | Token | Hex | PyQt6 元件對應 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#161412` | 深炭木底色 |
| 卡片底色 | `surface` | `#221E1B` | 卡片與明細面板底色 |
| 主要文字 | `ink` | `#F5EFE6` | 暖白文字 |
| 次要文字 | `muted` | `#A69B8F` | 輔助說明 |
| 主色 CTA | `primary` | `#E08B3C` | 暖琥珀金主按鈕（配深字 `#161412`） |
| 細框線 | `hairline` | `#362F2A` | 深木細邊框 |

## 3. PyQt6 QSS & Do's and Don'ts
- 琥珀金主按鈕上必須用深色字 `#161412`；客製化 `QDialog` 同樣套用深色面板。
````

</details>

<details>
<summary>🎨 風格三：清新抹茶白簡餐咖啡風（Matcha Cafe Minimal）— 早午餐輕食路線</summary>

````markdown
---
style: "清新抹茶白簡餐咖啡風"
colors:
  canvas: "#F4F6F3"
  surface: "#FFFFFF"
  ink: "#1E2620"
  muted: "#5E6B61"
  primary: "#3D6B4F"
  primary_hover: "#2E523C"
  accent: "#E8F0EA"
  hairline: "#DCE3DD"
typography:
  sans: "'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif"
radius:
  md: "10px"
  lg: "16px"
---

# DESIGN.md：好食光 POS（清新抹茶白簡餐咖啡風）

## 1. Visual Theme & Atmosphere
適合早午餐店、輕食沙拉吧與精品茶飲店，清爽抹茶綠搭配純白大圓角卡片，明亮潔淨。

## 2. Color Palette & Roles (PyQt6 QSS)
| Role | Token | Hex | PyQt6 元件對應 |
| :--- | :--- | :--- | :--- |
| 主背景 | `canvas` | `#F4F6F3` | 霧灰綠淺底 |
| 卡片底色 | `surface` | `#FFFFFF` | 卡片底色 |
| 主要文字 | `ink` | `#1E2620` | 深墨綠黑文字 |
| 次要文字 | `muted` | `#5E6B61` | 輔助文字 |
| 主色 CTA | `primary` | `#3D6B4F` | 抹茶森綠按鈕 |
| 強調淺底 | `accent` | `#E8F0EA` | 標籤與選中淺綠 |
| 細框線 | `hairline` | `#DCE3DD` | 1px 細線 |

## 3. PyQt6 QSS & Do's and Don'ts
- 全面套用圓角 `10px–16px` 與清晰 padding；禁止系統原生灰色邊框。
````

</details>

---

## 🚀 階段一：初版生成 — Prompt 撰寫注意事項

### ✍️ 請學生依據以下注意事項，1 個 1 個自己寫出你的 Prompt：
1. **指定技術棧與雙合約檔**：明確寫出讀取 `@PRD.md` 與選定的 `@DESIGN.md`，使用 **Python PyQt6** 寫成單一可直接執行的 `pos_app.py`。
2. **強制把 `DESIGN.md` 轉成 `TOKENS` + 全域 QSS**：要求 AI 在程式最上方建立 `TOKENS` 字典，並撰寫完整的 QSS 美化 `QMainWindow`、`QFrame`、`QPushButton`、`QScrollArea` 捲軸、`QCheckBox`/`QRadioButton` 與 `QDialog`。
3. **寫清楚左右雙欄比例與視窗尺寸**：要求預設視窗 `1280×800`，左側 65%（頂部分類＋格狀餐點卡），右側 35%（訂單明細＋總金額＋送出鈕）。
4. **描述客製化彈窗（`QDialog`）即時運算**：點餐點跳出彈窗後，勾選加料或切換份量時，按鈕上的價格文字必須即時連動加減！
5. **要求終端機自我啟動檢查**：生成後請 AI 幫忙檢查語法並測試啟動（或確認 `PyQt6` import 與執行無報錯）。

<details>
<summary>💡 點此展開：階段一「參考 Prompt」（建議先依上方注意事項自己寫完再打開對照）</summary>

```text
請嚴格讀取 @PRD.md 與 @DESIGN.md，使用 Python PyQt6 結合 Vibe Coding 為「好食光 POS」開發美觀的桌面點餐系統，存成單一檔案 `pos_app.py`（預設視窗 1280×800）。

請務必滿足以下要求：
1. 視覺與 QSS 轉譯：在程式開頭建立 `TOKENS = {...}` 字典對應 @DESIGN.md 所有色碼，並套用完整的全域 QSS 樣式表，徹底美化所有卡片（圓角＋1px hairline）、按鈕（Hover/Pressed 狀態）、美型細捲軸、`QLineEdit` 與 `QCheckBox/QRadioButton`，禁止任何原生灰色系統樣式。
2. 左右雙欄架構：左側（65%）含頂部桌號列「桌號 A05・內用 2 位」、分類切換按鈕列與 QScrollArea 格狀呈現 @PRD.md 的 8 道繁體中文菜單；右側（35%）為常駐訂單明細與結帳總額面板。
3. 客製化加料 QDialog：點擊任一餐點卡片彈出圓角 QDialog，提供份量單選（正常 / 加大 +$30）、複選加料（溏心蛋 +$25、起司 +$20、加白飯 +$15）、備註欄與數量調整，下方確認按鈕即時計算這筆小計金額。
4. 出單閉環：按下「送出訂單至廚房」後存入歷史紀錄並彈出確認框（含單號），點擊頂部「已出單紀錄」可查看剛才送出的訂單。
5. 完成後幫我檢查語法是否可順利啟動執行。
```

</details>

---

## 🔄 階段二：模擬提案後修改情境（Change Request 演練）

> **模擬會議回饋**：餐廳老闆試點完你的 PyQt6 POS 程式後，發現櫃台結帳時還有兩個現場剛性需求，提出 **3 項修改**：
> 1. **新增「10% 內用服務費」切換開關**：餐廳週末要收 10% 服務費、平日不收，希望右側結帳區底部多一個「**計入 10% 內用服務費**」的 `QCheckBox` 開關，勾選後要拆開顯示「餐點小計、10% 服務費、應付總金額」！
> 2. **快速清空購物車鈕**：有時候客人點錯整桌要重來，右側明細標題旁邊需要一顆低調的「🗑️ 清空」按鈕（並加入防呆確認）。
> 3. **視覺放大對焦**：老闆覺得結帳區的「應付總金額」字太小，請放大到 `24px` 粗體並用 `@DESIGN.md` 的 `primary` 主色強調，同時把這幾項變更更新進 `PRD.md` 與 `DESIGN.md`（含 `Changelog`）。

### ✍️ 提案後修改 Prompt 注意事項（請依序 1 個 1 個自己寫）：
1. **先更新雙合約檔案**：先要求 AI 更新 `@PRD.md`（補上 10% 服務費計算規則與清空防呆按鈕）與 `@DESIGN.md`（補上結帳總金額 `24px` 強調規格，並在底部寫入 `## Changelog`）。
2. **精準描述 PyQt 元件與計算公式**：說明在右側結帳區加入 `QCheckBox`，勾選時 `服務費 = round(小計 * 0.1)`、`總金額 = 小計 + 服務費`，且加入新菜品或刪除品項時也要重算。
3. **保護既有 `TOKENS` 與主題風格**：不要覆寫原本你選定的深色或暖白 QSS 主題。

<details>
<summary>💡 點此展開：階段二提案後修改「參考 Prompt」（建議先自己寫完再打開對照）</summary>

```text
餐廳老闆試用 `pos_app.py` 後提出 3 項調整需求，請先同步規格文件，再局部修改程式碼：

【修改需求】
1. 右側結帳區新增「計入 10% 內用服務費」`QCheckBox`：勾選時拆行顯示「餐點小計」、「服務費 (10%)」與「應付總金額」，且加減菜品時自動重算（四捨五入取整數）。
2. 右側明細標題列右側加上低調外框的「清空」按鈕，點擊時彈出 `QMessageBox` 二次確認後才清空購物車。
3. 將「應付總金額」數字放大至 24px 粗體，並套用 @DESIGN.md 的 primary 主色強調。

請執行：
Step 1：更新 @PRD.md 加入服務費邏輯與清空確認規格；更新 @DESIGN.md 補上結帳大數字規格並在文末新增 `## Changelog` 記錄 v1.1 原因。
Step 2：修改 `pos_app.py` 實作以上功能並測試執行無報錯。
```

</details>

---

## ✅ 成果驗收檢核清單

- [ ] 啟動 `python pos_app.py` 畫面是否符合所選 `DESIGN.md` 配色與 QSS 圓角質感？
- [ ] 點餐點彈出的客製化 `QDialog` 是否已美化且即時算出正確加料價格？
- [ ] 勾選「計入 10% 內用服務費」後，小計、服務費與總金額是否拆開且即時重算？
- [ ] 點擊「清空」按鈕時是否有二次確認防呆，不會一按就誤刪全桌餐點？
- [ ] `PRD.md` 與 `DESIGN.md`（含 `Changelog`）是否與程式完全一致？

---

[⬅️ 上一類：沐光美學牙醫診所預約網](../02_多頁式品牌與服務網站/04_沐光美學牙醫診所_安心看診指南與初診預約網.md) ｜ [🏠 返回本類別目錄](./README.md) ｜ [➡️ 下一題：SubTrack 訂閱管家儀表板](./02_SubTrack訂閱管家_個人每月扣款追蹤儀表板.md)
