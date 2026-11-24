# 02. Pencil MCP 六大工具與 Execute 十七項 API 實戰

> **學習目標**：搞懂 AI 是怎麼「看懂並改寫」你的 `.pen` 畫布的！本篇完整拆解 **6 大 Pencil MCP 工具** 與 **`execute` 內建 17 項 API 函式**，並教你如何建立支援 Light/Dark 雙主題的 Design Tokens、用 `ctx.problems` 自動抓出文字溢出版面 Bug，以及實現「學生在畫布上點選區塊 → AI 立刻接手精修」的人機協作工作流。

---

## 一、為什麼 AI 不能直接用 `Read` / `Edit` 讀寫 `.pen` 檔案？

`.pen` 檔案採用專屬加密與結構化打包格式，如果強行用一般的文字讀取或編輯工具去打開它，只會看到無法解析的內容，甚至毀損設計檔。因此，所有針對 `.pen` 畫布的操作，**100% 必須透過 Pencil MCP Server 提供的官方工具進行**。

---

## 二、Pencil MCP 6 大核心工具完整拆解

當你在 Antigravity、Claude 或 Cursor 中連線 Pencil MCP 後，AI 代理手上共有這 **6 把萬用工具**：

| 工具名稱 | 核心功能與輸入重點 | 什麼時候會觸發它？ |
| :--- | :--- | :--- |
| **1. `get_app_state`** | 取得目前開啟的文件路徑 `uri`、帳號登入狀態，以及**使用者滑鼠正在選取的節點列表（Selection）**。 | 每次對話一開始，或是**學生在畫布上框選某個區塊請 AI 修改時**，AI 第一步一定先呼叫它！ |
| **2. `read_skill`** | 讀取官方內建的設計最佳實踐手冊（包含 `SKILL.md`、`pen-schema.md`、`execute.md`、`generate.md`、`guide/components.md`、`scripts-and-shaders.md`、`code-website.md`、`whiteboard.md`）。 | AI 需要查詢最新的 Schema 規格、元件插槽寫法或 Shader 語法時自動讀取。 |
| **3. `get_style`** | 載入官方內建的 **26 種專業視覺風格原型（Style Archetypes）**。 | 當你想請 AI 套用成熟設計品味（例如 `Artisan Editorial` 文青雜誌風、`Modular Bento Showcase` 模組便當盒、`Blueprint Technical` 工程藍圖風、`Dark Centered Platform` 深色 SaaS、`Soft Bento`、`Split Inverse Showcase` 等）時呼叫。 |
| **4. `execute`** | 在指定的 `.pen` 文件（`uri`）上執行一段 **JavaScript 腳本**，批次完成建立變數、插入節點、排版檢查與截圖。 | 幾乎所有的畫布生成、修改、檢查與匯出都在這支工具中完成。若腳本有局部語法小錯，也支援傳入 `editId` + `edits` 熱修補重跑，不用整段重寫！ |
| **5. `browser`** | 驅動內建側邊欄瀏覽器或畫布上的 `browser` 節點，執行網頁載入、**網頁逆向轉向量（`import-to-canvas`）**、截圖與互動點擊。 | 要參考外部網站、重構舊網站，或將 `localhost` 前端畫面同步放上畫布比對時使用（詳見 [第 04 章](./04_Browser網頁逆向與人機協作完整工作坊.md)）。 |
| **6. `save`** | 將記憶體中的畫布變更正式寫入磁碟上的 `.pen` 檔案。 | 每當完成一段重大修改並視覺驗證無誤後呼叫，確保學生的設計進度不會遺失。 |

---

## 三、`execute` 內建 17 項 API 函式全實作詳解

在 `execute` 工具執行的 JavaScript 環境中，官方內建了 **17 個核心 API 函式**（三大類別函式 + `Generate` 六大子模式）。身為 AI Product Builder，你看懂這些 API 就能寫出極度精準的 Prompt，甚至直接把這套邏輯交給 AI 批次施工。

### 第一類：畫布空間定位與設計系統變數（3 項）

#### 1. `FindEmptySpace(width, height, padding, direction, relativeToNodeId)`
在無限畫布上自動尋找一塊**不會撞到任何現有設計稿**的空白座標 `{ x, y }`。
* **`direction`**：可選 `"right"`、`"bottom"`、`"left"`、`"top"`。
* **實戰價值**：AI 新建頁面或比稿變體時，再也不會疊在學生剛辛辛苦苦畫好的圖層上面！

```javascript
const pos = FindEmptySpace(1440, 900, 80, "right");
```

#### 2. `SetVariables(variables, replace)`
建立整個設計系統的 **Design Tokens（色彩、字體、間距、圓角）**，更強大的是它原生支援 **Light / Dark 雙主題（Theme Axes）**！在節點屬性中只要寫 `"$bg-surface"`，就能實現「一鍵切換深淺色模式」。

