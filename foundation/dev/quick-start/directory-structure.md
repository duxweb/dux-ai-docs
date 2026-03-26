# 目录结构（开发视角）

```
app/
  模块名/
    App.php             # 模块入口
    app.json            # 菜单与模块信息
    Models/             # 业务模型（AutoMigrate）
    Admin/              # 后台 API + Vue 页面
    Api/                # 对外 API
    Service/            # 业务服务
    Views/              # 模板（如管理入口）
```

关键约定：

- Admin Vue 页面直接放在 `app/模块/Admin`。
- 菜单与 loader 配置写在 `app/模块/app.json`。
- `config/app.toml` 注册模块入口类。
