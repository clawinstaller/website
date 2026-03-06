import { defineConfig } from 'vitepress'

const zhTW = {
  label: '繁體中文',
  lang: 'zh-TW',
  description: '3 分鐘啟動你的 AI 團隊 — OpenClaw macOS 安裝精靈',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '新手教學', link: '/guide/getting-started' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'GitHub', link: 'https://github.com/clawinstaller/claw-installer' },
      { text: '下載', link: 'https://github.com/clawinstaller/claw-installer/releases' },
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
    footer: {
      message: '以 MIT 授權釋出',
      copyright: '© 2026 ClawInstaller 社群',
    },
    editLink: {
      pattern: 'https://github.com/clawinstaller/website/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁',
    },
  },
}

const en = {
  label: 'English',
  lang: 'en',
  description: 'Launch your AI team in 3 minutes — OpenClaw macOS setup wizard',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Guide', link: '/en/guide/getting-started' },
      { text: 'FAQ', link: '/en/faq/' },
      { text: 'GitHub', link: 'https://github.com/clawinstaller/claw-installer' },
      { text: 'Download', link: 'https://github.com/clawinstaller/claw-installer/releases' },
    ],
    sidebar: {
      '/en/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/en/guide/getting-started' },
            { text: 'Install Flow', link: '/en/guide/install-flow' },
            { text: 'Your Three Agents', link: '/en/guide/agents' },
          ],
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Channel Setup', link: '/en/guide/channels' },
            { text: 'System Monitor', link: '/en/guide/monitor' },
          ],
        },
      ],
      '/en/faq/': [
        {
          text: 'FAQ',
          items: [
            { text: 'Overview', link: '/en/faq/' },
          ],
        },
      ],
    },
    footer: {
      message: 'Released under the MIT License',
      copyright: '© 2026 ClawInstaller Community',
    },
    editLink: {
      pattern: 'https://github.com/clawinstaller/website/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
}

export default defineConfig({
  title: 'ClawInstaller',
  base: '/website/',
  head: [
    ['link', { rel: 'icon', href: '/website/logo.png' }],
  ],
  locales: {
    root: zhTW,
    en,
  },
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clawinstaller' },
    ],
    search: {
      provider: 'local',
    },
  },
})
