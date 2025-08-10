export default {
  title: 'AI学习笔记',
  description: '记录AI相关的学习笔记和知识点',
  base: '/ai-vitepress/',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '基础知识', link: '/basics/' },
      { text: '深度学习', link: '/deep-learning/' },
      { text: '自然语言处理', link: '/nlp/' },
      { text: '计算机视觉', link: '/cv/' },
      { text: '强化学习', link: '/reinforcement-learning/' },
      { text: '工具与资源', link: '/tools/' },
    ],
    sidebar: {
      '/basics/': [
        {
          text: 'AI基础知识',
          items: [
            { text: '人工智能概述', link: '/basics/overview' },
            { text: '机器学习基础', link: '/basics/machine-learning' },
            { text: '数学基础', link: '/basics/math' },
          ]
        }
      ],
      '/deep-learning/': [
        {
          text: '深度学习',
          items: [
            { text: '神经网络基础', link: '/deep-learning/neural-networks' },
            { text: '卷积神经网络', link: '/deep-learning/cnn' },
            { text: '循环神经网络', link: '/deep-learning/rnn' },
            { text: '注意力机制', link: '/deep-learning/attention' },
            { text: 'Transformer', link: '/deep-learning/transformer' },
          ]
        }
      ],
      '/nlp/': [
        {
          text: '自然语言处理',
          items: [
            { text: 'NLP基础', link: '/nlp/basics' },
            { text: '词嵌入', link: '/nlp/word-embeddings' },
            { text: '语言模型', link: '/nlp/language-models' },
            { text: 'BERT', link: '/nlp/bert' },
            { text: 'GPT系列', link: '/nlp/gpt' },
          ]
        }
      ],
      '/cv/': [
        {
          text: '计算机视觉',
          items: [
            { text: '图像处理基础', link: '/cv/basics' },
            { text: '目标检测', link: '/cv/object-detection' },
            { text: '图像分割', link: '/cv/segmentation' },
            { text: '生成对抗网络', link: '/cv/gan' },
            { text: '扩散模型', link: '/cv/diffusion-models' },
          ]
        }
      ],
      '/reinforcement-learning/': [
        {
          text: '强化学习',
          items: [
            { text: '强化学习基础', link: '/reinforcement-learning/basics' },
            { text: 'Q-Learning', link: '/reinforcement-learning/q-learning' },
            { text: '策略梯度', link: '/reinforcement-learning/policy-gradient' },
            { text: 'DQN', link: '/reinforcement-learning/dqn' },
          ]
        }
      ],
      '/tools/': [
        {
          text: '工具与资源',
          items: [
            { text: '常用框架', link: '/tools/frameworks' },
            { text: '数据集', link: '/tools/datasets' },
            { text: '学习资源', link: '/tools/resources' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/long36708/ai-vitepress' }
    ],
    footer: {
      message: '使用 VitePress 构建',
      copyright: 'Copyright © 2025'
    },
    search: {
      provider: 'local'
    }
  }
}