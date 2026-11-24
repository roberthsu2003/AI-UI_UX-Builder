# 04. Browser 網頁逆向與人機協作完整工作坊

> **學習目標**：設計畫布的終點不只是「好看的圖檔」，而是**能直接對應真實網站與程式碼**！本篇帶你掌握 Pencil MCP 最具殺手級威力的 **`browser` 工具 6 大動作**（把任何線上網站一鍵逆向變成可編輯向量圖層）、畫布上的 **桌機／手機雙端即時預覽 `browser` 節點**、`@pen.dev/cli` 自動化指令，並透過一個四階段終極工作坊串聯起「AI 輔助 × 學生手動微調」的所有技能！

---

## 一、`browser` MCP 工具 6 大動作：把真實網站變回可編輯設計稿

以往看到喜歡的網站，只能截圖貼進畫布臨摹；現在透過 `pen.dev` 內建的 **`browser` MCP 工具**，AI 可以直接開啟網頁、分析 DOM 結構與 CSS 樣式，並原封不動轉換成畫布上的 `frame`、`text` 與 Flex Layout！

| Action 名稱 | 核心功能與常用參數 | 實戰應用場景 |
| :--- | :--- | :--- |
| **1. `load-page`** | 在側邊欄瀏覽器載入目標網址（`url`，例如參考網站或 `http://localhost:3000`）。 | 準備做網站評估、逆向學習或前端開發即時對照的第一步。 |
| **2. `import-to-canvas`** | **殺手級功能！** 將整個網頁或特定 CSS Selector（如 `"header"`、`".pricing-grid"`）直接轉換為**可編輯的 `.pen` 向量圖層**。支援 `width`（如 `1440` 或 `390`）與 `theme: "light" \| "dark"`。 | 看見很棒的導覽列、定價表或 Hero 區塊，直接抓進畫布拆解結構，馬上就能手動改字改色！ |
| **3. `screenshot-to-canvas`** | 將目前網頁視窗拍成靜態截圖，直接貼到畫布上當作參考基準（Reference）。 | 想在旁邊保留原網站視覺對照、或快速蒐集靈感牆（Moodboard）時使用。 |
| **4. `return-element`** | 根據 Selector 抓取網頁某個 DOM 元素的結構、計算樣式（Computed Styles）與文字內容回傳給 AI。 | 讓 AI 精確抄寫某個網站的字體大小、行高、間距與陰影參數，建立出精準的風格規範。 |
| **5. `return-screenshot`** | 擷取目前瀏覽器畫面回傳給 AI 進行視覺比對。 | 讓 AI 比對「`.pen` 設計稿」和「寫出來的網頁」之間有沒有像素跑版差異。 |
| **6. `cdp`** | 透過 Chrome DevTools Protocol 在網頁上執行真實點擊、捲動、輸入文字或切換 Tab。 | 想抓取「點擊按鈕後才會彈出來的 Modal 視窗」或「登入後的儀表板」？先用 `cdp` 點開它，再用 `import-to-canvas` 匯入畫布！ |

---

## 二、Code ↔ Website 雙向即時同步（畫布上的 `browser` 節點）

當你已經開始用 Antigravity 或 Cursor 寫出 React / HTML / Next.js 本地網頁（例如啟動在 `http://localhost:5173`），你可以請 AI 直接在 `.pen` 設計稿旁邊插入兩個 **`browser` 畫布節點**：

1. **桌機即時預覽框**：`width: 1440, height: 900`, `url: "http://localhost:5173"`
2. **手機即時預覽框**：`width: 390, height: 844`, `deviceId: "phone"`, `url: "http://localhost:5173"`

**為什麼這招在課堂上這麼強？**
* 畫布左邊是你和 AI 設計好的 `.pen` 設計系統與頁面稿件；
* 畫布右邊是正在運行的真實響應式網頁（而且直接在畫布裡就能用滑鼠滾輪捲動、點擊按鈕測試互動！）；
* 哪裡跟設計稿長得不一樣，在同一個無限畫布上用肉眼 1:1 對照一目了然！

---

## 三、延伸自動化：`@pen.dev/cli` 終端機工具速查

除了在圖形介面與 IDE 中互動操作，`pen.dev` 也提供官方 CLI 工具，方便寫進自動化腳本或批次產出大量頁面：

```bash
# 安裝與登入驗證
npm install -g @pen.dev/cli
pen login
pen status

# 1. 從零生成一份全新 .pen 設計檔
pen --out landing.pen --prompt "建立一個深色科技感 AI 筆記軟體登陸頁"

# 2. 讀取既有的 .pen 並指定修改產出新版本
pen --in landing.pen --out landing_v2.pen --prompt "將主視覺改為淺色編輯雜誌風格並增加常見問題區塊"

# 3. 從終端機直接匯出圖片
pen --in landing.pen --export landing.png

# 4. 啟動互動式設計對話模式
pen interactive -o landing.pen
```

