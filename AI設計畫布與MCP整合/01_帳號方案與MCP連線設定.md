# 第一章：帳號方案申請與 MCP 連線設定 🔑

[🏠 返回 Figma × MCP 單元主頁](./README.md) ｜ [➡️ 下一章：AI 看得懂的 Figma 基本功](./02_AI看得懂的Figma基本功.md)

---

## 💰 學生不用付費：先搞懂方案與額度

> [!NOTE]
> 以下資訊整理自 Figma 官方文件（2026 年 11 月）。Figma 的方案與額度政策**經常調整**，上課前請再確認 [官方額度頁面](https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/)。

| 學生身分 | 可用方案 | 費用 | MCP 讀取額度 | AI 寫入畫布（`use_figma`） |
| :--- | :--- | :--- | :--- | :--- |
| **通過驗證的大專生** | **Education**（等同 Professional） | **免費**（每年重新驗證） | **每天 200 次**、每分鐘 10 次 | ✅ 可用（Beta 期間免費） |
| 高中生／教師 | Education（等同 Enterprise） | 免費 | 更高 | ✅ |
| 未驗證 | Starter 免費版 | 免費 | **每月僅 20 次** | ❌ 不支援 |

**重點整理：**
* 額度只計算**讀取類**工具（例如 `get_design_context`）；寫入類工具不計入一般額度。
* `use_figma`（讓 AI 直接在畫布上建立 Frame、元件、Variables）目前為 **Beta、免費**，Figma 已表示未來會改為**依用量計費**。
* **免費 Starter 版每月 20 次**大約只夠讀 3～5 個畫面，**撐不過一堂課**。這就是為什麼教育方案很重要。

---

## 🎓 實作 1-1：申請 Figma 教育方案（課前作業）

