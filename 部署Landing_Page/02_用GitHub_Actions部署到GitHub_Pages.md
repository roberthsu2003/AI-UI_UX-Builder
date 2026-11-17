# 第二章：用 GitHub Actions 部署到 GitHub Pages 🌐

[⬅️ 上一章：建立 React Landing Page 並在本機執行](./01_建立React_Landing_Page並本機執行.md) ｜ [🏠 返回部署單元主頁](./README.md)

---

## 💡 先搞懂三個名詞

| 名詞 | 白話解釋 |
| :--- | :--- |
| **GitHub Repo** | 放程式碼的雲端資料夾，會記錄每一次修改 |
| **GitHub Pages** | GitHub 提供的**免費**網站空間，網址是 `https://<帳號>.github.io/<Repo 名稱>/` |
| **GitHub Actions** | GitHub 的「自動化機器人」：每次你推上新程式碼，它就自動幫你 `npm run build` 並把 `dist/` 放到 Pages |

```text
你在本機改程式 ──git push──▶ GitHub Repo
                                  │ 觸發
                                  ▼
                     GitHub Actions 機器人
                     ① 安裝套件 npm ci
                     ② 打包 npm run build
                     ③ 把 dist/ 部署到 Pages
                                  │
                                  ▼
             https://<帳號>.github.io/my-landing/  ✅ 自動更新
```

