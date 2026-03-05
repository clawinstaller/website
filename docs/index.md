---
layout: home
hero:
  name: ClawInstaller
  text: 3 分鐘啟動你的 AI 團隊
  tagline: 不再手動設定 CLI — 一鍵啟動 3 位 AI Agent 為你工作
  image:
    src: /logo.png
    alt: ClawInstaller
  actions:
    - theme: brand
      text: 免費下載 →
      link: https://github.com/clawinstaller/claw-installer/releases
    - theme: alt
      text: 新手教學
      link: /guide/getting-started
features:
  - icon: 🧠
    title: 阿貓 · 總管
    details: 管理日程、自動回覆、任務調度 — 你的 AI 管家
  - icon: 🔍
    title: 土豆 · 研究
    details: 深度分析、QA 測試、資料整理 — 你的研究員
  - icon: 💻
    title: 小可愛 · 開發
    details: 寫程式、Debug、部署自動化 — 你的工程師
  - icon: ⚡
    title: 3 分鐘就緒
    details: 從下載到三位 Agent 上線，只需要跟著安裝精靈走
  - icon: 🔒
    title: 隱私優先
    details: 所有資料留在你的電腦，API Key 只存本機
  - icon: 🇹🇼
    title: 繁體中文原生
    details: 台灣團隊打造，全繁體中文介面與文件
---

<div class="comparison-section">

## 為什麼選擇本機安裝？

<p class="comparison-subtitle">有人說本機架 OpenClaw 要 4-6 小時？我們 3 分鐘搞定。</p>

<div class="comparison-table-wrapper">

| | 🖥️ ClawInstaller<br><span class="highlight">本機安裝</span> | ☁️ 托管服務<br><span class="dim">如 MyClaw</span> | 🔧 自架 VPS<br><span class="dim">手動部署</span> |
|:---|:---:|:---:|:---:|
| **設定時間** | <span class="win">3 分鐘</span> | 30 秒 | 5-6 小時 |
| **技術需求** | <span class="win">下載 App 即可</span> | 只需 Email | Linux、Docker、網路 |
| **年度費用** | <span class="win">$0 永久免費</span> | $228+ / 年 | $60-240 + 你的時間 |
| **資料隱私** | <span class="win">100% 在你電腦</span> | 第三方伺服器 | 自行管理 |
| **API Key** | <span class="win">你的 Key，無限額</span> | 平台限額 | 你的 Key |
| **自動更新** | <span class="win">一鍵更新</span> | 自動 | 手動 SSH + 重啟 |
| **安全性** | <span class="win">本機，零攻擊面</span> | 取決於供應商 | 自行維護防火牆 |
| **維護負擔** | <span class="win">零</span> | 零 | 持續性（監控、備份） |

</div>

<div class="comparison-cta">

**省下每年 $228 美元，資料留在自己手上。**

[免費下載 ClawInstaller →](https://github.com/clawinstaller/claw-installer/releases)

</div>

</div>

<div class="audience-section">

## ClawInstaller 適合誰？

<div class="audience-grid">
<div class="audience-card">
  <span class="audience-icon">👩‍💻</span>
  <div>
    <strong>開發者</strong>
    <p>想用 OpenClaw 但不想花時間設定 CLI 和環境</p>
  </div>
</div>
<div class="audience-card">
  <span class="audience-icon">🎨</span>
  <div>
    <strong>創作者</strong>
    <p>寧願把時間花在創造上，而不是配置 Docker 和 Nginx</p>
  </div>
</div>
<div class="audience-card">
  <span class="audience-icon">👨‍👩‍👧</span>
  <div>
    <strong>幫家人朋友裝的你</strong>
    <p>想為非技術背景的人設定 AI 助手</p>
  </div>
</div>
<div class="audience-card">
  <span class="audience-icon">🔐</span>
  <div>
    <strong>隱私至上的人</strong>
    <p>不想把對話資料放在第三方伺服器上</p>
  </div>
</div>
</div>

</div>

<div class="final-cta">

## 準備好了嗎？

<p class="final-subtitle">下載 ClawInstaller，3 分鐘後你的 AI 團隊就上線。</p>

<div class="final-buttons">
<a href="https://github.com/clawinstaller/claw-installer/releases" class="cta-primary">免費下載 macOS App →</a>
<a href="/guide/getting-started" class="cta-secondary">閱讀新手教學</a>
</div>

</div>

<style>
.comparison-section {
  max-width: 900px;
  margin: 2rem auto 0;
  padding: 3rem 1.5rem;
}
.comparison-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.comparison-subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
.comparison-table-wrapper {
  overflow-x: auto;
}
.comparison-table-wrapper table {
  width: 100%;
  border-collapse: collapse;
}
.comparison-table-wrapper th {
  background: var(--vp-c-bg-soft);
  padding: 1rem 0.75rem;
  font-size: 0.95rem;
}
.comparison-table-wrapper td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-divider);
}
.comparison-table-wrapper td:first-child {
  text-align: left;
  font-weight: 600;
  white-space: nowrap;
}
.comparison-table-wrapper tr:hover {
  background: var(--vp-c-bg-soft);
}
.win {
  color: #f97316;
  font-weight: 700;
}
.highlight {
  color: #f97316;
  font-weight: 700;
  font-size: 0.85em;
}
.dim {
  color: var(--vp-c-text-3);
  font-size: 0.85em;
}
.comparison-cta {
  text-align: center;
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  border-radius: 12px;
  border: 1px solid #fed7aa;
}
.dark .comparison-cta {
  background: linear-gradient(135deg, #431407, #7c2d12);
  border-color: #9a3412;
}
.comparison-cta a {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.6rem 1.5rem;
  background: #f97316;
  color: white !important;
  border-radius: 99px;
  font-weight: 700;
  text-decoration: none !important;
  transition: background 0.2s;
}
.comparison-cta a:hover {
  background: #ea580c;
}

.audience-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}
.audience-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}
.audience-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 640px) {
  .audience-grid { grid-template-columns: 1fr; }
}
.audience-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.audience-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}
.audience-card p {
  margin: 0.25rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
}

.final-cta {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
  text-align: center;
}
.final-cta h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.final-subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
.final-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.cta-primary {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #f97316;
  color: white !important;
  border-radius: 99px;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none !important;
  transition: background 0.2s;
}
.cta-primary:hover { background: #ea580c; }
.cta-secondary {
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 99px;
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--vp-c-text-1) !important;
  text-decoration: none !important;
  transition: border-color 0.2s;
}
.cta-secondary:hover { border-color: #f97316; }
</style>
