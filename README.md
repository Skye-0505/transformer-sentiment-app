# Sentiment Analyzer Vue.js 项目

## 📋 项目简介

一个基于浏览器端的实时情感分析工具，无需后端服务器。输入任意英文文本，即可实时分析其情感倾向（积极/消极）及置信度。

## 🚀 快速开始

```bash
# 安装依赖
npm install
npm audit fix --force

# 启动开发服务器
npm start

# 访问应用
http://localhost:3000
```

## 🧠 模型说明

**模型名称：** `Xenova/distilbert-base-uncased-finetuned-sst-2-english`

**参数配置：**
- 任务类型：`sentiment-analysis`
- 模型架构：DistilBERT (蒸馏BERT，速度提升60%，体积减少40%)
- 训练数据：Stanford Sentiment Treebank (SST-2)
- 输出标签：`POSITIVE` / `NEGATIVE`
- 置信度分数：0-100%


## 🎯 使用说明

1. 在文本框中输入英文句子
2. 点击 "Analyze Sentiment" 按钮
3. 等待模型加载（仅首次）
4. 查看分析结果：
   -  **POSITIVE** - 积极情感
   -  **NEGATIVE** - 消极情感
   -  置信度百分比

## 💡 示例文本

```
积极：This movie was absolutely fantastic!
消极：The service was terrible and the food was cold.
中性：I opened the door and walked inside.
```

## 🔧 技术栈

- **前端框架**：Vue.js
- **AI 引擎**：Transformers.js (v3+)
- **模型格式**：ONNX Runtime Web
- **开发工具**：Express.js (开发服务器)

## 📝 注意事项

- 首次加载需下载模型（~80MB），请保持网络畅通
- 建议使用 Chrome/Firefox/Edge 等现代浏览器
- 英文文本效果最佳，其他语言可能表现不佳
- 模型完全运行在本地，无隐私泄露风险

---