---

## 四、終極綜合工作坊：四階段「AI 輔助 + 學生手動操作」完整專案實戰

接下來，我們將把前三個章節與本篇所學全部串在一起，模擬真實 **AI Product Builder** 從零打造一個「**線上產品官網首頁**」的完整四階段工作流程！

### 階段一：用 `browser` 逆向拆解優秀網站，手動觀察圖層秘密
先挑選一個你喜歡的簡潔 SaaS 或設計品牌網站（例如一個有質感導覽列與卡片列表的網頁），請 AI 把它的首屏與導覽列匯入畫布。

> [!IMPORTANT]
> **Prompt 撰寫注意事項（精準逆向匯入）**：
> 1. **先 `load-page` 再選擇性 `import-to-canvas`**：不要一次把整個幾萬像素長的網頁全部轉向量，建議先載入頁面並指定 `width: 1440`，針對重點區塊（如 `"header"` 或前 1200px）匯入與截圖對照。
> 2. **把參考區放在獨立角落**：要求 AI 用 `FindEmptySpace` 把逆向回來的參考區塊放在畫布最左側，跟等一下自己要設計的新頁面分開。

<details>
<summary>參考 Prompt（階段一：逆向網站進畫布，點擊展開）</summary>

```text
請幫我使用 Pencil MCP 的 browser 工具完成以下參考網站逆向收集：

1. 使用 load-page 載入網址：[請貼上你想參考的網站 URL，例如 https://linear.app]（寬度設定 1440）。
2. 先用 screenshot-to-canvas 將該網頁首屏截圖貼在目前 .pen 畫布左側當作視覺對照。
3. 接著使用 import-to-canvas 匯入該網頁的導覽列與 Hero 區塊（或指定關鍵 Selector）成為可編輯的向量圖層，放在截圖下方。
4. 執行 save 並告訴我匯入後的圖層名稱。
```

</details>

**學生手動操作任務**：
展開左側圖層面板，點擊剛剛 `import-to-canvas` 匯入進來的導覽列與標題！觀察真實高手網站的 `padding` 是多少？標題與副標題之間 `gap` 隔幾像素？試著直接**在畫布上把匯入的英文標題改打成你的繁體中文產品名稱**，感受把別人的網站拆進自己畫布的自由度。

---

### 階段二：載入 `DESIGN.md` 或 `get_style`，讓 AI 生成變數、元件與完整首頁

現在我們要為自己的產品正式設計！你可以結合專案裡的 `DESIGN.md`（或請 AI 呼叫 `get_style` 挑選風格原型）。

> [!IMPORTANT]
> **Prompt 撰寫注意事項（全頁 AI 建構規範）**：
> 1. **強制先建設計系統**：要求 AI 先跑 `SetVariables`（Light/Dark 變數）與 `reusable: true` 元件（按鈕、功能卡片），再組裝完整 `LandingPage`（1440px 寬）。
> 2. **混合搭配進階工具**：明確指定主視覺背景或裝飾運用 `shader` 或 `script`，Logo 用 `Generate("svg")`，情境圖用 `Generate("ai")` 或 `Generate("stock")`。
> 3. **自我排版檢核**：強制要求 AI 跑完 `Insert` 後用 `Get` 檢查 `ctx.problems` 並附上 `TakeScreenshot`。

<details>
<summary>參考 Prompt（階段二：生成完整設計系統與首頁，點擊展開）</summary>

```text
現在請參考我專案中的 @DESIGN.md（若無指定則請先呼叫 get_style 載入 "Modular Bento Showcase" 風格原型），在剛才參考區的右側空白處（FindEmptySpace），為我的產品「FocusFlow 專注番茄鐘筆記軟體」打造完整的 1440px 首頁設計：

1. 設計變數（SetVariables）：建立包含 light / dark 雙主題的色彩與圓角變數（$bg-page, $bg-card, $text-title, $text-body, $brand-accent）。
2. 元件系統（Reusable Components）：
   - 建立 Navbar（含 Generate("svg") 生成的品牌向量 Logo、4 個導覽連結與 CTA 按鈕）。
   - 建立 FeatureCard 主元件（reusable: true，搭配 lucide icon 與卡片文字）。
3. 頁面結構（垂直 Flex 容器 MainLandingPage，width: 1440）：
   - Hero 區：左文右圖或置中設計，主視覺區使用 Generate("ai") 生成乾淨立體的生產力桌面場景圖，背景可搭配微光漸層或客製 shader / script 裝飾。
   - Bento 功能特色區：用 Copy 實例化 3~4 張 FeatureCard，透過 descendants 填寫不同產品特色與圖示。
   - 頁尾 Footer。
4. 驗證與存檔：執行 Get 檢查所有子節點的 ctx.problems 確保無文字截斷或重疊，執行 TakeScreenshot 回報結果並 save。
```

