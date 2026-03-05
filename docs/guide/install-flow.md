# 安裝流程詳解

ClawInstaller 的安裝精靈分為 4 個步驟，全程圖形化操作。

## Step 1：環境檢查（Preflight）

安裝精靈會自動檢查 5 個項目：

| 檢查項目 | 說明 | 自動修復 |
|----------|------|----------|
| macOS 版本 | 需要 14.0+ | ❌ 需手動升級 |
| Node.js | 需要 18.0+ | ✅ 一鍵安裝 |
| 套件管理器 | npm/pnpm/yarn/bun | ✅ 一鍵安裝 pnpm |
| 磁碟空間 | 至少 500 MB | ❌ 需手動清理 |
| 網路連線 | 可存取 npm registry | ❌ 請檢查網路 |

::: tip 建議
推薦使用 **pnpm** 作為套件管理器，速度快且節省磁碟空間。
:::

## Step 2：安裝 OpenClaw

點擊「開始安裝」後，安裝精靈會：

1. 透過你選擇的套件管理器全域安裝 `openclaw`
2. 執行 `openclaw setup` 初始化配置
3. 啟動 OpenClaw Gateway 服務

整個過程約 1-3 分鐘，取決於網路速度。

## Step 3：頻道設定

可選步驟 — 設定你的 Agent 要透過哪些管道跟你溝通。

## Step 4：完成

安裝完成後會顯示：
- 安裝耗時
- OpenClaw 版本
- QR Code 分享卡（可分享到 Threads / X）

你可以直接進入控制台管理你的 Agent。
