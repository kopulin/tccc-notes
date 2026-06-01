# DEV LOG｜TCCC 戰術急救快速查找網站

## TL;DR

網站已正式上線：**https://kopulin.github.io/tccc-notes/**。內容持續更新中，push 後約 35 秒自動部署。本機 git 環境已重設完畢，`tccc-notes` 為獨立 repo，remote 指向 `kopulin/tccc-notes.git`。

---

## [2026-05-30] Session｜網站部署上線、內容持續編修

### 完成項目
- **網站正式部署上線**：https://kopulin.github.io/tccc-notes/
- **GitHub repo 重建**：原本 git init 在錯誤的上層資料夾（Projects/），重新在 `tccc-notes/` 內建立獨立 repo 並 push
- **修正圖片路徑錯誤**：`10-antibiotics.md` 的圖片路徑從 `/tccc-notes/images/` 修正為 `/images/`
- **內容編修**：`11-wound.md` 新增傷口敷料選擇章節（泡棉、海藻膠、人工皮、水凝膠、銀離子、麥盧卡蜂蜜）
- **`10-antibiotics.md`** 抗生素章節重新整理為閱讀式格式，補充比較表格

### 圖片路徑規則（重要）
- ✅ 正確：`/images/檔名.xxx`
- ❌ 錯誤：`/tccc-notes/images/檔名.xxx`（只有 config.ts 的 base 才加 `/tccc-notes/`）

### 部署流程（已建立）
每次編修後：commit → 我用指令 push → Actions 自動部署（約 35 秒）

---

## [2026-05-30] Session｜表格語法全面轉換、校稿與插圖補充

### 完成項目
- **所有 md 表格 → HTML `<table>` 語法**（12 個章節、22 張表格，含 rowspan）
  - `docs/chapters/01-intro.md`、`03-triage.md`、`06-respiration.md`
  - `docs/chapters/07-circulation.md`、`08-hypothermia-head.md`、`09-pain.md`
  - `docs/chapters/10-antibiotics.md`、`11-wound.md`、`13-pcc.md`
  - `docs/chapters/15-ccp.md`、`16-documentation.md`、`17-appendix.md`
- **燒傷輸液計算改為 Callout Block**（`docs/chapters/11-wound.md`）
  - ATLS → `::: info`（藍邊）；Rule of Ten → `::: warning`（黃邊）
- **md 文字校稿**（設計師在對話外完成，對照 Notion 原版）
- **各章節插圖補充**（設計師在對話外完成，圖片路徑已更新）

### 設計師決策記錄

#### 公式類內容的呈現方式
| 欄位 | 內容 |
|------|------|
| 考慮選項 | A：Code Block（等寬字體、灰底）　／　B：Callout Block（左側色條） |
| 決定 | 選 B（Callout Block） |
| 理由 | A 的黃色警示色對比過強、閱讀疲勞；B 的左色條視覺較柔和 |
| 可重新討論的條件 | 未設定 |
| 記錄時間 | 2026-05-30 |

### 已知問題 / 技術債
- [ ] 各表格欄寬尚未微調（colgroup width 已開放，設計師可自行調整數值）｜影響：視覺比例｜Blocking：否
- [ ] 手機版表格 overflow-x 溢出問題尚未處理｜影響：手機閱讀體驗｜Blocking：否

### 下一步 To-Do
- [ ] P0｜建立 GitHub repo 並 push（見 DEV_LOG 部署流程）
- [ ] P0｜Settings → Pages → Source 選 GitHub Actions
- [ ] P0｜確認 `config.ts` 的 `base` 路徑（目前為 `/tccc-notes/`）
- [ ] P1｜各表格欄寬微調（colgroup width）
- [ ] P1｜手機版表格 overflow-x 修正
- [ ] P1｜YouTube 嵌入 & 圖片 caption 補充
- [ ] P1｜2026 TCCC 新內容更新
- [ ] P1｜首頁章節卡片 features.details 文字確認
- [ ] P2｜各章節 description frontmatter 填寫
- [ ] P2｜各章節 last_updated frontmatter 填寫

### 環境異動
- 無異動

---

## 專案狀態

