# 第三類：互動應用程式與儀表板（`DESIGN.md` × PyQt6 × Vibe Coding）🖥️

[⬅️ 上一類：多頁式品牌與服務網站](../02_多頁式品牌與服務網站/README.md) ｜ [🏠 返回範例庫總覽](../README.md)

多數人印象中的 Python **PyQt** 桌面軟體，總是灰底方框、預設系統字體、生硬的按鈕，看起來像 1995 年的舊系統——**那是因為沒有給 AI 一份明確的 `DESIGN.md`！**

只要把你在 [建立自己的 `DESIGN.md`](../../建立自己的DESIGN_md/README.md) 單元學到的色彩 Tokens、圓角、間距與狀態規則，結合 **PyQt6 的 QSS（Qt Style Sheets）** 與 **`QPainter` 抗鋸齒自繪元件**，再用 **Vibe Coding（Antigravity / Claude）** 開發，就能快速打造出媲美現代商業 SaaS 等級的美觀桌面應用程式！

---

## 🎨 PyQt6 × `DESIGN.md` 的三大美化控制原則

用 Vibe Coding 叫 AI 寫 PyQt6 介面時，Prompt 裡一定要鎖定以下三件事：

1. **從 `DESIGN.md` 轉出 Python `TOKENS` 字典與全域 QSS**
   * 不准讓 AI 在每個按鈕裡亂寫顏色！要求 AI 把 `DESIGN.md` 頂部的 YAML Tokens 轉成檔案開頭的 `TOKENS = {...}` 字典，並生成統一的全域 `QSS` 樣式表（指定 `QFrame#Card`、`QPushButton#Primary`、`QPushButton#Secondary`、`Hover` / `Pressed` / `Disabled` 狀態）。
2. **用 `QPainter` 自繪圖表與進度環（開啟 `Antialiasing` 抗鋸齒）**
   * 數據圓餅圖、趨勢折線圖、運動倒數進度環，直接請 AI 用 `QPainter` 搭配 `QPainter.RenderHint.Antialiasing` 依 `DESIGN.md` 主色自繪，就能達到高解析度、無鋸齒、不依賴厚重外掛的現代視覺質感。
3. **無縫式介面與繁體中文字體**
   * 利用 `QStackedWidget` 切換分頁視圖（無需一直開關新視窗），利用無系統邊框或圓角美化的 `QDialog` 實作客製化點餐與新增項目 Modal；字體明確指定 `"PingFang TC", "Microsoft JhengHei", "Noto Sans TC", sans-serif`（Windows/macOS 皆美觀）。

---

## 🛠️ 本機快速啟動環境（30 秒安裝）

在 Antigravity 終端機或你的 Python 虛擬環境執行：

```bash
pip install PyQt6
# 若使用 uv：uv add PyQt6
```

請 AI 生成完單檔程式碼（例如 `app.py`）後，直接執行：

```bash
python app.py
```

---

## 📂 本類別 4 個 PyQt6 × Vibe Coding 實戰範例

| 編號 | 獨立範例檔案 | 視窗規格與風格 | 必練 PyQt6 美化與互動重點 |
| :---: | :--- | :--- | :--- |
| **09** | [《好食光 POS》餐廳觸控點餐與客製化結帳系統](./01_好食光POS_餐廳觸控點餐與客製化結帳系統.md) | `1280×800` 暖色開胃雙欄桌面 POS | 分類切換按鈕、格狀餐點卡、`QDialog` 客製加料彈窗、右側結帳明細連動 |
| **10** | [《SubTrack 訂閱管家》個人每月扣款追蹤儀表板](./02_SubTrack訂閱管家_個人每月扣款追蹤儀表板.md) | `1280×820` 深色 Fintech 儀表板 | 動態 KPI 卡片、`QPainter` 自繪環圈圖、美化 `QTableWidget` 與新增訂閱彈窗 |
| **11** | [《GreenPulse 綠脈動》商辦即時用電與碳排監控後台](./03_GreenPulse綠脈動_商辦即時用電與碳排監控後台.md) | `1360×860` 冷靜工業控制室後台 | 深色左側導覽＋`QStackedWidget`、`QPainter` 折線圖含警戒線、異常排查側欄 |
| **12** | [《日日動 DailyMove》居家運動課表與習慣打卡應用](./04_日日動DailyMove_居家運動課表與習慣打卡應用.md) | `480×780` 活力極簡桌面小工具 | 課表切換、`QTimer` + `QPainter` 圓形倒數進度環、連續打卡週進度圓點 |

---

[⬅️ 上一類：多頁式品牌與服務網站](../02_多頁式品牌與服務網站/README.md) ｜ [🏠 返回範例庫總覽](../README.md)
