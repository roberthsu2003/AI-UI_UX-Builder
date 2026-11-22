# 部署 Landing Page：從本機執行到 GitHub Pages 上線 🚀

> 📅 **最後更新：2026-11**　｜　本單元涉及的工具介面、方案與額度變動快，若畫面與講義不符，請以官方文件為準。

前面的單元中，我們已經有了 `DESIGN.md` 設計規範與 Figma 定稿。這個單元是課程的最後一哩路：**把設計變成一個真的可以分享網址的活動頁面（Landing Page）**。

我們使用 **React + Vite** 建立專案，原因很簡單：

| 你在前面學到的 | 在 React 中對應到 |
| :--- | :--- |
| Figma 的 **Component**（Button、Card） | React 的 **元件**（`<Button />`、`<ProductCard />`） |
| Figma 的 **Variants**（Primary / Secondary） | React 元件的 **props**（`<Button type="primary" />`） |
| `DESIGN.md` / Figma **Variables** | CSS 變數（`var(--color-primary)`） |
| 3 張一樣結構、內容不同的卡片 | 一份資料陣列 + `.map()` 產生 |

> [!IMPORTANT]
> **全程 Vibe Coding**：你不需要先學會 React 語法。程式碼由 AI 寫，你負責的是：
> **看得懂專案結構、知道要叫 AI 做什麼、會檢查結果是否符合設計稿、會把網站部署上線。**

---

## 🗺️ 整體流程

```text
DESIGN.md + Figma 定稿
       │  ① 建立 React + Vite 專案，AI 依設計稿拆成元件
       ▼
本機執行 npm run dev（http://localhost:5173）
       │  ② 本機預覽、修改、npm run build 驗證
       ▼
推上 GitHub
       │  ③ GitHub Actions 自動建置與部署
       ▼
https://<你的帳號>.github.io/<專案名稱>/   ← 可以分享給任何人的網址 🎉
```

---

## 📖 本單元學習目錄

### 1. [第一章 💻：建立 React Landing Page 並在本機執行](./01_建立React_Landing_Page並本機執行.md)
* **學什麼**：安裝 Node.js、用 Vite 建立 React 專案、看懂專案結構、`dev` / `build` / `preview` 三個指令。
* **實作**：把 `DESIGN.md` 轉成 CSS 變數、用 Figma MCP 把定稿拆成 React 元件、用資料陣列產生卡片。

### 2. [第二章 🌐：用 GitHub Actions 部署到 GitHub Pages](./02_用GitHub_Actions部署到GitHub_Pages.md)
* **學什麼**：建立 GitHub Repo、設定 Vite `base`、撰寫部署工作流程（workflow）、看懂 Actions 執行紀錄。
* **實作**：第一次部署上線、修改後自動重新部署、排除最常見的「白畫面」問題。

---

## 🛠️ 本單元實作一覽

| 編號 | 實作內容 | 時間 | 產出 |
| :--- | :--- | :--- | :--- |
| 1-1 | 安裝 Node.js 並建立 React + Vite 專案 | 10 分 | `my-landing/` 專案 |
| 1-2 | 本機執行，修改文字看即時更新 | 5 分 | — |
| 1-3 | DESIGN.md → CSS 變數 | 10 分 | `src/index.css` |
| 1-4 | Figma 定稿 → React 元件 | 25 分 | `src/components/` |
| 1-5 | 資料與畫面分離：用陣列產生卡片 | 10 分 | `src/data/products.js` |
| 1-6 | `build` 與 `preview` 驗證 | 5 分 | `dist/` |
| 2-1 | 建立 GitHub Repo 並推上程式碼 | 10 分 | GitHub Repo |
| 2-2 | 設定 `base` 與部署工作流程 | 10 分 | `.github/workflows/deploy.yml` |
| 2-3 | 第一次部署上線 | 5 分 | 公開網址 |
| 2-4 | 修改 → push → 自動更新 | 5 分 | — |
| 2-5 | 故意弄壞再修好（除錯練習） | 10 分 | — |

---

## 🔄 與本課程其他單元的連動關係

```text
[6. 建立自己的 DESIGN.md] 設計規範
       ↓
[7. Figma × MCP] 設計系統與人工定稿
       ↓
[8. 易用性測試] 確認好用之後再上線
       ↓
[9. 前端動態框架圖鑑]（選用）加上動態效果
       ↓
[10. 部署 Landing Page] React 實作 → 本機執行 → GitHub Pages 上線   ◀── 本單元（課程最終成果）
```

---

[⬅️ 返回主目錄](../README.md)
