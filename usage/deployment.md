# 系统部署

这一页只讲正式部署，不再和快速开始混在一起。

## 环境要求

建议正式环境至少满足：

- `PHP 8.4+`
- `MySQL 8.0+`
- `Composer`
- 可访问外部模型平台的网络环境

## 1. Web 服务根目录指向 `public`

无论你用什么 Web 服务，站点根目录都不要直接指向项目根目录，而是要指向：

```text
项目目录/public
```

## 2. Nginx 配置示例

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /www/wwwroot/dux-ai/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.4-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(env|toml) {
        deny all;
    }
}
```

这条 `try_files` 规则就是当前框架使用的标准重写方式。

## 3. 后台计划任务

进入后台菜单：

```text
系统 -> 计划管理
```

新增一条任务：

- Cron：`* * * * *`
- 任务：选择 `AI Scheduler`（如果后台显示为 `Ai调度`，选择这一项）
- 状态：启用

这一步的作用是让系统每分钟调度一次 AI 相关的异步任务，例如：

- 视频生成轮询
- 工作流挂起恢复
- 延迟消息等调度任务

## 4. 守护进程运行调度器

除了后台计划任务，还需要让调度器常驻运行。

命令是：

```bash
php dux scheduler:run
```

推荐用守护进程托管，例如 `supervisor`。

```ini
[program:dux-ai-scheduler]
command=php /www/wwwroot/dux-ai/dux scheduler:run
process_name=%(program_name)s
numprocs=1
autostart=true
autorestart=true
user=www
redirect_stderr=true
stdout_logfile=/www/wwwroot/dux-ai/data/logs/scheduler-supervisor.log
stopwaitsecs=10
```

保存后执行：

```bash
supervisorctl reread
supervisorctl update
supervisorctl start dux-ai-scheduler
```

## 5. 宝塔面板怎么配

### 站点

- 站点根目录指向 `public`
- PHP 版本选择 `8.4`
- 伪静态规则使用：

```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

### 守护进程

进入宝塔计划任务或守护进程管理后，增加一个常驻任务，执行：

```bash
cd /www/wwwroot/dux-ai && php dux scheduler:run
```

### 后台计划管理

别忘了系统后台里仍然要新增：

- `系统 -> 计划管理`
- Cron：`* * * * *`
- 任务：`AI Scheduler`

## 6. 1Panel 怎么配

### 站点

- 站点运行目录设置到 `public`
- PHP 版本选择 `8.4`
- 重写规则使用：

```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

### 守护进程

通过进程守护或任务执行功能，常驻运行：

```bash
cd /www/wwwroot/dux-ai && php dux scheduler:run
```

### 后台计划管理

同样不要漏掉系统内部的计划任务：

- `系统 -> 计划管理`
- Cron：`* * * * *`
- 任务：`AI Scheduler`

## 7. 为什么要同时配“计划管理”和“守护进程”

你可以直接这样理解：

- `系统 -> 计划管理`：定义系统应该执行哪些计划任务
- `php dux scheduler:run`：真正让调度器常驻起来去执行这些任务

两者缺一不可。
