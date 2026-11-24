# 03. Generate 生圖轉向量與 Script / Shader 特效

> **學習目標**：解鎖 `pen.dev` 最強大的創作武器庫！前半段帶你完整實作 **`Generate` 的 6 大 AI 圖像與向量化能力**（生圖、圖庫、AI 畫 SVG、去背、換背景、點陣圖描邊轉向量）；後半段深入 **`script` 參數化腳本**與 **WebGL `shader` 即時著色器**，讓 AI 幫你寫出帶有控制面板的動態視覺元件，學生只要在右側面板拉動滑桿就能即時修改藝術效果！

---

## 一、`Generate` 六大 AI 視覺生成與向量化模式

在 `execute` 腳本中，`Generate` 函式整合了 6 種高頻視覺處理能力，讓你不用在 Photoshop、Remove.bg、Vectorizer 與 Midjourney 之間切來切去，直接在畫布內一次完成：

### 1. AI 生成客製插畫或攝影：`Generate("ai", nodeId, prompt)`
直接根據提示詞生成圖片，並自動填入指定節點（如 `rectangle` 或 `frame`）的 Image Fill 中。

```javascript
// 先建立一個 600x400 的圖片容器，再呼叫 AI 生圖填滿它
const heroImg = Insert(heroFrameId, {
  type: "rectangle",
  name: "HeroVisual",
  width: 600,
  height: 400,
  cornerRadius: 20
});
Generate("ai", heroImg, "極簡北歐風手沖咖啡木質吧台，清晨自然斜射光影，溫潤膠片質感攝影");
```

### 2. 自動配對高畫質圖庫：`Generate("stock", nodeId, query)`
不想花時間等 AI 生圖、需要真實情境照（例如人物頭像、辦公室照片）時，直接搜尋並填入免費高畫質 Unsplash 攝影圖。

```javascript
Generate("stock", avatarId, "asian software engineer portrait smiling");
```

### 3. AI 生成可編輯 SVG 向量圖：`Generate("svg", frameId, prompt)`
**設計師最愛的功能！** 它不是給你一張死板的 PNG，而是直接生成真正的 **SVG 向量路徑（`path` 節點）** 放進 `frameId` 裡。生成後，學生隨時可以按 **`P`（鋼筆工具）** 修改錨點形狀或換上品牌色。

```javascript
const logoBox = Insert(headerId, {
  type: "frame",
  name: "BrandLogoBox",
  width: 64,
  height: 64
});
Generate("svg", logoBox, "minimalist geometric mountain and coffee bean combined logo mark, flat vector");
```

### 4. 一鍵智慧去背：`Generate("remove-background", imageUrl)`
針對電商商品圖或人物照自動去背，回傳透明背景的去背圖 URL，接著可直接套入任意節點的 Fill。

```javascript
const cutoutUrl = Generate("remove-background", "https://example.com/sneaker.jpg");
Update(productCardImgId, {
  fill: { type: "image", url: cutoutUrl, mode: "fit" }
});
```

### 5. AI 重新生成背景與光影：`Generate("replace-background", imageUrl, prompt)`
保留原本的商品或人物主體，請 AI 根據你的指令重新生成融合光影的新場景！

```javascript
const studioPhotoUrl = Generate(
  "replace-background",
  cutoutUrl,
  "placed on a warm travertine stone podium with soft morning window shadows, commercial product photography"
);
Update(productCardImgId, {
  fill: { type: "image", url: studioPhotoUrl, mode: "fill" }
});
```

### 6. 點陣圖一鍵描邊轉向量：`Generate("vectorize-image", frameId, imageUrl)`
手上有客戶傳來的模糊 PNG Logo 或是手繪掃描插圖？用這招把它自動描邊轉換成乾淨可無限放大的向量圖層插入 `frameId` 中！

```javascript
Generate("vectorize-image", tracedFrameId, "https://example.com/hand-drawn-sketch.png");
```

---

## 二、`script` 參數化生成腳本節點（AI 寫程式 × 學生拉滑桿）

當你需要在畫布上做出規律的資料視覺化圖表、背景波點矩陣、條碼或幾何裝飾時，與其手動複製幾百個小圓點，不如讓 AI 建立一個 **`script` 節點**。

