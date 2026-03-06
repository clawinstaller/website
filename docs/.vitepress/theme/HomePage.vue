<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'

const openFaq = ref<number | null>(null)
function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}

const agents = [
  {
    icon: 'cat',
    name: 'Luna 阿貓',
    role: 'AI 總管',
    roleColor: '#FF8400',
    bgColor: '#FFF7ED',
    desc: '管理日程、任務調度、自動回覆 — 你的 AI 秘書，讓雜事自動處理。',
  },
  {
    icon: 'microscope',
    name: 'Shuri 土豆',
    role: '研究員',
    roleColor: '#14B8A6',
    bgColor: '#F0FDFA',
    desc: '深度分析、QA 測試、資料整理 — 不放過任何細節的研究搭檔。',
  },
  {
    icon: 'code',
    name: 'Friday 小可愛',
    role: '工程師',
    roleColor: '#8B5CF6',
    bgColor: '#F5F3FF',
    desc: '寫程式、Debug、CI/CD 自動化 — 全天候待命的開發夥伴。',
  },
]

const steps = [
  { num: '1', icon: 'download', title: '下載安裝檔', desc: '從 GitHub Releases 下載 .dmg，雙擊開啟即可。' },
  { num: '2', icon: 'wand-sparkles', title: '跟著精靈走', desc: '環境檢查 → 安裝設定 → 頻道配置，全程圖形化引導。' },
  { num: '3', icon: 'message-circle', title: '開始使用', desc: '打開控制台，和你的 AI 團隊對話 — 就是這麼簡單。' },
]

const comparison = {
  claw: {
    title: 'ClawInstaller',
    sub: '圖形化安裝精靈',
    price: '免費',
    recommended: true,
    features: [
      { ok: true, text: '3 分鐘完成安裝' },
      { ok: true, text: '圖形化介面，零技術門檻' },
      { ok: true, text: '100% 本機運行，隱私無憂' },
      { ok: true, text: '自動環境檢查與修復' },
      { ok: true, text: '繁體中文原生支援' },
      { ok: true, text: 'MIT 開源授權' },
    ],
  },
  cloud: {
    title: '雲端托管服務',
    sub: '第三方付費代管',
    price: '$19/月',
    features: [
      { ok: true, text: '免安裝，開帳號即用' },
      { ok: true, text: '自動更新維護' },
      { ok: false, text: '資料存放第三方伺服器' },
      { ok: false, text: '每年 $228 USD 費用' },
      { ok: false, text: '英文介面為主' },
    ],
  },
  self: {
    title: '自架 VPS',
    sub: '手動 CLI 安裝',
    price: '免費（但耗時）',
    features: [
      { ok: true, text: '完全自由掌控' },
      { ok: true, text: '100% 本機運行' },
      { ok: false, text: '需要 4-6 小時手動設定' },
      { ok: false, text: '需要 CLI / Docker 經驗' },
      { ok: false, text: '環境問題需自行排除' },
    ],
  },
}

const faqs = [
  { q: 'ClawInstaller 是官方產品嗎？', a: '不是。ClawInstaller 是社群驅動的非官方開源專案（MIT 授權），旨在降低 OpenClaw 的入門門檻。與 OpenClaw 官方團隊無關。' },
  { q: '真的完全免費嗎？有隱藏費用嗎？', a: '完全免費，沒有任何隱藏費用。安裝、監控、頻道設定全部免費。唯一的花費是你自己的 LLM API Key（例如 OpenAI、Anthropic），但那是你直接付給 AI 廠商的。' },
  { q: '支援哪些 Mac 機型？', a: '同時支援 Apple Silicon（M1/M2/M3/M4）和 Intel Mac，需要 macOS 14.0 以上版本，至少 500 MB 可用空間。' },
  { q: '我的資料安全嗎？', a: '絕對安全。所有資料（API Key、對話記錄、設定檔）100% 留在你的 Mac 上，不經過任何第三方伺服器。你的隱私由你自己掌控。' },
  { q: '安裝過程中遇到問題怎麼辦？', a: '安裝精靈會自動偵測並修復常見問題（如缺少 Node.js）。如果仍然遇到困難，可以到 GitHub Issues 回報問題，社群會盡快協助你。' },
  { q: '如何完全移除 ClawInstaller？', a: '執行 npm uninstall -g openclaw 並刪除 ~/.openclaw 資料夾即可完全移除。乾淨、不留痕跡。' },
]

