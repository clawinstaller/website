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
    name: 'Luna',
    role: 'Manager',
    roleColor: '#FF8400',
    bgColor: '#FFF7ED',
    desc: 'Schedule management, task delegation, auto-replies — your AI secretary handling the day-to-day.',
  },
  {
    icon: 'microscope',
    name: 'Shuri',
    role: 'Researcher',
    roleColor: '#14B8A6',
    bgColor: '#F0FDFA',
    desc: 'Deep analysis, QA testing, data organization — a meticulous research partner.',
  },
  {
    icon: 'code',
    name: 'Friday',
    role: 'Developer',
    roleColor: '#8B5CF6',
    bgColor: '#F5F3FF',
    desc: 'Code, debug, CI/CD automation — your always-on engineering partner.',
  },
]

const steps = [
  { num: '1', icon: 'download', title: 'Download', desc: 'Download the .dmg from GitHub Releases and open it.' },
  { num: '2', icon: 'wand-sparkles', title: 'Follow the Wizard', desc: 'Environment check → Install → Channel setup — fully graphical.' },
  { num: '3', icon: 'message-circle', title: 'Start Using', desc: 'Open the control panel and chat with your AI team — it\'s that simple.' },
]

const comparison = {
  claw: {
    title: 'ClawInstaller',
    sub: 'GUI Setup Wizard',
    price: 'Free',
    recommended: true,
    features: [
      { ok: true, text: '3-minute installation' },
      { ok: true, text: 'Graphical UI, zero technical barrier' },
      { ok: true, text: '100% local, privacy-first' },
      { ok: true, text: 'Auto environment check & fix' },
      { ok: true, text: 'Native CJK language support' },
      { ok: true, text: 'MIT open source' },
    ],
  },
  cloud: {
    title: 'Cloud Hosting',
    sub: 'Third-party managed',
    price: '$19/mo',
    features: [
      { ok: true, text: 'No install, just sign up' },
      { ok: true, text: 'Auto updates & maintenance' },
      { ok: false, text: 'Data on third-party servers' },
      { ok: false, text: '$228/year USD cost' },
      { ok: false, text: 'English-only interface' },
    ],
  },
  self: {
    title: 'Self-hosted VPS',
    sub: 'Manual CLI install',
    price: 'Free (but slow)',
    features: [
      { ok: true, text: 'Full control' },
      { ok: true, text: '100% local' },
      { ok: false, text: '4-6 hours manual setup' },
      { ok: false, text: 'Requires CLI / Docker experience' },
      { ok: false, text: 'Troubleshoot issues yourself' },
    ],
  },
}

const faqs = [
  { q: 'Is ClawInstaller an official product?', a: 'ClawInstaller is an independent, community-driven open-source project (MIT license). We are not affiliated with OpenClaw, but we\'re dedicated to making it accessible to everyone.' },
  { q: 'Is it really free? Any hidden costs?', a: 'Completely free with no hidden costs. Installation, monitoring, and channel setup are all free. The only cost is your own LLM API key (e.g., OpenAI, Anthropic), which you pay directly to the AI provider.' },
  { q: 'Which Mac models are supported?', a: 'Both Apple Silicon (M1/M2/M3/M4) and Intel Macs are supported. Requires macOS 14.0 or later and at least 500 MB of free space.' },
  { q: 'Is my data safe?', a: 'Absolutely. All data (API keys, conversations, config files) stays 100% on your Mac. Nothing goes through any third-party server. Your privacy is in your hands.' },
  { q: 'What if I run into problems during installation?', a: 'The setup wizard auto-detects and fixes common issues (like missing Node.js). If you still have trouble, file an issue on GitHub and the community will help.' },
  { q: 'How do I completely uninstall?', a: 'Run npm uninstall -g openclaw, delete the ~/.openclaw folder, and drag ClawInstaller to Trash. Clean and complete.' },
]

const footerLinks = {
  product: ['Features', 'Getting Started', 'System Requirements', 'Changelog'],
  resources: ['FAQ', 'Beginner Guide', 'Agent Docs', 'Channel Setup'],
  community: ['GitHub', 'Report Issue', 'Contribute', 'Privacy Policy'],
}
</script>

<template>
  <div class="landing">
    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        <span>Open Source & Free · macOS Setup Wizard</span>
      </div>
      <h1 class="hero-headline">Launch Your AI Team in 3 Minutes</h1>
      <p class="hero-sub">No more manual CLI setup — a graphical wizard to deploy 3 AI Agents on your Mac with one click.<br>100% local. Forever free.</p>
      <div class="hero-cta-row">
        <a href="https://github.com/clawinstaller/claw-installer/releases" class="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Free Download .dmg
        </a>
        <a :href="withBase('/en/guide/getting-started')" class="btn-secondary">Getting Started →</a>
      </div>
      <div class="trust-badges">
        <span class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
          macOS 14+
        </span>
        <span class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          MIT Open Source
        </span>
        <span class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
          Privacy First
        </span>
        <span class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
          Multilingual
        </span>
      </div>
      <div class="screenshot-frame">
        <img :src="withBase('/showcase.png')" alt="ClawInstaller Setup Wizard Screenshot" />
      </div>
    </section>

    <!-- Three Agents -->
    <section class="agents-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>Meet Your Three AI Partners</h2>
          <p>Each with their own specialty, working together seamlessly</p>
        </div>
        <div class="agents-grid">
          <div v-for="agent in agents" :key="agent.name" class="agent-card">
            <div class="agent-icon" :style="{ background: agent.bgColor }">
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
          <h2>Three Simple Steps</h2>
          <p>From download to first chat — faster than making coffee</p>
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
          <h2>Why ClawInstaller?</h2>
          <p>Three ways to deploy OpenClaw — only one gets you there in 3 minutes</p>
        </div>
        <div class="comparison-grid">
          <div
            v-for="(col, key) in comparison"
            :key="key"
            class="comparison-card"
            :class="{ recommended: col.recommended }"
          >
            <div v-if="col.recommended" class="rec-badge">
              <span>Recommended</span>
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
          <h2>Frequently Asked Questions</h2>
          <p>Everything you might want to know about ClawInstaller</p>
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
        <h2>Ready to Launch Your AI Team?</h2>
        <p class="cta-sub">Free download · 3-minute setup · Zero risk</p>
        <div class="cta-buttons">
          <a href="https://github.com/clawinstaller/claw-installer/releases" class="btn-primary pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Free Download .dmg
          </a>
          <a href="https://github.com/clawinstaller/claw-installer" class="btn-ghost pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View Source Code
          </a>
        </div>
        <div class="cta-trust">
          <span>macOS 14+</span>
          <span class="dot">·</span>
          <span>MIT Open Source</span>
          <span class="dot">·</span>
          <span>Community Driven</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-logo">ClawInstaller</span>
            <p>Launch your AI team in 3 minutes<br>A community-driven macOS setup wizard</p>
          </div>
          <div class="footer-col">
            <h4>Product</h4>
            <a v-for="link in footerLinks.product" :key="link" href="#">{{ link }}</a>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <a v-for="link in footerLinks.resources" :key="link" href="#">{{ link }}</a>
          </div>
          <div class="footer-col">
            <h4>Community</h4>
            <a v-for="link in footerLinks.community" :key="link" href="#">{{ link }}</a>
          </div>
        </div>
        <div class="footer-divider" />
        <div class="footer-bottom">
          <span>&copy; 2026 ClawInstaller Community · MIT License</span>
          <span>Made in Taiwan 🇹🇼</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped src="./homepage-shared.css"></style>
