# 前端動態框架圖鑑：叫得出名字，AI 才做得出來 🎨

在 [Claude Skill 實測](../Claude網頁設計Skill實戰指南/README.md) 中我們看到，同一個 Prompt 裡只要多寫一句「用 WebGL 做液態背景」，AI 產出的網頁質感就會完全不同。但很多設計師與專案管理員並不知道：**網頁上那些粒子、3D、流動背景、捲動動畫，幾乎都有一個專門負責的 JavaScript 框架**。

本單元用設計師聽得懂的語言，把這些框架整理成四大類圖鑑。每一個框架都附上**可以直接操作的線上 demo** 與**可直接複製給 AI 的 Prompt 範本**。

> [!TIP]
> **👉 [開啟線上互動圖鑑（12 個即時 demo）](https://roberthsu2003.github.io/UI_UX_Prototype/frameworks.html)**
> 建議一邊閱讀本章節，一邊在圖鑑網站上實際拖曳、點擊、捲動每個 demo，親身感受各框架的「手感」差異。

---

## 💡 為什麼設計師需要認識這些框架？

| 你在 Prompt 裡寫的 | AI 可能的理解 | 產出結果 |
| :--- | :--- | :--- |
| 「做一個很酷的動態背景」 | 隨便用 CSS 做個漸層動畫 | 公版感、單調 |
| 「用 **p5.js** 做跟著滑鼠流動的粒子線條背景」 | 生成藝術、流場粒子 | 有藝術感的互動背景 |
| 「用 **Three.js ShaderMaterial** 做液態咖啡流動背景」 | GPU 即時運算的液態效果 | 得獎網站等級的主視覺 |

> [!IMPORTANT]
> **框架名稱 = 給 AI 的精準關鍵字**
> AI 本身就會寫這些框架的程式碼，缺的是「你想要哪一種效果、該用哪一個工具」的判斷。認識框架不是為了自己寫程式，而是為了：
> 1. **精準下 Prompt**：指定框架，AI 就會用該框架最擅長的方式實作。
> 2. **評估提案可行性**：知道某個效果「有現成框架可做」，就不會把它誤判成高成本需求。
> 3. **與工程師溝通**：說「這段用 GSAP ScrollTrigger 做」，比說「捲下去要有動畫」清楚太多。

---

## 🗺️ 四大類框架總覽

| 類別 | 代表框架 | 適合的視覺效果 | 對 AI 說的關鍵字 |
| :--- | :--- | :--- | :--- |
| **Canvas 2D** | p5.js、PixiJS、Fabric.js | 粒子、生成藝術、2D 小遊戲、線上編輯器 | `Canvas`、`粒子系統`、`generative art`、`可拖曳編輯` |
| **3D / WebGL** | Three.js、Babylon.js、Shader | 產品 360° 展示、3D 主視覺、虛擬展間、液態背景 | `WebGL`、`3D 模型`、`OrbitControls`、`ShaderMaterial` |
| **動畫 / 動態影片感** | GSAP、Anime.js、Lottie | 進場動畫、逐字動畫、微互動、AE 動畫 | `timeline`、`stagger`、`easing`、`Lottie JSON` |
| **資料視覺化 & 捲動互動** | D3.js、Chart.js、ScrollTrigger + Lenis | 儀表板、互動圖表、捲動敘事、一鏡到底 | `力導向圖`、`儀表板`、`scroll-telling`、`pin`、`smooth scroll` |

### 一張圖判斷該用哪一類

```text
你想要的效果是…
├─ 大量會動的圖形 / 手繪感 / 可以讓使用者編輯 ──▶ Canvas 2D
├─ 有深度、可旋轉、有光影材質 ──────────────────▶ 3D / WebGL
├─ 元素依序登場、像影片剪輯一樣有節奏 ─────────▶ 動畫框架
├─ 把數字變成圖表 ──────────────────────────────▶ 資料視覺化
└─ 使用者往下捲動時，畫面跟著「演出」 ─────────▶ 捲動互動
```

---

## 📖 本單元學習目錄

### 1. [第一章 🖌️：Canvas 2D 繪圖 — p5.js / PixiJS / Fabric.js](./01_Canvas_2D繪圖.md)
* **學什麼**：認識「畫布」的概念，以及生成藝術、大量粒子、可編輯畫布三種典型用途。
* **線上 demo**：[流場生成藝術](https://roberthsu2003.github.io/UI_UX_Prototype/demos/canvas-p5.html) ・ [3000 顆粒子](https://roberthsu2003.github.io/UI_UX_Prototype/demos/canvas-pixi.html) ・ [海報編輯器](https://roberthsu2003.github.io/UI_UX_Prototype/demos/canvas-fabric.html)

### 2. [第二章 🧊：3D 與 WebGL — Three.js / Babylon.js / Shader](./02_3D與WebGL.md)
* **學什麼**：3D 場景的五大元素（場景、相機、燈光、模型、材質），以及 Shader 液態背景的原理。
* **線上 demo**：[產品 3D 換色](https://roberthsu2003.github.io/UI_UX_Prototype/demos/3d-three.html) ・ [3D 互動方塊陣列](https://roberthsu2003.github.io/UI_UX_Prototype/demos/3d-babylon.html) ・ [液態咖啡背景](https://roberthsu2003.github.io/UI_UX_Prototype/demos/3d-shader.html)

### 3. [第三章 🎬：動畫與動態影片感 — GSAP / Anime.js / Lottie](./03_動畫與動態影片感.md)
* **學什麼**：時間軸、緩動曲線、交錯延遲等動態設計概念，以及設計師與工程師如何用 Lottie 交接 AE 動畫。延伸認識 Rive 與 Remotion。
* **線上 demo**：[新品上市時間軸](https://roberthsu2003.github.io/UI_UX_Prototype/demos/motion-gsap.html) ・ [格狀波紋](https://roberthsu2003.github.io/UI_UX_Prototype/demos/motion-anime.html) ・ [Lottie 彈跳球](https://roberthsu2003.github.io/UI_UX_Prototype/demos/motion-lottie.html)

### 4. [第四章 📊：資料視覺化與捲動互動 — D3.js / Chart.js / ScrollTrigger + Lenis](./04_資料視覺化與捲動互動.md)
* **學什麼**：標準圖表與客製化視覺化的選擇，以及「捲動敘事（Scroll-telling）」的常見手法。
* **線上 demo**：[網站架構力導向圖](https://roberthsu2003.github.io/UI_UX_Prototype/demos/data-d3.html) ・ [流量儀表板](https://roberthsu2003.github.io/UI_UX_Prototype/demos/data-chartjs.html) ・ [捲動敘事單頁](https://roberthsu2003.github.io/UI_UX_Prototype/demos/scroll-gsap.html)

---

## ✅ 通用 Prompt 公式

不論使用哪個框架，都可以套用這個公式來下 Prompt：

```text
請用【框架名稱】製作【頁面 / 區塊用途】：
- 視覺：【畫面上有什麼、配色、風格】
- 互動：【滑鼠移動 / 點擊 / 拖曳 / 捲動時發生什麼】
- 控制：【需要哪些按鈕或滑桿】
- 限制：輸出成單一 HTML 檔，函式庫從 CDN 載入；支援 RWD 與 prefers-reduced-motion。
```

> [!WARNING]
> **動態效果不是越多越好**
> * 一個頁面最好只有 **1 個主角級動態**（例如 3D 主視覺），其餘用輕量動畫點綴。
> * 3D 與 Shader 很吃手機效能，提案時要附上「手機版降級方案」（例如改成靜態圖片）。
> * 務必要求 AI 支援 `prefers-reduced-motion`，照顧對動態敏感的使用者（呼應 [如何評估現有的網站](../如何評估現有的網站/README.md) 的無障礙檢查）。

---

## 🔄 與本課程其他單元的連動關係

```text
[1. 網站評估] 診斷舊網站視覺痛點
       ↓
[2. 網站架構觀念] 決定版型佈局、導覽結構與一致性原則
       ↓
[3. 建立自己的 DESIGN.md] 把視覺決策固化成 AI 看得懂的規格書
       ↓
[4. 原型實作 / Skill] 用 Stitch、Claude Design、UI UX Pro Max 生成原型
       ↓
[5. 前端動態框架圖鑑] 指定框架，為原型加上 Canvas、3D、動畫與捲動互動  ◀── 本單元
```

---

[⬅️ 返回主目錄](../README.md)
