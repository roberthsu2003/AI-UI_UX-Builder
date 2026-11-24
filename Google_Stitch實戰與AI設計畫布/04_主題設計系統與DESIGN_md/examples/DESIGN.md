---
version: alpha
name: 山城小旅行
description: 預約新竹、苗栗山城一日遊的網站。溫暖、自然、留白多，讓忙碌的上班族一看就想出門。
colors:
  primary: "#2F6B4F"
  primary-hover: "#24553F"
  on-primary: "#FFFFFF"
  accent: "#A8601E"
  on-accent: "#FFFFFF"
  surface: "#FAF8F3"
  surface-card: "#FFFFFF"
  text: "#1F2A24"
  text-muted: "#5B665F"
  border: "#E3DED3"
  danger: "#B3261E"
typography:
  display:
    fontFamily: Noto Serif TC
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  headline:
    fontFamily: Noto Serif TC
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: Noto Sans TC
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: Noto Sans TC
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: Noto Sans TC
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: 8px
  md: 14px
  lg: 24px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px
motion:
  quick:
    duration: 150ms
    timingFunction: ease-out
  gentle:
    duration: 300ms
    timingFunction: ease-in-out
components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 14px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 14px
  route-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 20px
  route-card-meta:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
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
---

# 山城小旅行 設計規範

## Overview

給想在週末帶家人放鬆的上班族。畫面要像翻開一本旅行雜誌：大張的山景照片、溫暖的米白底色、充足的留白。每一頁只有一個最主要的行動：「預約」。

## Colors

- **森林綠 primary**：品牌主色，只用在主要按鈕、連結與重點標示。
- **柿橘 accent**：用在限時優惠、「本週可預約」等需要被注意的標籤，一個畫面最多一處。
- **米白 surface**：頁面底色，比純白更溫暖；卡片用純白 surface-card 讓它浮起來。
- **文字**：主要文字 text，次要資訊（時間、地區）用 text-muted。

## Typography

- 標題用 Noto Serif TC（襯線體），帶出旅行雜誌的質感；內文與按鈕用 Noto Sans TC，確保好讀。
- 手機版：display 改為 32px、headline 改為 26px，內文維持 17px。

## Layout

- 桌機版內容最大寬度 1200px，左右留白至少 48px；手機版左右留白 20px。
- 區塊之間的上下間距使用 section（96px），手機版減半。
- 路線卡片：桌機三欄、平板兩欄、手機單欄。

## Elevation & Depth

- 卡片只用很淡的陰影或 1px 的 border 框線，不要厚重的陰影。
- 照片上的文字一定要加深色漸層遮罩，確保可讀。

## Shapes

- 按鈕與標籤用膠囊形（full），卡片用 md 圓角，大圖用 lg 圓角。

## Motion & Micro-interaction

- 按鈕 hover 使用 quick，卡片浮起與頁面區塊淡入使用 gentle。
- 不使用會讓人分心的大幅度動畫。

## Voice & Content Strategy

- 語氣像朋友推薦：「週末，去山裡走走」，而不是「立即購買行程」。
- 每條路線都寫出：所需時間、難度、適合對象（親子／長輩）、每人價格。

## Components

- **主要按鈕** → `button-primary`、`button-primary-hover`
- **優惠按鈕** → `button-accent`
- **路線卡片** → `route-card`、`route-card-meta`
- **表單欄位** → `input`、`input-error`
- **分隔線** → `divider`

## Do's and Don'ts

- Do：每個畫面只放一顆主要按鈕。
- Do：手機版的預約按鈕固定在畫面底部，寬度滿版。
- Don't：不要使用紫色或藍紫漸層、霓虹色。
- Don't：不要用 emoji 當圖示；不要把每個區塊都包成卡片。
