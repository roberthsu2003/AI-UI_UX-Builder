# 06. 現成 DESIGN.md 社群資源庫

> 不想從零開始摸索配色與排版，只想直接看圖挑一個喜歡的樣式來套用？現在網路上已經有許多熱心社群，把世界知名網站的設計系統整理成現成的 `DESIGN.md` 與視覺預覽。這一章帶你認識最實用的幾個資源庫，並教你怎麼在三分鐘內改造成自己網站可用的版本。

---

## 可以去哪裡挑現成的 DESIGN.md？

下面這些網站與 GitHub 開源倉庫都**完全免費、免註冊、沒有付費牆**，可以直接瀏覽並複製 `DESIGN.md`：

| 資源名稱 | 特色與裡面有什麼 | 最適合誰 |
| :--- | :--- | :--- |
| **[DesignMD Gallery（designmd.app）](https://designmd.app/)** | 完全免費的開放目錄，收錄 750+ 份 `DESIGN.md`；可依風格、產業與色系標籤篩選，點開就能看色票、字型並直接複製 | **想直接依風格與顏色免費逛樣式的人** |
| **[bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills)** | GitHub 免費開源風格庫（含 `bento`、`brutalism`、`cafe`、`clean`、`claymorphism` 等 30+ 種風格）；README 上就能直接看網頁預覽圖，點進 `skills/<風格名>/DESIGN.md` 即可複製 | **想直接「看預覽圖挑風格」的人** |
| **[VoltAgent/awesome-design-md（design-md 資料夾）](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md)** | GitHub 熱門 MIT 開源倉庫，收錄 Linear、Claude、Notion、Stripe、Apple 等 80+ 個知名品牌規範；**直接進這裡的資料夾複製 `DESIGN.md` 完全免費**（倉庫首頁部分品牌連結會導向外部付費站，直接看 GitHub 資料夾即可） | 想參考知名品牌設計質感的人 |
| **[md-design.io](https://www.md-design.io/)** | 免費線上渲染器＋範例庫；不用註冊、檔案不需上傳伺服器，把任何 `DESIGN.md` 貼進去就能在瀏覽器即時預覽成視覺指南 | 想在套用前先預覽文字規範長什麼樣子的人 |
| **[google-labs-code/design.md](https://github.com/google-labs-code/design.md)** | Google 官方開源規格與標準範例（Apache-2.0），格式最嚴謹，也附帶免費命令列檢查工具 | 想確認標準格式、或準備匯入 Google Stitch 使用的人 |

---

## 不知道挑哪一個？依網站類型對照挑

逛展示庫時如果眼花撩亂，可以先從下面幾組最穩妥、質感公認最好的範本開始看：

| 你想做的網站類型 | 建議直接看這些範本 | 畫面給人的感覺 |
| :--- | :--- | :--- |
| **科技產品、SaaS、AI 工具** | Linear、Vercel、Raycast | 俐落、專業、高對比，資訊層次非常清楚 |
| **個人筆記、知識庫、內容服務** | Notion、Claude | 溫暖、好讀、留白舒適，文字與卡片很耐看 |
| **選品電商、旅遊住宿、生活平台** | Airbnb | 照片大、圓角柔和、親和力高，引導行動很自然 |
| **品牌形象、設計工作室、精品** | Apple、Teenage Engineering | 視覺張力強、版面乾淨大氣，產品照是主角 |
| **金融、企業服務、B2B 官網** | Stripe | 穩重可信、數據與按鈕清楚，專業感十足 |

---

## 挑好之後怎麼直接用？（三步驟）

國外社群整理的 `DESIGN.md` 幾乎都是全英文網站的規範，直接拿來做台灣繁體中文網頁時，通常會缺兩個東西：**中文字型**，以及**屬於你自己的品牌色**。

照著這三步做，就能在 30 秒內把它變成你自己的規範：

### 步驟 1：看預覽，存下一個你最喜歡的 `DESIGN.md`

在上面的免費目錄或 GitHub 風格庫挑到喜歡的樣式後，直接複製裡面的 `DESIGN.md` 內容，存成專案資料夾裡的 `source-DESIGN.md`。

### 步驟 2：請 AI 幫你「在地化成繁體中文＋換上品牌色」

把下面這段 Prompt 和 `source-DESIGN.md` 一起交給 AI：

<details>
<summary>📋 Prompt：把社群範本轉成自己的繁體中文 DESIGN.md</summary>

```text
附件 source-DESIGN.md 是我從網路上挑到的設計範本。
我很喜歡它的版面比例、留白節奏與元件質感，請幫我改寫成屬於我的專案的 DESIGN.md：

- 我的專案主題：【例如：獨立設計工作室作品集／台南手工甜點預約頁】
- 我的品牌主色：【例如：暖磚紅 #B8422E（或請依我的主題建議一組）】
- 頁面語言：繁體中文為主、英文數字為輔

請依以下規則產出完整的 DESIGN.md：
1. 保留原範本的排版結構、圓角比例、間距節奏與按鈕元件感。
2. 換掉原品牌的招牌色與品牌名稱，改用我的主題色與中性底色。
3. 字型請搭配適合這個風格的「英文字型＋繁體中文字型」（例如 Noto Sans TC、Noto Serif TC、Chiron Hei HK 等免費 Google Fonts），並寫明網頁 `<link>` 載入方式。
4. 整理成標準的兩層格式（上方 YAML Token ＋ 下方 Markdown 章節），方便後續帶到各種 AI 工具使用。
```

</details>

### 步驟 3：直接開始做網頁

產生出新的 `DESIGN.md` 後，之後開任何對話，只要附上這份檔案並說：「請嚴格依照 `DESIGN.md` 製作首頁」，AI 就會用你挑好的大師級版面骨架，做出繁體中文網站。

---

## 套用現成範本的小提醒

- **借骨架，不要照抄品牌色**：像 Stripe 的紫藍、Spotify 的亮綠辨識度太高，換掉主色與名稱，才不會做出「山寨官網」。
- **社群範本格式不太一樣沒關係**：`awesome-design-md` 裡的檔案大多偏向純文字描述，Google 官方則有上方 YAML Token。AI 都看得懂；如果你要把檔案匯入 Google Stitch，只要像步驟 2 一樣請 AI 補上 YAML 區塊即可。
- **還是覺得某個細節怪怪的？**：拿著改好的 `DESIGN.md`，回到〈[04. 建立與驗證自己的 DESIGN.md](./04_建立與驗證自己的DESIGN_md.md)〉做一次 `style-guide.html` 檢查對比與字型，就能微調到最順眼。

---

🎉 **完成本單元！** 接著可以把你的 `DESIGN.md` 帶到 Claude Design、Google Stitch 或 pen.dev 單元中，做出完整的網站原型。

[⬅️ 返回本單元目錄](./README.md)
