# 服务商概览

服务商是 Dux AI 连接模型平台的入口。它负责保存 API Key、接口地址、协议类型和额外请求参数。

![服务商列表或创建页占位图](/images/provider-overview-list.png)

## 你可以把服务商理解成什么

如果模型是“具体干活的人”，那服务商就是“通往这个平台的大门”。

一个服务商通常负责：

- API Key
- Base URL
- 协议类型
- 请求超时
- 附加 Header
- 附加 Query 参数

## 当前所有支持的协议

下面这份列表按当前代码真实支持的协议整理。

### 常用协议

| 协议值 | 显示名称 | 说明 | 默认地址 |
| --- | --- | --- | --- |
| `openai` | OpenAI | 官方 OpenAI 协议 | `https://api.openai.com/v1` |
| `openai_like` | OpenAI Compatible | 兼容 OpenAI Chat Completions 的通用协议 | `https://api.openai.com/v1` |
| `deepseek` | DeepSeek | DeepSeek 官方协议 | `https://api.deepseek.com/v1` |
| `ark` | Volcengine ARK | 火山方舟协议 | `https://ark.cn-beijing.volces.com/api/v3` |
| `bigmodel` | BigModel | 智谱 BigModel 协议 | `https://open.bigmodel.cn/api/paas/v4` |
| `ollama` | Ollama | 本地 Ollama 协议 | `http://localhost:11434/api` |

### 进阶协议

| 协议值 | 显示名称 | 说明 | 默认地址 |
| --- | --- | --- | --- |
| `openai_responses` | OpenAI Responses | OpenAI Responses API 协议 | `https://api.openai.com/v1` |
| `azure_openai` | Azure OpenAI | Azure OpenAI 协议 | 需手动填写 |
| `anthropic` | Anthropic | Claude 官方协议 | `https://api.anthropic.com/v1` |
| `gemini` | Gemini | Google Gemini 协议 | `https://generativelanguage.googleapis.com` |
| `grok` | Grok | xAI Grok 协议 | `https://api.x.ai/v1` |
| `mistral` | Mistral | Mistral 官方协议 | `https://api.mistral.ai/v1` |
| `cohere` | Cohere | Cohere 官方协议 | `https://api.cohere.ai/v2` |

## 推荐优先使用的协议

如果你不是在做特殊协议适配，通常建议优先从这几类开始：

- `openai_like`
- `deepseek`
- `ark`
- `bigmodel`
- `ollama`

因为它们覆盖了大多数实际项目场景，也更适合快速落地。

## 什么时候要建多个服务商

这些情况通常建议拆开：

- 不同业务线使用不同厂商
- 聊天和多媒体能力来自不同平台
- 生产和测试环境分开
- 文件管理或上传能力独立配置

## 选择协议的简单建议

### 如果你接的是兼容 OpenAI 的平台

优先选 `openai_like`。

### 如果你明确就是接 DeepSeek 官方

直接选 `deepseek`。

### 如果你需要图片、视频、多媒体能力较完整的链路

优先考虑 `ark` 或 `bigmodel`。

### 如果你是在本地调试模型

优先考虑 `ollama`。
