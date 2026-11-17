# 第二章：AI 看得懂的 Figma 基本功 🧱

[⬅️ 上一章：帳號方案與 MCP 連線設定](./01_帳號方案與MCP連線設定.md) ｜ [🏠 返回單元主頁](./README.md) ｜ [➡️ 下一章：實戰 DESIGN.md → Figma → 網頁](./03_實戰_DESIGN_md到Figma到網頁.md)

AI 透過 MCP 讀 Figma 時，**看的不是畫面，而是圖層結構**。同樣長得一模一樣的兩張卡片：

* 一張是「隨手拖拉的矩形 + 文字」→ AI 只能輸出一堆 `position: absolute; top: 137px;`
* 一張是「有命名、有 Auto Layout、有 Variables 的元件」→ AI 能輸出乾淨的 `flex`、`gap` 與 CSS 變數

所以這一章的基本功，**同時是好的設計習慣，也是讓 AI 讀懂你的前提**。

> [!NOTE]
> 本章 2-1 ～ 2-6 都是**純手動練習，免費 Starter 版就能完成**。請開一個新的 Figma Design 檔，命名為 `學號_姓名_Figma基本功`。

---

## 📋 先記住這 8 個快捷鍵

| 動作 | Mac | Windows |
| :--- | :--- | :--- |
| 建立 Frame | `F` 或 `A` | `F` 或 `A` |
| 矩形 / 文字 | `R` / `T` | `R` / `T` |
| **加上 Auto Layout** | `Shift + A` | `Shift + A` |
| 重新命名圖層 | `Cmd + R` | `Ctrl + R` |
| **建立元件 Component** | `Cmd + Option + K` | `Ctrl + Alt + K` |
| 把選取物件包成群組 Frame | `Cmd + Option + G` | `Ctrl + Alt + G` |
| 縮放到選取物件 | `Shift + 2` | `Shift + 2` |
| 快速搜尋任何指令 | `Cmd + /` | `Ctrl + /` |

---

## 🖼️ 練習 2-1：Frame — 一切從畫框開始（5 分鐘）

**觀念**：Frame 就是網頁裡的「區塊容器」（等同 HTML 的 `<div>` / `<section>`）。**Group 不等於 Frame**，Group 沒有自己的尺寸與排版規則，AI 讀到 Group 時很難判斷用途。

**動手做：**
1. 按 `F`，在右側面板選擇 **Desktop（1440 × 1024）** 建立一個頁面 Frame，命名為 `Home`。
2. 在 `Home` 裡再建立一個 Frame 當作頁首，寬 `1440`、高 `72`，命名為 `Header`。

> ✅ 原則：**頁面 → 區塊 → 元件**，全部用 Frame 一層層包起來，不要用 Group。

---

## 📐 練習 2-2：Auto Layout — 會自己長大的按鈕（10 分鐘）

**觀念**：Auto Layout 等同 CSS 的 **Flexbox**。有 Auto Layout，AI 轉程式時會輸出 `display: flex; gap; padding`；沒有的話只能輸出絕對座標，換個文字長度就破版。

**動手做：做一顆按鈕**
1. 按 `T` 打字「立即預約」。
2. 選取文字，按 `Shift + A` → 文字被包進一個 Auto Layout Frame。
3. 在右側面板設定：
   * Padding：左右 `24`、上下 `12`
   * 填色 Fill：`#8B5E3C`（上一單元的 `primary`）
   * 圓角 Radius：`8`
   * 文字顏色：`#FFFFFF`
4. 把文字改成「立即預約今日座位」→ **按鈕自動變寬**，這就是 Auto Layout。
5. 命名為 `Button`。

**進階：認識三種尺寸模式**

| 模式 | 意思 | 對應 CSS | 用在哪裡 |
| :--- | :--- | :--- | :--- |
| **Hug contents** | 依內容大小 | `width: fit-content` | 按鈕、標籤 |
| **Fill container** | 撐滿父層 | `flex: 1` / `width: 100%` | 手機版全寬按鈕、卡片內文字 |
| **Fixed** | 固定數值 | `width: 320px` | 少用，容易在 RWD 破版 |

---

## 🏷️ 練習 2-3：圖層命名 — AI 讀的是名字（5 分鐘）

**📎 小範例：同一張卡片的兩種圖層樹**

```text
❌ AI 看不懂                     ✅ AI 看得懂
Frame 427                        Card/Product
├── Rectangle 12                 ├── Image
├── Group 8                      ├── Content
│   ├── 拿鐵                      │   ├── Title         「拿鐵」
│   └── Text                     │   ├── Description   「濃縮咖啡與…」
└── Frame 431                    │   └── Price         「NT$ 140」
    └── Text                     └── Button/Primary    「加入購物車」
```

右邊的版本，AI 轉出來的程式碼會自動出現 `class="card-product"`、`<h3 class="title">`，而且一看就知道哪個是價格。

**動手做：**
1. 用 Auto Layout 做出一張產品卡片（圖片用灰色矩形代替、標題、說明、價格、練習 2-2 的按鈕）。
2. 按 `Cmd/Ctrl + R` 把每一層都照右邊的方式命名。

> ✅ 命名規則：用**英文**、描述**用途**而非外觀（`Price` 而不是 `BrownText`），元件用 `/` 分類（`Button/Primary`）。

---

## 🎨 練習 2-4：Variables — 把 DESIGN.md 搬進 Figma（10 分鐘）

