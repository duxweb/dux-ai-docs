# API 签名

`/api/*` 路由默认启用签名校验（`Core\Api\ApiMiddleware`）。

## 请求头

- `AccessKey`：`secret_id`
- `Content-Date`：当前时间戳（秒）
- `Content-MD5`：签名结果

## 签名算法

签名字符串由以下三段组成，使用 `\n` 连接：

```
{path}\n{query}\n{timestamp}
```

使用 `HMAC-SHA256`：

```
sign = hash_hmac('SHA256', signString, secretKey)
```

## 时效限制

- 时间误差默认 60 秒
- 超时会返回 408

## 签名示例（伪代码）

```js
const signStr = `${path}\n${query}\n${timestamp}`
const sign = hmacSha256(signStr, secretKey)
```

> 后端通过 `SystemApi` 表查询 `secret_id` 与 `secret_key`。