const footerLinks = {
  product: ['功能介紹', '安裝教學', '系統需求', '更新日誌'],
  resources: ['常見問題', '新手教學', 'Agent 文件', '頻道設定'],
  community: ['GitHub', '回報問題', '參與貢獻', '隱私政策'],
}
</script>

<template>
  <div class="landing">
    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        <span>開源免費 · macOS 專屬安裝精靈</span>
      </div>
      <h1 class="hero-headline">3 分鐘，啟動你的 AI 團隊</h1>
      <p class="hero-sub">不再手動設定 CLI — 圖形化安裝精靈，一鍵部署 3 位 AI Agent 到你的 Mac。<br>100% 本機運行，永久免費。</p>
      <div class="hero-cta-row">
        <a href="https://github.com/clawinstaller/claw-installer/releases" class="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          免費下載 .dmg
        </a>
        <a :href="withBase('/guide/getting-started')" class="btn-secondary">新手教學 →</a>
      </div>
      <div class="trust-badges">
        <span class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
          macOS 14+
        </span>
        <span class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          MIT 開源
        </span>
        <span class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
          隱私優先
        </span>
        <span class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
          繁中原生
        </span>
      </div>
      <div class="screenshot-frame">
        <img :src="withBase('/showcase.png')" alt="ClawInstaller 安裝精靈截圖" />
      </div>
    </section>

    <!-- Three Agents -->
    <section class="agents-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>認識你的三位 AI 夥伴</h2>
          <p>各司其職，自動協作</p>
        </div>
        <div class="agents-grid">
          <div v-for="agent in agents" :key="agent.name" class="agent-card">
            <div class="agent-icon" :style="{ background: agent.bgColor }">
              <!-- Simplified: use emoji instead of lucide for agent icons -->
              <span v-if="agent.icon === 'cat'" style="font-size: 24px">🐱</span>
              <span v-else-if="agent.icon === 'microscope'" style="font-size: 24px">🔬</span>
              <span v-else style="font-size: 24px">💻</span>
            </div>
            <div class="agent-content">
              <h3>{{ agent.name }}</h3>
              <span class="agent-role" :style="{ color: agent.roleColor }">{{ agent.role }}</span>
              <p>{{ agent.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="steps-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>安裝只需三步</h2>
          <p>從下載到開始使用，比泡一杯咖啡還快</p>
        </div>
        <div class="steps-grid">
          <div v-for="step in steps" :key="step.num" class="step-card">
            <div class="step-num">{{ step.num }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison -->
    <section class="comparison-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>為什麼選擇 ClawInstaller？</h2>
          <p>三種方式部署 OpenClaw — 只有一種讓你 3 分鐘就搞定</p>
        </div>
        <div class="comparison-grid">
          <div
            v-for="(col, key) in comparison"
            :key="key"
            class="comparison-card"
            :class="{ recommended: col.recommended }"
          >
            <div v-if="col.recommended" class="rec-badge">
              <span>推薦</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>{{ col.title }}</h3>
            <span class="comp-sub">{{ col.sub }}</span>
            <span class="comp-price" :class="{ free: col.recommended }">{{ col.price }}</span>
            <ul class="feature-list">
              <li v-for="(f, i) in col.features" :key="i" :class="{ negative: !f.ok }">
                <svg v-if="f.ok" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cl-green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cl-red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                <span>{{ f.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="section-inner narrow">
        <div class="section-header">
          <h2>常見問題</h2>
          <p>關於 ClawInstaller 你可能想知道的事</p>
        </div>
        <div class="faq-list">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ open: openFaq === i }"
          >
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-chevron"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div v-show="openFaq === i" class="faq-answer">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta-section">
      <div class="section-inner">
        <h2>準備好啟動你的 AI 團隊了嗎？</h2>
        <p class="cta-sub">免費下載 · 3 分鐘安裝 · 零風險</p>
        <div class="cta-buttons">
          <a href="https://github.com/clawinstaller/claw-installer/releases" class="btn-primary pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            免費下載 .dmg
          </a>
          <a href="https://github.com/clawinstaller/claw-installer" class="btn-ghost pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            查看原始碼
          </a>
        </div>
        <div class="cta-trust">
          <span>macOS 14+</span>
          <span class="dot">·</span>
          <span>MIT 開源</span>
          <span class="dot">·</span>
          <span>社群驅動</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-logo">ClawInstaller</span>
            <p>3 分鐘啟動你的 AI 團隊<br>社群驅動的 macOS 安裝精靈</p>
          </div>
          <div class="footer-col">
            <h4>產品</h4>
            <a v-for="link in footerLinks.product" :key="link" href="#">{{ link }}</a>
          </div>
          <div class="footer-col">
            <h4>資源</h4>
            <a v-for="link in footerLinks.resources" :key="link" href="#">{{ link }}</a>
          </div>
          <div class="footer-col">
            <h4>社群</h4>
            <a v-for="link in footerLinks.community" :key="link" href="#">{{ link }}</a>
          </div>
        </div>
        <div class="footer-divider" />
        <div class="footer-bottom">
          <span>&copy; 2026 ClawInstaller 社群 · MIT License</span>
          <span>台灣製造 🇹🇼</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* ─── Layout ─── */
.landing {
  font-family: var(--cl-font-body);
  color: var(--cl-text-primary);
  background: var(--cl-bg-page);
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;
}

.section-inner.narrow {
  max-width: 800px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-header h2 {
  font-family: var(--cl-font-display);
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 12px;
  line-height: 1.2;
}

.section-header p {
  font-size: 18px;
  color: var(--cl-text-secondary);
  margin: 0;
}

/* ─── Hero ─── */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 48px 64px;
  gap: 32px;
  background: var(--cl-bg-white);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 100px;
  background: var(--cl-orange-light);
  border: 1px solid rgba(253, 186, 116, 0.25);
  color: #B45309;
  font-size: 13px;
  font-weight: 500;
}

.dark .hero-badge {
  background: rgba(255, 132, 0, 0.12);
  border-color: rgba(255, 132, 0, 0.3);
  color: #FDBA74;
}

.hero-headline {
  font-family: var(--cl-font-display);
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 800;
  line-height: 1.1;
  text-align: center;
  max-width: 900px;
  margin: 0;
}

.hero-sub {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--cl-text-secondary);
  text-align: center;
  max-width: 720px;
  line-height: 1.6;
  margin: 0;
}

.hero-cta-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: var(--cl-orange);
  color: #fff !important;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none !important;
  box-shadow: 0 4px 16px var(--cl-orange-glow);
  transition: all 0.2s;
}

.btn-primary:hover {
  background: var(--cl-orange-hover);
  box-shadow: 0 6px 24px var(--cl-orange-glow);
  transform: translateY(-1px);
}

.btn-primary.pill { border-radius: 999px; }

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border: 1.5px solid #D4D4D8;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  color: var(--cl-text-primary) !important;
  text-decoration: none !important;
  transition: all 0.2s;
}

.dark .btn-secondary {
  border-color: #52525B;
}

.btn-secondary:hover {
  border-color: var(--cl-orange);
  transform: translateY(-1px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border: 1px solid #666;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: #fff !important;
  text-decoration: none !important;
  transition: all 0.2s;
}

.btn-ghost:hover {
  border-color: #999;
  transform: translateY(-1px);
}

/* Trust badges */
.trust-badges {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--cl-text-secondary);
}

.trust-badge svg {
  color: #A1A1AA;
}

/* Screenshot */
.screenshot-frame {
  width: 100%;
  max-width: 1000px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--cl-border);
}

