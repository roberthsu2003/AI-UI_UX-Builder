# 第二章：pen.dev（Pencil）× MCP — 程式碼即設計的 AI 向量畫布 ✏️

[⬅️ 上一章：Figma × MCP](./01_Figma與MCP_用AI控制Figma設計.md) ｜ [🏠 返回單元主頁](./README.md) ｜ [➡️ 下一章：Google Stitch × MCP](./03_Google_Stitch與MCP_AI原生無限畫布.md)

如果你沒有 Figma Education 付費／教育座位，或是希望**設計稿直接住在程式碼專案裡、隨時讓 AI Agent 雙向修改**，那麼 **[pen.dev](https://www.pencil.dev/)**（原名 Pencil.dev）是目前最適合 AI Product Builder 的武器。

它由 Adobe XD 共同創辦人 Tom Krcha 創立，核心理念是 **「Design-in-Code（程式碼中的設計）」**——將整個設計畫布變成專案中的 `.pen` 檔案，並且**原生為了讓 AI 透過 MCP 操控而設計**。

---

## 💡 1. 為什麼 pen.dev 天生適合「用 AI 控制設計」？

1. **設計稿即專案檔案（`.pen`）**：不像雲端設計軟體與程式碼專案分離，`.pen` 檔案就放在你的專案資料夾（例如 `my-design-lab/design.pen`），可以隨著 Git 一起做版本控制與分支比稿。
2. **原生雙向 MCP Server**：pen.dev 桌面版與 IDE 擴充功能直接內建了本地 MCP Server，AI Agent 不只可以讀取畫布結構，還能直接執行向量指令在畫布上畫圖、排版、截圖自檢並存檔。
3. **Web-to-Canvas 網頁逆向還原**：透過內建的 `browser` MCP 工具，AI 可以把任何**線上網站**或你本機正在跑的 **`localhost` 網頁**，直接轉換成 `.pen` 畫布上的可編輯向量圖層！也支援直接從 Figma 複製貼上圖層進來。
4. **Parallel AI Swarm（多 Agent 平行比稿）**：支援同時派出多個 AI Agent 在同一張畫布上平行設計 3～6 種不同風格變體，一次展開供你挑選。

> [!WARNING]
> **操作 `.pen` 檔案的鐵律**：
> 新版 `.pen` 檔案具有專屬保護與結構編碼，**AI 只能透過 Pencil MCP 工具（`execute`、`get_app_state` 等）來讀寫 `.pen` 檔案**，絕對不可用一般文字編輯器的 `Read` 或 `grep` 直接修改 `.pen` 內容！

---

## 🔌 2. 安裝與啟用 Pencil MCP（支援桌面版 / IDE / CLI）

### 步驟 A：安裝與開啟畫布
1. 前往 [pencil.dev](https://www.pencil.dev/) 下載桌面版應用程式（或安裝 VS Code / Cursor 擴充功能）。
2. 在你的專案資料夾（如 `my-design-lab/`）建立或開啟一個設計檔 `design.pen`。

### 步驟 B：連接 MCP 到 Antigravity 或其他 AI 客戶端
1. 在 pen.dev 進入 **`Settings → MCP`**，開啟本地 MCP 整合開關（連接後在 Antigravity 工具列即可看到 `pencil` MCP Server）。
2. （選用）若想在終端機或自動化腳本用指令控制設計，可安裝官方命令列工具（需 Node.js 22.19+）：
   ```bash
   npm install -g @pen.dev/cli
   pen login    # 登入帳號
   pen status   # 確認連線狀態
   ```

---

## 🛠️ 3. 認識 Pencil MCP 的 7 個核心控制工具

當你在 Antigravity 中對 `.pen` 檔案下指令時，AI 背後就是呼叫這組公開工具來精準控制你的設計畫布：

| MCP 工具名稱 | 功能定位 | AI 如何用它控制設計 |
| :--- | :--- | :--- |
| **`read_skill`** | 載入畫布操作聖經 | AI 開工前必讀 `SKILL.md`、`execute.md` 或 `guide/web-app.md`，學會正確的 `.pen` 畫布語法與排版最佳實踐 |
| **`get_app_state`** | 讀取畫布全景與狀態 | 取得目前開啟的 `.pen` 檔案結構、圖層樹、與使用者當前選取的畫框位置 |
| **`get_style`** | 讀取設計系統 Tokens | 擷取畫布目前的色彩、亮暗色主題變數與全域樣式設定 |
| **`execute`** | **核心畫布執行引擎** | AI 撰寫 JavaScript 程式直接建立/修改向量元件與版面，並呼叫 `TakeScreenshot()` **拍下畫布截圖自我檢查**；若失敗會透過 `editId` + `edits` 自動修復重跑 |
| **`browser`** | **網頁逆向擷取工具** | （桌面版支援）直接抓取線上網址或 `localhost` 畫面，轉為可編輯向量圖層或參考結構 |
| **`save`** | 持久化存檔 | 將 AI 在記憶體中修改好的畫布設計正式寫回實體 `.pen` 檔案 |
| **`spawn_agents`** | **平行多工比稿（Swarm）** | 啟用 `--enable_spawn_agents` 時，可同時派出多個子 Agent 在畫布上平行產出多種設計方案 |

---

## 🚀 4. 全 AI 控制實戰演練

### 實戰 2-1：讀取 `DESIGN.md`，讓 AI 從零建構 `.pen` 畫布
先讓 AI 呼叫 `read_skill` 熟悉畫布語法，再依據你的設計規範作畫：

```text
請先呼叫 pencil MCP 的 read_skill 閱讀畫布操作指南與 web-app 規範，
再讀取 @DESIGN.md，透過 execute 在 design.pen 建立：
1. 桌機版（1440px）與手機版（375px）的「產品價格方案比較頁」畫框。
2. 嚴格套用 @DESIGN.md 的色彩與字體階層，包含月繳/年繳切換器、3 張方案卡（中間推薦方案高亮）。
3. 完成後請在 execute 內呼叫 TakeScreenshot() 自己檢查一遍排版有沒有文字重疊或裁切，確認無誤後呼叫 save 存檔。
```

### 實戰 2-2：平行多工比稿（AI 一口氣畫出 3 種不同風格）
```text
我要為 @產品需求實戰範例庫 挑的「木日 Kibi 一週年活動頁」尋找首屏視覺方向。
請用 pencil MCP 在 design.pen 上平行建立 3 個橫向並排的 Hero 畫框變體：
- 方案 A：極簡編輯雜誌排版（大留白 + 襯線體）
- 方案 B：不對稱雙欄卡片式（左側故事 + 右側限定優惠海報卡）
- 方案 C：深色烘焙氛圍（深咖底色 + 暖金強調色）
完成後截圖展示給我比較，等我選出其中一版再轉成網頁。
```

### 實戰 2-3：用 `browser` 工具把現有網站抓進畫布重構
```text
請用 pencil MCP 的 browser 工具擷取這個網址（或 http://localhost:5173）的畫面，
幫我轉成 design.pen 裡的可編輯設計稿。
接著幫我把原本擁擠的單欄最新消息區，重構為 3 欄格狀卡片（Card Grid），保留原本的品牌色並增加段落呼吸感。
```

### 實戰 2-4：命令列自動化生成與匯出（`@pen.dev/cli`）
如果你已經寫好一套批次自動化流程，甚至可以不開視窗，直接用終端機命令 AI 生成設計檔並匯出圖片：

```bash
# 從零用一句話生成 design.pen
pen --out hero.pen --prompt "設計一個極簡風格的台灣高山茶香氛品牌首頁 Hero 區"

# 指定修改既有的 .pen 設計檔
pen --in hero.pen --out hero-v2.pen --prompt "將主要 CTA 按鈕改為苔蘚綠 #4A5D4E，並加入早鳥倒數標籤"

# 直接無頭匯出成 PNG / SVG / PDF 供簡報交付
pen --in hero-v2.pen --export hero-v2.png
```

### 實戰 2-5：把 `.pen` 定稿直接轉為網頁程式碼
```text
我已在畫布上確認好 design.pen 的「首頁定稿」畫框，
請用 pencil MCP 的 get_app_state 與 get_style 讀取該畫框的完整結構與樣式，
在專案中產出對應的 index.html（或 React 元件），確保響應式斷點與畫布 100% 一致。
```

---

## ✅ 本章檢核清單

- [ ] 我了解 `.pen` 檔案是跟著程式碼專案走的設計稿，且必須透過 Pencil MCP（而非一般文字讀寫）操作。
- [ ] 我已成功讓 AI 使用 `read_skill`、`execute`、`TakeScreenshot()` 與 `save` 在 `.pen` 畫布完成至少一版頁面與截圖自檢。
- [ ] 我知道如何用 `browser` 工具逆向擷取網頁進畫布，並將定稿轉為前端程式碼。

---

[⬅️ 上一章：Figma × MCP](./01_Figma與MCP_用AI控制Figma設計.md) ｜ [🏠 返回單元主頁](./README.md) ｜ [➡️ 下一章：Google Stitch × MCP](./03_Google_Stitch與MCP_AI原生無限畫布.md)
