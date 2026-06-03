# CLAUDE.md — tccc-notes

---

## Git Remote 規則

開始工作前確認 remote 指向正確：

```bash
git remote -v
```

URL 最後一段必須和這個專案名稱一致（應為 `tccc-notes.git`）。如果不符：

```bash
git remote set-url origin https://github.com/kopulin/tccc-notes.git
```

觸發時機：新建 repo、把子資料夾改成獨立 repo、在新電腦首次開啟、git pull 結果不如預期。
