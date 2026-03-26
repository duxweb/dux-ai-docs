# 菜单服务

菜单同步由 `App\System\Command\MenuCommand` 驱动，读取每个模块 `app.json` 中的 `*Menu`。

## 同步命令

```bash
php dux menu:sync             # 同步所有菜单
php dux menu:sync data        # 仅同步某个模块
php dux menu:sync data admin  # 仅同步某模块的 adminMenu
```

## menu 字段要点

- `name`：权限标识（必须唯一）
- `path`：前端路由路径
- `loader`：Admin 页面路径（如 `System/User/table`）
- `type`：`menu` / `directory`
