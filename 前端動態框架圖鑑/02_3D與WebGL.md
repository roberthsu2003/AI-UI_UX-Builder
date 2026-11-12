# 第二章 🧊：3D 與 WebGL — Three.js / Babylon.js / Shader

> [!TIP]
> **線上 demo**：[開啟 3D / WebGL 分類](https://roberthsu2003.github.io/UI_UX_Prototype/frameworks.html#3d)

## 🧠 先懂一個概念：3D 場景的五大元素

不論使用哪個 3D 框架，畫面都由這五樣東西組成。下 Prompt 時把它們講清楚，AI 就能做出接近你想像的畫面：

| 元素 | 比喻 | Prompt 範例 |
| :--- | :--- | :--- |
| **場景 Scene** | 攝影棚 | 「深灰色背景、地板有柔和陰影」 |
| **相機 Camera** | 攝影機的位置與鏡頭 | 「可拖曳環繞產品旋轉、滾輪縮放」 |
| **燈光 Light** | 棚燈 | 「左上方主光、柔和環境光、帶反射」 |
| **模型 Mesh / Model** | 被拍的物體 | 「載入 GLB 模型」或「用圓柱做一個保溫瓶」 |
| **材質 Material** | 物體表面的質感 | 「霧面金屬」「亮面烤漆」「透明玻璃」 |

> [!NOTE]
> 若手上有設計師用 **Blender、Spline、C4D** 做好的 3D 模型，請匯出成 **`.glb` / `.gltf`** 格式，再請 AI「用 Three.js 的 GLTFLoader 載入這個模型」。

---

## 1. Three.js — 網頁 3D 最普及的函式庫

* **一句話定位**：網頁 3D 的事實標準，從電商產品展示到 Awwwards 得獎網站的沉浸式體驗都看得到它。生態系最大，AI 生成的程式碼品質也最穩定。
* **適合用在**：
  * 產品 360° 旋轉展示與即時換色（鞋子、保溫瓶、家具、汽車）
  * 首頁的 3D 互動主視覺
  * 載入設計師做好的 3D 模型（glTF / GLB）
* **不適合**：手機效能有限，要控制模型面數與特效，並準備靜態圖片作為降級方案。
* **Demo**：[產品 3D 換色](https://roberthsu2003.github.io/UI_UX_Prototype/demos/3d-three.html)：拖曳旋轉保溫瓶、滾輪縮放，下方按鈕可以平滑切換 5 種配色。
* **關鍵字**：`OrbitControls`、`GLTFLoader`、`MeshPhysicalMaterial`、`環境光反射`、`陰影`

```text
請用 Three.js 製作一個產品 3D 展示頁：中央是一個保溫瓶模型（可用 LatheGeometry 產生），
帶有柔和反射與地面陰影，使用者可以拖曳旋轉、滾輪縮放，下方有 5 個顏色按鈕可以平滑切換瓶身顏色。
請輸出成單一 HTML 檔，Three.js 用 importmap 從 CDN 載入。
```

> [!TIP]
> **React 專案的寫法**：如果工程團隊使用 React，Three.js 有官方社群的 **React Three Fiber（R3F）** 版本，可以用 JSX 寫 3D 場景。提案時可以說「用 R3F 實作」。

---

## 2. Babylon.js — 功能完整的 3D 遊戲引擎

* **一句話定位**：由微軟維護的 3D 引擎，內建點選、碰撞、物理、發光、GUI 等現成功能，更像一個「網頁版遊戲引擎」。
* **適合用在**：
  * 3D 虛擬展間、線上博物館、看屋導覽
  * 遊戲化行銷活動（3D 尋寶、闖關）
  * 需要大量互動邏輯的 3D 場景
* **不適合**：只是放一個會轉的模型時，Three.js 更輕量、範例更多。
* **Demo**：[3D 互動方塊陣列](https://roberthsu2003.github.io/UI_UX_Prototype/demos/3d-babylon.html)：5×5 方塊帶有陰影與霓虹發光，點擊方塊會讓它跳起來並換色。
* **關鍵字**：`ArcRotateCamera`、`GlowLayer`、`Picking 點選`、`PBR 材質`

```text
請用 Babylon.js 製作一個 3D 互動場景：地板上排列 5×5 個彩色方塊，有陰影與霓虹發光效果，
攝影機可拖曳環繞；點擊任一方塊時它會跳起來、旋轉並換成隨機顏色。請輸出成單一 HTML 檔。
```

---

## 3. WebGL Shader — 讓背景「流動」起來的魔法

* **一句話定位**：Shader（著色器）是直接寫給顯示卡執行的小程式，**對畫面上的每一個像素即時計算顏色**。液態、光暈、扭曲、雜訊漸層等效果都是用它做的。
* **適合用在**：
  * 會流動的液態 / 極光 / 漸層背景（呼應 [Claude Skill 實測](../Claude網頁設計Skill實戰指南/README.md) 中的「WebGL 液態咖啡」）
  * 圖片 hover 時的扭曲、溶解轉場
  * 品牌主視覺的光影質感
* **不適合**：Shader 程式碼可讀性低、除錯困難。建議請 AI 生成後只調整顏色、速度等參數。
* **Demo**：[液態咖啡背景](https://roberthsu2003.github.io/UI_UX_Prototype/demos/3d-shader.html)：用 fbm 雜訊做出拿鐵般流動的液體，滑鼠移動會產生漣漪，可以切換 4 種主題色。
* **關鍵字**：`ShaderMaterial`、`fragment shader`、`fbm noise`、`uniforms`、`mouse ripple`

```text
請用 Three.js 的 ShaderMaterial 製作一個全螢幕液態背景：用 fbm 雜訊產生像咖啡拿鐵般緩慢流動的漸層，
滑鼠移動時產生水波漣漪，並提供 4 組主題色按鈕切換。中央放置大標題「LIQUID COFFEE」。
請輸出成單一 HTML 檔。
```

> [!NOTE]
> **想多理解 Shader？** 推薦 [The Book of Shaders（有繁體中文）](https://thebookofshaders.com/?lan=ch) 與 [Shadertoy](https://www.shadertoy.com/)。在 Shadertoy 看到喜歡的效果時，可以把網址交給 AI，請它「改寫成 Three.js ShaderMaterial 背景」。

---

## 🔍 三者怎麼選？

| 需求 | 首選 |
| :--- | :--- |
| 產品展示、一般 3D 主視覺 | **Three.js**（React 專案用 R3F） |
| 互動邏輯多、像遊戲的 3D 場景 | **Babylon.js** |
| 不需要 3D 物體，只要「會流動的質感背景」 | **Shader** |
| 不會寫程式、想用拖拉方式做 3D | **[Spline](https://spline.design/)**（可直接匯出嵌入網頁） |

---

[⬅️ 上一章：Canvas 2D 繪圖](./01_Canvas_2D繪圖.md) ｜ [返回本單元目錄](./README.md) ｜ [下一章：動畫與動態影片感 ➡️](./03_動畫與動態影片感.md)
