# 模块系统

模块是 Dux PHP Admin 的基本组织单位，一个模块包含：

- `App.php`：模块入口
- `app.json`：菜单与模块信息
- `Models/`：业务模型（AutoMigrate）
- `Admin/`：后台 API 与 Vue 页面
- `Api/`：对外 API（签名）

## 注册模块

在 `config/app.toml` 中注册模块入口：

```toml
registers = [ "App\\System\\App", "App\\Install\\App", "App\\Data\\App", "App\\Demo\\App" ]
```

## 菜单同步

模块菜单定义在 `app.json` 的 `*Menu` 字段，例如 `adminMenu`。同步命令：

```bash
php dux menu:sync
```
