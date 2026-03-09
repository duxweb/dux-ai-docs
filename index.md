---
layout: home
title: Dux AI
titleTemplate: 基于 Dux PHP Admin 的智能体与业务对话平台

hero:
  name: Dux AI
  text: 用 Dux PHP Admin 快速构建可落地的 AI 业务系统
  tagline: 把智能体、机器人、知识库、工作流和业务系统放进同一套中后台架构里，让 AI 真正能上线、能扩展、能交付。
  subtitle: 智能体 • 机器人 • 知识库 • 文件解析 • 图片/视频生成 • 工作流
  mockUrl: "dux.cn"
  image:
    src: /hero.png
  actions:
    - theme: brand
      text: 开始使用
      link: /usage/introduction
    - theme: alt
      text: 下载桌面端
      link: /usage/desktop
    - theme: alt
      text: 二次开发
      link: /dev/overview
    - theme: alt
      text: API 对接
      link: /api/overview

features:
  - icon: chat-bubble-left-right
    color: blue
    title: 智能体、机器人、知识库、工作流统一在一个平台里
    details: 不是零散拼装 AI 工具，而是把对话入口、资料能力、任务执行和业务系统统一收口。
  - icon: cpu-chip
    color: green
    title: 智能体能力可持续扩展
    details: 可以继续接 HTTP、函数、知识库、多媒体、工作流与更多第三方工具能力。
  - icon: bolt
    color: amber
    title: 同步与异步任务都能处理
    details: 普通问答可直接返回，图片、视频、轮询类任务则可挂起、恢复和追踪状态。
  - icon: server-stack
    color: purple
    title: 内置 MCP 工具接入能力
    details: 可继续连接魔搭等更多外部工具和服务能力，让智能体真正具备执行力。
  - icon: document-text
    color: indigo
    title: 文件解析、图片、视频能力可直接接入
    details: 除了文字对话，还可以继续扩展文件解析、图片生成、视频生成等多媒体能力。
  - icon: squares-2x2
    color: teal
    title: 服务商、模型、智能体三层解耦
    details: 方便按业务拆分能力、替换厂商、控制成本，也更适合后续长期维护。
  - icon: shopping-bag
    color: rose
    title: 可通过应用商店持续扩展
    details: 后续适合继续安装新的智能体、工作流模板和行业模块，让系统持续增长。
  - icon: device-phone-mobile
    color: orange
    title: 同时适合传统 API 与多端开发
    details: 除了 AI 能力本身，依然可以继续对接移动端、PC 端、H5 和传统 REST API。
  - icon: cube
    color: cyan
    title: 基于 Dux PHP Admin
    details: 天然拥有模块化中后台能力，适合继续扩展后台页面、资源接口、业务模块和系统能力。

featuresConfig:
  title: 为什么选择 Dux AI？
  description: 它不是一个只会聊天的演示工具，而是一套面向真实业务、可持续扩展、可直接交付的 AI 中后台平台。
  extraSection:
    title: 核心能力
    description: 从安装、配置、对接到业务落地，形成一条完整链路
    tags:
      - Dux PHP Admin
      - 智能体
      - 机器人
      - 知识库
      - 文件解析
      - 图片生成
      - 视频生成
      - 工作流
      - MCP 工具调用
      - 企业接入

quickStart:
  badge: 10 分钟起步
  title: 快速安装
  subtitle: 使用 Composer 创建项目
  description: 从安装到进入 Dux AI 后台，只需要几步。
  steps:
    - step: "01"
      icon: "arrow-down-tray"
      color: "blue"
      title: "创建项目"
      description: "使用 Composer 安装 Dux AI"
      code: |
        composer create-project duxweb/dux-ai
        cd dux-ai
    - step: "02"
      icon: "rocket-launch"
      color: "purple"
      title: "启动服务"
      description: "启动 php 的 web 服务"
      code: |
        php -S localhost:8000 -t public
    
    - step: "03"
      icon: "cog-8-tooth"
      color: "green"
      title: "安装向导"
      description: "启动服务后打开安装向导进行安装系统"
      code: |
        # 浏览器打开 http://localhost:8000/
  helpText: "继续阅读完整文档"
  helpLink: "/usage/quick-start"
  helpLinkText: "查看快速开始"
---