.screenshot-frame img {
  width: 100%;
  height: auto;
  display: block;
}

/* ─── Agents ─── */
.agents-section {
  padding: 80px 0;
  background: var(--cl-bg-agents);
}

.agents-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.agent-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  background: var(--cl-bg-white);
  border: 1px solid var(--cl-border);
  border-radius: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.agent-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.agent-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.agent-content h3 {
  font-family: var(--cl-font-display);
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.agent-role {
  font-size: 14px;
  font-weight: 600;
}

.agent-content p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--cl-text-secondary);
  margin: 4px 0 0;
}

/* ─── Steps ─── */
.steps-section {
  padding: 80px 0;
  background: var(--cl-bg-white);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.step-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 32px;
  background: var(--cl-bg-soft);
  border-radius: 16px;
  text-align: center;
}

.step-num {
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background: var(--cl-orange);
  color: #fff;
  font-family: var(--cl-font-display);
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-card h3 {
  font-family: var(--cl-font-display);
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.step-card p {
  font-size: 15px;
  line-height: 1.5;
  color: var(--cl-text-secondary);
  margin: 0;
}

/* ─── Comparison ─── */
.comparison-section {
  padding: 80px 0;
  background: var(--cl-bg-white);
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.comparison-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  border-radius: 16px;
  background: var(--cl-bg-white);
  border: 1px solid var(--cl-border-muted);
}

.comparison-card.recommended {
  background: var(--cl-orange-light);
  border: 2px solid var(--cl-orange);
}

.dark .comparison-card.recommended {
  background: rgba(255, 132, 0, 0.08);
}

.rec-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: var(--cl-orange);
  color: #fff;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  width: fit-content;
}

.comparison-card h3 {
  font-family: var(--cl-font-display);
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.comp-sub {
  font-size: 14px;
  color: var(--cl-text-muted);
  margin-top: -12px;
}

.comp-price {
  font-family: var(--cl-font-display);
  font-size: 28px;
  font-weight: 800;
}

.comp-price.free {
  color: var(--cl-orange);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
}

.feature-list li.negative span {
  color: var(--cl-text-muted);
}

/* ─── FAQ ─── */
.faq-section {
  padding: 80px 0;
  background: var(--cl-bg-page);
}

.faq-list {
  display: flex;
  flex-direction: column;
}

.faq-item {
  border-bottom: 1px solid var(--cl-border-muted);
  padding: 20px 0;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: var(--cl-text-primary);
  text-align: left;
  padding: 0;
  font-family: inherit;
}

.faq-chevron {
  color: var(--cl-text-muted);
  transition: transform 0.2s;
  flex-shrink: 0;
}

.faq-item.open .faq-chevron {
  transform: rotate(180deg);
}

.faq-answer {
  margin-top: 10px;
}

.faq-answer p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--cl-text-muted);
  margin: 0;
}

