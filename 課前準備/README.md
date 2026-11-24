# 課前準備：帳號、軟體與練習環境 🎒

本課程要帶你成為一名專注在網站設計的 **[AI Product Builder](../什麼是AI_Product_Builder/README.md)**：從「看懂網站」一路走到「把網站部署上線」，每個單元都要親手做。前半段只需要瀏覽器和 AI 帳號，後半段會用到 Claude Code、Figma 與 GitHub。本頁整理了課前要準備的帳號、軟體與練習資料夾。

---

## 🧭 每個單元你會練到什麼

所有單元都要動手做，產出會接力累積成期末專案。

| # | 單元 | Builder 能力 | 本單元的實作重點 |
| :---: | :--- | :--- | :--- |
| 1 | [如何評估現有的網站](../如何評估現有的網站/README.md) | 診斷問題 | 用 AI 健檢舊網站，寫出評估報告 |
| 2 | [網站架構觀念](../網站架構觀念/README.md) | 設計判斷力 | 分析舊網站的版型、導覽與一致性 |
| 3 | [定義使用者與需求](../定義使用者與需求/README.md) | 產品判斷力（核心） | Persona、旅程、任務流程、線框圖、需求排序 |
| 4 | [建立提案用的原型網頁](../建立提案用的原型網頁/README.md) | 用 AI 做原型 | 用 Stitch、Claude Design 產出多套視覺方向 |
| 5 | [Claude Skill 實戰指南](../Claude網頁設計Skill實戰指南/README.md) | 擴充 AI 能力 | 安裝 Skill，比較有無 Skill 的產出差異 |
| 6 | [讓 AI 做出不像 AI 的設計](../讓AI做出不像AI的設計/README.md) | 設計品味 | 先發散再收斂，整理 AI 壞習慣清單；第三章選做 |
| 7 | [建立自己的 DESIGN.md](../建立自己的DESIGN_md/README.md) | 設計系統 | 親手寫一份 `DESIGN.md` 與樣式總覽頁 |
| 8 | [Figma × MCP](../Figma與MCP整合/README.md) | 設計稿協作 | 用 Figma 定稿，讓 AI 讀稿生成網頁 |
| 9 | [易用性測試](../易用性測試/README.md) | 驗證（核心） | 找真人測試，依結果修改設計 |
| 10 | [前端動態框架圖鑑](../前端動態框架圖鑑/README.md) | 動態與質感 | 選一個框架套用到原型 |
| 11 | [部署 Landing Page](../部署Landing_Page/README.md) | 上線 | 用 React + Vite 做活動頁並部署到 GitHub Pages |
| ★ | [期末專案](../期末專案/README.md) | 完整走一輪 | 交付完整網站＋公開網址 |

> [!TIP]
> 不熟悉程式也沒關係。本課程的實作全程採用 **Vibe Coding**：你負責判斷要做什麼、檢查做得對不對，程式碼交給 AI 寫。卡住的時候，把錯誤訊息和畫面截圖貼給 AI 就好。

---

## 🔑 帳號清單

| 帳號 | 用途 | 費用 |
| :--- | :--- | :--- |
| **Google 帳號** | Gemini、Google Stitch、Antigravity | 免費 |
| **Claude 帳號** | Claude.ai、Claude Artifacts（含 Design 模式）、Skill、Claude Code | 免費版即可使用 Artifacts 內的 Design 模式進行網頁設計與預覽；Claude Code 需付費方案 |
| **Figma 帳號** | 設計稿、MCP 連線 | 免費版可練基本功；MCP 寫入功能建議申請教育方案或付費方案 |
| **GitHub 帳號** | 存放程式碼、GitHub Pages 部署 | 免費 |
| **Relume 帳號**（選用） | 網站地圖與線框圖 | 有免費方案，限制較多 |
| **Maze 帳號**（選用） | 遠端易用性測試 | 有免費方案，每月測試數有限 |
| **Microsoft Clarity**（選用） | 網站行為分析與熱點圖 | 免費 |

> [!WARNING]
> **Figma 教育方案只開放給在學學生與教師**，而且驗證可能要好幾天，請在上 Figma 單元前一週完成。**非學生的學員** 請參考 [Figma × MCP 第一章](../Figma與MCP整合/01_帳號方案與MCP連線設定.md) 的方案比較；如果沒有可用的方案，可以只做第二章的手動基本功，第三章改用「`DESIGN.md` → 直接生成 HTML」的路線（[DESIGN.md 單元實作 2-E](../建立自己的DESIGN_md/02_如何從零建立自己的DESIGN_md.md)），一樣能接上後面的單元。

> [!NOTE]
> 工具的方案名稱、免費額度與價格變動很快，以上僅供規劃參考，**實際內容請以各服務官網為準**。

---

## 💻 軟體清單

| 軟體 | 用途 | 安裝後如何確認 |
| :--- | :--- | :--- |
| **Google Chrome** | 長截圖、DevTools、Claude in Chrome / Gemini in Chrome | — |
| **Node.js（LTS 版）** | 執行 Claude Code 與 React 專案 | 終端機輸入 `node -v` 有顯示版本號 |
| **Git** | 版本控制、推送到 GitHub | 終端機輸入 `git --version` 有顯示版本號 |
| **Claude Code / Antigravity** | AI 寫程式、執行網站建置與部署、連接 Figma MCP | 終端機輸入 `claude` 能啟動，或已安裝並開啟 Antigravity |
| **Antigravity**（選用 / 推薦） | 具備完整 Agent 代理能力的 AI 開發環境（Google 帳號一般人版） | 應用程式可正常開啟並登入 Google 帳號 |
| **VS Code**（選用） | 檢視與編輯檔案 | — |
| **Figma Desktop**（選用） | 部分 MCP 功能需要桌面版 | — |

> [!TIP]
> 不熟悉終端機的學員，可以直接請 AI 幫忙：「我用的是 Mac（或 Windows），請一步一步教我安裝 Node.js 與 Git，每一步告訴我要看到什麼才算成功。」

---

## 📁 建議的練習資料夾

整門課的實作會累積在同一個資料夾，方便最後串成期末專案：

```text
my-design-lab/
├── 01-evaluation/        ← 單元 1：評估報告
├── 03-requirements/      ← 單元 3：persona.md、journey.md、user-flow.md、wireframe.html
├── 04-prototype/         ← 單元 4：原型截圖與連結
├── 06-anti-ai-look/      ← 單元 6：探索方向、ai-habits.md
├── DESIGN.md             ← 單元 7：設計規範（之後每個單元都會用到）
├── style-guide.html      ← 單元 7：樣式總覽頁
├── index.html            ← 單元 7／8：首頁原型
├── 09-usability-test/    ← 單元 9：測試腳本與報告
└── my-landing/           ← 單元 11：React 專案
```

---

## ✅ 開課前自我檢查

- [ ] 我已經準備好 Google、Claude 帳號
- [ ] 我已申請 Figma 教育方案或確認可用的方案
- [ ] 我已建立 GitHub 帳號
- [ ] `node -v`、`git --version` 都能顯示版本號
- [ ] 我已經看過 [AI 工具地圖](../AI工具地圖/README.md)，知道每個階段會用到哪些工具
- [ ] 我已經想好期末專案要改版的網站（可以參考 [推薦評估練習網站名單](../如何評估現有的網站/README.md)）

---

[⬅️ 返回主目錄](../README.md)