1. 用**你打算長期使用的 email** 註冊 / 登入 [Figma](https://www.figma.com/)（建議直接用學校信箱）。
2. 前往 [Figma for Education](https://www.figma.com/education/) → 點選申請，選擇身分（大專學生）。
3. 依指示完成 **SheerID** 驗證：
   * 有學校信箱：通常可以自動驗證。
   * 沒有學校信箱：準備**學生證正反面**或**在學證明**的清晰照片上傳，等待人工審核。
4. 驗證通過後，**用同一個 email 帳號**建立新的 Team，或把既有 Team 升級為 Education 方案。
5. 檢查：在 Team 設定頁面看到方案顯示為 **Education / Professional**，就完成了。

> [!WARNING]
> **常見翻車點**（來自 Figma 官方論壇大量回報）：
> * **驗證通過，Team 還是顯示 Free**：多半是「驗證用的 email」和「建立 Team 的 email」不同。
> * **出現 Verification Limit Exceeded**：重複提交太多次，需寫信給 Figma 支援或 SheerID 支援處理，可能要等數天。
> * **證件被退件**：照片模糊、證件無日期或姓名不完整。請拍清楚並附上有學期日期的文件。

**🆘 沒申請到怎麼辦？** 第二章的基本功練習**免費版就能做**；第三章的 MCP 實作可以兩人一組，共用已驗證同學的帳號，或觀看老師示範。

---

## 🔌 實作 1-2：連接 Figma MCP（10 分鐘）

Figma MCP 有兩種：

| 類型 | 網址 / 位置 | 需要 | 本課程 |
| :--- | :--- | :--- | :--- |
| **遠端 MCP Server** | `https://mcp.figma.com/mcp` | 瀏覽器登入授權即可 | ✅ **使用這個** |
| 桌面版 MCP Server | Figma 桌面 App 內啟用 | 付費 Dev / Full 座位 | ❌ |

> 「AI 寫入畫布」功能**只有遠端版**支援，所以本課程統一用遠端版。

### 方式一：Claude.ai（網頁版／桌面版）

1. 登入 [Claude.ai](https://claude.ai/)，點擊左下角個人頭像 → **Settings（設定）** → **Connectors（連接器）**。
2. 在列表中直接找到官方 **Figma** 點擊 **Connect**；若沒看到，點選 **Add custom connector**：
   * **Name**：`Figma`
   * **Remote MCP server URL**：`https://mcp.figma.com/mcp`
3. 瀏覽器會跳出 Figma OAuth 授權視窗，登入你的 Figma 帳號並點擊 **Allow access（允許存取）**。
4. 回到對話框，確認輸入框下方工具／連接器選單中已開啟 **Figma**。

### 方式二：ChatGPT（網頁版／桌面版）

1. **完整 MCP 連線（支援讀寫設計稿與 Variables）**：
   * 登入 [ChatGPT](https://chatgpt.com/)，進入左下角個人頭像 → **Settings（設定）** → **Apps & Connectors（或 Connectors）**，於進階設定中開啟 **Developer mode（開發者模式）**。
   * 點擊 **Create / Add custom MCP server**：
     * **Name**：`Figma`
     * **MCP Server URL**：`https://mcp.figma.com/mcp`
   * 完成 Figma OAuth 登入與權限授權後，在對話中勾選啟用該連接器即可呼叫 Figma MCP 工具。
2. **內建 Figma App（快速產出 FigJam 流程圖與簡報）**：
   * 若只需要文字轉流程圖或簡報，也可直接在 ChatGPT 的 Connected Apps 中連結官方 **Figma** 應用。

### 方式三：Antigravity（推薦用於做網站與專案開發）

1. **方法 A：從外掛市集一鍵啟用（推薦）**
   * 在 Antigravity 開啟 **Plugins / Marketplace（外掛市集）**，搜尋 **Figma**（`antigravity-plugins-partners/plugin/figma`）並安裝啟用。
   * 依照畫面指示登入你的 Figma 帳號並完成 OAuth 授權即可。
2. **方法 B：手動設定 `mcp_config.json`**
   * 點擊 Antigravity 右上角 **`... (Additional Options)` → `MCP Servers`**，或直接編輯全域設定檔 `~/.gemini/config/mcp_config.json`，加入遠端 Figma MCP：

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

   * 首次呼叫 Figma 工具時，瀏覽器會跳出授權畫面，按下允許即可。

### ✅ 驗證連線：問 AI「我是誰？」

連線完成後，對 AI 說：

```text
請用 Figma MCP 的 whoami 工具，告訴我目前登入的帳號、方案（plan）與座位類型（seat）。
```

**📎 小範例：成功時大概會看到**

```text
目前登入的 Figma 帳號：student@xxx.edu.tw
所屬方案：
  - 「王小明的設計課」Team → Education 方案，座位：Full
```

- [ ] 看到 **Education** 且座位為 **Full** → 第三章所有實作都能做。
- [ ] 只看到 **Starter** → 回到實作 1-1 檢查 Team 是否已升級。
- [ ] AI 說找不到 figma 工具 → 回頭確認 Claude.ai / ChatGPT 的 Connectors 或 Antigravity 的 Figma 外掛／MCP 已完成授權並開啟。

> [!TIP]
> `whoami` **不扣額度**，可以放心多試幾次。

---

## 🔗 關鍵觀念：就算連線成功，也一定要去 Figma 複製連結才可以使用！

很多學員第一次用 `whoami` 看到連線成功後，就直接問 AI：「幫我看一下我剛才畫的首頁設計稿」——結果 AI 會回答**「找不到你的檔案，請提供 Figma 連結」**。

### 為什麼只說「看我的 Figma」沒有用？
根據 Figma 官方文件，我們使用的遠端 MCP Server（`https://mcp.figma.com/mcp`）採用的是 **Link-based（網址驅動）** 機制，與舊版／本機桌面版（`127.0.0.1:3845` 自動抓取當前選取物件）不同：
* 遠端 MCP Server 運作在雲端，**不會自動監看你目前打開哪個 Figma 視窗**，也**無法直接搜尋列出你帳號裡的所有檔案**。
* AI 必須從你貼上的 **Figma 網址** 中，解析出 **`fileKey`（檔案代碼）** 與 **`node-id`（畫框／元件節點編號）**，才能向 Figma 伺服器讀取該畫面的圖層結構、Auto Layout 與 Variables（或寫入該檔案）。

### 在 Figma 取得連結的兩種標準做法

#### 情境 A：請 AI 讀取特定畫框、區塊或元件（最常用）
1. 在 Figma 畫布上**點選你要給 AI 看的那個 Frame 或 Component**。
2. 按右鍵選擇 **`Copy link to selection`**（快捷鍵：Mac `Cmd + L` ／ Windows `Ctrl + L`；也可直接複製瀏覽器網址列中帶有 `?node-id=xx-xx` 的網址）。
3. 把這段網址連同你的需求一起貼給 Claude.ai / ChatGPT / Antigravity。

#### 情境 B：請 AI 讀取整份檔案或寫入新內容（如建立 Variables、新增畫框）
1. 在 Figma 打開一個空白或既有的 Design 檔案。
2. 點擊右上角 **`Share` → `Copy link`**（或直接複製瀏覽器網址列的 `https://www.figma.com/design/<fileKey>/...` 網址）。
3. 把整份檔案網址貼入 Prompt，告訴 AI 要寫入這個檔案。

### 網址結構一看就懂 & 常見對話對照

```text
https://www.figma.com/design/AbCdEf12345/My-Design-System?node-id=12-34
                             └────┬────┘                          └──┬──┘
                               fileKey                            node-id
                             （哪一份檔案）                    （哪一個畫框/元件）
```

* ❌ **錯誤問法（AI 無法讀取）**：
  `幫我把剛剛在 Figma 畫的「首頁 Hero」轉成 HTML。`
* ✅ **正確問法（附上 `Copy link to selection` 網址）**：
  `請讀取這個 Figma Frame，依照其中的間距、字體與顏色變數幫我轉成 HTML：https://www.figma.com/design/AbCdEf12345/My-Design-System?node-id=12-34`

---

## 🧮 額度省著用：MCP 使用小技巧

即使有教育方案的每日 200 次，整班一起實作時也容易遇到每分鐘的上限。養成以下習慣：

1. **只選需要的 Frame**：在 Figma 中對**單一 Frame** 按右鍵 → **Copy link to selection**，把連結貼給 AI，不要丟整個檔案連結。
2. **大畫面先看地圖**：畫面很複雜時，先讓 AI 用 `get_metadata` 看結構，再針對子區塊讀取細節。
3. **一次說清楚**：「讀取這個 Frame，然後直接產出 HTML」比「先讀讀看」→「再讀一次顏色」→「再讀一次截圖」省很多次。

---

[🏠 返回 Figma × MCP 單元主頁](./README.md) ｜ [➡️ 下一章：AI 看得懂的 Figma 基本功](./02_AI看得懂的Figma基本功.md)
