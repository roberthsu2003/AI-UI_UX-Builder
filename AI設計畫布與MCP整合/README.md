# AI 設計畫布與 MCP 整合：Figma、pen.dev、Google Stitch 與 Claude Design 🎨🤖

> 📅 **最後更新：2026-11**　｜　本單元涉及的工具介面、方案與額度變動快，若畫面與講義不符，請以官方文件為準。

在 [建立自己的 `DESIGN.md`](../建立自己的DESIGN_md/README.md) 單元中，我們用**文字**定義了設計規範；但 UI/UX 工作真正的主戰場仍然是**視覺畫布**——版面要用眼睛調、元件要用手擺、細節要靠設計判斷。

本單元整合業界與 AI 時代最重要的四大設計畫布與原型工具——**Figma**、**pen.dev（Pencil）**、**Google Stitch** 與 **Claude Design**，並介紹如何透過 **MCP（Model Context Protocol）** 讓 AI 直接讀寫設計畫布，實現從文字規範到視覺定稿再到前端網頁的閉環工作流：

```text
DESIGN.md（文字規範）
   │  ① AI 探索與寫入：Stitch 氛圍發散 ／ Claude Design 區塊微調 ／ MCP 寫入畫布
   ▼
設計畫布（Figma 或 pen.dev — 人來做設計判斷：調版面、修層級、定稿） ◀── UI/UX 的主角在這裡
   │  ② AI 讀取畫布（MCP）：依設計稿生成 HTML / React 原型
   ▼
網頁原型（可點擊、可交付、可上線）
```

> [!IMPORTANT]
> **本單元的定位：UI/UX 為主，AI 為輔。**
> AI 負責「發散提案」與「搬磚」——快速生成多套風格、把色碼建成 Variables、把設計稿轉成程式碼；
> **你負責「判斷」**——資訊層級對不對、留白夠不夠、使用者會不會迷路。AI 畫出來的初稿永遠需要人來修。

---

## 🧭 四大 AI 視覺設計與畫布工具定位比較表

| 工具 | 核心定位 | 檔案／載體格式 | MCP 支援度 | 免費／付費門檻 | 最適合的使用時機 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Figma（＋ Figma MCP）** | 業界標準 UI/UX 協作設計工具與設計系統（Variables / Auto Layout / Components） | 雲端 `.fig` 設計檔 | ✅ 遠端 MCP (`https://mcp.figma.com/mcp`) 支援讀寫 | 免費版可練基本功；教育方案免費解鎖 MCP 寫入與高閱讀額度 | **團隊協作、設計系統定稿、多頁完整設計稿與工程交付** |
| **pen.dev（Pencil）** | AI 原生「Design-in-Code」無限向量畫布，直接住在開發環境裡 | 開源 `.pen`（JSON），可隨 Git 進行版本控制 | ✅ 內建本地 MCP Server，支援多 AI Agent 雙向讀寫畫布 | 提供桌面版與 IDE 擴充功能（支援免費試用與個人開發） | **獨立開發者、Design Engineer、想在同一個 Git 專案邊畫邊寫程式** |
| **Google Stitch** | Google 推出的 AI 氛圍設計無限畫布，擅長快速發散視覺風格與串接流程 | 雲端無限畫布，支援匯出 `DESIGN.md` 與 HTML/Figma | —（以匯出 `DESIGN.md` 與跨工具匯入為主） | Google 帳號免費使用 | **沒有設計稿的開局階段、快速探索多種氛圍、產生 `DESIGN.md`** |
| **Claude Design**（Artifacts） | 對話式 UI 生成與單頁結構／文案微調工具 | 對話右側即時可互動預覽，匯出 HTML / SVG | ✅ 可搭配 Claude.ai 連接器生態系連動 | 免費版 Claude 即可使用 Artifacts 內的 Design 模式 | **單頁結構重構、真實中文文案替換、快速產出單一元件或頁面預覽** |

---

## 💡 什麼是 MCP？為什麼要用它操控設計畫布？

**MCP** 是讓 AI 連接外部工具的標準介面，可以把它想成「AI 的 USB 插槽」。無論是 **Figma MCP Server** 還是 **pen.dev 內建的 MCP**，插上之後 AI 就能：

| 方向 | AI 能做什麼 | 代表工具（以 Figma MCP 為例） |
| :--- | :--- | :--- |
| **讀取畫布 → 程式** | 讀出 Frame 的結構、色彩變數、截圖，並轉成 HTML / CSS / React | `get_design_context`、`get_variable_defs`、`get_screenshot` |
| **寫入 文字／程式 → 畫布** | 在畫布上建立 Frame、Auto Layout、元件、Variables | `use_figma`（Beta）、`create_new_file`（pen.dev 亦有對應畫布寫入指令） |