```javascript
SetVariables({
  "bg-surface": [
    { value: "#FFFFFF", theme: { mode: "light" } },
    { value: "#0F172A", theme: { mode: "dark" } }
  ],
  "text-primary": [
    { value: "#1E293B", theme: { mode: "light" } },
    { value: "#F8FAFC", theme: { mode: "dark" } }
  ],
  "brand-accent": "#2563EB",
  "radius-card": 16
});
```

#### 3. `GetVariables()`
讀取目前畫布上所有已定義的變數與主題清單，方便 AI 在改版時沿用既有的色票，不會自創衝突的顏色。

---

### 第二類：節點 CRUD、深層覆寫與元件插槽（6 項）

#### 4. `Insert(parent, data, index)`
將完整的節點樹插入指定父容器（傳入 `"root"` 代表直接放在最外層畫布，或傳入某個 Frame ID）。

```javascript
const btnId = Insert("root", {
  type: "frame",
  name: "PrimaryButton",
  reusable: true,
  x: pos.x,
  y: pos.y,
  layout: "horizontal",
  padding: [12, 24],
  gap: 8,
  alignItems: "center",
  fill: "$brand-accent",
  cornerRadius: 10,
  children: [
    { type: "icon", id: "btn-icon", iconFontFamily: "lucide", iconFontName: "sparkles", width: 18, height: 18, fill: "#FFFFFF" },
    { type: "text", id: "btn-label", content: "立即體驗", fontSize: 15, fontWeight: "600", fill: "#FFFFFF" }
  ]
});
```

#### 5. `Copy(sourceId, parent, overrides, index)`
複製既有節點，或是從 Reusable Component（如上面的 `PrimaryButton`）**實例化一個 `ref` 分身**！最棒的是可搭配 **`descendants`** 一次覆寫內部任意子節點的文字、圖示或顏色：

```javascript
Copy(btnId, targetContainerId, {
  descendants: {
    "btn-icon": { iconFontName: "arrow-right" },
    "btn-label": { content: "查看定價方案" }
  }
});
```

#### 6. `Update(id, properties)`
針對單一節點做局部屬性更新（例如學生點選某個按鈕請 AI 換色或改大圓角）。若想**移除**某個屬性，把值設為 `null` 即可。

```javascript
Update(selectedNodeId, {
  cornerRadius: 999,
  padding: [14, 32]
});
```

#### 7. `Replace(id, data)`
替換整個節點樹！這在 **元件插槽（`slot`）** 設計中超級好用：當主元件裡預留了一個 `slot: []` 空白插槽框時，可以用 `Replace` 把整段客製化的表單、圖表或標籤組塞進實例的插槽裡。

#### 8. `Move(ids, parent, index)` & 9. `Delete(ids)`
* `Move(["card-1", "card-2"], newGridFrameId, 0)`：把散落的元件收編進新的 Flex 容器並排好順序。
* `Delete(["old-badge"])`：刪除不需要的節點。

---

### 第三類：AI 生成、去背換景與轉向量（1 支函式 × 6 大子模式）

#### 10. `Generate(type, ...args)`
透過程式碼直接呼叫 AI 生圖、Unsplash 圖庫、SVG 向量生成、去背、換背景與點陣圖描邊轉向量（共 6 種模式，因內容極為豐富，我們將在 **[第 03 章](./03_Generate生圖轉向量與Script_Shader特效.md)** 逐一完整實作）。

---

### 第四類：畫布檢查、排版除錯、截圖與匯出（4 項）

#### 11. `Get(query, opts)`（最被低估的排版除錯神器！）
`Get` 不只能讀取 `"selection"`（目前選取區）或指定 ID 的結構，它還支援傳入一個 **Visitor 函式 `(node, ctx) => ...`**，能精準檢查每個元素的實際渲染邊界 **`ctx.bounds`** 與系統自動偵測到的排版異常 **`ctx.problems`**！

```javascript
const issues = [];
Get([pageFrameId], (node, ctx) => {
  if (ctx.problems && ctx.problems.length > 0) {
    issues.push({
      id: node.id,
      name: node.name,
      problems: ctx.problems, // 例如文字被截斷、內容溢出剪裁邊界等問題！
      bounds: ctx.bounds
    });
  }
});
Print(JSON.stringify(issues, null, 2));
```

#### 12. `Print(message)`
將除錯訊息、排版檢查報告或搜尋到的節點 ID 印出給 AI 代理判讀。

#### 13. `TakeScreenshot(nodeId, opts)`
拍下指定節點或整頁設計稿的即時畫面回傳給 AI。**專業 AI 設計工作流一定要包含「Visual Verification（視覺驗收）」**：寫完設計稿後讓 AI 自己看一次截圖，檢查對比度、留白與文字換行是否協調。

#### 14. `Export(nodeIds, opts)`
直接從畫布輸出圖檔或前端程式碼！支援以下格式：
* **圖片與文件**：`"png"`、`"jpeg"`、`"webp"`、`"pdf"`、`"svg"`（可設定 `scale: 2` 匯出 2x Retina 高清圖）。
* **前端程式碼**：`"html-tailwind"`（直接轉出 Tailwind CSS 網頁碼）、`"html-css"`（純 HTML + CSS）。

