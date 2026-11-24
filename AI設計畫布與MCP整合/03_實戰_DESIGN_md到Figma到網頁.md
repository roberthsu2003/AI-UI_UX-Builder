# 第三章：實戰 — DESIGN.md → Figma → 網頁原型 🔁

[⬅️ 上一章：AI 看得懂的 Figma 基本功](./02_AI看得懂的Figma基本功.md) ｜ [🏠 返回單元主頁](./README.md)

這一章把前面學的全部串起來。你會沿用 [建立自己的 `DESIGN.md`](../建立自己的DESIGN_md/README.md) 單元做好的 `my-design-lab/` 資料夾，走完一次完整流程：

```text
3-A  DESIGN.md ──AI 寫入──▶ Figma Variables
3-B                       ──AI 寫入──▶ Button / Card 元件
3-C                       ──AI 寫入──▶ 首頁初稿 ──▶ 🧑‍🎨 你來調整定稿（本章重點）
3-D  Figma 定稿 ──AI 讀取──▶ index.html
3-E  Figma 改了什麼 ──AI 讀取──▶ 回寫 DESIGN.md（保持單一事實來源）
```

> [!NOTE]
> **前置條件**：
> * 已完成 [第一章](./01_帳號方案與MCP連線設定.md) 的 MCP 連線，`whoami` 顯示 **Education 方案 + Full 座位**（3-A ～ 3-C 的寫入功能需要）。
> * 已有上一單元的 `DESIGN.md`（若沒有，可先用 [DESIGN_template.md](../建立自己的DESIGN_md/DESIGN_template.md)）。
> * `use_figma` 寫入功能目前為 **Beta**，AI 的產出品質不穩定是正常的，**每一步都要用眼睛檢查**。

開始前，請開啟你已連上 Figma MCP 的 AI 工具（**Claude.ai / ChatGPT** 並開啟新對話，或在 **Antigravity** 開啟 `my-design-lab` 資料夾並附上 `@DESIGN.md`）：

在 Figma 建立一個新的 Design 檔（或請 AI 用 `create_new_file` 建立），命名為 `學號_姓名_設計系統`，複製檔案網址備用。

---

## 🎨 實作 3-A：DESIGN.md → Figma Variables（10 分鐘）

```text
請讀取 @DESIGN.md 頂部的 YAML tokens，用 Figma MCP 在這個檔案中建立 Variables：
<貼上 Figma 檔案網址>

規則：
1. 建立 4 個 Collection：Colors、Radius、Spacing、Typography
2. 變數名稱與 DESIGN.md 的 token 名稱完全相同（例如 canvas、primary、radius/md）
3. 數值類（radius、spacing）請建立為 Number 變數
4. 另外建立一個名為 "Style Guide" 的頁面，把所有色票用方塊排列出來並套用對應變數
完成後列出你建立的所有變數。
```

**用眼睛檢查：**
- [ ] 打開 Variables 面板，數量與 `DESIGN.md` 一致
- [ ] 「Style Guide」頁面的色票方塊點下去，Fill 顯示的是**變數名稱**而不是色碼
- [ ] 跟上一單元的 `style-guide.html` 並排比較，顏色一樣

---

## 🧩 實作 3-B：AI 建立 Button 與 Card 元件（15 分鐘）

```text
請依照 @DESIGN.md 第 4 章 Component Stylings，在同一個 Figma 檔的 "Components" 頁面中建立：

1. Button 元件
   - Variant 屬性：Type = Primary / Secondary，State = Default / Hover / Disabled（共 6 個）
   - 使用 Auto Layout，Hug contents
   - 所有顏色、圓角、間距都必須套用 3-A 建立的 Variables，不可寫死數值
2. Card/Product 元件
   - 結構：Image（灰色佔位）→ Content（Title、Description、Price）→ Button/Primary instance
   - 圖層命名使用英文、用途導向
文字一律使用 Noto Sans TC（標題用 Noto Serif TC）。
```