/* ─── Final CTA ─── */
.final-cta-section {
  padding: 80px 48px;
  background: #111111;
  text-align: center;
}

.final-cta-section h2 {
  font-family: var(--cl-font-display);
  font-size: 40px;
  font-weight: 800;
  color: #fff;
  margin: 0 0 16px;
}

.cta-sub {
  font-size: 18px;
  color: #B8B9B6;
  margin: 0 0 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-trust {
  margin-top: 24px;
  display: flex;
  gap: 24px;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  color: #666;
}

.cta-trust .dot {
  color: #444;
}

/* ─── Footer ─── */
.site-footer {
  background: #0A0A0A;
  padding: 48px 0 32px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 48px;
}

.footer-brand {
  width: 320px;
  flex-shrink: 0;
}

.footer-logo {
  font-family: var(--cl-font-display);
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

.footer-brand p {
  font-size: 13px;
  color: #888;
  line-height: 1.6;
  margin: 12px 0 0;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-col h4 {
  font-size: 12px;
  font-weight: 700;
  color: #888;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}

.footer-col a {
  font-size: 14px;
  color: #ccc !important;
  text-decoration: none !important;
  transition: color 0.15s;
}

.footer-col a:hover {
  color: #fff !important;
}

.footer-divider {
  height: 1px;
  background: #2E2E2E;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
}

/* ─── Responsive ─── */
@media (max-width: 960px) {
  .section-header h2 {
    font-size: 28px;
  }

  .agents-grid,
  .steps-grid,
  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .footer-top {
    flex-direction: column;
    gap: 32px;
  }

  .footer-brand {
    width: auto;
  }

  .screenshot-placeholder {
    height: 300px;
  }

  .hero-section {
    padding: 48px 24px 40px;
  }

  .section-inner {
    padding: 0 24px;
  }

  .final-cta-section h2 {
    font-size: 28px;
  }
}

@media (max-width: 640px) {
  .hero-cta-row {
    flex-direction: column;
    align-items: center;
  }

  .trust-badges {
    gap: 12px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
