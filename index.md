---
layout: home
title: Dux AI
titleTemplate: 一体化模块化 AI 中后台平台

hero:
  name: Dux AI
  text: 把 AI 能力直接接进业务系统的一体化平台
  tagline: 基于 Dux Lite + DVHA Pro，把智能体、知识库、工作流和业务系统放进同一套模块化中后台，让 AI 真正可上线、可交付、可持续扩展。
  subtitle: 智能体 • 机器人 • 知识库 • 文件解析 • 多媒体生成 • 工作流
  mockUrl: "dux.cn"
  image:
    src: /hero.png
  actions:
    - theme: brand
      text: 开始使用
      link: /usage/introduction
    - theme: alt
      text: 框架底座
      link: /foundation/introduction
    - theme: alt
      text: 下载桌面端
      link: /usage/desktop
    - theme: alt
      text: 二次开发
      link: /extensions/

features:
  - icon: chat-bubble-left-right
    color: blue
    title: 统一平台架构
    details: 智能体、机器人、知识库、工作流和业务系统统一在一套平台里，不再是零散拼装的 AI 工具集合。
  - icon: cpu-chip
    color: green
    title: 后台与 AI 能力一体交付
    details: 后台管理、资源接口、权限菜单和 AI 能力统一在同一工程内开发，更适合真实项目交付。
  - icon: bolt
    color: amber
    title: 同步与异步任务都能处理
    details: 普通问答可直接返回，图片、视频、轮询类任务则可挂起、恢复和追踪状态。
  - icon: server-stack
    color: purple
    title: 能力边界可持续扩展
    details: 支持接入 HTTP、函数、知识库、多媒体、工作流与更多第三方工具能力。
  - icon: document-text
    color: indigo
    title: 多媒体与文档链路可直接落地
    details: 文件解析、图片生成、视频生成等能力可直接接进对话链路和业务流程。
  - icon: squares-2x2
    color: teal
    title: 服务商、模型、智能体三层解耦
    details: 方便按业务拆分能力、替换厂商、控制成本，也更适合后续长期维护。
  - icon: shopping-bag
    color: rose
    title: 应用商店支持
    details: 支持继续安装新的智能体、工作流模板和行业模块，让系统能力持续增长。
  - icon: device-phone-mobile
    color: orange
    title: 适配 AI 开发工具
    details: 提供 Dux Skills，可让 Codex、Claude Code 等工具直接参与开发，减少反复查文档和手工摸索。
  - icon: cube
    color: cyan
    title: 领先的一体式模块化架构
    details: 基于 Dux Lite + DVHA Pro 的实时渲染中后台架构，无需编译前端，只专注全栈业务开发。

featuresConfig:
  title: 为什么选择 Dux AI？
  description: 它不是只会聊天的 AI 演示工具，而是一套面向真实业务、可直接接入现有系统的 AI 中后台平台。
  extraSection:
    title: 核心优势
    description: 从后台、接口、权限到智能体、知识库、工作流，统一在一套模块化架构中落地。
    tags:
      - Dux Lite
      - DVHA Pro
      - 模块化中后台
      - 智能体
      - 机器人
      - 知识库
      - 工作流
      - 实时渲染后台
      - AI 开发工具
      - 企业交付

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