| 項目 | 狀態 | 備註 |
|------|------|------|
| PRD | ✅ 完成 | 見 `PRD.md`，全部 7 章已填充 |
| VitePress 設定 | ✅ 完成 | `docs/.vitepress/config.ts` |
| Carbon 主題 CSS | ✅ 完成 | `docs/.vitepress/theme/custom.css` |
| GitHub Actions 部署 | ✅ 完成 | `.github/workflows/deploy.yml` |
| 首頁 `index.md` | ✅ 完成 | layout: home，17 章 features，含 icon |
| 章節 md 內容 | ✅ 完成 | 17 個檔案已從 tccc-reference.md 遷移，全部 published |
| 首頁 icon | ✅ 完成 | 17 章各配一個 SVG icon，來自 Design System |
| 圖片資源 | ✅ 完成 | 複製至 `docs/public/`，路徑已更新為絕對路徑 |
| 手機版表格樣式 | ⚠️ 待處理 | 表格在小螢幕顯示不佳，需調整 CSS |
| 所有表格轉 HTML 語法 | ✅ 完成 | 12 檔、22 張，含 colgroup 欄寬設定 |
| md 文字校稿 | ✅ 完成 | 對照 Notion 原版逐章校對 |
| 圖片補充 | ✅ 完成 | 各章節插圖已加入並更新路徑 |
| GitHub repo 建立 | ✅ 完成 | https://github.com/kopulin/tccc-notes |
| 首次部署 | ✅ 完成 | https://kopulin.github.io/tccc-notes/ |

---

## To-Do List

### 🔴 P0 — 必須完成才能上線

- [x] ~~內容遷移（17 章）~~
- [x] ~~**建立 GitHub repo** 並 push 程式碼~~
- [x] ~~**設定 GitHub Pages**：Settings → Pages → Source 選 GitHub Actions~~
- [x] ~~**確認 `config.ts` 的 `base`**：`/tccc-notes/`~~

### 🟡 P1 — 上線後優化

- [ ] **⏳ 進行中｜md 文字校對**：逐章對照 Notion 原版，修正文字錯誤與落差（2026-05-28 已開始）
- [ ] **⏳ 進行中｜表格寬度樣式**：`custom.css` 調整 table 欄寬，改善各章節表格顯示比例
- [ ] **⏳ 進行中｜YouTube 嵌入 & 圖片說明**：各章節補充影片連結與圖片 caption 文字
- [ ] **手機版表格樣式**：表格在小螢幕橫向溢出，需加 `overflow-x: auto` 或改為 scroll 容器
- [ ] **2026 TCCC 新內容**：參考最新課程資料，更新 `tccc-reference.md` 後同步至對應章節 md 檔
- [ ] **首頁章節卡片描述**：`docs/index.md` 的 features.details 目前為暫定文字，需作者確認或調整
- [ ] **各章節 `description` frontmatter**：用於搜尋結果摘要，目前為暫定文字
- [ ] **各章節 `last_updated` frontmatter**：填入最後更新日期

### 🟢 P2 — 功能強化

- [ ] 確認搜尋結果呈現方式是否符合需求（目前使用 VitePress local search 預設行為）
- [ ] 評估是否需要自訂首頁版型（目前使用 VitePress layout: home，非 mockup 設計稿版型）

---

## 重要規則（給 Claude）

1. **內容不可自行改寫**：`docs/chapters/*.md` 的 TCCC 技術內容不得自行 paraphrase 或重新整理，任何內容修改需作者確認。
2. **`docs/chapters/*.md` 是唯一內容真實來源**：內容遷移階段已完成，日後新增或修訂內容直接在章節 md 檔操作。`tccc-reference.md` 保留為歷史備份，不再同步維護。
3. **PRD.md 是設計決策記錄**：實作有疑問時先查 PRD，不要自行決定視覺或結構。

---

## 目錄結構說明

```
tccc-notes/
├── PRD.md                    ← 產品需求文件（完整）
├── DEV_LOG.md                ← 本檔案
├── mockup.html               ← UI 原型，可直接用瀏覽器開啟預覽
├── tccc-reference.md         ← ⚠️ 內容真實來源，不可刪除
├── TCCC TECC 急救筆記*.md     ← 原始課程筆記（參考用）
│
├── package.json              ← npm scripts（docs:dev / docs:build）
├── .gitignore
│
├── docs/
│   ├── index.md              ← 首頁（VitePress layout: home）
│   ├── .vitepress/
│   │   ├── config.ts         ← Sidebar、搜尋、base path
│   │   └── theme/
│   │       ├── index.ts      ← 載入 custom.css
│   │       └── custom.css    ← IBM Carbon 色彩 / 字體 / 方角覆蓋
│   └── chapters/
│       ├── 01-intro.md       ← 概論與原則
│       ├── 02-risk-zones.md  ← 風險區域
│       └── ... 共 17 個      ← 全部 status: published
│
└── .github/
    └── workflows/
        └── deploy.yml        ← push to main → 自動部署 GitHub Pages
```

