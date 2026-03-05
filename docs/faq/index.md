# 常見問題

## 一般問題

### ClawInstaller 是什麼？

ClawInstaller 是一個**非官方、社群驅動**的 macOS 圖形化安裝精靈，讓你用 3 分鐘完成 OpenClaw 的安裝與設定，不需要手動操作 CLI。

### ClawInstaller 跟 OpenClaw 官方有關嗎？

沒有。ClawInstaller 是獨立的開源社群專案（MIT 授權），目的是降低 OpenClaw 的入門門檻。

### 需要付費嗎？

ClawInstaller 完全免費。安裝、環境檢查、頻道設定、系統監控都不需要付費。

---

## 安裝問題

### 環境檢查說我沒有 Node.js

ClawInstaller 會提供一鍵安裝按鈕。點擊後會透過 Homebrew 或官方安裝包為你安裝 Node.js 20 LTS。

### 安裝卡在 npm install

可能原因：
1. **網路問題** — 確認你可以存取 `registry.npmjs.org`
2. **代理設定** — 如果在公司網路，可能需要設定 npm proxy
3. **磁碟空間不足** — 需要至少 500 MB 可用空間

解決方式：取消安裝，檢查網路後重試。

### 安裝完成但 openclaw 指令找不到

通常是 PATH 問題。嘗試：
```bash
# 重新開啟終端機，或執行：
source ~/.zshrc

# 確認安裝位置
which openclaw
```

### 支援 Intel Mac 嗎？

支援。ClawInstaller 同時支援 Apple Silicon (arm64) 和 Intel (x86_64) 架構。

---

## Gateway 問題

### Gateway 無法啟動

1. 確認 port 18789 沒有被佔用：
```bash
lsof -i :18789
```

2. 嘗試重新啟動：
```bash
openclaw gateway restart
```

3. 檢查 log：
```bash
openclaw gateway logs
```

### Gateway 顯示 disconnected

- 確認 OpenClaw 服務正在運行
- 在控制台點擊「Check」手動檢查
- 嘗試重啟 Gateway

---

## 其他

### 如何完全移除？

```bash
# 移除 OpenClaw
npm uninstall -g openclaw

# 移除設定檔
rm -rf ~/.openclaw

# 移除 ClawInstaller app
# 直接從 Applications 拖到垃圾桶
```

### 如何回報問題？

前往 [GitHub Issues](https://github.com/clawinstaller/claw-installer/issues) 提交 Bug 或建議。

### 如何貢獻？

歡迎 PR！請參考 [GitHub Repo](https://github.com/clawinstaller/claw-installer) 的 Contributing 指南。
