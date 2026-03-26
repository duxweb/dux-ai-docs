# 部署与运维

这一页讲的是框架层面的部署要求；如果你部署的是完整 Dux AI，还要再配合阅读 [系统部署](/usage/deployment)。

## 生产部署要点

1. Web 根目录指向 `public/`
2. 设置好 `config/use.toml` 里的 `app.secret` 和 `app.domain`
3. 确保前端构建产物存在于 `public/static/web/`

## Nginx 示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dux-ai/public;

    index index.php;

    location / {
        try_files $uri /index.php$is_args$args;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
```

## 前端构建

在项目根目录执行：

```bash
pnpm install
pnpm build
```

构建完成后，访问 `/manage/` 即可加载后台应用。

## 如果你部署的是完整 Dux AI

除了这里的框架层部署项，还要继续确认：

- AI 模块的计划任务
- Redis 等运行依赖
- 服务商和模型配置
- 机器人回调与对外 API