### `script` 節點的運作原理
1. 在 `.pen` 節點中設定 `type: "script"` 並透過 `scriptUri` 指向一份 `.js` 腳本檔案（例如 `./scripts/dot-matrix.js`）。
2. 腳本開頭必須宣告 **`/** @schema 2.11 */`**，並可用 `@input` 註解定義參數控制項（支援數字範圍、顏色、布林開關、文字）。
3. 執行時，`pen.dev` 會把目前節點寬高（`pencil.width`、`pencil.height`）以及學生在介面上調整的數值（`pencil.input.<name>`）傳入腳本，動態渲染出向量子節點。

```javascript
/** @schema 2.11 */
/**
 * @input {number} cols [min=4, max=24, step=1] 網格欄數
 * @input {number} rows [min=4, max=24, step=1] 網格列數
 * @input {number} dotSize [min=2, max=20, step=1] 圓點直徑
 * @input {color} dotColor 圓點顏色
 */

const cols = pencil.input.cols ?? 12;
const rows = pencil.input.rows ?? 8;
const size = pencil.input.dotSize ?? 6;
const color = pencil.input.dotColor ?? "#6366F1";

const nodes = [];
const stepX = pencil.width / (cols + 1);
const stepY = pencil.height / (rows + 1);

for (let r = 1; r <= rows; r++) {
  for (let c = 1; c <= cols; c++) {
    nodes.push({
      type: "ellipse",
      x: c * stepX - size / 2,
      y: r * stepY - size / 2,
      width: size,
      height: size,
      fill: color
    });
  }
}

return nodes;
```

> [!TIP]
> **人機協作亮點**：當 AI 建立好這份 `.js` 並掛載到 `script` 節點後，**學生只要用滑鼠點選畫布上的這個區塊，右側屬性面板就會自動出現 `網格欄數`、`網格列數`、`圓點直徑` 滑桿與 `圓點顏色` 調色盤！** 學生不用寫半行 JavaScript，直接拉滑桿就能即時改變幾何背景的密度與造型。

---

## 三、`shader` WebGL 1.0 即時著色器（極光背景與液態毛玻璃）

如果你想要做出蘋果官網等級的**流動極光漸層**、**互動滑鼠光暈**，或是**穿透背景文字的真實光學液態玻璃（Liquid Glass Refraction）**，`pen.dev` 支援將 **WebGL 1.0 Fragment Shader（`.glsl`）** 直接掛載為任何形狀的 **Fill（填充）** 或 **Effect（後製特效）**！

### 必知的 Shader 內建註解與特殊紋理
AI 撰寫 `.glsl` 時可以宣告以下特殊標籤與 uniforms：
* **`@resolution` / `@time` / `@mouse`**：自動接收畫布解析度、動態時間軸與滑鼠互動座標。
* **`@sdf`**：讀取當前節點形狀（如圓角矩形）的有向距離場，做邊緣高光或發光輪廓超好用！
* **`@range` / `@color` / `@label`**：跟 `script` 一樣，讓學生可以直接在 `pen.dev` 右側面板拉動滑桿調整速度、模糊或色調！
* **`"pencil:background"` 與 `"pencil:object"`**：在 Shader 中綁定這兩張特殊紋理，就能即時取樣節點「背後的畫面像素」或「物件本身」，做出極度逼真的**色散折射玻璃卡片**。

```glsl
precision mediump float;

// @resolution
uniform vec2 u_resolution;
// @time
uniform float u_time;
// @color
// @label 主色調 A
uniform vec3 u_colorA;
// @color
// @label 主色調 B
uniform vec3 u_colorB;
// @range [min=0.2, max=3.0, step=0.1]
// @label 流動速度
uniform float u_speed;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float wave = 0.5 + 0.5 * sin(uv.x * 3.14 + u_time * u_speed + cos(uv.y * 2.5 - u_time * 0.5));
  vec3 col = mix(u_colorA, u_colorB, wave);
  gl_FragColor = vec4(col, 1.0);
}
```

---

## 四、動手實作 Lab 3：AI 品牌視覺工坊（SVG Logo + 商品去背換景 + 互動 Script/Shader 海報）

這次實作把 **Generate**、**Script** 與 **Shader** 全部串進一張「精品咖啡豆品牌活動海報」裡！

### 步驟一：用 Prompt 請 AI 一次打造整合畫布

