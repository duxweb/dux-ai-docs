# 安全最佳实践

- 设置强随机 `app.secret`
- 禁止暴露 `use.dev.toml` 到生产
- 直传上传必须走签名流程
- API 路由开启签名校验
- 生产环境关闭 `debug`
