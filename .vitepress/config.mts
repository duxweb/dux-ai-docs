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
      { text: '开发', link: '/dev/overview', activeMatch: '/dev/' },
      { text: 'API', link: '/api/overview', activeMatch: '/api/' },
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
      '/usage/': [
        {
          text: '入门',
          items: [
            { text: '概览', link: '/usage/introduction' },
            { text: '快速开始', link: '/usage/quick-start' },
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
