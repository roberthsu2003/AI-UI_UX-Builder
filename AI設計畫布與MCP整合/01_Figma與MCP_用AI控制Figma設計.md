# 第一章：Figma × MCP — 用 AI 控制 Figma 設計畫布 🟣

[🏠 返回單元主頁](./README.md) ｜ [➡️ 下一章：pen.dev（Pencil）× MCP](./02_pen_dev與MCP_程式碼即設計的AI畫布.md)

在傳統工作流中，Figma 是純手動工具；但透過 Figma 官方的 **遠端 MCP Server（`https://mcp.figma.com/mcp`）**，AI 可以**雙向控制 Figma 畫布**——不僅能讀取圖層與變數轉成網頁程式碼，還能直接透過 Figma Plugin API（`use_figma`）與 `create_new_file`，自動幫你建立設計檔、寫入 Design Tokens、產出元件變體（Variants）並排好整頁 RWD 版面。

---

## 💰 1. 取得 AI 寫入畫布權限：Figma 教育方案與額度

> [!NOTE]
> 以下資訊整理自 Figma 官方文件（2026-11）。政策與用量計費規則持續更新，請以 [Figma MCP 官方額度頁面](https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/) 為準。

| 身分方案 | 費用 | MCP 讀取額度（`get_design_context` 等） | AI 寫入／控制畫布（`use_figma` / `create_new_file`） |
| :--- | :--- | :--- | :--- |
| **Education 教育方案（驗證通過）** | **免費**（每年驗證） | **每天 200 次**、每分鐘 10 次 | ✅ **支援**（Full Seat，目前 Beta 開放寫入） |
| **Professional / Org / Enterprise** | 依官方計費 | 依方案等級（Full / Dev Seat） | ✅ **支援**（需具編輯權限的 Full Seat） |
| **Starter 免費版（未驗證）** | 免費 | **每月僅 20 次** | ❌ 不支援寫入畫布 |

