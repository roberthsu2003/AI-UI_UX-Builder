# 第四章：Claude Design — 對話式視覺畫布、局部評論與滑桿控制 💬

[⬅️ 上一章：Google Stitch × MCP](./03_Google_Stitch與MCP_AI原生無限畫布.md) ｜ [🏠 返回單元主頁](./README.md)

在 Anthropic 的設計生態系中，**Claude Design**（包含獨立視覺工作台 [`claude.ai/design`](https://claude.ai/design)、已深度整合進一般對話與免費版的 **Artifacts Design 模式**，以及開發端的 `/design` 交接工作流）代表另一種完全不同的 AI 控制哲學：

> **不追求複雜的圖層樹面板，而是透過「自動萃取設計系統 ＋ 對話 ＋ 局部圈選評論 ＋ 動態控制滑桿」，在真實可運行的網頁畫布上進行極速迭代。**

---

## 🌟 1. 2026 年 Claude Design 核心能力解析

1. **真實前端程式碼驅動的即時畫布（Live Code Canvas）**
   * Claude Design 生成的不是靜態圖片，而是真正可點擊、可滾動、有 Hover 與 Modal 互動的 **HTML / CSS / JS 元件**。你在右側畫布看到的，就是瀏覽器裡實際跑出來的樣子。
2. **自動萃取設計系統（Auto Design System Extraction）**
   * 啟動新設計專案時，你可以直接指向一個 **GitHub Repo、現有 Figma 匯出檔、網站網址或品牌截圖**，Claude Design 會自動解析其中的字體規則、間距比例與品牌色碼。
3. **內建自我修正迴圈（Self-Correction Loop）**
   * 在畫面正式渲染給你看之前，Claude Design 會自動拿剛寫好的程式碼去核對匯入的 Design Tokens，主動修掉顏色偏離或排版破版的小瑕疵。
4. **無縫工程交接（Developer Handoff & `/design`）**
   * 定稿後不只可以下載完整程式碼壓縮包（ZIP）、PDF、簡報檔（PPTX）或轉至 Canva，付費工作流更支援直接將設計成果交接至終端／開發環境（如 Claude Code `/design`）。

> [!NOTE]
> **免費版學員怎麼用？**
> 完整獨立的 `claude.ai/design` 工作台主要開放給 **Pro / Max / Team / Enterprise** 方案；但一般**免費版 Claude 帳號**即可在對話右側開啟 **Artifacts（含 Design 模式）**，同樣能完成單頁結構重構、真實中文文案測試與即時互動預覽！

---

## 🎛️ 2. 三大 AI 視覺控制模式（不用寫 CSS 也能微調）

Claude Design 最強大的地方，在於把「修改設計」拆解成三種直覺的控制粒度：

### 控制模式一：全局對話指令（Macro Prompting）
適合大方向結構調整、換佈局模式、替換整段真實業務文案：
```text
請幫我把目前這頁的「三大功能區」從原本擁擠的單欄垂直堆疊，
改為不對稱的 Bento Grid 便當盒佈局，並將所有假字替換成這份繁體中文真實文案⋯⋯
```

### 控制模式二：畫布局部點選評論（Inline Comments / Point-and-Click）
看到畫面某個角落不滿意（例如一顆按鈕太小、某張卡片價格太不明顯），不需要重跑整頁，直接在右側互動畫布上**點擊或圈選該局部區塊**，留下精準評論：
* ❌ 籠統改法：`再幫我改好看一點。`
* ✅ 局部精準改法（點選價格卡片後評論）：`把這張卡片的價格數字放大到 28px 加粗並移到標題正下方，移除右上角多餘的裝飾圓點。`

### 控制模式三：情境式動態控制滑桿（Contextual Custom Sliders）
這是 Claude Design 极具代表性的控制方式：AI 會依照你正在設計的專案類型，生成專屬的視覺調整滑桿（或由你在 Prompt 中要求提供），讓你不用懂像素與色溫參數，**直接用滑鼠拖拉滑桿即時微調視覺感受**：
* **留白呼吸感滑桿**（緊湊資訊型 ↔ 高端留白型）
* **圓角與幾何感滑桿**（銳利商務方角 ↔ 親和圓潤膠囊）
* **視覺對比與色溫微調**

---

## 🚀 3. 全 AI 控制實戰演練

### 實戰 4-1：餵入 `DESIGN.md` 或截圖，避免「AI 預設公版味」
開啟 Claude.ai（開啟 Artifacts / Design 模式），先附上你的 `@DESIGN.md` 或目標網站截圖，下達以下指令：

```text
請先從我附上的 @DESIGN.md（或這張網站截圖）萃取品牌色彩、字體階層與留白規範，
並以 Artifacts Design 模式為「沐光美學牙醫診所」生成一個【四步驟線上初診預約 Modal】與【首頁 Hero】。

要求：
1. 配色與字級嚴格對齊萃取出的規範，避免自創高飽和藍紫色。
2. 產出後請先做一次 Self-Correction 檢查：確認繁體中文在 375px 手機版下不會折行破版，按鈕高度至少 44px。
3. 請在介面旁附上「留白密度」與「圓角大小」的即時預覽控制條（Control Panel），方便我現場拖拉微調給客戶看。
```

### 實戰 4-2：用「點選局部＋三輪對話收斂」完成定稿
1. **第一輪（定結構）**：先看資訊層級對不對（3 秒內看得出主 CTA 嗎？）。
2. **第二輪（局部評論微調）**：針對畫面中「按鈕權重相同」、「文案過長」、「手機版太擠」的地方，用局部評論精準修正。
3. **第三輪（匯出與交接）**：點擊右上角下載單一 HTML 檔（或複製程式碼交給 Antigravity 拆成 React 元件並部署至 GitHub Pages）。

---

## 🧭 四大設計畫布工具總結：你該如何搭配？

學完本單元四章後，你可以依專案階段靈活切換 AI 控制工具：

1. **開局還沒方向、要找多種視覺風格** → 用 **[Google Stitch](./03_Google_Stitch與MCP_AI原生無限畫布.md)**（Live 畫布 + `Generate Screen Variants` + 匯出 `DESIGN.md`）。
2. **要快速重構單頁、填真實文案、拖滑桿給老闆看** → 用 **Claude Design / Artifacts Design**。
3. **要在同一個 Git 專案內用 AI 畫多頁、平行比稿並直接轉成前端網站** → 用 **[pen.dev × MCP](./02_pen_dev與MCP_程式碼即設計的AI畫布.md)**。
4. **要與設計師團隊對齊正式設計系統（Variables / Components）與工程交付** → 用 **[Figma × MCP](./01_Figma與MCP_用AI控制Figma設計.md)**（`use_figma` 寫入 + `get_design_context` 讀稿）。

---

## ✅ 本章檢核清單

- [ ] 我了解 Claude Design 不只靠打字，還可結合「自動規範萃取 + 局部圈選評論 + 動態滑桿」精準控制設計。
- [ ] 我已在 Claude 免費版 Artifacts（或 `claude.ai/design`）完成至少一個區塊重構，並親自點擊測試所有互動狀態。
- [ ] 我清楚何時該用 Figma、pen.dev、Google Stitch 與 Claude Design，並能搭配 `DESIGN.md` 串起完整網站開發流程。

---

[⬅️ 上一章：Google Stitch × MCP](./03_Google_Stitch與MCP_AI原生無限畫布.md) ｜ [🏠 返回單元主頁](./README.md)