> [!IMPORTANT]
> **Prompt 撰寫注意事項（結合生成資產與參數化控制）**：
> 1. **明確拆解圖層角色**：指定主海報背景用 `shader`（並要求加上 `@range` 與 `@color`、`@label` 繁體中文控制標籤）、點陣網格裝飾用 `script`（加 `@input` 控制欄列數）、Logo 用 `Generate("svg")`，主圖用 `Generate("ai")` 或 `Generate("stock")`。
> 2. **把腳本與 Shader 檔案放在工作目錄內**：要求 AI 將 `.js` 與 `.glsl` 寫在 `./scripts/` 與 `./shaders/` 資料夾中，確保路徑正確可被 `.pen` 載入。
> 3. **提醒預留手動微調空間**：請 AI 在右側或旁邊貼上 `note` 說明每個滑桿的用途。

<details>
<summary>參考 Prompt（點擊展開，可直接複製使用）</summary>

```text
請幫我在目前開啟的 .pen 檔案中，找空白位置設計一張 800x1000 的「職人咖啡品牌快閃海報（CoffeePosterFrame）」，並整合 Generate、Script 與 Shader 三大進階工具：

1. Shader 動態背景（在 ./shaders/aurora.glsl 建立 WebGL 1.0 shader）：
   - 建立一個 800x1000 的背景矩形，套用 aurora.glsl 作為 shader fill。
   - 請在 glsl 中加入 @color（u_colorA 暖烘培棕、u_colorB 深焙琥珀）、@range（流動速度 u_speed 0.2~3.0）與繁體中文 @label，讓學生能在右側面板直接調整顏色與流速。
2. Script 幾何裝飾圖層（在 ./scripts/grid_dots.js 建立 @schema 2.11 腳本）：
   - 在海報右上角放入一個 240x240 的 script 節點，讀取 ./scripts/grid_dots.js 畫出裝飾圓點陣列。
   - 請加上 @input 定義欄數（cols）、列數（rows）、圓點大小（dotSize）與顏色（dotColor）。
3. Generate 生圖與 SVG 向量生成：
   - 在海報上方品牌區建立 80x80 的 LogoFrame，使用 Generate("svg", ...) 生成一個「極簡線條風格的咖啡杯結合山峰向量 Logo」。
   - 在海報中央建立 560x420 圓角圖片框，使用 Generate("ai", ...) 生成一張「精品手沖咖啡豆與黃銅濾杯的棚拍質感攝影」。
   - （選做練習）如果我有提供外部圖片網址，也幫我預留一組用 Generate("remove-background") 與 Generate("replace-background") 處理的對照小卡。
4. 排版與標註：
   - 疊上一張半透明白色加上 background_blur: 20 的毛玻璃資訊卡，放上活動日期、地點與標題。
   - 貼一張黃色 note 便利貼提示學生可以點選哪些節點來調整 Shader 滑桿、Script 網格與 SVG 錨點。

完成後執行 TakeScreenshot 檢查海報視覺平衡與文字可讀性，並執行 save。
```

</details>

### 步驟二：學生在 `pen.dev` 介面親自動手玩出不同風格！
生成完成後，請直接在 `pen.dev` 畫面上進行以下 **4 項手動實驗**：

1. **手動操控 Shader 面板**：點選背景矩形，看看右側屬性面板是不是長出了 **`主色調 A`**、**`主色調 B`** 與 **`流動速度`**？試著把它從暖咖啡色調成**賽博龐克紫藍極光**，感受即時渲染的視覺衝擊！
2. **手動調整 Script 參數滑桿**：點選右上角的 `script` 圓點矩陣節點，把 `欄數`、`列數` 拖高，再把 `圓點直徑` 調小，一秒切換成精緻高密度的波點紋理。
3. **手動編輯 AI 生成的 SVG Logo**：展開 `LogoFrame` 裡由 `Generate("svg")` 產生的向量 `path` 圖層，直接換掉它的筆劃顏色，甚至按 **`P`** 點開錨點微調其中一條曲線弧度——驗證它真的是純向量而不是貼圖！
4. **微調毛玻璃透明度**：選取前景的資訊卡，在右側調整 Fill 的 Alpha 透明度與 `background_blur` 數值，觀察後方 Shader 動態色彩如何透過玻璃透出來。
