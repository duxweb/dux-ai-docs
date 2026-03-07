# 飞书接入

飞书接入更适合按“创建应用 -> 获取凭证 -> 添加机器人 -> 开权限 -> 配回调 -> 联调”来理解。

## 接入前准备

开始之前，建议先准备：

- 企业自建应用权限
- 一个已可正常对话的智能体
- 可被飞书平台访问的 Dux AI 地址

## 1. 创建企业自建应用

根据参考接入实践，建议先在[飞书开发者平台](https://open.feishu.cn/)创建 `企业自建应用`。


![飞书创建应用占位图](/images/bot-feishu-console.png)

## 2. 获取 APP ID 与 APP Secret

在应用的“凭证与基础信息”里获取：

- `APP ID`
- `APP Secret`


![飞书创建应用占位图](/images/bot-feishu-id.png)

这两个参数要保存好，后续在 Dux AI 里配置飞书机器人时会用到。

## 3. 添加机器人能力

在应用能力中添加“机器人”。

## 4. 配置事件与回调验证

飞书侧通常还需要继续做两件事：

- 配置应用权限

  ![飞书创建应用占位图](/images/bot-feishu-pw.png)

- 配置事件订阅地址对应人的事件：

  ![飞书创建应用占位图](/images/bot-feishu-callback.png)

  配置地址为 `https://域名/boot/webhook/机器人编码`, 其中机器人编码是 DuxAI 添加机器人时填写的，注意需要添加事件 `im.message.receive_v1`



在 Dux AI 当前配置里，对应常见字段包括：

| 配置项 | 说明 | 是否重点 |
| --- | --- | --- |
| `App ID` | 飞书应用 ID | 是 |
| `App Secret` | 飞书应用密钥 | 是 |
| `Verification Token` | 事件订阅验证 Token | 按需 |
| `Encrypt Key` | 事件订阅加密 Key | 按需 |

## 5. 回到 Dux AI 创建机器人实例

推荐步骤：

1. 先创建机器人名称和编码
2. 选择平台 `feishu`
3. 填入 `App ID` 与 `App Secret`
4. 在飞书事件订阅中填入`回调地址`
4. 若启用事件校验，再补 `Verification Token` 和 `Encrypt Key`

## 6. 绑定智能体并联调

飞书应用侧准备完成后，回到 Dux AI：

1. 创建飞书机器人实例
2. 填入参数
3. 绑定智能体
4. 用飞书发消息测试

## 常见问题

### 飞书回调校验失败

优先检查：

- `Verification Token` 是否一致
- `Encrypt Key` 是否一致
- 回调地址是否可访问

### 飞书能收消息但没有返回

优先检查：

- 智能体是否已绑定
- 智能体本身能否正常对话
- 是否是工作流或能力执行失败
