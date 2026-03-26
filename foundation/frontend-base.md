# 前端基座工作机制

后台页面由“前端基座 + 模块页面”组成。你真正写的业务页面，通常只需要放进模块目录里。

## 工作流程

1. 访问 `/manage/`
2. 后端注入运行时配置、菜单和权限
3. 前端基座根据菜单 `loader` 找到对应模块页面
4. 页面按需加载并显示

## 页面放在哪里

```text
app/模块名/Admin/...
```

例如：

```text
System/Home/index -> app/System/Admin/Home/index.vue
```

## 你通常要做什么

- 写好模块菜单 `app.json`
- 把页面放进 `app/模块/Admin`
- 刷新后台确认效果

这就是基座模式的核心：页面按需加载，不需要为每个页面单独打包。

## 进一步阅读

- [前端基座更新](/foundation/frontend-base-update)
- [DVHA 框架](/advanced/frontend/dvha)