---

## 本地開發啟動

```bash
# 首次
npm install

# 開發（hot reload）
npm run docs:dev
# → http://localhost:5173/tccc-notes/

# Build 確認
npm run docs:build
npm run docs:preview
```

---

## 部署流程

```bash
# 首次設定 GitHub repo
git init
git add .
git commit -m "init: VitePress setup"
git branch -M main
git remote add origin https://github.com/[帳號]/tccc-notes.git
git push -u origin main

# GitHub 上：Settings → Pages → Source → GitHub Actions
# 之後每次 push main 自動部署，約 1–2 分鐘生效
```

---

## 設計規範快查

| 項目 | 值 |
|------|-----|
| Accent（Light） | `#0f62fe` IBM Blue |
| Accent（Dark） | `#4589ff` Blue-40 |
| Background（Light） | `#ffffff` |
| Background（Dark） | `#161616` Gray-100 |
| Surface-1 | `#f8f8f8` / `#262626` |
| Hairline | `#e0e0e0` / `#393939` |
| Draft Badge | `#f1c21b` Warning Yellow |
| 圓角 | `0px`（方角，Carbon 核心） |
| Transition | `150ms ease` |
| 字體 | IBM Plex Sans + 系統中文 |
| Sidebar 寬 | `240px` |
| Content 最大寬 | `720px` |

完整規範見 `PRD.md` 第 2 章（視覺方向）與第 6 章（UI 規範）。

---

## AI 工作分工建議（省 token 策略）

內容遷移是最耗 token 的任務（要讀大檔、寫多檔）。建議用兩個 AI 分工：

### 外包給 Gemini 的任務
| 任務 | 做法 |
|------|------|
| 內容遷移 | 把 `tccc-reference.md` 全文貼給 Gemini，請它按章節拆成 17 份 md 內容（只輸出文字，不建立檔案） |
| 章節 description | 請 Gemini 根據內容為每章寫一行簡介（用於 frontmatter 與首頁卡片） |
| Tags 關鍵字 | 請 Gemini 從每章內容提取搜尋關鍵字，填入 frontmatter `tags` |

### 保留給 Claude Code 的任務
| 任務 | 原因 |
|------|------|
| 寫入 / 更新檔案 | 需要直接操作專案資料夾 |
| `config.ts`、CSS 調整 | 需要讀現有程式碼才能正確修改 |
| 部署除錯 | 需要跑指令、看 terminal 輸出 |

### 推薦流程
1. 用 Gemini 處理好某一章的 md 內容（純文字）
2. 告訴 Claude Code：「這是第 N 章的內容，寫入 `docs/chapters/XX.md`，移除 draft-banner，status 改 published」
3. Claude Code 只做寫入，不需讀大檔案，token 消耗極少

---

## Session 記錄

| 日期 | 完成事項 |
|------|---------|
| 2026-05-27 | PRD 1–7 章全部完成；VitePress 骨架建立；mockup.html 原型完成；DEV_LOG 建立 |
| 2026-05-27 | 17 個章節 md 內容從 tccc-reference.md 遷移完畢，全部 status: published |
| 2026-05-27 | 首頁卡片加上 icon（Design System SVG）；圖片路徑修正至 docs/public；亮色卡片調淺至 #f8f8f8；深色 icon 亮度修正 |
| 2026-05-28 | 開始逐章校對 md 文字（對比 Notion 原版）；進行表格寬度樣式調整；待回家繼續：YouTube 嵌入 & 圖片說明補充 |
| 2026-05-30 | md 文字校稿完成；各章節插圖補充完成；所有表格轉為 HTML `<table>` 語法（22 張）；燒傷公式改為 Callout Block |
| 2026-05-30 | 網站正式部署上線；GitHub repo 重建（修正原本 git init 在錯誤的上層 Projects/ 資料夾）；修正圖片路徑 |
| 2026-06-01 | 本機 git 環境重設：tccc-notes 從上層 Projects repo 分離，重新 clone 為獨立 repo，remote 指向 kopulin/tccc-notes.git |
