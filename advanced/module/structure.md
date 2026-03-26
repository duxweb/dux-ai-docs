# 模块结构

典型模块结构：

```
app/Blog/
  App.php
  app.json
  Models/
  Admin/
  Api/
  Service/
  Views/
```

## 约定

- `App.php` 继承 `Core\App\AppExtend`。
- `app.json` 描述菜单与模块信息。
- `Admin/` 下既可以放 PHP 资源，也可以放 Vue 页面。
- `Api/` 用于签名 API，通常挂载在 `/api` 路由组。
