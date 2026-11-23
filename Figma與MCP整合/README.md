# Figma × MCP：讓 AI 讀懂、也能動手畫你的設計稿 🎨🤖

> 📅 **最後更新：2026-11**　｜　本單元涉及的工具介面、方案與額度變動快，若畫面與講義不符，請以官方文件為準。

在 [建立自己的 `DESIGN.md`](../建立自己的DESIGN_md/README.md) 單元中，我們用**文字**定義了設計規範；但 UI/UX 工作真正的主戰場仍然是 **Figma**——版面要用眼睛調、元件要用手擺、細節要靠設計判斷。

本單元介紹如何透過 **MCP（Model Context Protocol）** 把 Figma 接上 AI（Claude Code / Cursor / VS Code），讓工作流變成：

```text
DESIGN.md（文字規範）
   │  ① AI 寫入 Figma：建立 Variables、按鈕與卡片元件、首頁初稿
   ▼
Figma（人來做設計判斷：調版面、修層級、定稿）   ◀── UI/UX 的主角在這裡
   │  ② AI 讀取 Figma：依設計稿生成 HTML 原型
   ▼
網頁原型（可點擊、可交付）
```

> [!IMPORTANT]
> **本單元的定位：UI/UX 為主，AI 為輔。**
> AI 負責「搬磚」——把色碼建成 Variables、把元件排出初稿、把設計稿轉成程式碼；
> **你負責「判斷」**——資訊層級對不對、留白夠不夠、使用者會不會迷路。AI 畫出來的初稿永遠需要人來修。

---

## 💡 什麼是 MCP？為什麼要用它操控 Figma？

**MCP** 是讓 AI 連接外部工具的標準介面，可以把它想成「AI 的 USB 插槽」。Figma 官方提供了一個 **Figma MCP Server**，插上之後 AI 就能：

| 方向 | AI 能做什麼 | 代表工具 |
| :--- | :--- | :--- |
| **讀取 Figma → 程式** | 讀出 Frame 的結構、色彩變數、截圖，並轉成 HTML / CSS | `get_design_context`、`get_variable_defs`、`get_screenshot` |
| **寫入 程式／文字 → Figma** | 在畫布上建立 Frame、Auto Layout、元件、Variables | `use_figma`（Beta）、`create_new_file` |

過去要「截圖丟給 AI」或「手動對照色碼」，現在 AI 可以直接讀到**精確的圖層、間距與變數數值**。

---

## 📖 本單元學習目錄

### 1. [第一章 🔑：帳號方案申請與 MCP 連線設定](./01_帳號方案與MCP連線設定.md)
* **學什麼**：學生如何**免費**取得教育方案、各方案 MCP 額度差異、在 Claude Code / Cursor / VS Code 連接 Figma MCP。
* **實作**：申請教育方案、完成 MCP 連線並用 `whoami` 驗證帳號方案。

### 2. [第二章 🧱：AI 看得懂的 Figma 基本功](./02_AI看得懂的Figma基本功.md)
* **學什麼**：Frame、Auto Layout、圖層命名、Variables、Components & Variants、Constraints——以及**為什麼這些會直接影響 AI 讀稿的品質**。
* **實作**：手動完成 6 個小練習，最後用 MCP 對照「亂畫的稿」與「規範的稿」轉出來的程式碼差多少。

### 3. [第三章 🔁：實戰 — DESIGN.md → Figma → 網頁原型](./03_實戰_DESIGN_md到Figma到網頁.md)
* **學什麼**：串接上一單元的 `DESIGN.md`，讓 AI 在 Figma 建立設計系統與首頁初稿，再由你調整定稿，最後讓 AI 讀稿生成網頁。
* **實作**：完整工作坊 3-A ～ 3-E 與作業繳交。

---

## 🛠️ 本單元實作一覽

| 編號 | 實作內容 | 需要教育方案？ | 時間 |
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

> [!WARNING]
> **請在上課前一週完成教育方案申請！** 驗證由第三方 SheerID 處理，常見「驗證通過但方案沒生效」等狀況，處理可能要好幾天。詳見 [第一章](./01_帳號方案與MCP連線設定.md)。

---

## 🔄 與本課程其他單元的連動關係

```text
[3. 定義使用者與需求] 線框圖決定「放什麼、放哪裡」
       ↓
[7. 建立自己的 DESIGN.md] 把視覺決策寫成 AI 看得懂的規格
       ↓
[8. Figma × MCP] 規格 → Figma 設計系統 → 人工定稿 → 網頁原型   ◀── 本單元
       ↓
[9. 易用性測試] 用定稿原型找真人測試，再回頭修改設計稿
       ↓
[11. 部署 Landing Page] 用 React 實作定稿並部署到 GitHub Pages
```

---

[⬅️ 返回主目錄](../README.md)
