# 系统存储配置

系统存储配置不是 AI 独有能力，但在 Dux AI 里非常重要。

你可以直接把它理解成：

> 文件、图片、视频最终要保存到哪里。

它主要会影响：

- 文件上传保存位置
- 图片 / 视频结果保存位置
- 知识库文档最终保存位置

## 当前支持哪些存储类型

根据当前后台表单，系统存储主要支持：

- `local` 本地存储
- `s3` S3 协议存储

## 本地存储适合什么情况

适合：

- 本地开发
- 单机部署
- 快速测试

主要填写：

- `存储目录`：public 目录下的存储路径
- `访问域名`：外部访问地址

## S3 协议存储适合什么情况

如果你准备上线，或者文件量会比较大，通常更建议用 `s3`。

S3 协议不只是 AWS，本质上很多兼容 S3 的对象存储都能接。

常见包括：

- 七牛云对象存储
- 腾讯云 COS
- 阿里云 OSS

## S3 一般要填什么

当前系统表单主要需要：

- `区域`
- `访问端点`
- `存储桶`
- `AccessKey`
- `SecretKey`
- `访问域名`

## 填写示例

### 本地


- 存储目录

  `uploads`

- 访问域名

  `http://127.0.0.1`

### 七牛云


- 区域

  `cn-south-1`

- 兼容 S3 的访问端点

  `s3.cn-south-1.qiniucs.com`

- 空间名称（存储桶）

  `dux-example`

- AccessKey / SecretKey

  `AKID` / `SK`

- 绑定访问域名 (CDN 加速)

  `https://domain.com`

### 腾讯云 COS


- 区域

  `ap-nanjing`

- 兼容 S3 的访问端点

  `cos.ap-nanjing.myqcloud.com`

- 空间名称（存储桶）

  `api-xxxxx`

- AccessKey / SecretKey

  `AKID` / `SK`

- 绑定访问域名 (CDN 加速)

  `https://domain.com`

### 阿里云 OSS


- 区域

  `oss-cn-shenzhen`

- 兼容 S3 的访问端点

  `oss-cn-shenzhen.aliyuncs.com`

- 空间名称（存储桶）

  `dux-example`

- AccessKey / SecretKey

  `AKID` / `SK`

- 绑定访问域名 (CDN 加速)

  `https://domain.com`

## 推荐怎么选

- 本地开发：先用 `local`
- 准备上线：优先用 `s3`
- 图片、视频、知识库文档较多：更建议统一走对象存储
