# CANCMS Hugo 主题 
ok

这是一个基于 Hugo 的现代化企业网站主题，专为网站建设公司设计。

## 功能特点

- 响应式设计，完美适配各种设备
- 现代化的 UI 设计
- 轮播图展示
- 案例展示和筛选功能
- 联系表单
- 集成 Google Maps
- 支持多语言（默认中文）

## 目录结构

```
cancms-hugo/
├── config.toml          # Hugo 配置文件
├── content/            # 内容文件
│   ├── _index.md      # 首页内容
│   ├── about/         # 关于我们页面
│   ├── services/      # 服务页面
│   ├── portfolio/     # 案例展示页面
│   └── contact/       # 联系我们页面
├── static/            # 静态文件
│   ├── css/          # CSS 文件
│   └── js/           # JavaScript 文件
└── themes/           # 主题文件
    └── cancms/       # CANCMS 主题
        └── layouts/  # 布局模板
```

## 安装要求

- Hugo 0.92.0 或更高版本
- Node.js 14.0.0 或更高版本（用于开发）

## 快速开始

1. 克隆仓库：

```bash
git clone https://github.com/yourusername/cancms-hugo.git
cd cancms-hugo
```

2. 安装依赖：

```bash
hugo mod get -u github.com/yourusername/cancms-hugo
```

3. 启动开发服务器：

```bash
hugo server -D
```

4. 构建网站：

```bash
hugo
```

## 配置说明

在 `config.toml` 文件中，你可以修改以下配置：

- `baseURL`: 网站的基础 URL
- `languageCode`: 网站的语言代码
- `title`: 网站标题
- `theme`: 主题名称
- `params`: 网站参数
  - `description`: 网站描述
  - `keywords`: 网站关键词
  - `author`: 作者
  - `company`: 公司名称
  - `address`: 公司地址
  - `phone`: 联系电话
  - `email`: 电子邮箱

## 自定义开发

### 修改样式

主题的样式文件位于 `static/css/style.css`。你可以根据需要修改颜色、布局等样式。

### 添加新页面

1. 在 `content` 目录下创建新的 Markdown 文件
2. 在 `themes/cancms/layouts` 目录下创建对应的模板文件
3. 在 `config.toml` 中添加菜单项

### 修改案例展示

在 `content/portfolio` 目录下添加或修改 Markdown 文件来更新案例展示内容。

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 网站：https://cancms.com
- 邮箱：contact@cancms.com
- 电话：010-12345678 