**觀念**：Figma Variables 等同 `DESIGN.md` YAML 裡的 Tokens，也等同 CSS 的 `--color-primary`。用了 Variables，AI 讀稿時會拿到 `primary` 這個**名字**，而不只是 `#8B5E3C` 這個數值。

**動手做：**
1. 點畫布空白處（不要選取任何東西）→ 右側面板找到 **Variables**（或「Local variables」）→ 開啟。
2. 建立一個 Collection 命名為 `Colors`，新增以下 4 個 Color 變數：

| 變數名稱 | 值 |
| :--- | :--- |
| `canvas` | `#FAF8F5` |
| `surface` | `#FFFFFF` |
| `ink` | `#1E1B18` |
| `primary` | `#8B5E3C` |

3. 回到練習 2-3 的卡片，把按鈕的填色從「直接輸入的色碼」**改成套用 `primary` 變數**（點填色旁的變數圖示選擇）。
4. 回到 Variables 面板，把 `primary` 改成 `#2F5D50` → **所有套用的地方一起變色**。改回原色。

> 🔗 **伏筆**：第三章我們會讓 AI 直接讀 `DESIGN.md`，**一次幫你建好全部的 Variables**，不用手動一個一個輸入。現在手動做一次，是為了讓你知道 AI 幫你做了什麼。

---

## 🧩 練習 2-5：Components & Variants — 一顆按鈕的四種狀態（10 分鐘）

**觀念**：Component 是「母版」，複製出去的是 Instance（分身）；改母版，所有分身一起改。Variants 是把同一元件的不同狀態放在一起，對應 `DESIGN.md` 第 4 章的 Hover / Disabled 規則。

**動手做：**
1. 選取練習 2-2 的按鈕，按 `Cmd + Option + K`（Win：`Ctrl + Alt + K`）建立元件，命名為 `Button`。
2. 在右側面板點 **Add variant**（加入變體），做出 3 個狀態，並把屬性命名為 `State`：

| State | 樣式 |
| :--- | :--- |
| `Default` | 填色 `primary` |
| `Hover` | 填色加深為 `#734C2F` |
| `Disabled` | 圖層透明度 `45%` |

3. 從左側 **Assets** 面板把 `Button` 拖到卡片裡取代原本的按鈕，再試著在右側面板切換 `State`。

---

## 📱 練習 2-6：Constraints 與 RWD — 拉一拉就知道會不會破版（5 分鐘）

**觀念**：Figma 不是瀏覽器，但可以用「拉伸 Frame」模擬不同螢幕寬度，提早發現 `DESIGN.md` 第 8 章的響應式問題。

**動手做：**
1. 把卡片中的 `Content` 與 `Button` 寬度設為 **Fill container**。
2. 把卡片本身拉寬、拉窄，觀察內容是否跟著伸縮。
3. 複製一份卡片放進一個 `375` 寬的手機 Frame（`F` → 選 iPhone 尺寸），檢查文字是否溢出、按鈕高度是否至少 `44px`。

---

## 🔬 練習 2-7：AI 讀稿對照實驗 —「亂畫」vs「規範」（10 分鐘）

> 需要 MCP 連線（[第一章 實作 1-2](./01_帳號方案與MCP連線設定.md)）。每人約消耗 2 次讀取額度。

1. **做一張「亂畫版」卡片**：不用 Auto Layout、不命名、直接輸入色碼，外觀盡量做得跟規範版一樣。
2. 分別對兩張卡片 **右鍵 → Copy link to selection**（部分版本在 Copy/Paste as 子選單內）。
3. 對 AI 說：

```text
請用 Figma MCP 分別讀取以下兩個節點，各自轉成一段 HTML + CSS：
A（亂畫版）：<貼上連結 A>
B（規範版）：<貼上連結 B>
轉完後請用表格比較兩段程式碼在：排版方式、class 命名、色彩是否用變數、文字變長時會不會破版。
```

4. 把 AI 的比較表截圖貼到你的 Figma 檔旁邊，作為本章的學習紀錄。

**📎 小範例：常見的對照結果**

```css
/* A：亂畫版 */
.frame-427 { position: relative; width: 320px; height: 412px; }
.text-2   { position: absolute; left: 24px; top: 236px; color: #1E1B18; }

/* B：規範版 */
.card-product { display: flex; flex-direction: column; gap: 16px; padding: 24px; }
.card-product .title { color: var(--ink); }
```

> [!IMPORTANT]
> 這就是本章的核心結論：**AI 寫出來的程式碼品質，取決於你在 Figma 裡的設計品質。** 好的 UI/UX 設計師，畫出來的稿本來就是結構化的。

---

## ✅ 本章自我檢核

- [ ] 我的頁面全部用 Frame 包，沒有用 Group
- [ ] 按鈕與卡片都使用 Auto Layout，文字變長不會破版
- [ ] 所有圖層都有用途導向的英文名稱
- [ ] 顏色是套用 Variables，而不是直接輸入色碼
- [ ] 按鈕是 Component，並有 Default / Hover / Disabled 三種 Variants
- [ ] 卡片在 375px 手機寬度下不會溢出

---

[⬅️ 上一章：帳號方案與 MCP 連線設定](./01_帳號方案與MCP連線設定.md) ｜ [➡️ 下一章：實戰 DESIGN.md → Figma → 網頁](./03_實戰_DESIGN_md到Figma到網頁.md)
