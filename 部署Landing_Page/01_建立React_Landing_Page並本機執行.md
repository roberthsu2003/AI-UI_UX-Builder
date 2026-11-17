# 第一章：建立 React Landing Page 並在本機執行 💻

[🏠 返回部署單元主頁](./README.md) ｜ [➡️ 下一章：用 GitHub Actions 部署到 GitHub Pages](./02_用GitHub_Actions部署到GitHub_Pages.md)

---

## 🧰 實作 1-1：安裝 Node.js 並建立專案（10 分鐘）

### Step 1：安裝 Node.js

到 [Node.js 官網](https://nodejs.org/) 下載 **LTS（長期支援）版本** 並安裝。安裝完成後打開終端機確認：

```bash
node -v    # 應顯示 v22 以上
npm -v
```

> [!NOTE]
> **Node.js 是什麼？** 讓電腦能執行 JavaScript 開發工具的環境。**npm** 是它附帶的套件管理工具，負責下載 React、Vite 等套件。你只需要裝一次。

### Step 2：用 Vite 建立 React 專案

```bash
cd my-design-lab                     # 進入前面單元的練習資料夾（放在哪裡都可以）
npm create vite@latest my-landing -- --template react
cd my-landing
npm install                          # 下載套件，會產生 node_modules 資料夾
```

> 💡 **Vibe Coding 版本**：也可以直接在 Claude Code 中說「**請用 Vite 建立一個名為 my-landing 的 React 專案並安裝套件**」，AI 會幫你執行上面的指令。但第一次建議自己打一遍，知道發生了什麼事。

### Step 3：看懂專案結構

```text
my-landing/
├── index.html          ← 網頁入口（通常只改 <title>）
├── package.json        ← 專案的「身分證」：套件清單與指令
├── vite.config.js      ← Vite 設定（第二章部署時會改）
├── public/             ← 不需處理、原樣複製的檔案（如 favicon）
├── src/                ← ⭐ 你和 AI 主要工作的地方
│   ├── main.jsx        ← 啟動 React（通常不用改）
│   ├── App.jsx         ← 整個頁面的組合處
│   ├── App.css
│   ├── index.css       ← 全站樣式（實作 1-3 放 CSS 變數）
│   └── assets/         ← 圖片素材
├── node_modules/       ← npm install 下載的套件（不要動、不要上傳）
└── .gitignore          ← 告訴 Git 哪些檔案不要上傳（已包含 node_modules、dist）
```

---

## ▶️ 實作 1-2：本機執行，感受即時更新（5 分鐘）

```bash
npm run dev
```

終端機會顯示：

```text
  VITE v8.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

1. 用瀏覽器打開 `http://localhost:5173/`，會看到 Vite + React 的預設頁面。
2. 打開 `src/App.jsx`，把 `<h1>` 裡的文字改成你的專案名稱，**存檔**。
3. 不用重新整理——瀏覽器畫面**立刻更新**。這叫 **HMR（熱更新）**。
4. 結束時在終端機按 `Ctrl + C` 停止。

> [!TIP]
> **三個指令要記住：**
>
> | 指令 | 用途 | 什麼時候用 |
> | :--- | :--- | :--- |
> | `npm run dev` | 開發模式，即時預覽 | 平常開發時 |
> | `npm run build` | 打包成正式版，輸出到 `dist/` | 部署前驗證 |
> | `npm run preview` | 在本機預覽 `dist/` 的正式版 | 確認打包結果沒問題 |

---

## 🎨 實作 1-3：DESIGN.md → CSS 變數（10 分鐘）

先把前面單元的 `DESIGN.md` 複製到 `my-landing/` 根目錄，然後對 AI 說：

```text
請讀取 @DESIGN.md 的 YAML tokens，改寫 src/index.css：
1. 刪除 Vite 預設樣式
2. 在 :root 中定義所有 CSS 變數，命名規則：--color-primary、--radius-md、--space-lg
3. 從 Google Fonts 引入 Noto Sans TC 與 Noto Serif TC，設定 body 與標題字體
4. 加入基本的 reset（box-sizing、margin 0、圖片 max-width 100%）
同時清空 src/App.css 與 App.jsx 中的預設範例內容。
```

**📎 小範例：完成後 `src/index.css` 開頭大概長這樣**

```css
:root {
  --color-canvas: #FAF8F5;
  --color-ink: #1E1B18;
  --color-primary: #8B5E3C;
  --radius-md: 8px;
  --space-section: 80px;
  --font-display: 'Noto Serif TC', Georgia, serif;
  --font-sans: 'Noto Sans TC', 'Inter', sans-serif;
}
```

- [ ] 變數名稱與數值和 `DESIGN.md`、Figma Variables 一致嗎？

---

## 🧩 實作 1-4：Figma 定稿 → React 元件（25 分鐘）

**觀念**：一個 Landing Page 拆成幾個**區塊元件**，再在 `App.jsx` 由上而下組合起來——就像在 Figma 裡疊 Frame 一樣。

```text
App.jsx
├── <Header />        導覽列
├── <Hero />          主視覺
├── <ProductList />   產品卡片區（裡面用到 <ProductCard />）
├── <Story />         品牌故事
└── <Footer />        頁尾
共用元件：<Button />（對應 Figma 的 Button 元件與 Variants）
```

### Step 1：讓 AI 讀 Figma 定稿並拆元件

對 [Figma × MCP 第三章](../Figma與MCP整合/03_實戰_DESIGN_md到Figma到網頁.md) 完成的 `Home` Frame 按右鍵 → **Copy link to selection**：

```text
請用 Figma MCP 讀取我的首頁定稿：
桌機版：<貼上連結>
手機版：<貼上連結>

在這個 React + Vite 專案中實作這個 Landing Page：
1. 元件放在 src/components/，每個區塊一個檔案：Header、Hero、ProductList、ProductCard、Story、Footer、Button
2. Button 元件用 props 對應 Figma 的 Variants：variant="primary" | "secondary"、disabled
3. 樣式使用一般 CSS（每個元件一個 .css 檔），顏色、圓角、間距一律使用 src/index.css 的 CSS 變數，不要使用 Tailwind
4. 響應式斷點依照 @DESIGN.md 第 8 章
5. 圖片先用灰色佔位區塊，並在程式碼中加上註解標示圖片尺寸
完成後請在 App.jsx 依序組合，並列出 Figma 中無法 1:1 還原的地方。
```

> [!NOTE]
> 沒有 Figma 稿的同學，可以把 Figma 連結那段改成「**請依照 @DESIGN.md 與前一單元的 @index.html**」，讓 AI 把靜態 HTML 拆成 React 元件。

### Step 2：用眼睛檢查（請開著 `npm run dev`）

- [ ] 與 Figma 定稿並排比較，版面、間距、字級一致嗎？
- [ ] 開發者工具切到 375px，手機版有照 Figma 手機版排嗎？
- [ ] 打開 `src/components/Button.jsx`，看得出 `variant` 這個 props 對應 Figma 的哪個屬性嗎？

**📎 小範例：Figma Variants ↔ React props**

```jsx
// Figma：Button 元件，Type = Primary / Secondary，State = Disabled
// React：
<Button variant="primary">立即預約</Button>
<Button variant="secondary">看菜單</Button>
<Button variant="primary" disabled>已額滿</Button>
```

---

## 📋 實作 1-5：資料與畫面分離 — 用陣列產生卡片（10 分鐘）

活動頁最常改的是**內容**（商品、價格、活動日期），而不是版型。把內容抽出成一份資料檔，之後改內容就不用碰元件程式碼。

```text
請把 ProductList 中寫死的 3 張卡片內容抽出到 src/data/products.js，
改用陣列 + .map() 產生 ProductCard。
然後在資料中新增第 4 項商品，確認版面在桌機與手機都正常。
```

**📎 小範例**

```js
// src/data/products.js —— 以後改內容只要改這裡
export const products = [
  { id: 1, name: '日曬拿鐵', price: 140, desc: '衣索比亞日曬豆，帶有莓果香氣' },
  { id: 2, name: '老宅黑糖冰咖啡', price: 160, desc: '台南在地黑糖，夏季限定' },
  { id: 3, name: '肉桂捲', price: 90, desc: '每日限量 30 個' },
]
```

```jsx
// ProductList.jsx
{products.map((p) => <ProductCard key={p.id} {...p} />)}
```

> [!TIP]
> 這個概念對 PM 很重要：**版型（元件）由設計決定、內容（資料）由行銷決定**，兩者分開，改活動內容時就不會不小心把版面弄壞。

---

## 📦 實作 1-6：打包與預覽正式版（5 分鐘）

```bash
npm run build      # 產生 dist/ 資料夾
npm run preview    # 預覽正式版，網址通常是 http://localhost:4173/
```

- [ ] `npm run build` 沒有出現紅色 error
- [ ] `preview` 的畫面和 `dev` 一樣
- [ ] 打開 `dist/` 資料夾看看：裡面只有 `index.html` 和 `assets/`——**這就是要放到網路上的全部東西**

> [!IMPORTANT]
> **build 失敗就不能部署。** 第二章的 GitHub Actions 也是執行同一個 `npm run build`，所以**本機 build 成功，雲端部署才會成功**。養成「push 之前先 build 一次」的習慣。

---

## ✅ 本章自我檢核

- [ ] `npm run dev` 可以正常開啟，修改存檔後會即時更新
- [ ] `src/index.css` 的 CSS 變數與 `DESIGN.md` 一致
- [ ] 頁面拆成 `src/components/` 中的多個元件，`Button` 有 `variant` props
- [ ] 商品內容放在 `src/data/products.js`，新增一筆資料版面不會壞
- [ ] `npm run build` 成功，`npm run preview` 畫面正常

---

[🏠 返回部署單元主頁](./README.md) ｜ [➡️ 下一章：用 GitHub Actions 部署到 GitHub Pages](./02_用GitHub_Actions部署到GitHub_Pages.md)
