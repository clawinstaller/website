import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ClawInstaller',
  description: '3 分鐘啟動你的 AI 團隊 — OpenClaw macOS 安裝精靈',
  lang: 'zh-TW',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首頁', link: '/' },
      { text: '新手教學', link: '/guide/getting-started' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'GitHub', link: 'https://github.com/clawinstaller/claw-installer' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入門',
          items: [
            { text: '快速開始', link: '/guide/getting-started' },
            { text: '安裝流程', link: '/guide/install-flow' },
            { text: '你的三位 Agent', link: '/guide/agents' },
          ],
        },
        {
          text: '進階',
          items: [
            { text: '頻道設定', link: '/guide/channels' },
            { text: '系統監控', link: '/guide/monitor' },
          ],
        },
      ],
      '/faq/': [
        {
          text: '常見問題',
          items: [
            { text: '總覽', link: '/faq/' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clawinstaller' },
    ],
    footer: {
      message: '以 MIT 授權釋出',
      copyright: '© 2026 ClawInstaller 社群',
    },
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/clawinstaller/website/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁',
    },
  },
})