**用眼睛檢查（對照第二章學過的基本功）：**
- [ ] 圖層有沒有出現 `Frame 123`、`Group 4` 這種名字？有的話請 AI 重新命名
- [ ] 把 Button 的文字改長，會不會自動變寬？（Auto Layout 有沒有做對）
- [ ] Disabled 狀態符合 `DESIGN.md` 的透明度規定嗎？

> [!TIP]
> **AI 做錯了，用說的修就好**：例如「Card 的圖片圓角應該是 12px，請修正並套用變數」。但**如果同樣的錯一直出現，代表 `DESIGN.md` 沒寫清楚**——回去補規範（參考上一單元實作 2-F）。

---

## 🧑‍🎨 實作 3-C：AI 排首頁初稿 → 你來調整定稿（30 分鐘，本章重點）

### Step 1：讓 AI 排初稿（5 分鐘）

```text
請在 "Home" 頁面建立一個 1440 寬的桌機版首頁 Frame，以及一個 375 寬的手機版 Frame。
內容：Header（Logo + 4 個導覽項目 + 主要按鈕）、Hero、3 張 Card/Product、品牌故事區塊、Footer。
規則：
- 只能使用 Components 頁面中的元件 instance 與既有 Variables
- 所有區塊使用 Auto Layout，區塊上下間距使用 spacing/section
- 遵守 @DESIGN.md 第 5 章（版面）、第 7 章（Do's and Don'ts）、第 8 章（回應式）
- 文案請用符合我專案主題的真實中文，不要用 Lorem ipsum
```

### Step 2：先存檔備份 AI 版本

在 Figma 中對 AI 產出的首頁 Frame 按 `Cmd/Ctrl + D` 複製一份，命名為 `Home - AI 初稿`，**之後不要動它**。

### Step 3：你來當設計師（25 分鐘）⭐

AI 會「照規格排」，但不會「為使用者想」。請**手動**在 `Home` 上逐項檢查並修正：

| 檢查面向 | 問自己的問題 | 對應課程觀念 |
| :--- | :--- | :--- |
| **資訊層級** | 一進來 3 秒內，看得出這是什麼網站、要我做什麼嗎？ | 視覺層級 |
| **視線動線** | 眼睛的移動是否順暢（Z 型／F 型）？CTA 在動線上嗎？ | [佈局模式](../網站架構觀念/佈局模式/README.md) |
| **留白節奏** | 區塊之間是否太擠或太散？相關的東西有靠在一起嗎？ | 接近原則 |
| **導覽** | 導覽項目是否就是使用者最想去的地方？順序合理嗎？ | [導覽列](../網站架構觀念/導覽列/README.md) |
| **一致性** | 按鈕、卡片、標題樣式是否全頁統一？ | [一致性](../網站架構觀念/一致性/README.md) |
| **手機版** | 375 版本的 CTA 拇指點得到嗎？卡片有改成單欄嗎？ | RWD |

**📎 小範例：學生常做的修正**

```text
AI 初稿：Hero 標題 + 副標 + 兩顆一樣大的按鈕並排
問題   ：兩顆按鈕視覺權重相同，使用者不知道該點哪個
修正   ：「立即預約」維持 Primary，「看菜單」改成 Secondary，並把副標縮短成一句話
```

### Step 4：記錄你的修改

在 `Home` 旁邊放一個文字框，條列**至少 5 項**你做的修改與理由（例如：「把 3 張卡片的價格移到標題下方，因為價格是使用者比較時最先看的資訊」）。

> [!IMPORTANT]
> **這份「修改紀錄」是本單元評分最重的部分。** 它證明了你不是只會叫 AI 畫圖，而是能判斷設計好壞的 UI/UX 設計者。

---

## 💻 實作 3-D：Figma 定稿 → 網頁原型（15 分鐘）

對你修改完的 `Home` 桌機版 Frame 按右鍵 → **Copy link to selection**：

