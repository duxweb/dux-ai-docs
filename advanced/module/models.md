# 模型与数据库

模型继承 `Core\Database\Model`，并通过 `#[AutoMigrate]` 参与自动迁移。

```php
#[AutoMigrate]
class SystemUser extends Model
{
    public $table = "system_user";

    public function migration(Blueprint $table)
    {
        $table->id();
        $table->string('username')->unique();
        $table->string('nickname');
        $table->timestamps();
    }

    public function seed(Connection $db)
    {
        $db->table($this->table)->insert([
            'username' => 'admin',
            'nickname' => 'Admin',
        ]);
    }
}
```

## 迁移命令

```bash
php dux db:sync
```

## transform 约定

为统一输出字段，建议在模型中提供 `transform()` 方法，由控制器直接调用。
