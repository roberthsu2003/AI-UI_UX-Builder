# 第三類：互動應用程式與儀表板（`DESIGN.md` × PyQt6 × Vibe Coding）🖥️

[⬅️ 上一類：多頁式品牌與服務網站](../02_多頁式品牌與服務網站/README.md) ｜ [🏠 返回範例庫總覽](../README.md)

多數人印象中的 Python **PyQt** 桌面軟體，總是灰底方框、預設系統字體、生硬的按鈕，看起來像 1995 年的舊系統——**那是因為沒有給 AI 一份明確的 `DESIGN.md` 與 `PRD.md`！**

只要把 `DESIGN.md` 的色彩 Tokens、圓角、間距與狀態規則，結合 **PyQt6 的 QSS（Qt Style Sheets）** 與 **`QPainter` 抗鋸齒自繪元件**，再用 **Vibe Coding（Antigravity / Claude）** 開發，就能打造出媲美現代商業軟體的美觀桌面應用程式！

---

## 🎨 PyQt6 × `DESIGN.md` 的三大美化控制原則

1. **從 `DESIGN.md` 轉出 Python `TOKENS` 字典與全域 QSS**
   * 要求 AI 把 `DESIGN.md` 頂部 YAML Tokens 轉成 Python `TOKENS = {...}` 常數，並生成統一的全域 `QSS` 樣式表（涵蓋 `QFrame#Card`、`QPushButton#Primary`、`Hover / Pressed / Disabled`）。
2. **用 `QPainter` 自繪圖表與進度環（開啟 `Antialiasing` 抗鋸齒）**
   * 環圈圖、趨勢折線圖、圓形倒數進度環皆用 `QPainter` 依 `DESIGN.md` 主色自繪，視覺銳利流暢且不依賴厚重外掛。
3. **無縫式介面與繁體中文字體**
   * 利用 `QStackedWidget` 切換頁面視圖、自訂圓角 `QDialog` 實作彈窗互動；字體明確指定 `"PingFang TC", "Microsoft JhengHei", "Noto Sans TC", sans-serif`。

---

## 🛠️ 本機快速啟動環境（30 秒安裝）

```bash
pip install PyQt6
# 完成程式碼後啟動：python app.py
```

---

## 📂 本類別 4 個 PyQt6 × Vibe Coding 實戰範例

每個範例皆內附 **可直接複製的 `PRD.md`**、**3 種風格 `DESIGN.md`**、**初版與提案修改的注意事項 ＋ `<details>` 參考 Prompt**：

| 編號 | 獨立範例檔案 | 3 種風格選擇 | 核心功能與提案修改演練 |
| :---: | :--- | :--- | :--- |
| **09** | [《好食光 POS》餐廳觸控點餐與客製化結帳系統](./01_好食光POS_餐廳觸控點餐與客製化結帳系統.md) | 暖白橘紅 ／ 深夜居酒屋 ／ 清新抹茶白 | 雙欄 POS＋客製化 `QDialog` ＋ 提案加 10% 服務費開關 |
| **10** | [《SubTrack 訂閱管家》個人每月扣款追蹤儀表板](./02_SubTrack訂閱管家_個人每月扣款追蹤儀表板.md) | 深曜石藍 ／ 北歐淺灰 ／ 暗夜翡翠綠 | `QPainter` 環圈圖＋即時 KPI ＋ 提案加月預算警戒條 |
| **11** | [《GreenPulse 綠脈動》商辦即時用電與碳排監控後台](./03_GreenPulse綠脈動_商辦即時用電與碳排監控後台.md) | 深導覽冷灰 ／ 全深色戰情 ／ 極簡白青綠 | `QPainter` 折線圖＋警戒線 ＋ 提案加懸浮 Tooltip 與派工備註 |
| **12** | [《日日動 DailyMove》居家運動課表與習慣打卡應用](./04_日日動DailyMove_居家運動課表與習慣打卡應用.md) | 活力珊瑚橘 ／ 柔和薄荷綠 ／ 暗黑萊姆綠 | `QTimer`＋`QPainter` 進度環 ＋ 提案加 5 秒演示模式開關 |

---

[⬅️ 上一類：多頁式品牌與服務網站](../02_多頁式品牌與服務網站/README.md) ｜ [🏠 返回範例庫總覽](../README.md)