過去要「截圖丟給 AI」或「手動對照色碼」，現在 AI 可以直接讀到**精確的圖層、間距與變數數值**。

---

## 📖 本單元學習目錄

### 1. [第一章 🔑：帳號方案申請與 MCP 連線設定](./01_帳號方案與MCP連線設定.md)
* **學什麼**：學生如何**免費**取得 Figma 教育方案、各方案 MCP 額度差異、在 Claude.ai / ChatGPT / Antigravity 連接 Figma MCP，以及遠端 MCP 的網址驅動機制。
* **實作**：申請教育方案、完成 MCP 連線並用 `whoami` 驗證帳號方案。

### 2. [第二章 🧱：AI 看得懂的 Figma 基本功](./02_AI看得懂的Figma基本功.md)
* **學什麼**：Frame、Auto Layout、圖層命名、Variables、Components & Variants、Constraints——以及**為什麼這些會直接影響 AI 讀稿的品質**。
* **實作**：手動完成 6 個小練習，最後用 MCP 對照「亂畫的稿」與「規範的稿」轉出來的程式碼差多少。

### 3. [第三章 🔁：實戰 — DESIGN.md → Figma → 網頁原型](./03_實戰_DESIGN_md到Figma到網頁.md)
* **學什麼**：串接上一單元的 `DESIGN.md`，讓 AI 在 Figma 建立設計系統與首頁初稿，再由你調整定稿，最後讓 AI 讀稿生成網頁。
* **實作**：完整工作坊 3-A ～ 3-E 與作業繳交。

### 4. [第四章 🛠️：pen.dev、Google Stitch 與 Claude Design 實戰與跨工具協作](./04_pen.dev與Google_Stitch與Claude_Design實戰.md)
* **學什麼**：深入認識 **pen.dev（Pencil）** 的 Design-in-Code 與本地 MCP 玩法、**Google Stitch** 氛圍畫布、**Claude Design** 對話微調，以及如何把這四大工具串成適合自己的黃金工作流。
* **實作**：體驗用 Stitch 發散氛圍、用 Claude Design 微調區塊、在 pen.dev 建立 `.pen` 畫布並透過 MCP 同步產出網頁。

---

## 🛠️ 本單元實作一覽

| 編號 | 實作內容 | 需要 Figma 教育方案？ | 時間 |
| :--- | :--- | :---: | :--- |
| 1-1 | 申請 Figma 教育方案 | — | 課前完成 |
| 1-2 | 連接 Figma MCP 並用 `whoami` 驗證 | 建議 | 10 分 |
| 2-1 ～ 2-6 | Figma 基本功 6 練習（純手動） | ❌ 免費版即可 | 40 分 |
| 2-7 | 「亂畫 vs 規範」AI 讀稿對照實驗 | 建議 | 10 分 |
| 3-A | DESIGN.md → Figma Variables | ✅ | 10 分 |
| 3-B | AI 建立 Button / Card 元件 | ✅ | 15 分 |
| 3-C | AI 排首頁初稿 → **人工調整定稿** | ✅ | 30 分 |
| 3-D | Figma → HTML 網頁原型 | 建議 | 15 分 |
| 3-E | Figma 改了 → 反向同步回 DESIGN.md | 建議 | 10 分 |
| 4-1 ～ 4-3 | pen.dev / Google Stitch / Claude Design 跨工具實作 | ❌ 不需要 | 30 分 |

> [!WARNING]
> **請在上課前一週完成 Figma 教育方案申請！** 驗證由第三方 SheerID 處理，常見「驗證通過但方案沒生效」等狀況，處理可能要好幾天。詳見 [第一章](./01_帳號方案與MCP連線設定.md)。若沒有教育方案，也可以用 **第四章的 `pen.dev` + `Google Stitch` + `Claude Design`** 完成設計畫布實戰！

---

## 🔄 與本課程其他單元的連動關係

```text
[3. 創意發想] 優秀設計案例與 UI Kit 決定「風格與佈局」
       ↓
[7. 建立自己的 DESIGN.md] 把視覺決策寫成 AI 看得懂的規格
       ↓
[8. AI 設計畫布與 MCP 整合] Figma / pen.dev / Stitch / Claude Design 實作定稿 ◀── 本單元
       ↓
[9. 易用性測試] 用定稿原型找真人測試，再回頭修改設計稿
       ↓
[11. 部署 Landing Page] 用 React 實作定稿並部署到 GitHub Pages
```

---

[⬅️ 返回主目錄](../README.md)
