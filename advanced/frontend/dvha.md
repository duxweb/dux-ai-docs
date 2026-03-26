# DVHA 框架

后台前端使用 DVHA Pro（运行时基于 DVHA）+ Naive UI，入口在 `web/main.ts` 与 `web/config.ts`。

## 运行时配置

`/manage/` 会注入 `window.duxConfig`，结构示例：

```ts
window.duxConfig = {
  defaultManage: 'admin',
  theme: {
    logo: null,
    darkLogo: null,
    banner: null,
  },
  manage: [
    {
      name: 'admin',
      title: 'Dux AI',
      routePrefix: '/admin',
      apiBasePath: '/admin',
      apiRoutePath: '/router',
    }
  ]
}
```

`web/config.ts` 会把该配置合并到 DVHA config，动态生成后台路由。

## 资源加载

后台菜单中的 `loader` 会通过 `/admin/static` 读取对应的 Vue 文件，例如：

- `System/Home/index` -> `app/System/Admin/Home/index.vue`
- `Data/Config/table` -> `app/Data/Admin/Config/table.vue`

## 常用组件

## 进一步阅读

- [开发流程](/advanced/frontend/dev-flow)

优先使用 DVHA 提供的 Dux 组件：

- `DuxTablePage` / `DuxDrawerPage`
- `DuxPageForm` / `DuxModalForm`
- `DuxSelect` / `DuxTree` / `DuxCascader`
