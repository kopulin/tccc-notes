# PRD｜TCCC 戰術急救快速查找網站

> 這份文件由 Skill 系統逐步填充，每個 Skill 負責對應章節。
> Claude Code 環境：Agent 直接讀寫此檔案，無需手動同步。

---

## 文件狀態

| 章節 | 負責 Skill | 狀態 |
|------|-----------|------|
| 1. 專案概覽 | Skill 0 | ✅ 已填充 |
| 2. 視覺方向 | Skill 1 | ✅ 已填充 |
| 3. 內容架構 | Skill 2 | ✅ 已填充 |
| 4. Entity Map | Skill 4 | ✅ 已填充 |
| 5. 功能清單 | Skill 4 | ✅ 已填充 |
| 6. UI 規範 | Skill 5 | ✅ 已填充 |
| 7. 部署指南 | Skill 6 | ✅ 已填充 |

---

## 1. 專案概覽

### 產品名稱
TCCC 戰術急救快速查找網站

### 產品定位
提供 EMT 及 TCCC/TECC 學員在訓練、複習及任務準備時，快速查閱戰術急救技術與知識的靜態參考網站。

### 目標用戶
- **主要**：EMT、ASM/ASM+、TECC Provider 課程學員
- **次要**：軍警醫護人員、對戰術急救有訓練基礎的人員

### 核心需求
| 需求 | 說明 |
|------|------|
| 關鍵字搜尋 | 輸入術語、處置步驟、藥物名稱即時查找 |
| 結構化瀏覽 | 依 MARCH-PAWS 架構分章節導覽 |
| RWD 響應式 | 支援手機、平板、桌機，現場查閱不受裝置限制 |

### 資料來源
- `tccc-reference.md`：主要結構化參考手冊（MARCH-PAWS 架構）
- `TCCC TECC 急救筆記.md`：原始課程筆記（含詳細操作說明）

### 技術規格
| 項目 | 選型 |
|------|------|
| 框架 | VitePress |
| 部署平台 | GitHub Pages |
| 架構 | 純靜態，無後端 |
| 搜尋 | VitePress 內建 MiniSearch（本地全文搜尋，無需伺服器） |
| 語言 | 繁體中文（技術詞彙保留英文） |

### 核心限制
- GitHub Pages 不支援伺服器端搜尋，搜尋邏輯需在客戶端執行
- 不涉及用戶帳號、登入、個人化功能
- 圖片資源需一併納入版本控制

---

## 2. 視覺方向
> 由 Skill 1 填充

### 視覺參考來源
IBM Carbon Design System

### 資訊密度
中等密度：Sidebar / Header 維持 Carbon 緊湊規格，內文閱讀區給予寬鬆行距與段落間距。

### 色彩系統

| 角色 | Light Mode | Dark Mode |
|------|-----------|-----------|
| 背景 | `#ffffff` Canvas | `#161616` Gray-100 |
| 次要背景 | `#f4f4f4` Surface-1 | `#262626` Gray-90 |
| 主文字 | `#161616` Ink | `#f4f4f4` |
| 次要文字 | `#525252` Ink Muted | `#c6c6c6` Gray-30 |
| Accent | `#0f62fe` IBM Blue | `#4589ff` Blue-40 |
| Hairline | `#e0e0e0` | `#393939` |
| Footer 背景 | `#161616` Inverse Canvas | `#161616` |
| Draft Badge | `#f1c21b` Warning Yellow | `#f1c21b` |

Dark Mode 跟隨系統設定，Header 提供手動切換 toggle。

### 字體

```
font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont,
             'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif;
```

| 角色 | 字體 | 說明 |
|------|------|------|
| Latin / 英數 / 技術縮寫 | IBM Plex Sans（Google Fonts） | 處理 MARCH、NPA、TFC 等縮寫 |
| 中文 | 系統預設字體 | PingFang TC（Apple）/ 微軟正黑體（Windows）/ Noto Sans TC（Android） |

Carbon body 精確細節保留：`letter-spacing: 0.16px`、body `font-weight: 400`、display `font-weight: 300`。

### 元件規格

| 項目 | 規格 |
|------|------|
| 圓角 | `0px` 全站方角（Carbon 核心美學） |
| 卡片 | 1px hairline border，無陰影，hover → Surface-1 背景 |
| Primary 按鈕 | IBM Blue 填色，白字，`0px` 圓角 |
| Secondary 按鈕 | Charcoal 填色，白字，`0px` 圓角 |
| Ghost 按鈕 | 無背景，藍色文字 + chevron |
| 輸入框 focus | 底部 2px IBM Blue underline（Carbon 標誌性設計） |

### 特殊互動元件