```text
請用 Figma MCP 讀取這個 Frame：<貼上 Home 桌機版連結>
以及手機版：<貼上 Home 手機版連結>

請產生 index.html（單一檔案）：
1. 先用 get_variable_defs 取得變數，定義在 :root CSS 變數中，名稱與 Figma Variables 一致
2. 版面以 Figma 定稿為準，桌機與手機兩個 Frame 對應到 @DESIGN.md 第 8 章的斷點
3. 使用語意化 HTML（header、main、section、footer）
4. 完成後列出：Figma 中有、但你無法 1:1 還原的地方
```

**用眼睛檢查**：瀏覽器開啟 `index.html`，與 Figma 並排比對；用 Chrome 開發者工具切換到 375px 寬度檢查手機版。

> [!TIP]
> **省額度**：一次把桌機版與手機版的連結都給 AI，並說清楚要產出什麼，通常 3～6 次讀取就能完成。

---

## 🔄 實作 3-E：反向同步 — Figma 改了，DESIGN.md 也要改（10 分鐘）

在 3-C 調整時，你可能改了某些顏色或間距。如果只改 Figma 沒改 `DESIGN.md`，下次用 AI 生成新頁面時又會變回舊的樣子。

```text
請用 Figma MCP 讀取這個檔案的 Variables：<貼上 Figma 檔案網址>
並與 @DESIGN.md 的 YAML tokens 比對：
1. 用表格列出：只在 Figma 有、只在 DESIGN.md 有、兩邊數值不同 的項目
2. 先不要修改，等我確認哪一邊才是正確的
```

確認後再請 AI 更新 `DESIGN.md`，並在 `## Changelog` 記錄：

```markdown
- v1.2：依 Figma 定稿同步，primary_hover 由 #734C2F 改為 #6A4529（原色在 Hover 時對比不足）
```

> [!NOTE]
> **誰才是「單一事實來源」？** 專業團隊通常以 Figma Variables 為準，`DESIGN.md` 跟著同步；小型專案或 vibe coding 時，以 `DESIGN.md` 為準也可以。**重點是兩邊不能各說各話。**

---

## 🧯 常見問題排除

| 狀況 | 可能原因 | 解法 |
| :--- | :--- | :--- |
| AI 說它找不到 Figma 工具 | MCP 未連線或授權過期 | 重新進入 Claude.ai / ChatGPT 的 Connectors 或 Antigravity MCP 設定完成授權並啟用 |
| AI 說沒有寫入權限 | 方案是 Starter，或座位不是 Full | 用 `whoami` 檢查；確認檔案放在 Education Team 內 |
| 出現 Rate limit 錯誤 | 每分鐘或每日讀取次數用完 | 等一分鐘再試；改用 Copy link to selection 只讀單一 Frame |
| 中文字變成方框或預設字體 | 字體沒有指定或拼錯 | 在 Prompt 中明確指定 `Noto Sans TC` / `Noto Serif TC`（Figma 內建 Google Fonts） |
| AI 畫出的圖層都是 `Frame 123` | Prompt 沒要求命名 | 加一句「圖層使用英文、用途導向命名」，或請 AI 整份重新命名 |
| AI 無法放入照片 | `use_figma` 無法自行加入圖片 | 先用灰色佔位，最後手動放圖；或另外上傳圖片素材 |

---

## 📦 本單元作業繳交

請繳交 **Figma 檔案分享連結**（設為「Anyone with the link can view」）+ `my-design-lab/` 資料夾：

| 項目 | 說明 | 配分 |
| :--- | :--- | :--- |
| Figma：Variables 與 Style Guide 頁 | 與 `DESIGN.md` 一致，元件皆套用變數 | 15% |
| Figma：Components 頁 | Button 6 種 Variants、Card 結構與命名正確、使用 Auto Layout | 20% |
| Figma：`Home - AI 初稿` vs `Home` 定稿 | 桌機 + 手機版，**至少 5 項人工修改與理由** | **35%** |
| `index.html` | 與 Figma 定稿相符，手機版不破版 | 20% |
| `DESIGN.md` Changelog | 記錄 3-E 的反向同步 | 10% |

---

[⬅️ 上一章：AI 看得懂的 Figma 基本功](./02_AI看得懂的Figma基本功.md) ｜ [🏠 返回單元主頁](./README.md)
