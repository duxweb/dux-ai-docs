import { withDuxTheme } from '@duxweb/vitepress-theme/config'

const getBase = () => {
  if (process.env.GITHUB_ACTIONS) {
    return '/dux-ai-docs/'
  }
  return '/'
}

export default withDuxTheme({
  title: 'Dux AI',
  description: '基于 Dux PHP Admin 开发的 AI 应用平台，用于构建智能体、机器人、知识库、工作流与对话式业务系统。',
  lang: 'zh-CN',
  base: getBase(),
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#2f855a' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: 'Dux AI | 基于 Dux PHP Admin 的智能体与业务对话平台' }],
    ['meta', { property: 'og:site_name', content: 'Dux AI' }],
    ['meta', { property: 'og:image', content: '/hero.png' }],
    ['meta', { property: 'og:url', content: 'https://dux-ai.docs.dux.plus/' }],
  ],
  themeConfig: {
    siteTitle: 'Dux AI',
    nav: [
      { text: '使用', link: '/usage/introduction', activeMatch: '/usage/' },
      { text: '基础框架', link: '/foundation/introduction', activeMatch: '/foundation/' },
      { text: '开发', link: '/dev/overview', activeMatch: '/dev/' },
      { text: 'API', link: '/api/overview', activeMatch: '/api/' },
      { text: '扩展', link: '/extensions/device-control/introduction', activeMatch: '/extensions/' },
      { text: '社区', link: '/community', activeMatch: '/community' },
      {
        text: '生态',
        items: [
          {
            text: '核心项目',
            items: [
              { text: 'Dux PHP Admin', link: 'https://github.com/duxweb/dux-php-admin' },
              { text: 'Dux Lite', link: 'https://lite2.docs.dux.plus/' },
              { text: 'DVHA', link: 'https://dvha.docs.dux.plus/' },
              { text: 'Dux App', link: 'https://duxapp.com/' },
            ],
          },
          {
            text: '在线资源',
            items: [
              { text: 'GitHub', link: 'https://github.com/duxweb' },
            ],
          },
        ],
      },
    ],
    sidebar: {
      '/foundation/': [
        {
          text: '开始',
          items: [
            { text: '基础框架概览', link: '/foundation/introduction' },
            { text: '基础框架快速开始', link: '/foundation/getting-started' },
            { text: '一体化模块架构', link: '/foundation/architecture' },
            { text: '目录结构', link: '/foundation/directory-structure' },
          ],
        },
        {
          text: '基础配置',
          items: [
            { text: '系统配置', link: '/foundation/configuration' },
            { text: '数据库配置', link: '/foundation/database' },
            { text: '缓存配置', link: '/foundation/cache' },
          ],
        },
        {
          text: '系统使用',
          items: [
            { text: 'System 模块概览', link: '/foundation/system-overview' },
          ],
        },
        {
          text: '开发',
          items: [
            { text: '框架开发总览', link: '/foundation/dev/overview' },
            { text: '模块开发完整实战', link: '/foundation/module-workflow' },
          ],
        },
        {
          text: '部署运维',
          items: [
            { text: '部署与运维', link: '/foundation/deployment' },
            { text: '故障排除', link: '/foundation/troubleshooting' },
            { text: '常见问题', link: '/foundation/faq' },
          ],
        },
      ],
      '/foundation/dev/': [
        {
          text: '开始',
          items: [
            { text: '框架开发总览', link: '/foundation/dev/overview' },
            { text: '项目安装', link: '/foundation/dev/quick-start/installation' },
            { text: '环境搭建', link: '/foundation/dev/quick-start/environment' },
            { text: '目录结构', link: '/foundation/dev/quick-start/directory-structure' },
            { text: '第一个 API', link: '/foundation/dev/quick-start/first-api' },
            { text: '第一个模块', link: '/foundation/dev/quick-start/first-module' },
          ],
        },
        {
          text: '核心概念',
          items: [
            { text: '架构概述', link: '/foundation/dev/core/architecture' },
            { text: '模块系统', link: '/foundation/dev/core/modules' },
            { text: '请求生命周期', link: '/foundation/dev/core/lifecycle' },
            { text: '依赖注入', link: '/foundation/dev/core/dependency-injection' },
            { text: 'API 签名', link: '/foundation/dev/core/signature' },
          ],
        },
        {
          text: '模块开发',
          items: [
            { text: '模块结构', link: '/foundation/dev/module/structure' },
            { text: '控制器开发', link: '/foundation/dev/module/controllers' },
            { text: '模型与数据库', link: '/foundation/dev/module/models' },
            { text: '服务层开发', link: '/foundation/dev/module/services' },
            { text: '事件系统', link: '/foundation/dev/module/events' },
          ],
        },
        {
          text: '前端开发',
          items: [
            { text: 'DVHA 框架', link: '/foundation/dev/frontend/dvha' },
            { text: '开发流程', link: '/foundation/dev/frontend/dev-flow' },
            { text: '前端基座', link: '/foundation/dev/frontend/base' },
            { text: '开发说明', link: '/foundation/dev/frontend/components' },
            { text: '表单设计', link: '/foundation/dev/frontend/forms' },
            { text: '表格设计', link: '/foundation/dev/frontend/tables' },
            { text: 'Hooks 使用', link: '/foundation/dev/frontend/hooks' },
            { text: '状态管理', link: '/foundation/dev/frontend/state' },
          ],
        },
        {
          text: '后端开发',
          items: [
            { text: 'API 开发', link: '/foundation/dev/backend/api' },
            { text: '数据库操作', link: '/foundation/dev/backend/database' },
            { text: '数据验证', link: '/foundation/dev/backend/validation' },
            { text: '权限系统', link: '/foundation/dev/backend/permissions' },
            { text: '缓存系统', link: '/foundation/dev/backend/cache' },
            { text: '队列系统', link: '/foundation/dev/backend/queue' },
            { text: '日志系统', link: '/foundation/dev/backend/logging' },
            { text: '文件上传', link: '/foundation/dev/backend/file-upload' },
            { text: '分布式锁', link: '/foundation/dev/backend/lock' },
          ],
        },
        {
          text: '系统服务',
          items: [
            { text: '上传服务', link: '/foundation/dev/service/upload' },
            { text: '配置服务', link: '/foundation/dev/service/config' },
            { text: '存储服务', link: '/foundation/dev/service/storage' },
            { text: '统计服务', link: '/foundation/dev/service/stats' },
            { text: '菜单服务', link: '/foundation/dev/service/menu' },
          ],
        },
        {
          text: '最佳实践',
          items: [
            { text: '代码规范', link: '/foundation/dev/best-practices/coding-standards' },
            { text: '性能优化', link: '/foundation/dev/best-practices/performance' },
            { text: '安全实践', link: '/foundation/dev/best-practices/security' },
            { text: '测试建议', link: '/foundation/dev/best-practices/testing' },
          ],
        },
        {
          text: '工具与部署',
          items: [
            { text: '开发工具', link: '/foundation/dev/tools-deployment/development-tools' },
            { text: '命令速查表', link: '/foundation/dev/tools-deployment/cli-cheatsheet' },
            { text: '部署指南', link: '/foundation/dev/tools-deployment/deployment' },
          ],
        },
      ],
      '/usage/': [
        {
          text: '入门',
          items: [
            { text: '概览', link: '/usage/introduction' },
            { text: '快速开始', link: '/usage/quick-start' },
            { text: '桌面端客户端', link: '/usage/desktop' },
            { text: '系统部署', link: '/usage/deployment' },
            { text: '快速配置向导', link: '/usage/onboarding' },
            { text: '场景示例', link: '/usage/scenarios' },
          ],
        },
        {
          text: '基础配置',
          items: [
            { text: '服务商概览', link: '/usage/provider-overview' },
            { text: 'OpenAI Compatible 服务商', link: '/usage/provider-openai-compatible' },
            { text: 'Ark 服务商', link: '/usage/provider-ark' },
            { text: 'DeepSeek 服务商', link: '/usage/provider-deepseek' },
            { text: 'BigModel 服务商', link: '/usage/provider-bigmodel' },
            { text: '系统存储配置', link: '/usage/storage-config' },
            { text: '模型配置', link: '/usage/model-config' },
            { text: '文件解析能力', link: '/usage/media-capabilities' },
          ],
        },
        {
          text: '机器人接入',
          items: [
            { text: '机器人概览', link: '/usage/bot-overview' },
            { text: '机器人注册与创建', link: '/usage/bot-register' },
            { text: '钉钉接入', link: '/usage/bot-dingtalk' },
            { text: '飞书接入', link: '/usage/bot-feishu' },
            { text: '企业微信接入', link: '/usage/bot-wecom' },
            { text: 'QQ 机器人接入', link: '/usage/bot-qq' },
            { text: '机器人绑定与排障', link: '/usage/bot-bind' },
          ],
        },
        {
          text: '智能体与能力',
          items: [
            { text: '智能体概览', link: '/usage/agent/overview' },
            { text: '知识库检索能力', link: '/usage/agent/knowledge-search' },
            { text: 'HTTP 请求能力', link: '/usage/agent/http-request' },
            { text: '函数调用能力', link: '/usage/agent/function-call' },
            { text: 'MCP 能力', link: '/usage/agent/mcp' },
            { text: '图片生成能力', link: '/usage/agent/image-generate' },
            { text: '视频生成能力', link: '/usage/agent/video-generate' },
            { text: '延迟消息能力', link: '/usage/agent/delayed-message' },
            { text: '通知发送能力', link: '/usage/agent/notify-send' },
          ],
        },
        {
          text: '知识库',
          items: [
            { text: '知识库概览', link: '/usage/rag-overview' },
            { text: '解析配置', link: '/usage/parse-config' },
            { text: '向量库配置', link: '/usage/vector-config' },
            { text: '知识库配置', link: '/usage/rag' },
          ],
        },
        {
          text: '工作流',
          items: [
            { text: '工作流概览', link: '/usage/workflow/overview' },
            { text: '输入与输出节点', link: '/usage/workflow/start-end' },
            { text: '工作流能力说明', link: '/usage/workflow/capabilities' },
            { text: '模型与能力协作', link: '/usage/workflow/model-cooperation' },
            { text: '异步等待与恢复', link: '/usage/workflow/async-wait' },
            { text: '执行日志与排障', link: '/usage/workflow/logs' },
          ],
        },
      ],
      '/extensions/': [
        {
          text: '设备控制',
          items: [
            { text: '简介', link: '/extensions/device-control/introduction' },
            { text: '安装', link: '/extensions/device-control/install' },
            { text: '使用教程', link: '/extensions/device-control/tutorial' },
            { text: '开发说明', link: '/extensions/device-control/development' },
          ],
        },
      ],
      '/dev/': [
        {
          text: '开发',
          items: [
            { text: '开发概览', link: '/dev/overview' },
            { text: '智能体服务', link: '/dev/agent' },
            { text: '知识库服务', link: '/dev/rag' },
            { text: '解析服务', link: '/dev/parse' },
            { text: '向量库服务', link: '/dev/vector-store' },
            { text: 'BotService', link: '/dev/bot-service' },
            { text: '能力扩展', link: '/dev/tool-capability' },
            { text: '工作流开发', link: '/dev/flow' },
            { text: '机器人桥接', link: '/dev/bot-bridge' },
            { text: '服务商扩展', link: '/dev/provider' },
            { text: '注册机器人驱动', link: '/dev/register-bot-driver' },
            { text: '注册解析驱动', link: '/dev/register-parse-driver' },
            { text: '注册服务商协议', link: '/dev/register-provider-protocol' },
          ],
        },
      ],
      '/api/': [
        {
          text: '对外 API',
          items: [
            { text: 'API 概览', link: '/api/overview' },
            { text: '对外聊天接口', link: '/api/external-chat' },
            { text: '会话与消息接口', link: '/api/external-session' },
            { text: '机器人回调接口', link: '/api/bot-webhook' },
            { text: '对接示例', link: '/api/examples' },
          ],
        },
        {
          text: '后台管理 API',
          items: [
            { text: '后台 API 概览', link: '/api/admin-overview' },
            { text: '服务商 API', link: '/api/admin-provider' },
            { text: '模型 API', link: '/api/admin-model' },
            { text: '智能体 API', link: '/api/admin-agent' },
            { text: '知识库 API', link: '/api/admin-rag' },
            { text: '工作流 API', link: '/api/admin-flow' },
            { text: '向导 API', link: '/api/admin-onboarding' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/duxweb/dux-ai' },
    ],
    footer: {
      message: '基于 <a href="https://github.com/duxweb/dux-ai/blob/main/LICENSE">MIT</a> 协议发布',
      copyright: 'Copyright © 2024-present <a href="https://www.dux.cn">DuxWeb Team</a>',
    },
    editLink: {
      pattern: 'https://github.com/duxweb/dux-ai-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页面',
    },
  },
})
