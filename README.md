# AI学习笔记

这是一个使用VitePress构建的AI学习笔记网站，记录人工智能相关的学习内容和知识点。

## 项目结构

- `docs/`: VitePress文档目录
  - `.vitepress/`: VitePress配置目录
  - `public/`: 静态资源目录
  - `basics/`: 基础知识内容
  - `deep-learning/`: 深度学习内容
  - `nlp/`: 自然语言处理内容
  - `cv/`: 计算机视觉内容
  - `reinforcement-learning/`: 强化学习内容
  - `tools/`: 工具与资源内容

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览生产版本
npm run docs:preview
```

## 部署

本项目使用GitHub Actions自动部署到GitHub Pages。每次推送到main分支时，都会触发自动构建和部署流程。

### 手动部署步骤

1. 确保已经创建了GitHub仓库
2. 将本地代码推送到GitHub仓库：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/ai-vitepress.git
git push -u origin main
```

3. 在GitHub仓库设置中启用GitHub Pages，选择GitHub Actions作为部署源

## 贡献指南

欢迎提交Pull Request或Issue来完善这个学习笔记项目。

## 许可证

MIT