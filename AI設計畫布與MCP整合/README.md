# AI 設計畫布與 MCP 整合：用 AI 全面控制 Figma、pen.dev、Google Stitch 與 Claude Design 🎨🤖

> 📅 **最後更新：2026-11**　｜　本單元整理 2026 年最新工具架構；工具介面與方案變動快，實際規格請以各服務官方文件為準。

在傳統 UI/UX 流程裡，設計師必須打開工具手動拉矩形、設字級、對齊像素；但在 2026 年的 AI Product Builder 工作流中，**「動手畫」的動作已經交給 AI 透過 MCP（Model Context Protocol）與原生 AI 畫布來執行**！

你只需要掌握 **`DESIGN.md` 設計規格** 與 **產品判斷力**，就能用自然語言直接控制 **Figma**、**pen.dev（Pencil）**、**Google Stitch** 與 **Claude Design** 四大設計畫布，實現真正的 **AI 驅動設計（AI-Controlled Design）**：

```text
DESIGN.md（設計規格合約） + 產品需求 / 靈感參考
   │
   ▼  你下達指令（自然語言 / MCP / 語音 / 滑桿）
┌──────────────────────────────────────────────────────────┐
│  AI 控制設計畫布（不再從零手繪，全部由 AI 建立與修改）         │
│  • Figma × MCP      ：AI 寫入 Variables、元件與 RWD 頁面   │
│  • pen.dev × MCP    ：AI 直接操作 .pen 向量畫布、多代理比稿 │
│  • Google Stitch    ：AI 原生即時串流畫布 + Stitch MCP     │
│  • Claude Design    ：對話、局部圈選評論與動態滑桿微調       │
└──────────────────────────────────────────────────────────┘
   │
   ▼  AI 讀取定稿畫布結構（Design-to-Code）
網頁原型 / React 前端專案（可點擊、可測試、可上線）
```

> [!IMPORTANT]
> **本單元的核心精神：100% 用 AI 控制設計，你負責「下規格、比稿、調方向、驗收」。**
> 你不需要背誦設計軟體的快捷鍵來手繪每一顆按鈕，但必須學會**如何透過 MCP 工具與精準 Prompt，指揮 AI 寫入設計系統、修改局部圖層並導出程式碼**。

---

## 🧭 2026 四大 AI 設計畫布控制對照表

| 工具 | AI 控制入口 | 核心 MCP 工具／控制機制 | 如何用 AI 修改局部細節 | 免費／教育方案門檻 |
| :--- | :--- | :--- | :--- | :--- |
| **[Figma × MCP](./01_Figma與MCP_用AI控制Figma設計.md)** | 遠端 MCP (`https://mcp.figma.com/mcp`) 接上 Claude.ai / ChatGPT / Antigravity | `create_new_file`、`use_figma`（透過 Plugin API 寫入畫布）、`get_design_context`、`get_variable_defs`、`get_screenshot` | 在 Figma 複製目標 Frame 連結（`Copy link to selection`），貼給 AI 下令改圖層、變數或版面 | 免費 Starter 版僅讀取；**學生可免費申請 Education Full Seat 解鎖 `use_figma` 寫入** |
| **[pen.dev (Pencil) × MCP](./02_pen_dev與MCP_程式碼即設計的AI畫布.md)** | 桌面版／IDE 擴充內建本地 MCP Server + `@pen.dev/cli` | `read_skill`、`get_app_state`、`get_style`、`execute`、`browser`（網頁逆向轉向量）、`save`、`spawn_agents`（多 Agent 比稿） | 直接針對 `.pen` 檔案下指令，由 AI 執行向量程式並自動截圖（`TakeScreenshot`）檢查修正 | 提供桌面版與 IDE 擴充（含免費額度與付費方案） |
| **[Google Stitch × MCP](./03_Google_Stitch與MCP_AI原生無限畫布.md)** | Web 原生無限畫布（Live Streaming + 語音控制）或 `stitch-mcp` / `@google/stitch-sdk` | `Create Project`、`Generate Screen`、`Generate Screen Variants`、`Edit Screens`、`Apply Design System`、`Download Screen File` | 在畫布串流中途打斷下令，或用 `Edit Screens` / `Generate Screen Variants` 批次重繪與套用 `DESIGN.md` | Google 帳號可於 Web 畫布免費使用；開發端可透過 API Key 接 `stitch-mcp` |
| **[Claude Design](./04_Claude_Design_對話式視覺畫布與微調.md)** | `claude.ai/design` 視覺工作台、Claude 免費版 Artifacts Design 模式、Claude Code `/design` | 自動萃取 GitHub/Figma/截圖規範 + Self-Correction Loop 自我修正 | 三大控制模式：**全局對話指令**、**局部點選評論（Inline Comments）**、**動態情境滑桿（Sliders）** | Artifacts 內的 Design 模式**免費版可用**；完整獨立 `claude.ai/design` 支援 Pro 以上方案 |

