# 第一个 API

下面示例创建一个简单的资源接口，自动生成 CRUD 路由。

## 1. 创建模型

```php
<?php

declare(strict_types=1);

namespace App\Demo\Models;

use Core\Database\Attribute\AutoMigrate;
use Core\Database\Model;
use Illuminate\Database\Schema\Blueprint;

#[AutoMigrate]
class DemoPost extends Model
{
    public $table = 'demo_post';

    public function migration(Blueprint $table): void
    {
        $table->id();
        $table->string('title');
        $table->text('content')->nullable();
        $table->timestamps();
    }
}
```

## 2. 创建资源控制器

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
            'content' => $item->content,
        ];
    }

    public function format(Data $data, ServerRequestInterface $request, array $args): array
    {
        return [
            'title' => $data->title,
            'content' => $data->content,
        ];
    }
}
```

## 3. 同步数据库

```bash
php dux db:sync
```

## 4. API 路由（自动生成）

- `GET /admin/demo/post` 列表
- `GET /admin/demo/post/{id}` 详情
- `POST /admin/demo/post` 创建
- `PUT /admin/demo/post/{id}` 编辑
- `PATCH /admin/demo/post/{id}` 更新
- `DELETE /admin/demo/post/{id}` 删除
- `DELETE /admin/demo/post` 批量删除
