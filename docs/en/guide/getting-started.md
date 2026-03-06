# Quick Start

Welcome to ClawInstaller! In just 3 minutes, you'll have a team of 3 AI Agents working for you.

::: tip Fastest way to start chatting
You don't need to set up any channels after installation — just open the Control UI and start talking to AI! See the ["After Installation"](#after-installation) section below.
:::

## System Requirements

| Item | Minimum | Notes |
|------|---------|-------|
| macOS | 14.0 (Sonoma) or later | Intel / Apple Silicon both supported |
| Node.js | 22.0 or later | [Don't have it? See below](#no-node-js) |
| Package Manager | npm / pnpm / yarn / bun (any) | npm comes with Node.js |
| Disk Space | 500 MB free | |

## Download & Install

### Option 1: Direct Download (Recommended)

Go to [GitHub Releases](https://github.com/clawinstaller/claw-installer/releases) and download the latest `.dmg` file.

### Option 2: Homebrew

```bash
brew tap clawinstaller/tap
brew install --cask clawinstaller
```

## Installation Flow

ClawInstaller guides you through these steps:

### 1. Environment Check

The setup wizard automatically detects your environment. Missing items get a **one-click fix** button:

| Check Item | Description |
|------------|-------------|
| macOS Version | Requires 14.0+ |
| Node.js | Requires 22.0+, one-click install if missing |
| Package Manager | npm / pnpm / yarn / bun, any one |
| Disk Space | At least 500 MB |
| Network | Needs npm registry access |

### 2. Install OpenClaw

One-click install of the OpenClaw CLI. Progress is displayed in real-time.

::: details What happens behind the scenes?
ClawInstaller uses your chosen package manager (e.g. npm) to globally install OpenClaw:
```bash
npm install -g openclaw
```
This is the same as the official manual installation, but you don't need to type any commands.
:::

### 3. Channel Setup (Optional)

Choose which communication channels your Agents will use. **You can skip this** and set it up later:

| Channel | Use Case | Status |
|---------|----------|--------|
| **Slack** | Team collaboration | Available |
| **Telegram** | Instant notifications | Available |
| **Discord** | Community | Available |
| **LINE** | Popular in Taiwan/Japan | Coming Soon |

### 4. Done!

The completion screen shows your installation summary (time taken, OpenClaw version, etc.).

---

## After Installation

All set up — what's next? Here are your first steps.

### Check Gateway Status

The Gateway is OpenClaw's core service — all AI conversations go through it. ClawInstaller starts it automatically after installation:

```bash
openclaw gateway status
```

If you see **running**, you're good to go.

::: tip What is the Gateway?
Think of the Gateway as your "AI switchboard." It runs on your Mac, handling all AI conversation requests. It runs at `localhost:18789` by default and is only accessible from your own computer.
:::

### Open Dashboard — Fastest Way to Chat

No channel setup needed — just open your browser:

```bash
openclaw dashboard
```

Your browser will open the Control UI (`http://127.0.0.1:18789/`). If you see the chat interface, everything is working!

### Chat from Terminal

If you prefer the terminal:

```bash
openclaw
```

Just type your message to start chatting with AI.

### Where Are Your Config Files

| Path | Description |
|------|-------------|
| `~/.openclaw/openclaw.json` | Main config file |
| `~/.openclaw/workspace/` | Agent workspace (skills, memories, etc.) |
| `~/.openclaw/credentials/` | Authentication info |

::: warning Don't edit these manually
Unless you know what you're doing, use the `openclaw configure` command to modify settings.
:::

---

## Common Beginner Questions

### No Node.js?

ClawInstaller detects this and offers a one-click install button. To install manually:

```bash
# Option 1: Homebrew (recommended)
brew install node

# Option 2: Download from official site
# https://nodejs.org/
```

Verify the version after installing:
```bash
node --version   # Should show v22.x.x or higher
```

### `openclaw` Command Not Found After Install

This is usually a PATH issue:

```bash
# Step 1: Restart your terminal, or run:
source ~/.zshrc

# Step 2: Check where openclaw is installed
which openclaw

# Step 3: If still not found, add to PATH manually
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Gateway Won't Start

Common cause is a port conflict:

```bash
# Check if port 18789 is in use
lsof -i :18789

# Kill the conflicting process, then restart
openclaw gateway restart

# Check logs for details
openclaw gateway logs
```

### Installation Stuck

Possible causes and solutions:

| Symptom | Cause | Fix |
|---------|-------|-----|
| npm install takes forever | Slow or broken network | Check access to `registry.npmjs.org` |
| Stuck downloading packages | Corporate proxy | Set npm proxy |
| Disk space error | Hard drive almost full | Free up at least 500 MB |

Cancel and retry — ClawInstaller will resume from where it left off.

---

## Next Steps

- [Meet Your Three Agents →](/en/guide/agents) — What Luna, Shuri, and Friday can do for you
- [Channel Setup →](/en/guide/channels) — Connect Slack, Telegram, Discord
- [Install Flow Details →](/en/guide/install-flow) — Step-by-step breakdown
- [FAQ →](/en/faq/) — More troubleshooting