---

## 📖 本單元學習目錄（四大工具各立專章）

### 1. [第一章 🟣：Figma × MCP — 用 AI 控制 Figma 設計畫布](./01_Figma與MCP_用AI控制Figma設計.md)
* **學什麼**：免費申請 Figma 教育方案取得寫入權限、在 **Claude.ai / ChatGPT / Antigravity** 連接遠端 MCP、理解 **Link-based（網址驅動）** 機制，以及用 `create_new_file` 與 `use_figma` 命令 AI 建立 Variables、元件庫、RWD 首頁並執行局部修改與轉碼。

### 2. [第二章 ✏️：pen.dev（Pencil）× MCP — 程式碼即設計的 AI 向量畫布](./02_pen_dev與MCP_程式碼即設計的AI畫布.md)
* **學什麼**：認識 Design-in-Code 理念與 `.pen` 檔案特性，深入運用 Pencil MCP 內建工具（`read_skill`、`execute`、`browser` 網頁逆向轉畫布、`spawn_agents` 多 Agent 平行比稿）以及 `@pen.dev/cli` 命令列自動化。

### 3. [第三章 🎨：Google Stitch × MCP — AI 原生無限畫布與串流設計](./03_Google_Stitch與MCP_AI原生無限畫布.md)
* **學什麼**：掌握 2026 年升級後的 Stitch 原生無限畫布（Live Streaming 即時串流干預、Gemini Live 語音控制、Play 互動原型），以及透過 `stitch-mcp`（16 項工具）在 Antigravity / IDE 程式化生成變體、套用 `DESIGN.md` 並拉回 `code.html`。

### 4. [第四章 💬：Claude Design — 對話、局部評論與滑桿控制畫布](./04_Claude_Design_對話式視覺畫布與微調.md)
* **學什麼**：活用 `claude.ai/design` 與免費版 Artifacts Design 模式，從既有 Repo／截圖自動萃取設計系統並觸發 Self-Correction Loop，透過「全局指令＋畫布局部圈選＋動態控制滑桿」快速微調並交接開發。

---

## 🔄 跨工具 AI 控制工作流：實戰該怎麼串？

不必被單一工具綁住，你可以依照帳號權限與開發習慣選擇以下任一條全 AI 控制路線：

* **路線 A（無 Figma 付費／學生推薦極速流）**：
  `Google Stitch`（發散風格 + 匯出 `DESIGN.md`） → `pen.dev × MCP`（在同一個 Git 專案用 AI 生成 `.pen` 多頁畫布與平行比稿） → 直接由 AI 轉成 HTML / React 上線。
* **路線 B（企業／設計團隊標準交接流）**：
  `Claude Design` 或 `Google Stitch`（快速確認視覺與結構方向） → `Figma × MCP`（命令 AI 寫入正式 Variables、Auto Layout 與 Components 到團隊 Figma） → 經由 AI 讀稿轉為前端專案。

---

[⬅️ 返回主目錄](../README.md)
