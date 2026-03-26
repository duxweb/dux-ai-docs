# System 模块概览

`System` 模块提供底座层默认的后台能力。Dux AI 里的 AI 菜单和业务模块，都是在这套系统模块之上继续扩展出来的。

## 核心功能

- 首页与快捷入口
- 公告、通知、备忘
- 部门、角色、用户
- 菜单、配置、字典、地区、存储
- 操作日志、登录日志
- 定时任务、队列监控

## 后台入口

- `/manage/`：后台应用入口
- `/admin/*`：后台资源接口

## 菜单数据从哪里来

菜单写在模块 `app.json` 的 `adminMenu` 中，例如：

```json
{
  "adminMenu": [
    {
      "type": "menu",
      "label": "首页",
      "name": "system.index",
      "path": "system/index",
      "loader": "System/Home/index"
    }
  ]
}
```

改完后同步菜单：

```bash
php dux menu:sync
```

## 在 Dux AI 里的意义

当你进入 Dux AI 后台看到：

- 系统配置
- 存储设置
- 登录日志
- 任务调度

这些都属于 `System` 模块提供的底座能力，不是 AI 模块单独实现的。