### 🎓 免費申請 Education Full Seat（建議課前一週完成）
1. 使用**你打算長期使用的 Email**（建議學校信箱）註冊 [Figma](https://www.figma.com/)。
2. 前往 [Figma for Education](https://www.figma.com/education/) 點選申請並完成 **SheerID** 學生／教師驗證（無學校信箱可上傳清晰學生證或含學期日期之在學證明）。
3. **關鍵步驟**：驗證通過後，務必用**同一個 Email** 建立新的 Team（或升級既有 Team），確認 Team 設定顯示為 **Education（Full Seat）**。

> [!TIP]
> **沒有 Figma 教育方案怎麼辦？** 沒關係！本章節介紹的連線與 AI 讀稿技巧完全通用；若需要由 AI 直接寫入並控制向量畫布，可直接使用下一章免費試用的 **[pen.dev × MCP](./02_pen_dev與MCP_程式碼即設計的AI畫布.md)** 或 **[Google Stitch × MCP](./03_Google_Stitch與MCP_AI原生無限畫布.md)**。

---

## 🔌 2. 連接遠端 Figma MCP（Claude.ai / ChatGPT / Antigravity）

Figma MCP 只有**遠端 MCP Server（`https://mcp.figma.com/mcp`）**支援完整 AI 寫入畫布功能（`create_new_file`、`use_figma`），本課程統一使用遠端連線：

### 方式一：Claude.ai（網頁版／桌面版）
1. 登入 [Claude.ai](https://claude.ai/) → 左下角頭像 → **Settings（設定）** → **Connectors（連接器）**。
2. 找到官方 **Figma** 點擊 **Connect**；或點選 **Add custom connector**，名稱填 `Figma`、Remote MCP server URL 填 `https://mcp.figma.com/mcp`。
3. 於彈出的 Figma OAuth 頁面登入並點擊 **Allow access**，確認對話框工具列已開啟 **Figma**。

### 方式二：ChatGPT（網頁版／桌面版）
1. 進入 **Settings → Apps & Connectors**，在進階設定中開啟 **Developer mode（開發者模式）**。
2. 點擊 **Create / Add custom MCP server**：名稱填 `Figma`、Server URL 填 `https://mcp.figma.com/mcp`。
3. 完成 Figma OAuth 登入授權後，在對話中勾選啟用該連接器。

### 方式三：Antigravity（推薦用於做網站與全流程開發）
1. **外掛市集一鍵啟用（推薦）**：開啟 Antigravity 的 **Plugins / Marketplace**，搜尋並安裝 **Figma**（`antigravity-plugins-partners/plugin/figma`），依指示完成 Figma OAuth 登入。
2. **手動設定 `mcp_config.json`**：開啟右上角 `... (Additional Options) → MCP Servers` 或編輯 `~/.gemini/config/mcp_config.json`：

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

### ✅ 驗證連線：`whoami`（不扣額度）
```text
請用 Figma MCP 的 whoami 工具，告訴我目前登入的帳號、planKey、方案（plan）與座位類型（seat）。
```
看到方案為 **Education**（或付費方案）且座位為 **Full**，就代表 AI 已經拿到寫入畫布的鑰匙！

---

## 🔗 3. 關鍵機制：遠端 MCP 是「網址驅動（Link-based）」

連線成功後，千萬別直接問 AI：「幫我看我剛剛開的 Figma 檔」——雲端遠端 MCP **不會監看你螢幕上打開哪個視窗，也無法自行搜尋你帳號的所有檔案**。你必須提供帶有 **`fileKey`** 與 **`node-id`** 的網址：

```text
https://www.figma.com/design/AbCdEf12345/My-Design-System?node-id=12-34
                             └────┬────┘                          └──┬──┘
                               fileKey                            node-id
                           （目標檔案代碼）                  （目標畫框/元件節點）
```

* **要 AI 寫入整份檔案（或新增頁面）**：點擊 Figma 右上角 **`Share → Copy link`** 複製檔案網址給 AI（或直接請 AI 用 `create_new_file` 開新檔後自動回傳網址）。
* **要 AI 讀取或局部修改特定畫框**：在 Figma 畫布點選目標 Frame → 按右鍵選擇 **`Copy link to selection`**（快捷鍵 Mac `Cmd + L` ／ Windows `Ctrl + L`），把該節點連結貼給 AI。

---

## 🤖 4. AI 控制 Figma 的雙向 MCP 工具鏈

當你連接 Figma MCP（並建議搭配官方外掛／技能如 `figma-use`、`figma-generate-design`）時，AI 實際上是在背後呼叫以下工具替你「畫圖與改圖」：

| 控制方向 | 核心 MCP 工具 | AI 幫你做什麼 |
| :--- | :--- | :--- |
| **開新檔案** | `create_new_file` | 依你的 `planKey` 直接在 Drafts 或專案資料夾建立新的 Figma Design / FigJam / Slides 檔案並回傳 URL |
| **AI 操控畫布** | `use_figma` | 直接在目標檔案執行 **Figma Plugin API JavaScript**——建立 Variables、設定 Auto Layout（Flexbox）、產出 Components & Variants、排版整頁並修改指定節點 |
| **讀取架構圖** | `get_metadata` | 先快速掃描整頁有哪些 Frame 與節點名稱（省額度） |
| **讀取設計細節** | `get_design_context`、`get_variable_defs` | 取得精確的 Auto Layout 規則、間距、字體與變數名稱，用來 1:1 產出 HTML / React |
| **視覺檢查** | `get_screenshot` | 讓 AI 截圖看自己畫出來的 Figma 畫面有沒有文字重疊或破版 |

---

## 🚀 5. 全 AI 控制實戰四部曲（零手繪工作流）

請準備好你在 [建立自己的 `DESIGN.md`](../建立自己的DESIGN_md/README.md) 單元完成的 `DESIGN.md`，全程只用指令讓 AI 操作 Figma：

### 步驟 A：命令 AI 自動開檔並建立 Variables 與色票指南頁
```text
請先用 whoami 取得我的 planKey，再用 create_new_file 建立一個名為「AI控制設計系統實戰」的 Figma Design 檔案。
接著讀取 @DESIGN.md 頂部的 YAML tokens，使用 use_figma 在該檔案中：
1. 建立 4 個 Variables Collection：Colors、Radius、Spacing、Typography，變數名稱與 @DESIGN.md 完全一致。
2. 建立名為 "Style Guide" 的頁面，用 Auto Layout 排列所有色票方塊與字級範例，Fill 必須綁定剛剛建立的 Color Variables（不可寫死 Hex）。
完成後回傳檔案網址與建立清單。
```

### 步驟 B：命令 AI 自動生成元件庫（帶 Auto Layout 與狀態 Variants）
為了讓之後 AI 讀稿也能輸出乾淨的 CSS Flexbox 與元件 props，指令中必須明確要求 **結構化命名、Auto Layout 與 Variants**：

```text
請在剛才的 Figma 檔案中，使用 use_figma 建立名為 "Components" 的頁面，並依照 @DESIGN.md 第 4 章產出以下元件：
1. Button 元件（Component Set）：
   - 屬性：Type = Primary / Secondary，State = Default / Hover / Disabled（共 6 個變體）。
   - 必須使用 Auto Layout（Hug contents），內距左右 24px、上下 12px，圓角與顏色全部綁定 Variables。
2. Card/Product 元件：
   - 結構必須使用語意化英文圖層命名：Image（占位框）→ Content（Title、Description、Price）→ Button/Primary instance。
   - 卡片寬度設為彈性 Fill container 友善結構，確保文字變長時不會破版。
文字一律使用 Noto Sans TC（標題使用 Noto Serif TC）。
```

### 步驟 C：命令 AI 排出桌機＋手機首頁，並用「純對話」局部改稿
先命 AI 組裝整頁，再用 `get_screenshot` 讓 AI 自己看截圖檢查，最後用自然語言下令微調：

```text
請在 "Home" 頁面使用 use_figma 建立兩張畫框：
1. `Home - Desktop`（寬 1440px）：包含 Header（Logo + 4 個導覽連結 + Primary 按鈕）、Hero、3 欄 Card/Product 格狀區、品牌故事雙欄區、Footer。
2. `Home - Mobile`（寬 375px）：所有多欄區塊自動收合為單欄垂直堆疊，按鈕高度至少 44px。
規則：只能使用 Components 頁面的元件 instance 與既有的 Variables，文案使用繁體中文真實內容，不可用 Lorem ipsum。完成後用 get_screenshot 截圖給我看，並自我檢查有無文字溢出。
```

看到截圖後若想修改某個區塊，**不要自己去拖拉**，對該 Frame 按右鍵 **`Copy link to selection`** 後直接指揮 AI 修改：

```text
我檢查了這個 Hero 區塊（<貼上 Copy link to selection 連結>），有兩個問題請用 use_figma 直接修改：
1. 主副標之間的間距太擠，請把 gap 調整為套用 spacing/lg。
2. 目前兩顆按鈕都是 Primary 權重太接近，請把次要按鈕「了解更多」的 instance variant 切換為 Type=Secondary。
修改完請再用 get_screenshot 確認一次。
```

### 步驟 D：命令 AI 讀取 Figma 定稿轉成 HTML，並反向同步回 `DESIGN.md`
```text
請用 get_design_context 與 get_variable_defs 讀取我確認定稿的兩個節點：
- 桌機版：<貼上 Home - Desktop 連結>
- 手機版：<貼上 Home - Mobile 連結>

請生成單一檔案 index.html：
1. 將取得的 Figma Variables 寫入 :root CSS 自訂變數。
2. 完整還原兩個畫框的佈局與 @DESIGN.md 第 8 章的響應式斷點。
3. 若我們剛才有在對話中調整過色碼或間距，請一併檢查並更新回 @DESIGN.md，維持單一事實來源。
```

---

## ✅ 本章檢核清單

- [ ] 我已成功將 Figma MCP（`https://mcp.figma.com/mcp`）連接至 Claude.ai / ChatGPT / Antigravity，且 `whoami` 驗證成功。
- [ ] 我理解遠端 MCP 的「網址驅動（Link-based）」規則，知道讀取與修改指定區塊時要用 `Copy link to selection`。
- [ ] 我已體驗過「不手動拉矩形」，全程用指令讓 AI 透過 `use_figma` 建立變數、元件、整頁排版並執行局部修改。

---

[🏠 返回單元主頁](./README.md) ｜ [➡️ 下一章：pen.dev（Pencil）× MCP](./02_pen_dev與MCP_程式碼即設計的AI畫布.md)
