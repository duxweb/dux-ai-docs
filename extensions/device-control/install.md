# 安装

设备控制扩展的安装分成三部分：

1. 服务端安装并启用 `AiDesktop` 模块
2. 服务端安装运行库扩展，并使用 `dux runtime` 守护运行
3. 在目标设备上安装 `dux-ai-node`

## 服务端准备

确保你的 Dux AI 服务端已经安装并启用了 `AiDesktop` 模块，并且可以正常访问后台管理界面。

### 安装 `AiDesktop` 模块

服务端可以通过后台应用市场安装，也可以通过命令行安装：

```bash
dux add duxweb/aiDesktop
```

安装完成后，刷新应用并确认后台已经出现节点设备相关菜单。

### 使用 `dux runtime` 守护运行

设备控制扩展不是单纯依赖 Web 请求模型就能完整工作的，需要直接通过 `dux runtime` 进行守护运行。

`dux runtime` 会统一接管这些常驻能力：

- 队列消费
- 定时任务
- WebSocket 服务

常见启动方式：

```bash
php dux runtime
```

如果你已经把运行库配置成系统服务或其他守护方式，也可以按你的部署方式长期运行，但原则上要保证 queue / scheduler / ws 三类服务都处于可用状态。

常见前提包括：

- Dux AI 服务端已部署完成
- `AiDesktop` 模块已启用
- `dux-lite-runtime` 已安装并正常运行
- 后台可以访问节点设备管理页面
- 节点设备可以通过网络访问服务端地址

## 节点程序仓库

设备节点程序仓库：

```text
https://github.com/duxweb/dux-ai-node
```

Releases 页面：

```text
https://github.com/duxweb/dux-ai-node/releases
```

## macOS / Windows 安装

推荐直接从 GitHub Releases 下载对应系统版本。

- macOS：下载 `.app` 压缩包
- Windows：下载 `.zip` 后解压运行

安装完成后，首次启动需要在设置中填写服务端地址。

### macOS 提示“已损坏，无法打开”怎么办

如果系统提示：

```text
“Dux AI Node”已损坏，无法打开。你应该将它移到废纸篓。
```

通常不是文件真的损坏，而是 macOS 对未签名或未公证应用的隔离拦截。

可执行：

```bash
sudo xattr -rd com.apple.quarantine /Applications/Dux\ AI\ Node.app
```

然后重新打开应用。

## Linux 安装

Linux 节点当前推荐运行在 Debian / Ubuntu 服务器环境。

### 一键安装

推荐直接执行安装脚本：

```bash
curl -fsSL https://raw.githubusercontent.com/duxweb/dux-ai-node/main/scripts/install-linux.sh | sudo bash -s -- --server-url http://duxai.test
```

脚本会自动完成：

- 识别 `x86_64` 或 `arm64` 架构
- 下载对应 Release 包
- 安装运行时依赖
- 默认安装 headless Chromium
- 创建 `systemd` 服务
- 启动并设置开机自启

### 升级与重装

重复执行同一个安装命令即可，脚本会自动识别当前状态：

- 首次安装：`install`
- 已有旧版本：`upgrade`
- 版本相同再次安装：`reinstall`

### 卸载

普通卸载：

```bash
curl -fsSL https://raw.githubusercontent.com/duxweb/dux-ai-node/main/scripts/uninstall-linux.sh | sudo bash
```

完全卸载：

```bash
curl -fsSL https://raw.githubusercontent.com/duxweb/dux-ai-node/main/scripts/uninstall-linux.sh | sudo bash -s -- --purge
```

## 安装完成后检查

### macOS / Windows

确认托盘中已经出现 `Dux AI Node`，并能打开设置窗口。

### Linux

检查服务状态：

```bash
systemctl status dux-ai-node
```

查看实时日志：

```bash
journalctl -u dux-ai-node -f
```

## 下一步

安装完成后，继续看 [使用教程](/extensions/device-control/tutorial)。
