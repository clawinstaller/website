# FAQ

## General

### What is ClawInstaller?

ClawInstaller is an **unofficial, community-driven** macOS graphical setup wizard that lets you install and configure OpenClaw in 3 minutes, without using the CLI.

### Is ClawInstaller affiliated with OpenClaw?

No. ClawInstaller is an independent open-source community project (MIT license), built to lower the barrier to entry for OpenClaw.

### Is it free?

ClawInstaller is completely free. Installation, environment checks, channel setup, and system monitoring are all free. No hidden costs.

---

## Installation Issues

### Environment check says I don't have Node.js

ClawInstaller provides a one-click install button. It will install Node.js 22 LTS via Homebrew or the official installer.

### Installation stuck at npm install

Possible causes:
1. **Network issue** — Make sure you can reach `registry.npmjs.org`
2. **Proxy settings** — Corporate networks may need npm proxy configuration
3. **Low disk space** — At least 500 MB free required

Solution: Cancel the install, check your network, and retry.

### `openclaw` command not found after installation

This is usually a PATH issue:
```bash
# Restart your terminal, or run:
source ~/.zshrc

# Check the install location
which openclaw
```

### Does it support Intel Macs?

Yes. ClawInstaller supports both Apple Silicon (arm64) and Intel (x86_64) architectures.

---

## Gateway Issues

### Gateway won't start

1. Check if port 18789 is already in use:
```bash
lsof -i :18789
```

2. Try restarting:
```bash
openclaw gateway restart
```

3. Check logs:
```bash
openclaw gateway logs
```

### Gateway shows "disconnected"

- Make sure the OpenClaw service is running
- Click "Check" in the control panel for a manual refresh
- Try restarting the Gateway

---

## Other

### How do I completely uninstall?

```bash
# Remove OpenClaw
npm uninstall -g openclaw

# Remove config files
rm -rf ~/.openclaw

# Remove ClawInstaller app
# Drag it from Applications to Trash
```

### How do I report a problem?

Go to [GitHub Issues](https://github.com/clawinstaller/claw-installer/issues) to submit a bug report or feature request.

### How can I contribute?

PRs are welcome! Check out the [GitHub Repo](https://github.com/clawinstaller/claw-installer) for contribution guidelines.