| 元件 | 說明 |
|------|------|
| 全域搜尋 | 桌機：Header 常駐輸入框；手機：點 icon 展開 overlay |
| Dark Mode toggle | Header 右側，跟隨系統，可手動覆蓋 |
| 漢堡選單 | 手機下 Sidebar 收合，點擊展開全螢幕導覽 |
| Sidebar 折疊 | 桌機側欄可折疊子章節 |
| In-page TOC | 右側浮動，滾動時自動 highlight 目前段落 |
| Draft Badge | `status = draft` 章節在卡片與頁面標題旁顯示警示標籤 |
| 章節導覽卡片 | 頁面底部上一章 / 下一章卡片，hover 時背景切換至 Surface-1 |

### 視覺動態
由實作時附上建議，採 Carbon 克制原則（Transition 以 100–200ms 為基準）。

---

## 3. 內容架構
> 由 Skill 2 填充

### 頁面結構說明

網站分為兩種頁面類型：**首頁**和**各章節獨立內容頁**，加上全站通用 UI 區塊。

每個章節對應一個獨立 md 檔，內容直接參照 `tccc-reference.md`。任何內容改動需經過作者同意，並同步修改 md 原始檔。

---

### 區塊清單

#### 01｜Hero Section（首頁）

**傳遞的資訊**
網站定位 + 搜尋列入口。

**達成的效果**
訪客 3 秒內理解「這是 TCCC 快速查找網站」，直接進入查找或選擇章節複習。

**建議內容形式**
網站標題 + 副標（目標受眾）+ 置中大型搜尋列。

---

#### 02｜章節總覽卡片（首頁）

**傳遞的資訊**
網站所有章節一覽，依 tccc-reference.md 實際章節結構呈現。

**達成的效果**
提供複習模式入口，讓學員有系統地選擇章節開始閱讀。

**建議內容形式**
卡片 Grid，每張卡片顯示**章節名稱 + 一行簡介**，點擊進入該章節獨立頁。章節依 tccc-reference.md 順序排列。

> ⚠️ 各章節一行簡介文字**待確認**，由作者提供或同意後才寫入。

---

#### 03｜Sidebar Navigation（全站通用）

**傳遞的資訊**
目前所在位置 + 所有章節清單。

**達成的效果**
讓訪客在任何頁面都能快速跳章節，不需要返回首頁。

**建議內容形式**
左側固定欄，依 tccc-reference.md 章節順序列出，RWD 手機收合為選單。

---

#### 04｜全域搜尋（全站通用）

**傳遞的資訊**
可輸入關鍵字全站搜尋。

**達成的效果**
支援查找模式，直接用術語、藥名、步驟關鍵字找到目標。

**建議內容形式**
Header 搜尋框（桌機常駐，手機點 icon 展開）。

> ⚠️ 搜尋結果的呈現方式（列表樣式、摘要長度、是否高亮關鍵字等）**待進一步確認**，暫以 VitePress 預設行為為基準。

---

#### 05｜內容主體（各章節獨立頁）

**傳遞的資訊**
各章節的技術內容：定義、步驟、數據、判斷標準。

**達成的效果**
學員可仔細閱讀，也可快速掃描標題找目標段落。

**建議內容形式**
直接渲染對應 md 檔內容。每個章節對應一個獨立 md 檔，方便日後編輯管理。

---

#### 06｜In-page TOC（各章節頁）

**傳遞的資訊**
目前章節內有哪些子主題，可直接跳轉。

**達成的效果**
讓訪客進入章節後快速 locate 到目標段落，不需整頁滾動。

**建議內容形式**
右側浮動目錄，自動抓取 H2/H3 標題，滾動時 highlight 目前位置。手機上折疊顯示。

---

#### 07｜章節導覽卡片（各章節頁底部）

**傳遞的資訊**
讀完這章，上一章和下一章是什麼。

**達成的效果**
支援複習模式的連續閱讀，不中斷節奏。

**建議內容形式**
頁面底部兩張並排卡片（上一章 / 下一章），各顯示章節名稱 + 一行簡介，樣式與首頁章節卡片一致。

---

#### 08｜Footer（全站通用）

**傳遞的資訊**
資料來源 + 最後更新時間。

**達成的效果**
讓被分享的新訪客了解內容出處與時效性，建立可信度。

**建議內容形式**
單行文字：「資料來源：ASM/ASM+、TECC Provider 課程筆記 ｜ 最後更新：YYYY-MM-DD」

---

### 待確認事項

| 項目 | 說明 |
|------|------|
| 各章節一行簡介 | 首頁卡片與底部導覽卡片共用，需作者提供或確認 |
| 搜尋結果呈現方式 | 列表樣式、摘要長度、關鍵字高亮等細節待定 |

---

## 4. Entity Map
> 由 Skill 4 填充

