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

### 方式一：Claude Code（推薦）

在終端機輸入以下**其中一種**：

```bash
# 推薦：安裝 Figma 官方外掛（含 MCP 連線 + 官方 Skill，AI 操作 Figma 會更穩定）
claude plugin install figma@claude-plugins-official

# 或：只手動加入 MCP 連線
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

接著啟動 Claude Code，輸入 `/mcp` → 選擇 `figma` → **Authenticate**，瀏覽器會跳出 Figma 授權畫面，按下允許即可。

### 方式二：Cursor

在 Agent 對話框輸入 `/add-plugin figma`；或到 **Cursor Settings → MCP → Add new global MCP server**，貼上：

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

### 方式三：VS Code（需啟用 GitHub Copilot）

1. `Cmd/Ctrl + Shift + P` → 執行 `MCP: Add Server` → 選擇 `HTTP`。
2. URL 填 `https://mcp.figma.com/mcp`，Server ID 填 `figma`。
3. 開啟 Chat，切換為 **Agent** 模式。

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
- [ ] AI 說找不到 figma 工具 → 回頭確認 `/mcp` 有完成 Authenticate。

> [!TIP]
> `whoami` **不扣額度**，可以放心多試幾次。

---

## 🧮 額度省著用：MCP 使用小技巧

即使有教育方案的每日 200 次，整班一起實作時也容易遇到每分鐘的上限。養成以下習慣：

1. **只選需要的 Frame**：在 Figma 中對**單一 Frame** 按右鍵 → **Copy link to selection**，把連結貼給 AI，不要丟整個檔案連結。
2. **大畫面先看地圖**：畫面很複雜時，先讓 AI 用 `get_metadata` 看結構，再針對子區塊讀取細節。
3. **一次說清楚**：「讀取這個 Frame，然後直接產出 HTML」比「先讀讀看」→「再讀一次顏色」→「再讀一次截圖」省很多次。

---

[🏠 返回 Figma × MCP 單元主頁](./README.md) ｜ [➡️ 下一章：AI 看得懂的 Figma 基本功](./02_AI看得懂的Figma基本功.md)
