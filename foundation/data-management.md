# 数据管理

`Data` 模块提供配置化数据管理能力。你可以在后台配置表格、表单和字段，然后自动获得数据接口和管理页面。

## 数据配置模型

对应模型通常是 `App\Data\Models\DataConfig`。

常见配置字段：

- `table_data`：表格配置
- `form_data`：表单配置
- `field_data`：字段配置
- `table_type`：`pages` / `list` / `tree`
- `form_type`：`modal` / `drawer` / `page`

## 访问路径

- `/admin/data/config`：数据配置管理
- `/admin/data/data/{name}`：实际数据接口

其中 `{name}` 对应配置里的 `label`。

## 完整流程

1. 进入数据配置，新建一条配置
2. 填写显示名称和唯一 `label`
3. 配置字段、表格和表单
4. 前端页面直接使用对应数据路径

## 示例

如果 `label` 为 `article`：

- 列表接口：`/admin/data/data/article`
- 前端页面 `path`：`data/data/article`

## 注意事项

- `label` 必须唯一
- 字段配置会直接影响校验和表单生成
- 如果表格类型是 `tree`，接口会返回树结构

如果你要从代码层继续理解 Data 模块，可以再看 [框架开发总览](/advanced/overview)。
