# 你的三位 Agent

ClawInstaller 安裝完成後，你會擁有三位 AI Agent，各司其職。

## 🧠 阿貓 · 總管（Luna）

**角色**：AI 管家 / 任務調度

阿貓是你的預設 Agent，負責：
- 管理日程與待辦事項
- 自動分配任務給其他 Agent
- 回覆常見問題
- 整合各頻道的訊息

```bash
# 跟阿貓對話
openclaw chat
```

## 🔍 土豆 · 研究（Shuri）

**角色**：研究員 / QA 測試

土豆專注在深度分析：
- 搜尋整理資料
- 撰寫研究報告
- 程式碼審查（Code Review）
- QA 測試與 Bug 回報

```bash
# 指定土豆執行任務
openclaw agent shuri "幫我分析這個 API 的效能瓶頸"
```

## 💻 小可愛 · 開發（Friday）

**角色**：工程師 / 自動化

小可愛負責所有技術工作：
- 撰寫程式碼
- Debug 與問題排除
- CI/CD 部署自動化
- 專案架構建議

```bash
# 讓小可愛寫程式
openclaw agent friday "建立一個 Express API，包含用戶 CRUD"
```

## Agent 協作

三位 Agent 可以互相溝通、協作：

```bash
# 阿貓會自動分配工作
openclaw chat "我想建一個部落格網站"
# → 阿貓規劃架構、分配 Friday 寫程式、Shuri 做 QA
```

## 下一步

- [設定通訊頻道 →](/guide/channels)
- [系統監控 →](/guide/monitor)