```javascript
const result = Export([pageFrameId], {
  format: "html-tailwind",
  outputPath: "./exports/landing.html"
});
```

---

## 四、動手實作 Lab 2：雙主題 Design Tokens + 「學生點選、AI 修改」接力賽

這個實驗將完整演練 **Design Tokens 變數、Component 實例化、`Get` 排版檢查**，以及最實用的 **「學生手動點選畫布元素 → AI 透過 `get_app_state` 接手局部改版」**！

### 步驟一：用 AI 建立支援 Light / Dark 的設計系統與兩張卡片
請開啟新的 `.pen` 檔案（或延續練習檔），用以下注意事項撰寫 Prompt 交給 AI 執行。

> [!IMPORTANT]
> **Prompt 撰寫注意事項（Design Tokens 與雙主題管理）**：
> 1. **要求先執行 `SetVariables`**：不要讓 AI 把顏色寫死在卡片上（如 `#FFFFFF`），必須要求建立包含 `mode: "light"` 與 `mode: "dark"` 的語意變數（如 `$bg-card`、`$text-main`、`$accent`），並把變數名稱綁定到節點屬性上。
> 2. **要求主元件與實例分離**：至少做一個 `reusable: true` 的卡片主元件，再用 `Copy` 生出 2 張不同文案的 `ref` 卡片（透過 `descendants` 覆寫文案）。
> 3. **要求跑 `Get` + `ctx.problems` 自檢**：讓 AI 生成完立刻驗證有沒有文字被裁切。

<details>
<summary>參考 Prompt（階段一：建立雙主題系統與卡片，點擊展開）</summary>

```text
請幫我透過 Pencil MCP 在目前的 .pen 檔案中，建立一套「訂閱方案定價系統（Pricing System）」，並遵守以下執行順序：

1. 使用 SetVariables 建立支援 light / dark 雙主題的變數：
   - bg-page: light #F8FAFC / dark #09090B
   - bg-card: light #FFFFFF / dark #18181B
   - border-subtle: light #E2E8F0 / dark #27272A
   - text-heading: light #0F172A / dark #FAFAFA
   - text-body: light #475569 / dark #A1A1AA
   - brand-primary: light #4F46E5 / dark #6366F1
2. 用 FindEmptySpace 找空白區，建立一個 reusable: true 的 PricingCard 主元件（寬度 320px，vertical Flex，padding: 24，gap: 16，使用 "$bg-card"、"$border-subtle" 等變數）。裡面包含方案名稱、價格、3 條帶 lucide "check" icon 的功能清單，以及一顆 CTA 按鈕。
3. 建立一個名為 PricingSection 的橫向容器（horizontal Flex，gap: 24，背景綁定 "$bg-page"，padding: 48），在裡面用 Copy 從 PricingCard 實例化兩張卡片，透過 descendants 覆寫第一張為「入門版 NT$290/月」、第二張為「專業版 NT$790/月」。
4. 執行 Get 搭配 visitor 檢查 ctx.problems 確認無任何裁切或重疊問題，再執行 TakeScreenshot 驗收並 save。
```

</details>

### 步驟二：學生在 `pen.dev` 介面手動體驗主題切換與點選交棒
1. **一鍵測試深淺主題**：在 `pen.dev` 右側面板找到 **Variables / Theme** 切換器，親手把 `PricingSection` 的 `mode` 從 `light` 切換成 **`dark`**！你會看到卡片底色、文字對比與品牌色一瞬間全部自動反轉，這就是正確綁定 `$variable` 的威力。
2. **手動調整與局部圈選**：
   * 在左側圖層或畫布上，試著點選「專業版 NT$790/月」那張卡片分身（`ref`），手動把它裡面的按鈕底色換成亮眼的強調色，或是稍微加粗邊框。
   * 接著，**用滑鼠選取「專業版卡片」保持反白選取狀態**，這時候不要動它，直接轉頭對 AI 下達下一段局部精修指令！

### 步驟三：AI 透過 `get_app_state` 偵測你的選取並進行局部精修

<details>
<summary>參考 Prompt（階段二：點選接力精修並匯出 HTML，點擊展開）</summary>

```text
請先呼叫 get_app_state 讀取我目前在 pen.dev 畫布上「正在選取的節點（Selection）」。

針對我選取的這張專業版定價卡片，請幫我做以下精修（保留原本變數架構，不要影響到隔壁的入門版卡片）：
1. 在卡片最上方插入一個「最受歡迎 🔥」的膠囊徽章（frame + text）。
2. 為這張卡片加上更明顯的品牌光暈 shadow，讓它在畫面上成為視覺焦點。
3. 修改完成後，用 Get 的 ctx.problems 檢查是否超出容器邊界，拍一張截圖確認，最後用 Export 將整個 PricingSection 匯出成 html-tailwind 格式到 ./exports/pricing.html，並執行 save。
```

</details>
