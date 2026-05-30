import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-TW',
  title: 'TCCC 戰術急救筆記',
  description: 'TCCC / TECC 技術參考，供 EMT 及課程學員訓練複習與現場查閱使用',

  // ⚠️ 改成你的 GitHub repo 名稱，例如 '/tccc-notes/'
  base: '/tccc-notes/',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', {
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&display=swap',
      rel: 'stylesheet'
    }]
  ],

  themeConfig: {
    siteTitle: 'TCCC 戰術急救筆記',
    nav: [],

    sidebar: [
      {
        text: '通用原則',
        items: [
          { text: '01｜概論與原則', link: '/chapters/01-intro' },
          { text: '02｜風險區域與處置時間軸', link: '/chapters/02-risk-zones' },
          { text: '03｜檢傷分類', link: '/chapters/03-triage' },
        ]
      },
      {
        text: 'MARCH-PAWS',
        items: [
          { text: '04｜M — 大量止血控制', link: '/chapters/04-massive-bleeding' },
          { text: '05｜A — 呼吸道', link: '/chapters/05-airway' },
          { text: '06｜R — 呼吸狀態', link: '/chapters/06-respiration' },
          { text: '07｜C — 循環與休克', link: '/chapters/07-circulation' },
          { text: '08｜H — 低體溫與頭部損傷', link: '/chapters/08-hypothermia-head' },
          { text: '09｜P — 疼痛管理', link: '/chapters/09-pain' },
          { text: '10｜A — 抗生素', link: '/chapters/10-antibiotics' },
          { text: '11｜W — 傷口管理', link: '/chapters/11-wound' },
          { text: '12｜S — 固定與搬運', link: '/chapters/12-splint-transport' },
        ]
      },
      {
        text: '後續處置',
        items: [
          { text: '13｜PCC — 延長傷患照護', link: '/chapters/13-pcc' },
          { text: '14｜CPR 心肺復甦術', link: '/chapters/14-cpr' },
          { text: '15｜CCP 開設與撤離', link: '/chapters/15-ccp' },
        ]
      },
      {
        text: '附錄',
        items: [
          { text: '16｜文件記錄', link: '/chapters/16-documentation' },
          { text: '17｜參考附錄', link: '/chapters/17-appendix' },
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
              modal: {
                noResultsText: '找不到相關內容',
                resetButtonTitle: '清除',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉'
                }
              }
            }
          }
        }
      }
    },

    outline: { label: '本頁目錄', level: [2, 3] },

    docFooter: { prev: '上一章', next: '下一章' },

    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切換至淺色模式',
    darkModeSwitchTitle: '切換至深色模式',

    footer: {
      message: '資料來源：ASM/ASM+、TECC Provider 課程私人筆記',
      copyright: '內容需經作者同意方可修改'
    }
  },

  markdown: {
    lineNumbers: false
  }
})