### 角色定義

| 角色 | 說明 |
|------|------|
| 訪客（Visitor） | 所有網站使用者，純讀取，無需登入。包含 EMT、TCCC/TECC 學員等。 |
| 作者（Author） | 負責維護 md 原始檔內容，所有內容修改須經作者同意。 |

### 實體清單

| 實體名稱 | 說明 |
|---------|------|
| Page（章節頁） | 每個 TCCC 章節，對應一個獨立 md 檔，含 frontmatter 與正文內容。 |

### 關聯關係

無跨實體關聯（單一實體網站，無用戶帳號或關聯資料表）。

### 實體詳細欄位

#### Page（章節頁）

| 欄位名稱 | 類型 | 說明 | 必填 |
|---------|------|------|------|
| `title` | text | 章節名稱，顯示於頁面標題與 Sidebar | ✅ |
| `description` | text | 一行簡介，用於首頁卡片與底部導覽卡片 | ✅ |
| `order` | number | 章節排序，決定 Sidebar 與前後章節順序，不可重複 | ✅ |
| `tags` | multi-select | 關鍵字標籤，輔助搜尋，可事後逐步補充 | ❌ |
| `last_updated` | date | 最後更新日期，顯示於頁面底部 | ❌ |
| `category` | select | 所屬分類（MARCH-PAWS / 附錄 / 通用原則） | ❌ |
| `status` | select | 內容狀態：`draft`（草稿）/ `published`（已發布） | ❌ |

### 章節清單

依 tccc-reference.md 順序：

| order | 章節名稱 |
|-------|---------|
| 1 | 概論與原則 |
| 2 | 風險區域與處置時間軸 |
| 3 | 檢傷分類 |
| 4 | M — 大量止血控制 |
| 5 | A — 呼吸道 |
| 6 | R — 呼吸狀態 |
| 7 | C — 循環與休克 |
| 8 | H — 低體溫與頭部損傷 |
| 9 | P — 疼痛管理 |
| 10 | A — 抗生素 |
| 11 | W — 傷口管理 |
| 12 | S — 固定與搬運 |
| 13 | PCC — 傷患持續照護 |
| 14 | CPR 心肺復甦術 |
| 15 | CCP 開設與撤離 |
| 16 | 文件記錄 |
| 17 | 參考附錄 |

---

## 5. 功能清單
> 由 Skill 4 填充

| 功能名稱 | 說明 | 對應實體 | 角色權限 |
|---------|------|---------|---------|
| 結構瀏覽 | 透過 Sidebar 依章節順序瀏覽所有內容 | Page | Visitor |
| 全域搜尋 | 輸入關鍵字搜尋全站內容，結果即時顯示 | Page | Visitor |
| 章節閱讀 | 進入各章節獨立頁閱讀完整內容 | Page | Visitor |
| In-page 跳轉 | 透過右側 TOC 跳轉至章節內指定段落 | Page | Visitor |
| 章節導覽 | 頁面底部卡片跳轉至上一章 / 下一章 | Page | Visitor |
| 草稿標示 | status = draft 的章節顯示草稿 badge，提示內容未完整 | Page | Visitor（唯讀顯示） |
| 內容維護 | 編輯 md 原始檔更新章節內容，需作者同意後執行 | Page | Author |

### 操作條件與邊界

- `status = draft` 的章節在網站上仍可顯示，但需加上視覺草稿提示
- 所有 md 原始檔內容修改須經作者同意，並同步更新 md 檔
- `description` 為必填，缺少時首頁卡片與底部導覽卡片無法正常顯示
- `order` 在所有章節中不可重複，確保 Sidebar 與前後導覽順序正確

---

## 6. UI 規範
> 由 Skill 5 填充

### 版面規範

| 項目 | 規格 |
|------|------|
| Header 高度 | `48px`，position sticky，桌機頂端固定 |
| Sidebar 寬度 | `240px`，position sticky，桌機左側固定 |
| 內文最大寬度 | `720px`，左右內距 `48px`（手機 `24px / 16px`） |
| In-page TOC 寬度 | `200px`，position sticky，僅桌機顯示 |
| 章節頁三欄結構 | `240px（Sidebar）+ 1fr（Content）+ 200px（TOC）` |

### RWD 斷點

| 斷點 | 行為 |
|------|------|
| `≥ 1056px`（桌機） | 三欄完整顯示：Sidebar + Content + TOC |
| `672–1055px`（平板） | TOC 隱藏，兩欄：Sidebar + Content |
| `< 672px`（手機） | Sidebar 隱藏，單欄 Content；Hero 字體縮至 28px |

### 導覽規範

