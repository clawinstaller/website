# 快速開始

歡迎使用 ClawInstaller！只需 3 分鐘，你就能擁有一個由 3 位 AI Agent 組成的工作團隊。

::: tip 最快開始聊天的方式
安裝完不用設定任何頻道，直接開啟 Control UI 就能和 AI 對話！往下看[「安裝完成後」](#安裝完成後)章節。
:::

## 系統需求

| 項目 | 最低需求 | 備註 |
|------|----------|------|
| macOS | 14.0 (Sonoma) 以上 | Intel / Apple Silicon 都支援 |
| Node.js | 22.0 以上 | [不確定怎麼裝？看這裡](#沒有-node-js-怎麼辦) |
| 套件管理器 | npm / pnpm / yarn / bun（任一） | 裝完 Node.js 就有 npm |
| 磁碟空間 | 500 MB 可用空間 | |

## 下載安裝

### 方式一：直接下載（推薦）

前往 [GitHub Releases](https://github.com/clawinstaller/claw-installer/releases) 下載最新版 `.dmg` 檔案。

### 方式二：Homebrew

```bash
brew tap clawinstaller/tap
brew install --cask clawinstaller
```

## 安裝流程

ClawInstaller 會引導你完成以下步驟：

### 1. 環境檢查

安裝精靈會自動偵測你的環境，缺少的項目會提供**一鍵修復**按鈕：

| 檢查項目 | 說明 |
|----------|------|
| macOS 版本 | 需要 14.0 以上 |
| Node.js | 需要 22.0 以上，缺少可一鍵安裝 |
| 套件管理器 | npm / pnpm / yarn / bun 任一即可 |
| 磁碟空間 | 至少 500 MB |
| 網路連線 | 安裝過程需要下載套件 |

### 2. 安裝 OpenClaw

一鍵安裝 OpenClaw CLI 到你的系統。安裝過程會在終端機即時顯示進度。

::: details 背後做了什麼？
ClawInstaller 會用你選擇的套件管理器（例如 npm）全域安裝 OpenClaw：
```bash
npm install -g openclaw
```
等同於官方文件的手動安裝步驟，但你完全不需要自己打指令。
:::

### 3. 頻道設定（可跳過）

選擇你想啟用的通訊頻道。**這步可以先跳過**，之後隨時都能設定：

| 頻道 | 用途 | 狀態 |
|------|------|------|
| **Slack** | 團隊協作 | 可用 |
| **Telegram** | 即時通知 | 可用 |
| **Discord** | 社群互動 | 可用 |
| **LINE** | 台灣最常用 | 即將支援 |

### 4. 完成！

安裝完成畫面會顯示安裝摘要（安裝時間、OpenClaw 版本等）。

---

## 安裝完成後

裝好了，然後呢？以下是你的第一步。

### 確認 Gateway 正在運行

Gateway 是 OpenClaw 的核心服務，所有 AI 對話都透過它處理。ClawInstaller 安裝完會自動啟動 Gateway，你可以確認一下：

```bash
openclaw gateway status
```

看到 **running** 就代表成功了。

::: tip 什麼是 Gateway？
把 Gateway 想成你的「AI 總機」。它在你的 Mac 上運行，負責接收和處理所有 AI 對話請求。預設在 `localhost:18789` 運行，只有你自己的電腦能存取。
:::

### 開啟 Dashboard — 最快的聊天方式

不需要設定任何頻道，打開瀏覽器就能和 AI 對話：

```bash
openclaw dashboard
```

瀏覽器會自動開啟 Control UI（`http://127.0.0.1:18789/`）。看到聊天介面就代表一切正常！

### 用終端機聊天

如果你比較習慣終端機：

```bash
openclaw
```

直接輸入訊息就能開始和 AI 對話。

### 你的設定檔在哪裡

| 路徑 | 說明 |
|------|------|
| `~/.openclaw/openclaw.json` | 主要設定檔 |
| `~/.openclaw/workspace/` | Agent 的工作區（技能、記憶等） |
| `~/.openclaw/credentials/` | 認證資訊 |

::: warning 不要手動修改這些檔案
除非你知道自己在做什麼，否則建議透過 `openclaw configure` 指令修改設定。
:::

---

## 常見新手問題

### 沒有 Node.js 怎麼辦？

ClawInstaller 的環境檢查會偵測到，並提供一鍵安裝按鈕。如果你想手動安裝：

```bash
# 方法一：用 Homebrew（推薦）
brew install node

# 方法二：前往官網下載
# https://nodejs.org/
```

安裝完後確認版本：
```bash
node --version   # 應該顯示 v22.x.x 以上
```

### 安裝完 `openclaw` 指令打不出來

這是最常見的新手問題，通常是 PATH 設定問題：

```bash
# 步驟一：重新開啟終端機
# 或者執行：
source ~/.zshrc

# 步驟二：確認 openclaw 安裝在哪
which openclaw

# 步驟三：如果還是找不到，手動加入 PATH
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Gateway 無法啟動

常見原因是 port 被佔用：

```bash
# 檢查 port 18789 是否被佔用
lsof -i :18789

# 如果被佔用，先關掉佔用的程式，再重啟
openclaw gateway restart

# 查看 log 找原因
openclaw gateway logs
```

### 安裝卡住不動

可能原因和解法：

| 症狀 | 原因 | 解法 |
|------|------|------|
| npm install 跑很久 | 網路慢或斷線 | 確認能存取 `registry.npmjs.org` |
| 卡在下載套件 | 公司網路有代理 | 設定 npm proxy |
| 磁碟空間不足 | 硬碟快滿了 | 清出至少 500 MB 空間 |

取消後重試即可，ClawInstaller 會接續未完成的步驟。

---

## 下一步

- [認識你的三位 Agent →](/guide/agents) — Luna、Shuri、Friday 分別能幫你做什麼
- [設定通訊頻道 →](/guide/channels) — 連結 Slack、Telegram、Discord
- [安裝流程詳解 →](/guide/install-flow) — 每一步的細節說明
- [常見問題 →](/faq/) — 更多疑難排解
