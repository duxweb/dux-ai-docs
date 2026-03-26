# 第一个模块

以下示例创建 `Demo` 模块，包含菜单与一个简单页面。

## 1. 创建目录

```
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
        // 可在此注册事件/服务
    }
}
```

## 3. 菜单配置（app.json）

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

## 4. 后台页面

创建 `app/Demo/Admin/Index/index.vue`：

```vue
<script setup lang="ts">
</script>

<template>
  <DuxPage>
    <DuxPageHeader title="示例页面" />
    <DuxPageBody>
      <div class="p-4">Hello Dux AI</div>
    </DuxPageBody>
  </DuxPage>
</template>
```

## 5. 注册模块

编辑 `config/app.toml`：

```toml
registers = [ "App\\System\\App", "App\\Install\\App", "App\\Data\\App", "App\\Demo\\App" ]
```

## 6. 同步菜单

```bash
php dux menu:sync
```

刷新 `/manage/`，即可看到菜单。