> [!NOTE]
> **費用**：免費帳號的 **Public（公開）Repo** 可以免費使用 GitHub Pages 與 Actions，課程使用完全足夠。Private Repo 要使用 Pages 需要付費方案（學生可申請 [GitHub Education](https://education.github.com/) 取得免費升級）。

---

## 📤 實作 2-1：建立 GitHub Repo 並推上程式碼（10 分鐘）

### Step 1：在 GitHub 網站建立 Repo

1. 登入 [GitHub](https://github.com/) → 右上角 **＋** → **New repository**。
2. Repository name：`my-landing`（**記住這個名字，下一步會用到**）。
3. 選擇 **Public**。
4. ⚠️ **不要**勾選「Add a README」等任何初始化選項（保持空的 Repo，避免衝突）。
5. 按 **Create repository**，複製頁面上的 Repo 網址（`https://github.com/<帳號>/my-landing.git`）。

### Step 2：把本機專案推上去

在 `my-landing/` 資料夾中執行：

```bash
git init -b main
git add .
git commit -m "first commit: landing page"
git remote add origin https://github.com/<你的帳號>/my-landing.git
git push -u origin main
```

> 💡 **Vibe Coding 版本**：在 Claude Code 中說「**請幫我把這個專案初始化為 git，並推到 https://github.com/<帳號>/my-landing.git 的 main 分支**」。
> 有安裝 [GitHub CLI](https://cli.github.com/) 的同學，甚至可以一行完成建立 + 推送：`gh repo create my-landing --public --source=. --push`

**確認**：重新整理 GitHub 頁面，看到你的程式碼，而且**沒有** `node_modules/` 和 `dist/` 資料夾（被 `.gitignore` 排除了）。

---

## ⚙️ 實作 2-2：設定 `base` 與部署工作流程（10 分鐘）

### Step 1：設定 Vite 的 `base`

GitHub Pages 的網址會多一層 Repo 名稱（`/my-landing/`），必須告訴 Vite，否則上線後會**一片空白**。修改 `vite.config.js`：

```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/my-landing/',   // ⚠️ 改成你的 Repo 名稱，前後都要有斜線
})
```

### Step 2：建立部署工作流程檔

新增檔案 `.github/workflows/deploy.yml`（注意 `.github` 前面有一個點）：

```yaml
name: Deploy Landing Page to GitHub Pages

on:
  push:
    branches: ['main']     # 每次 push 到 main 就自動部署
  workflow_dispatch:       # 也可以在 Actions 頁面手動觸發

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: 取得程式碼
        uses: actions/checkout@v7
      - name: 安裝 Node.js
        uses: actions/setup-node@v7
        with:
          node-version: lts/*
          cache: 'npm'
      - name: 安裝套件
        run: npm ci
      - name: 打包
        run: npm run build
      - name: 設定 Pages
        uses: actions/configure-pages@v6
      - name: 上傳 dist 資料夾
        uses: actions/upload-pages-artifact@v5
        with:
          path: './dist'
      - name: 部署到 GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

> [!NOTE]
> 這份 workflow 改寫自 [Vite 官方部署文件](https://vite.dev/guide/static-deploy#github-pages)（2026 年 11 月版本）。Actions 的版本號（`@v7`、`@v6`…）會隨時間更新，若執行時出現版本相關警告，可以請 AI「**依照 Vite 官方文件更新 deploy.yml 的 action 版本**」。

**看懂這份檔案只需要記住**：`on` 是「什麼時候執行」，`steps` 是「機器人依序做哪些事」——跟你在本機做的 `npm install` → `npm run build` 幾乎一樣。

### Step 3：開啟 GitHub Pages

到 GitHub Repo 頁面 → **Settings** → 左側 **Pages** → **Build and deployment** 的 **Source** 選擇 **GitHub Actions**。

---

## 🎉 實作 2-3：第一次部署上線（5 分鐘）

```bash
npm run build                 # 先在本機確認 build 成功！
git add .
git commit -m "add GitHub Pages deployment"
git push
```

1. 到 GitHub Repo 的 **Actions** 分頁，會看到一個正在執行的工作（黃色圓圈 🟡）。
2. 點進去可以看到每個 step 的執行過程，約 1 分鐘後變成綠色勾勾 ✅。
3. 點 `deploy` 工作下方的網址，或到 **Settings → Pages** 查看：`https://<你的帳號>.github.io/my-landing/`
4. **用手機打開這個網址**，傳給隔壁同學看看！

---

## 🔁 實作 2-4：修改 → push → 自動更新（5 分鐘）

體驗一次完整的「上線後修改」流程：

1. 修改 `src/data/products.js`，把某項商品的價格改掉。
2. `npm run dev` 確認畫面正確 → `npm run build` 確認可以打包。
3. 對 AI 說「**請幫我 commit 並 push，訊息寫『更新商品價格』**」。
4. 到 Actions 分頁看它自動執行，完成後重新整理網站（可能要按 `Cmd/Ctrl + Shift + R` 強制重新整理）。

> [!TIP]
> **這就是現代網站的工作方式**：不用 FTP、不用手動上傳檔案，**push 就是發布**。所以 push 前一定要先在本機確認沒問題。

---

## 🐞 實作 2-5：故意弄壞再修好（除錯練習，10 分鐘）

部署失敗是常態，重點是**看得懂錯誤、知道問 AI 什麼**。請依序做以下兩個實驗：

### 實驗 A：白畫面

1. 把 `vite.config.js` 的 `base` 改成錯的（例如 `'/wrong-name/'`），push。
2. Actions 會顯示 ✅ 成功，但打開網站是**一片空白**。
3. 在網站上按 `F12` → **Console** 分頁，會看到類似 `Failed to load resource: 404` 的錯誤。
4. 改回正確的 Repo 名稱，push，確認恢復。

> 📌 **學到的事**：Actions 綠勾勾只代表「打包和上傳成功」，**不代表網站正確**。上線後一定要親自打開檢查。

### 實驗 B：build 失敗

1. 在 `src/App.jsx` 中故意刪掉一個 `</div>`，**不要在本機測試**，直接 push。
2. Actions 出現紅色 ❌，點進去展開「打包」step，找到錯誤訊息。
3. 把錯誤訊息複製給 AI：

```text
我的 GitHub Actions 部署失敗了，以下是「打包」步驟的錯誤訊息：
<貼上錯誤訊息>
請告訴我問題在哪個檔案的哪一行，並幫我修正。
```

4. 修正後先在本機 `npm run build` 確認成功，再 push。

---

## 🧯 常見問題排除

| 狀況 | 可能原因 | 解法 |
| :--- | :--- | :--- |
| 網站一片空白，Console 出現 404 | `vite.config.js` 的 `base` 與 Repo 名稱不符 | `base: '/<Repo 名稱>/'`，注意大小寫與前後斜線 |
| 圖片在本機正常、上線後破圖 | 圖片放在 `public/` 並用 `/xxx.png` 絕對路徑引用 | 圖片改放 `src/assets/` 並用 `import` 引入；或改用 `` `${import.meta.env.BASE_URL}xxx.png` `` |
| Actions 在「安裝套件」失敗 | `package-lock.json` 沒有一起 push | 本機執行 `npm install` 後把 `package-lock.json` commit 上去 |
| Actions 在「部署」失敗，提到 Pages 未啟用 | Settings → Pages 的 Source 沒有選 GitHub Actions | 回到實作 2-2 Step 3 設定 |
| `git push` 要求輸入密碼後失敗 | GitHub 已不支援用帳號密碼推送 | 安裝 [GitHub Desktop](https://desktop.github.com/) 或 GitHub CLI 執行 `gh auth login` 登入 |
| 改了程式但網站沒變 | 瀏覽器快取，或 Actions 還在執行 | 確認 Actions 已完成 ✅，再按 `Cmd/Ctrl + Shift + R` |
| 不小心把 `node_modules` 推上去了 | `.gitignore` 被刪除或修改 | 請 AI「從 git 移除 node_modules 並修正 .gitignore」 |

---

## 📦 本單元作業繳交（課程最終成果）

請繳交以下兩個網址：

1. **網站網址**：`https://<帳號>.github.io/<Repo 名稱>/`
2. **GitHub Repo 網址**：`https://github.com/<帳號>/<Repo 名稱>`

| 項目 | 檢查方式 | 配分 |
| :--- | :--- | :--- |
| 網站可正常開啟 | 桌機與手機都能打開、沒有白畫面或破圖 | 25% |
| 與 Figma 定稿 / `DESIGN.md` 一致 | 色彩、字體、元件樣式、RWD 符合設計 | 30% |
| 專案結構 | 元件拆分於 `src/components/`、`Button` 有 variant props、內容在 `src/data/` | 20% |
| 自動部署 | Repo 中有 `deploy.yml`，Actions 紀錄中至少 **3 次**成功部署 | 15% |
| Commit 紀錄 | 至少 5 次有意義的 commit 訊息（不是全部叫 "update"） | 10% |

---

## 🎓 課程總回顧

```text
如何評估現有的網站     → 找出問題
網站架構觀念           → 知道好設計的原則
建立自己的 DESIGN.md   → 把設計決策寫成 AI 看得懂的規範
Figma × MCP           → 用專業工具定稿，AI 協助搬磚
部署 Landing Page     → 變成任何人都能打開的真實網站 🚀
```

恭喜你完成從「評估」到「上線」的完整流程！

---

[⬅️ 上一章：建立 React Landing Page 並在本機執行](./01_建立React_Landing_Page並本機執行.md) ｜ [🏠 返回部署單元主頁](./README.md)
