# 文件解析能力

这一页只讲文件解析，不再混入图片生成和视频生成。

你可以把文件解析理解成一件很简单的事：

> 先把文件里的内容读出来，后面智能体、知识库和工作流才能继续使用这些内容。

## 文件解析什么时候会用到

最常见就是两种情况：

### 1. 上传的是常见文档

例如：

- txt
- md
- csv
- html
- json
- 一些可以直接读取文本内容的文档

这种情况通常不需要复杂 OCR，系统会优先直接读取内容。

### 2. 上传的是图片或 PDF

例如：

- 扫描版 PDF
- 图片里的文字
- 合同、单据、截图、说明书

这种情况就需要“解析配置”来把图片或 PDF 里的文字识别出来。

## 你在后台主要看哪两个地方

- `服务商`：负责接大模型平台
- `解析配置`：负责把图片、PDF 等资料转成文本

简单记就是：

- 模型问题看服务商
- 文件识别问题看解析配置

## 本地解析和外部解析怎么选

### 本地解析

如果你只是想先快速跑通，建议优先试本地解析。

当前本地解析用的是：

- 图片：RapidOCR
- PDF：RapidOCRPDF

适合：

- 本地开发
- 快速测试
- 先验证链路是否正常

### 外部解析

如果你对识别效果要求更高，或者不想在本机维护 OCR 环境，就可以用外部解析驱动。

当前支持：

| 驱动值 | 名称 | 适合解析 | 所属平台 |
| --- | --- | --- | --- |
| `local` | 本地解析 | 图片、PDF | 本机 RapidOCR / RapidOCRPDF |
| `baidu_paddle_cloud` | 百度千帆 OCR | 图片、PDF | 百度智能云 |
| `moonshot` | Moonshot 解析 | 文档、PDF | Moonshot |
| `volcengine_doc` | 火山文档解析 | 文档、PDF | 火山引擎 |
| `bigmodel` | BigModel 文档解析 | 文档、PDF | 智谱 BigModel |

## 本地解析怎么安装

如果你选择的是 `local`，只要安装下面两个组件就可以。

::: code-group

```bash [macOS]
python3 -m pip install rapidocr-onnxruntime pillow
python3 -m pip install rapidocr-pdf
```

```bash [Linux]
python3 -m pip install rapidocr-onnxruntime pillow
python3 -m pip install rapidocr-pdf
```

```powershell [Windows]
py -m pip install rapidocr-onnxruntime pillow
py -m pip install rapidocr-pdf
```

:::

## 第一次推荐怎么配

如果你第一次配置，建议这样做：

1. 先建一个解析配置
2. 驱动先选 `local`
3. 先拿 1 个 PDF 或 1 张图片测试
4. 解析结果对了，再继续接知识库

## 推荐阅读

- [解析配置](/usage/parse-config)
- [模型配置](/usage/model-config)
- [知识库概览](/usage/rag-overview)
