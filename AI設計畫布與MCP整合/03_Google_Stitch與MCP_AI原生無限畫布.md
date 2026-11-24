# 第三章：Google Stitch × MCP — AI 原生無限畫布與串流設計 🎨

[⬅️ 上一章：pen.dev（Pencil）× MCP](./02_pen_dev與MCP_程式碼即設計的AI畫布.md) ｜ [🏠 返回單元主頁](./README.md) ｜ [➡️ 下一章：Claude Design](./04_Claude_Design_對話式視覺畫布與微調.md)

在 2026 年的重大更新中，**[Google Stitch](https://stitch.withgoogle.com/)** 已經從早期的「單次文字轉 UI 生成器」，全面進化為 **AI 原生軟體設計工作台（AI-native software design canvas）**。

它不再只是「打字 → 等幾秒 → 吐一張圖」，而是讓你透過**即時串流、語音、無限畫布、以及 Stitch MCP Server**，像指揮設計團隊一樣動態控制整個設計流程。

---

## 🌟 1. 2026 年 Google Stitch 四大 AI 控制新特性

1. **即時串流生成與中途干預（Live Streaming Canvas）**
   * 在 Stitch 畫布下達需求後，你可以即時看見 AI 一層一層把頁面畫出來，**不用等到全部生成結束**，就能在畫布上隨時暫停、圈選特定區塊給出修改評論並即時調整。
2. **語音驅動氛圍設計（Gemini Live Voice Control）**
   * 支援直接「用講的」指揮畫布（例如：「*把這個卡片的氛圍改得更像台南老宅的木質調，文字對比再強一點*」），完全省去反覆修潤冗長文字 Prompt 的時間。
3. **互動原型串聯（Interactive Prototype & Play）**
   * 多個畫面（如首頁 → 列表頁 → 詳情頁 → 結帳頁）可在無限畫布上直接連線成完整使用者旅程，點擊右上角 **`Play`** 即可立刻測試頁面轉場與操作動線。
4. **`DESIGN.md` 原生雙向合約**
   * Stitch 是 **`DESIGN.md` 格式的發源地**：你可以貼上任何既有網址請 Stitch **逆向萃取出一份 `DESIGN.md`**，也能把你寫好的 `DESIGN.md` 匯入 Stitch 作為所有生成畫面的統一規範。

---

## 🔌 2. 連接 Stitch MCP Server（在 Antigravity / IDE 遠端操控）

Google 官方除了提供網頁版畫布，還推出了 **Stitch MCP Server**（可透過 `stitch-mcp` 或 `@google/stitch-sdk` 橋接）與開源技能包 **`google-labs-code/stitch-skills`**，讓你在寫程式的編輯器中直接指揮 Stitch 生成與拉取設計！

### 設定方式（以 `mcp_config.json` 為例）
在 Google Stitch 取得 API Key 後，於 Antigravity 的 `mcp_config.json` 加入以下設定：

```json
{
  "mcpServers": {
    "stitch": {
      "command": "npx",
      "args": ["stitch-mcp"],
      "env": {
        "STITCH_API_KEY": "貼上你的_STITCH_API_KEY"
      }
    }
  }
}
```

> [!TIP]
> **搭配 `stitch-skills` 效果更穩**：Google 開源的 `stitch-skills` 能教會你的 Coding Agent 如何正確讀懂 Stitch 產出的 `DESIGN.md` 與 bounded `code.html`，並直接映射成符合最新 Web API 標準的 React / Tailwind 程式碼。

---

## 🛠️ 3. Stitch MCP 核心控制工具一覽（共約 16 項指令）

接上 Stitch MCP 後，你的 AI Agent 可以不開瀏覽器，直接透過程式化指令控制 Stitch 雲端畫布：

| 工具分類 | 核心 MCP 工具 | AI 幫你執行的控制動作 |
| :--- | :--- | :--- |
| **專案管理** | `Create Project`、`List Projects`、`Get Project`、`Delete Project` | 自動建立新的 Stitch 專案容器，或列出既有專案裡的所有畫面清單 |
| **畫面生成與變體** | `Generate Screen`、`Generate Screen Variants`、`Edit Screens` | 依 Prompt 在專案內生成全新畫面；**一次產出 1～5 種版型與創意幅度變體**；或對現有畫面直接下令修改 |
| **設計系統控制** | `Create Design System`、`Create Design System From Markdown`、`Apply Design System` | 把你專案裡的 **`DESIGN.md` 直接推上 Stitch 轉成設計系統**，並一鍵套用到專案中的所有畫面 |
| **產物與程式碼拉取** | `Download Screen File` | 直接將指定畫面的 `screen.png` 截圖與 `code.html`（含 Tailwind CSS）下載回本地專案資料夾 |

---

## 🚀 4. 全 AI 控制實戰演練

### 實戰 3-1：在 Web 畫布用「發散 → 串接 → 匯出 `DESIGN.md`」三步開局
1. 前往 [stitch.withgoogle.com](https://stitch.withgoogle.com/) 開啟新專案。
2. 輸入你在 [產品需求實戰範例庫](../產品需求實戰範例庫/README.md) 挑選的題目（或貼上你喜歡的參考網站截圖）。
3. **一次要多種變體**：下指令要求 Stitch 同時畫出「暖色編輯雜誌風」與「極簡現代風」兩個方向，並在 Live 生成過程中直接用評論調整不滿意的區塊。
4. 點選畫面中的導覽按鈕與 CTA 串連成多頁原型，按 **`Play`** 測試動線。
5. 確認風格後，點擊 **匯出 `DESIGN.md`**（存進你的專案根目錄）與複製畫面結構。

### 實戰 3-2：透過 Stitch MCP 在 Antigravity 全自動控場
當你不想在瀏覽器與編輯器之間切來切去，可以直接在 Antigravity 對 AI 下達以下指令：

```text
請使用 stitch MCP 工具替我執行以下自動化設計流程：
1. 呼叫 Create Project 建立名為「NoteFlow AI 官網原型」的新專案。
2. 呼叫 Create Design System From Markdown，讀取我專案根目錄的 @DESIGN.md 建立專屬設計系統。
3. 呼叫 Generate Screen 建立「首頁」與「價格方案頁」，並呼叫 Apply Design System 確保兩頁風格一致。
4. 對「首頁」呼叫 Generate Screen Variants 產生 3 個不同 Hero 排版的變體供我選擇。
5. 最後用 Download Screen File 下載每個畫面的 screen.png 截圖讓我在對話裡檢視。
```

等你挑出最喜歡的變體編號後，接著下令：

```text
我決定採用第 2 號變體！請用 Edit Screens 把第 2 號變體的主按鈕文案改成「免費試用 14 天」，
再用 Download Screen File 把定稿的 code.html 拉進我的專案中，幫我拆成乾淨的 React 元件。
```

---

## ✅ 本章檢核清單

- [ ] 我了解 2026 年 Google Stitch 支援 Live Streaming 串流干預、多頁 `Play` 原型測試與 `DESIGN.md` 匯入匯出。
- [ ] 我已嘗試使用 Stitch 產生至少 2～3 個不同設計變體並進行比較，而不是第一版就將就使用。
- [ ] 我了解如何透過 `stitch-mcp` 用 `Create Design System From Markdown` 與 `Generate Screen Variants` 讓 AI 自動控制雲端畫布。

---

[⬅️ 上一章：pen.dev（Pencil）× MCP](./02_pen_dev與MCP_程式碼即設計的AI畫布.md) ｜ [🏠 返回單元主頁](./README.md) ｜ [➡️ 下一章：Claude Design](./04_Claude_Design_對話式視覺畫布與微調.md)
