# DeepSeek 服务商

是的，DeepSeek 在当前 Dux AI 代码里是独立的服务商协议，不是简单并到 `openai_like`。

从代码可以直接看到：

- 协议常量：`deepseek`
- 默认地址：`https://api.deepseek.com/v1`
- 协议描述：`DeepSeek 官方协议`

## 注册地址 / 控制台入口

- DeepSeek 平台：`https://platform.deepseek.com/`
- API 文档：`https://api-docs.deepseek.com/`

![DeepSeek 平台首页或控制台占位图](/images/provider-deepseek-console.png)

## 怎么获取 API Key

根据官方文档，使用 DeepSeek API 之前需要先创建 API Key。推荐步骤：

1. 登录 `platform.deepseek.com`
2. 进入 API 或开发者相关页面
3. 创建并复制 API Key
4. 在 Dux AI 服务商里填写该 Key

![DeepSeek 获取 API Key 占位图](/images/provider-deepseek-api-key.png)

## 什么时候更适合选 DeepSeek 协议

如果你明确就是在接 DeepSeek 官方接口，建议直接选 `deepseek`，而不是手动选 `openai_like`。

这样做的好处是：

- 配置语义更清晰
- 默认地址更准确
- 后续协议差异更容易单独处理
- 文档和后台配置更一致

## 你通常需要准备什么

- API Key
- Base URL（默认可直接使用）
- 要绑定的模型名称

## 推荐配置顺序

1. 创建 DeepSeek 服务商
2. 创建聊天模型
3. 绑定到智能体
4. 先跑通聊天
5. 再继续接知识库、工作流或其他能力

## 请求示例

```json
{
  "name": "DeepSeek 主服务商",
  "code": "deepseek_main",
  "protocol": "deepseek",
  "api_key": "sk-xxx",
  "base_url": "https://api.deepseek.com/v1",
  "timeout": 30,
  "active": true
}
```