</details>

---

### 階段三：學生手動精修 × `note` 批註 × 框選交棒給 AI 改版

這是最體現 **「以學生為主導、AI 為副駕駛」** 的精華練習！請學生親自接手修改這份 AI 產出的首頁：

1. **學生手動調整 4 個細節**：
   * 在左側切換深淺主題測試變數是否正常連動。
   * 選取 Hero 主標題，手動調整字級與 `lineHeight`，並用 **`Shift + A`** 與 Layout 面板微調各區塊之間的 `gap`。
   * 若背景有掛載 `script` 或 `shader`，點選它並拉動右側面板滑桿調出你最滿意的色彩與動態密度。
   * 按工具列新增 **`note` 便利貼**，貼在「Bento 功能特色區」旁邊，寫下你的修改意見（例如：「*卡片圓角太小，且希望加上一顆切換月費/年費的開關元件*」）。
2. **滑鼠框選「Bento 功能特色區」保持選取狀態**，接著貼上下方 Prompt 讓 AI 透過 `get_app_state` 讀懂你的選取與便利貼並執行改版！

<details>
<summary>參考 Prompt（階段三：AI 偵測選取區與便利貼進行局部改版，點擊展開）</summary>

```text
請先呼叫 get_app_state 讀取我目前在 pen.dev 畫布上選取的區塊，並一併讀取畫布旁邊黃色 note 便利貼裡的修改需求。

請只針對我選取的這個區塊與主元件進行修改，千萬不要更動到 Hero 區與頁尾：
1. 依照便利貼中的需求完成視覺與結構改版。
2. 若需要新增互動開關或標籤狀態，請建立成完整的 variants（元件變體集），讓我在畫布上也能手動切換狀態。
3. 修改完畢後，再執行一次 Get 的 ctx.problems 檢查並 TakeScreenshot 讓我確認，最後 save。
```

</details>

---

### 階段四：匯出程式碼與畫布即時 `browser` 節點雙向驗收

設計稿定案後，我們要把設計變成真正跑在瀏覽器裡的網頁，並把網頁拉回畫布並排驗收！

<details>
<summary>參考 Prompt（階段四：匯出程式碼並建立畫布雙端預覽，點擊展開）</summary>

```text
設計稿已經確認定案！請幫我完成最後交付與雙向驗證：

1. 使用 Export 將 MainLandingPage 匯出為：
   - 高解析度設計圖：./exports/focusflow_design.png（scale: 2）
   - 前端網頁程式碼：./exports/index.html（format: "html-tailwind"）
2. （若我已在本地啟動預覽伺服器，例如 http://localhost:5500）請在 MainLandingPage 的右側空白處，插入兩個畫布 browser 節點做即時對照：
   - 桌機即時預覽：1440x900
   - 手機即時預覽：390x844（deviceId: "phone"）
3. 最後執行一次 save 確保所有交付成果皆已儲存。
```

</details>

---

## 本章總結檢核：你掌握所有 `pen.dev` 工具了嗎？

完成以上 4 篇學習與實戰後，請檢核自己是否已經能夠自如運用：
- [ ] **手動 UI 與快捷鍵**：能獨立使用 `V`/`H`/`A`/`R`/`O`/`P`/`T`、`Shift+A`（Flex）、`Cmd+Opt+K`（Component）與右側 Fills/Effects 面板調整設計。
- [ ] **人機協作交棒**：懂得利用 **選取區塊（Selection）+ `note` 便利貼** 搭配 `get_app_state`，讓 AI 精準執行局部改版而不破壞整份設計稿。
- [ ] **雙主題與元件架構**：懂得用 `SetVariables` 管理 Light/Dark 變數，並用 `reusable` / `variants` / `descendants` 管理可復用組件。
- [ ] **進階生成與程式特效**：體驗過 `Generate` 六大生圖去背轉向量模式，並能在右側面板直接操作 AI 寫出的 `script` 與 `shader` 滑桿。
- [ ] **網頁逆向與交付**：能用 `browser` 工具將參考網站轉回可編輯向量圖層，並用 `Export` 輸出高清圖與前端網頁碼。
