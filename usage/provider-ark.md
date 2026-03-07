# Ark 服务商

Ark 更适合需要同时接入聊天、图片、视频、Embedding 等能力的场景。

## 注册地址 / 控制台入口

- 火山方舟控制台：`https://console.volcengine.com/ark`
- 火山方舟文档：`https://www.volcengine.com/docs/82379`
- API Key 相关页面通常位于方舟控制台的 API Key 管理区域

![Ark 控制台占位图](/images/provider-ark-console.png)

## 怎么获取 AK / API Key

Ark 相关鉴权通常会涉及两类概念：

- 火山引擎传统 `Access Key / Secret Key`
- 方舟业务侧 `API Key`

如果你是直接调用方舟模型接口，建议优先使用方舟控制台里的 API Key；如果你走更底层的云资源访问体系，也可能会用到火山引擎的 Access Key。

推荐步骤：

1. 登录火山引擎控制台
2. 开通方舟相关服务
3. 进入 API Key 管理或 Access Key 管理页面
4. 创建并复制凭证
5. 在 Dux AI 服务商中填写对应 Key

![Ark 获取 AK 或 API Key 占位图](/images/provider-ark-api-key.png)

## 适合什么项目

- 希望统一接入多种模型能力
- 除了聊天，还需要图片或视频生成
- 需要后续叠加多媒体工作流

## 推荐配置顺序

1. 先配置服务商
2. 先建对话模型验证聊天
3. 再增加 Embedding、图片、视频模型
4. 最后把这些模型接进智能体或工作流

## 一个实用建议

如果项目里既有聊天，又有图片和视频生成，建议模型分开建，不要混成一个“全能模型”配置，这样后面更容易维护。
