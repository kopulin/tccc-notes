// 更新日誌：首頁只顯示日期最新的 3 筆，其餘保留在這裡不顯示
// 新增紀錄：在陣列最上方加一筆；link 只在對應單一章節時填寫（不含 /tccc-notes/ 前綴）

export interface ChangelogEntry {
  date: string      // YYYY-MM-DD
  chapter: string
  link?: string
  content: string
}

export const changelog: ChangelogEntry[] = [
  { date: '2026-10-24', chapter: '14｜PCC — 延長傷患照護', link: '/chapters/14-pcc', content: '新增 14.8 損害控制復甦：輸血觸發、目標血壓與 TBI 差異、血品選擇、補鈣、輸血反應觀察，進階內容收在摺疊區塊（新鮮全血與步行血庫、備血量估算、預期管理）' },
  { date: '2026-10-14', chapter: '11｜W — 傷口管理', link: '/chapters/11-wound', content: '燒傷基本處置新增保鮮膜覆蓋的即造做法' },
  { date: '2026-10-14', chapter: '04｜M — 大量止血控制', link: '/chapters/04-massive-bleeding', content: '新增快速／精確掃血、止血紗布機制比較、填塞與加壓包紮補充、大面積破片傷處理' },
  { date: '2026-10-14', chapter: '16｜文件記錄', link: '/chapters/16-documentation', content: '新增 DD1380 戰鬥代碼撰寫方式、9-Line 各欄位代碼說明與呼叫要點、北約音標字母表；MIST 補充受傷時間與症狀' },
  { date: '2026-10-08', chapter: '07、08、17 章', content: 'TBI 傷者目標 SBP 調整為 110 mmHg 以上' },
  { date: '2026-09-16', chapter: '07｜C — 循環與休克', link: '/chapters/07-circulation', content: 'TXA 給藥指引更新至 2026 版單劑方案' },
  { date: '2026-09-06', chapter: '07｜C — 循環與休克', link: '/chapters/07-circulation', content: '新增戰術 IV 管路建立，含示意圖與示範影片' },
  { date: '2026-08-21', chapter: '07｜C — 循環與休克', link: '/chapters/07-circulation', content: '修正神經性休克的成因與機轉描述' },
  { date: '2026-08-16', chapter: '06、14、15 章', content: '新增 BVM 正壓呼吸；PCC 章節全面重整與內容擴充' },
  { date: '2026-08-15', chapter: '04、05、06 章', content: '新增掃血流程、NPA 禁忌症、R 章檢查程序與 NDC 操作補充' },
  { date: '2026-07-01', chapter: '03、04 章', content: '修正檢傷 CRT 判斷標準與止血帶轉換適用區域' },
]
