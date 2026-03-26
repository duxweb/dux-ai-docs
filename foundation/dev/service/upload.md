# 上传服务

上传服务封装于 `App\System\Service\Upload` 与 `App\System\Extends\Upload`。

## 主要能力

- 生成文件路径（按日期分层）
- 校验扩展名与大小
- 生成直传签名
- 保存文件记录（SystemFile）

## 关键方法

- `Upload::generatePath()`
- `Upload::validateFile()`
- `Extends\Upload::uploadSign()`
- `Extends\Upload::uploadStorage()`
- `Extends\Upload::uploadSave()`
