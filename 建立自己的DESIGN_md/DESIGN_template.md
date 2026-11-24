---
# ============================================================
# DESIGN.md 範本（依照 Google 官方開放規格）
# 使用方式：複製這個檔案，改名為 DESIGN.md，把所有範例值換成你的專案。
# 井字號（#）後面是說明文字，填完可以刪掉。
# ============================================================
version: alpha
name: 我的專案名稱              # 例如：木日 Kibi
description: 一句話說明這個網站與它的感覺

colors:                          # 色碼建議用 #RRGGBB
  primary: "#8B5E3C"             # 品牌主色：主要按鈕、連結
  primary-hover: "#734C2F"       # 主要按鈕滑鼠移上
  on-primary: "#FFFFFF"          # 放在主色上的文字
  accent: "#A8601E"              # 強調色：優惠標籤等，少量使用
  surface: "#FAF8F5"             # 頁面底色
  surface-alt: "#F2ECE4"         # 交替區塊的底色
  surface-card: "#FFFFFF"        # 卡片底色
  text: "#1E1B18"                # 主要文字（不要用純黑）
  text-muted: "#6B655E"          # 次要文字：日期、說明
  border: "#E5DFD7"              # 細框線、分隔線
  danger: "#B3261E"              # 錯誤訊息

typography:                      # 中文字型一定要寫（Noto Sans TC／Noto Serif TC）
  display:                       # 最大的標題
    fontFamily: Noto Serif TC
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.15
  headline:                      # 區塊標題
    fontFamily: Noto Serif TC
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
  title:                         # 卡片標題
    fontFamily: Noto Sans TC
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
  body:                          # 內文
    fontFamily: Noto Sans TC
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
  label:                         # 按鈕、標籤
    fontFamily: Noto Sans TC
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4

rounded:                         # 圓角
  sm: 4px
  md: 8px
  lg: 16px
  full: 999px

spacing:                         # 間距
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px                  # 區塊之間的上下間距

components:                      # 元件；用 "{群組.名稱}" 引用上面的 Token
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 14px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  tag-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-meta:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
  section-alt:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
  input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    height: 48px
  input-error:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.danger}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
---

# 我的專案名稱 設計規範

<!-- 下面的章節順序是官方規定的，不需要全部都寫，但寫了就要照這個順序。 -->

## Overview

<!-- 品牌個性、目標對象、希望訪客有什麼感覺。用具體的畫面描述，不要只寫形容詞。 -->

- **風格**：（例如：編輯雜誌風，像翻開一本台南生活雜誌）
- **目標對象**：（例如：22–40 歲喜歡老宅與手沖咖啡的人）
- **最重要的行動**：（例如：點「立即訂位」完成預約）

## Colors

<!-- 每個顏色什麼時候用、什麼時候不能用。 -->

- **primary**：只用在主要按鈕與連結。
- **accent**：限時優惠標籤，一個畫面最多一處。
- **surface／surface-alt**：區塊交替只能用這兩個顏色。

## Typography

<!-- 字型怎麼搭配；手機版字級怎麼調整。 -->

- 標題用襯線字，內文與按鈕用無襯線字。
- 手機版：display 改為 32px、headline 改為 26px，內文維持 17px。

## Layout

<!-- 內容最大寬度、欄數、間距、手機版怎麼排。 -->

- 桌機內容最大寬度 1200px；手機左右留白 20px。
- 卡片：桌機 3 欄、平板 2 欄、手機 1 欄。

## Elevation & Depth

<!-- 要不要用陰影？用多重？ -->

- 不使用陰影，以 1px 的 border 區分層次。

## Shapes

- 按鈕使用 md 圓角，卡片使用 lg 圓角，標籤使用膠囊形（full）。

## Motion & Micro-interaction

- 按鈕 hover 變色時間 150ms；不使用大幅度或一直重複的動畫。

## Voice & Content Strategy

- 語氣像老朋友推薦，不使用「立即搶購」、「限時秒殺」這類推銷用語。

## Components

- **主要按鈕** → `button-primary`、`button-primary-hover`
- **卡片** → `card`、`card-meta`
- **表單** → `input`、`input-error`

## Do's and Don'ts

<!-- 至少寫 3 條「不能做的事」，這是 AI 最需要的資訊。 -->

- Do：每個畫面只放一顆主要按鈕。
- Don't：不要使用紫色或藍紫漸層、霓虹色、發光效果。
- Don't：不要用 emoji 當圖示；不要把每個區塊都包成卡片。
- Don't：文字不要用純黑 #000000。

## Changelog

<!-- 每次修改規範都記一筆：版本、改了什麼、為什麼。 -->

- v1.0：建立第一版。