- 主導覽：左側 Sidebar，桌機常駐；手機收合為漢堡選單（點擊展開）
- Sidebar active 狀態：左側 3px IBM Blue border + Surface-1 背景
- Draft 章節在 Sidebar 列表項目右側顯示橙色圓點
- In-page TOC：右側浮動，自動抓取 H2/H3，滾動時 highlight 當前段落
- 章節導覽：頁面底部兩欄並排卡片（上一章 / 下一章），hover → Surface-1

### 搜尋規範

- Header 搜尋框：桌機常駐，`max-width: 320px`，高度 `32px`
- Hero 搜尋框：置中大型，`max-width: 560px`，高度 `48px`
- 兩者共用：`background: var(--bg-2)`，`border-bottom: 1px solid var(--hairline)`
- Focus 效果：`border-bottom: 2px solid var(--accent)`（Carbon 標誌性 underline）
- Placeholder 顏色：`var(--text-subtle)`

### 元件規範

| 元件 | 規格 |
|------|------|
| 章節卡片 | `1px hairline border`，無陰影，hover → bg-2 背景，過渡 150ms |
| 卡片 icon | `32px × 32px`，`color: var(--text-muted)`（灰階） |
| Draft badge | `background: #f1c21b`（Warning Yellow），黑字，`font-size: 11px`，`font-weight: 600` |
| Draft banner | 章節頁頂部，Warning Yellow 底色，帶 attention icon，`font-size: 14px` |
| Callout | `background: var(--bg-2)`，`border-left: 3px solid var(--accent)`；警告用 `--warning`；危險用 `#da1e28` |
| 資料表格 | `border-collapse: collapse`，hairline 邊框，th `background: var(--bg-2)` |
| Tags | `background: var(--bg-2)`，1px hairline border，`font-size: 11px` |

### 狀態規範

- `status = draft`：頁面標題旁顯示 Draft badge；Sidebar 列表項目顯示橙點；頁面最頂顯示 Draft banner
- `status = published`：無額外標示
- 目前無 Toast / Loading / Error 等互動狀態（靜態網站）

### Icon 規範

- 來源：本地 Design System（`/Design System/ICON FARM/Outline/40/`）
- 使用方式：SVG symbol 內嵌於 HTML，`fill="currentColor"`，支援 Dark Mode
- 尺寸：Header icon `20px`；卡片 icon `32px`；內文 inline icon `16px`
- 色彩：全站灰階（`color: var(--text-muted)`），禁用 accent 色於 icon

### 視覺動態

- 全站 Transition：`150ms ease`（Carbon 克制原則）
- Hover 效果：背景切換至 `var(--bg-2)`（Surface-1）
- Dark Mode toggle：背景 + 文字同步過渡，跟隨 `data-theme` attribute

---

## 7. 部署指南
> 由 Skill 6 填充

### 技術規格

| 項目 | 選型 |
|------|------|
| 框架 | VitePress 1.6+ |
| 部署平台 | GitHub Pages |
| 自動部署 | GitHub Actions（push to main 自動觸發） |
| 搜尋 | VitePress 內建 local search（MiniSearch，無需伺服器） |
| 環境變數 | 無（純靜態網站） |

### 專案結構

```
tccc-notes/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts        ← 主設定（sidebar、搜尋、主題）
│   │   └── theme/
│   │       ├── index.ts     ← 載入自訂 CSS
│   │       └── custom.css   ← Carbon 色彩系統覆蓋
│   ├── index.md             ← 首頁（layout: home）
│   └── chapters/
│       ├── 01-intro.md ~ 17-appendix.md
├── .github/
│   └── workflows/
│       └── deploy.yml       ← GitHub Actions 部署設定
└── package.json
```

### 常用指令

| 指令 | 說明 |
|------|------|
| `npm install` | 安裝依賴（首次執行） |
| `npm run docs:dev` | 本地開發，`localhost:5173` |
| `npm run docs:build` | 產生靜態檔案至 `docs/.vitepress/dist/` |
| `npm run docs:preview` | 本地預覽 build 結果 |

### 部署設定重點

- `config.ts` 的 `base` 必須與 GitHub repo 名稱一致（例：`base: '/tccc-notes/'`）
- GitHub Pages 的 Source 需選 **GitHub Actions**（非 Deploy from branch）
- push to `main` 後約 1–2 分鐘自動完成部署

### 部署網址格式

```
https://[GitHub 帳號].github.io/[repo 名稱]/
```

### 內容更新流程

1. 編輯 `docs/chapters/` 內對應的 `.md` 檔
2. `git add . && git commit -m "update: 說明" && git push`
3. GitHub Actions 自動重新部署，約 1 分鐘生效

> ⚠️ 所有 md 檔內容修改須經作者同意，並同步更新 md 原始檔（見第 5 章功能清單）
