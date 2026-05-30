---
name: deploy-to-github-pages
description: 將 VitePress 專案部署到 GitHub Pages 的完整流程。當使用者說「幫我部署」、「我要上線」、「push 到 GitHub」、「怎麼讓網站公開」時啟動。也適用於其他靜態網站（非 VitePress）的 GitHub Pages 部署。
---

# Deploy to GitHub Pages

## 前置確認

### 1. 確認 git init 在正確位置
這是最常見的錯誤。`git init` 必須在**專案資料夾本身**執行，不是在上層資料夾。

```bash
# 確認目前在哪個資料夾
pwd

# 應該要是專案根目錄，例如：
# /Users/pumpkin/Documents/Projects/tccc-notes  ✅
# /Users/pumpkin/Documents/Projects             ❌ 太上層了
```

如果在錯誤的位置，先 `cd` 進正確的專案資料夾，再執行 `git init`。

### 2. 確認 deploy.yml 存在
```bash
cat .github/workflows/deploy.yml
```

如果不存在，需要先建立。VitePress 標準的 deploy.yml：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build VitePress
        run: npm run docs:build
      - uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. 確認 config.ts 的 base 路徑
`base` 必須和 GitHub repo 名稱一致：

```ts
// docs/.vitepress/config.ts
export default {
  base: '/你的repo名稱/',
}
```

---

## 部署流程

### Step 1：在 GitHub 建立新 repo
前往 https://github.com/new
- Name：填入 repo 名稱（要和 config.ts 的 base 一致）
- 選 **Public**
- **不要**勾選任何初始化選項（README、.gitignore 都不要）
- 按 Create repository

### Step 2：建立 Personal Access Token（PAT）
前往 https://github.com/settings/tokens/new
- Note：填專案名稱
- Expiration：No expiration
- 勾選 **repo**（完整勾選）與 **workflow**
- 按 Generate token，複製 `ghp_` 開頭的字串

> ⚠️ Token 只會顯示一次，關掉頁面就消失了

### Step 3：初始化並 push

```bash
# 在專案資料夾執行
git init
git add .
git commit -m "init: 初始部署"
git push https://[TOKEN]@github.com/[帳號]/[repo名稱].git main
```

把 `[TOKEN]`、`[帳號]`、`[repo名稱]` 換成實際值。

### Step 4：開啟 GitHub Pages
前往 `https://github.com/[帳號]/[repo名稱]/settings/pages`
- Source 選 **GitHub Actions**
- 按 Save

### Step 5：確認部署結果
前往 `https://github.com/[帳號]/[repo名稱]/actions`
- 看到綠色勾勾 = 成功
- 看到紅色叉叉 = 點進去看 build log

網站網址：`https://[帳號].github.io/[repo名稱]/`

---

## 之後每次更新

編修完內容後：

```bash
git add .
git commit -m "update: 說明這次改了什麼"
git push https://[TOKEN]@github.com/[帳號]/[repo名稱].git main
```

Push 後約 **35 秒**自動部署完成。

---

## 圖片路徑規則（重要）

VitePress 的 `base` 設定只在 config.ts 填一次，其他地方的圖片路徑**不要加** base 前綴：

```markdown
✅ 正確：![說明](/images/photo.png)
❌ 錯誤：![說明](/tccc-notes/images/photo.png)
```

路徑寫錯會導致 build 失敗，Actions 會顯示紅色叉叉。

---

## 常見錯誤排查

| 錯誤訊息 | 原因 | 解法 |
|----------|------|------|
| `refusing to allow... without workflow scope` | Token 沒有勾 workflow | 重新 regenerate token，勾 workflow |
| `Rollup failed to resolve import "/xxx/images/..."` | 圖片路徑加了 base 前綴 | 移除路徑中的 `/repo名稱/` |
| `Repository not found` | Repo 還沒建立，或 repo 名稱打錯 | 確認 GitHub 上 repo 已存在 |
| Actions 頁面顯示「Get started」而非執行記錄 | Push 沒有成功到正確 repo | 確認 remote URL 和 token 正確 |
