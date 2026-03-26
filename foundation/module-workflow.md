# 模块开发完整实战

这一页讲的是底座层的模块开发流程，也就是如何在 `Dux PHP Admin` 中新增一个自己的业务模块。

如果你要扩展的是 AI 能力本身，再配合阅读 [开发概览](/dev/overview)。

## 1. 创建模块目录

```text
app/Demo/
  App.php
  app.json
  Admin/
  Models/
```

## 2. 模块入口

```php
<?php

declare(strict_types=1);

namespace App\Demo;

use Core\App\AppExtend;
use Core\Bootstrap;

class App extends AppExtend
{
    public function register(Bootstrap $app): void
    {
        // 在这里注册事件或服务
    }
}
```

## 3. 菜单配置

`app/Demo/app.json`：

```json
{
  "name": "duxweb/demo",
  "description": "Demo Application",
  "version": "0.1.0",
  "adminMenu": [
    {
      "type": "menu",
      "label": "示例页面",
      "name": "demo.index",
      "path": "demo/index",
      "icon": "i-tabler:star",
      "loader": "Demo/Index/index",
      "hidden": false
    }
  ]
}
```

## 4. 创建资源接口

`app/Demo/Admin/Post.php`：

```php
<?php

declare(strict_types=1);

namespace App\Demo\Admin;

use App\Demo\Models\DemoPost;
use Core\Resources\Action\Resources;
use Core\Resources\Attribute\Resource;
use Core\Validator\Data;
use Psr\Http\Message\ServerRequestInterface;

#[Resource(app: 'admin', route: '/demo/post', name: 'demo.post')]
class Post extends Resources
{
    protected string $model = DemoPost::class;

    public function transform(object $item): array
    {
        return [
            'id' => $item->id,
            'title' => $item->title,
        ];
    }

    public function format(Data $data, ServerRequestInterface $request, array $args): array
    {
        return [
            'title' => $data->title,
        ];
    }
}
```

## 5. 创建页面

`app/Demo/Admin/Index/index.vue`：

```vue
<script setup lang="ts">
</script>

<template>
  <DuxPage>
    <DuxPageHeader title="示例页面" />
    <DuxPageBody>
      <div class="p-4">Hello Dux PHP Admin</div>
    </DuxPageBody>
  </DuxPage>
</template>
```

## 6. 注册模块并同步

在 `config/app.toml` 中加上：

```toml
registers = [ "App\\System\\App", "App\\Install\\App", "App\\Data\\App", "App\\Demo\\App" ]
```

然后同步数据库和菜单：

```bash
php dux db:sync
php dux menu:sync
```

刷新 `/manage/` 就能看到新页面。

## 什么时候再看 AI 开发文档

如果你的模块还要继续接入智能体、知识库、工作流或机器人，再回到：

- [开发概览](/dev/overview)
- [智能体服务](/dev/agent)
- [工作流开发](/dev/flow)
