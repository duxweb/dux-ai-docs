# 企业微信接入

企业微信接入更偏向“创建企业应用 -> 选择 API 模式 -> 配 URL / Token / EncodingAESKey -> 再接智能体”的流程。

## 接入前准备

建议先准备：

- 企业管理员账号
- 可创建自建应用

## 1. 创建企业微信智能机器人

参考接入实践，建议使用企业管理员账号登录[企业微信平台](https://work.weixin.qq.com/)，从“应用管理” - “自建“ - “创建应用“ 进入智能机器人创建流程。

![企业微信创建机器人占位图](/images/bot-wecom-console.png)

## 2. 配置消息回调

在应用管理界面中中，建议选择 `API 接收消息`。

![企业微信创建机器人占位图](/images/bot-wecom-console.png)

## 3. 配置 URL、Token 和 EncodingAESKey

根据企业微信接入实践，重点会涉及：

- `URL`
- `Token`
- `EncodingAESKey`

在 Dux AI 当前配置中，对应常见字段是：

| 配置项 | 说明 | 是否重点 |
| --- | --- | --- |
| `企业 ID (CorpID)` | 企业 ID | 是 |
| `应用 Secret` | 应用密钥 | 是 |
| `应用 AgentId` | 应用 AgentId | 是 |
| `回调 Token` | 回调 Token | 按需但常用 |
| `EncodingAESKey` | 回调加密 Key | 按需但常用 |



![企业微信创建机器人占位图](/images/bot-wecom-token.png)

这里需要在 Dux AI 后台中先创建好机器人才可以回调成功，将生成的`Token`和`EncodingAESKey` 填入 Dux AI 的机器人配置，接收消息填写生成的回调地址比如 `https://域名/boot/webhook/机器人编码`。


## 4. 准备应用信息

除了回调验证参数外，企业微信侧通常还需要准备：

- 应用 Secret
- AgentId
- 企业 ID `CorpID`


![企业微信创建机器人占位图](/images/bot-wecom-id.png)

在刚才创建的应用中获取 `AgentId` 和 `应用 Secret`

![企业微信创建机器人占位图](/images/bot-wecom-corp.png)

在`我的企业` - `企业 ID` 中获取 CorpID


## 5. 到 Dux AI 创建机器人实例

推荐步骤：

1. 新建机器人实例
2. 平台选择 `wecom`
3. 填入 `企业 ID (CorpID)`、`应用 Secret`、`应用 AgentId`
4. 填写消息回调地址后，再补 `回调 Token` 和 `EncodingAESKey`
5. 再企业微信应用中 `开发者接口` - `企业可信IP` 中配置好 `服务器 IP 白名单`


## 6. 绑定智能体并联调

平台侧配置完成后，回到 Dux AI：

1. 创建企业微信机器人实例
2. 填入参数
3. 绑定智能体
4. 发消息联调

## 常见问题

### 企业微信提示签名或回调异常

优先检查：

- `回调 Token` 是否一致
- `EncodingAESKey` 是否一致
- 回调 URL 是否正确

### 企业微信回调正常但消息不返回

优先检查：

- 智能体是否已绑定
- 智能体是否能独立对话
- 机器人是否已启用
