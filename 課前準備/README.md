# 課前準備：帳號、軟體與練習環境 🎒

本課程要帶你成為一名專注在網站設計的 **[AI Product Builder](../什麼是AI_Product_Builder/README.md)**：從「看懂網站」一路走到「把網站部署上線」，每個單元都要親手做。前半段只需要瀏覽器和 AI 帳號，後半段會用到 Claude Code、Figma 與 GitHub。本頁整理了課前要準備的帳號、軟體與練習資料夾。


## 🔑 帳號清單

| 帳號 | 用途 | 費用 |
| :--- | :--- | :--- |
| **Google 帳號** | Gemini、Google Stitch、Antigravity | 免費 |
| **Claude 帳號** | Claude.ai、Claude Artifacts（含 Design 模式）、Skill、Claude Code | 免費版即可使用 Artifacts 內的 Design 模式進行網頁設計與預覽；Claude Code 需付費方案 |
| **Figma 帳號** | 設計稿、MCP 連線 | 免費版可練基本功；MCP 寫入功能建議申請教育方案或付費方案 |
| **GitHub 帳號** | 存放程式碼、GitHub Pages 部署 | 免費 |
| **Relume 帳號**（選用） | 網站地圖與線框圖 | 有免費方案，限制較多 |
| **Maze 帳號**（選用） | 遠端易用性測試 | 有免費方案，每月測試數有限 |
| **Microsoft Clarity**（選用） | 網站行為分析與熱點圖 | 免費 |

---

## 🔤 繁體中文 Google Fonts 與 Google Icons（Material Symbols）一致性設定

許多學員用 AI 生成繁體中文網頁或桌面軟體時，常發現「字體變成醜醜的系統新細明體／細明體」或「按鈕上全是一堆不整齊的 Emoji（如 🔥、🚀）」。

### 💡 先搞懂：需要安裝字型，還是在 `AGENTS.md` 設定？

| 開發目標 | 需要安裝字型到電腦嗎？ | 需要在 `AGENTS.md` 設定嗎？ | 原因說明 |
| :--- | :---: | :---: | :--- |
| **網頁／Landing Page／React 網站** | ❌ **不需要** | ✅ **強烈建議** | 網頁是透過瀏覽器從 Google CDN 即時下載字型與圖示，只要在 `AGENTS.md` 規定 AI 在 `<head>` 自動引入 `<link>`，任何人打開網址字體都一致 |
| **PyQt6 桌面應用程式／Figma 桌面版** | ✅ **建議安裝** | ✅ **強烈建議** | PyQt6 桌面軟體是讀取「電腦本機安裝的字型」；先裝好本機字型，再透過 `AGENTS.md` 規定 QSS 優先呼叫 `Noto Sans TC` 與向量 SVG 圖示 |

---

### 📦 步驟一：本機安裝標準繁體中文字型（做 PyQt6 / Figma 必備）

建議學員在課前下載並安裝以下三款免費開源的 Google Fonts（點擊「Download family」解壓縮後，全選字型檔右鍵「安裝」即可）：

1. **[Noto Sans TC（思源黑體）](https://fonts.google.com/noto/specimen/Noto+Sans+TC)** — 介面、按鈕、內文與表格的標準無襯線字體（必裝）。
2. **[Noto Serif TC（思源宋體）](https://fonts.google.com/noto/specimen/Noto+Serif+TC)** — 品牌故事、編輯雜誌風與人文標題的標準襯線字體（選裝／推薦）。
3. **[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)** — 儀表板金額、時間與倒數計時器專用的等寬數字字體（推薦）。

---

### 🤖 步驟二：在專案根目錄建立 `AGENTS.md`（讓 AI 自動遵守）

當你使用 **Antigravity** 或 **Claude Code** 開啟專案資料夾時，AI 會自動讀取專案根目錄的 **`AGENTS.md`**。
把字型與 Google Icons 的技術規範寫進 `AGENTS.md`，以後不管你開幾次新對話，AI 都會自動套用，不用每次在 Prompt 重覆交代！

> [!TIP]
> **`AGENTS.md` 與 `DESIGN.md` 的分工**：
> * **`AGENTS.md`**：規定「技術實作紀律」（例如：必載 Google Fonts CDN、必用 Google Icons 取代 Emoji、HTML/PyQt 寫法規範）。
> * **`DESIGN.md`**：規定「這個專案的長相」（例如：主色是木質棕 `#8B5E3C` 還是森綠 `#1B5E3A`、圓角幾 px）。

#### 📋 可直接複製的 `AGENTS.md` 範本（請複製存成專案根目錄的 `AGENTS.md`）

````markdown
# AGENTS.md — 繁體中文設計系統與圖示開發規範

本專案在生成任何網頁原型或桌面應用程式介面時，**必須嚴格遵守以下字型與圖示一致性規範**：

## 1. 網頁端（HTML / Tailwind / React）強制規範

### A. 必須在 `<head>` 引入 Google Fonts 與 Google Icons（Material Symbols）
生成任何 HTML 頁面時，必須在 `<head>` 加入以下 CDN `<link>`（支援繁體中文黑體、宋體、等寬數字與 Google 最新向量圖示庫）：

```html
<!-- Google Fonts：繁體中文思源黑體 / 思源宋體 / JetBrains Mono -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;600;700&family=Noto+Serif+TC:wght@500;600;700&display=swap"
  rel="stylesheet"
/>

<!-- Google Icons：Material Symbols Outlined（可變圖示字型） -->
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  rel="stylesheet"
/>
```

### B. 圖示使用規定（禁止用 Emoji 充當 UI 圖示）
- 導覽列、按鈕、搜尋框、關閉按鈕、狀態標籤**一律使用 Google Material Symbols**，禁止使用 Emoji（如 🔍、📅、⚙️、🛒）當作正式介面圖示。
- 標準 HTML 寫法與對齊 CSS：
  ```html
  <span class="material-symbols-outlined">calendar_month</span>
  ```
  ```css
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    font-size: 20px;
    vertical-align: middle;
    line-height: 1;
  }
  ```
- 若需切換為「已收藏 / 已選中」實心狀態，將 `'FILL'` 設為 `1`。

### C. 字體套用規則
- 預設介面與內文：`font-family: 'Noto Sans TC', sans-serif;`
- 雜誌風／故事性大標題（依 `DESIGN.md` 指定）：`font-family: 'Noto Serif TC', serif;`
- 價格、電量、倒數時間數字：`font-family: 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums;`

---

## 2. 桌面應用程式端（PyQt6）強制規範

- **字體優先順序**：在全局 QSS 中一律設定 `font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;`（確保已安裝 Google Fonts 思源黑體時能優先啟用，跨 Windows/macOS 維持一致）。
- **圖示處理**：PyQt6 離線桌面視窗無法直接使用網頁 CSS `<link>`，請使用 `QIcon` 載入標準的 **Google Material Symbols SVG**（或以內嵌精簡 SVG 字串透過 `QSvgRenderer` / `QPainter` 繪製向量圖示），禁止使用會因作業系統不同而變形的 Emoji 當作按鈕圖示。
````

---

[⬅️ 返回主目錄](../README.md)
