# @randee/scaffold-cli

一个强大的项目脚手架CLI工具，支持模板处理和构建状态通知，帮助快速创建和初始化项目。

## ✨ 特性

- 🚀 **快速项目初始化**：通过交互式引导快速创建项目
- 📦 **多模板支持**：支持基础和高级模板，满足不同项目需求
- 🎨 **进度可视化**：项目创建过程中提供加载动画和状态反馈
- 🔧 **高度可定制**：支持自定义模板和配置
- 📝 **代码规范**：集成 ESLint、Prettier、Stylelint 等代码质量工具
- 🔒 **Git 集成**：内置 Husky 和 Commitlint 规范提交流程

## 📦 安装

### 全局安装（推荐）

```bash
# 使用 npm
npm install -g @randee/scaffold-cli

# 使用 pnpm
pnpm add -g @randee/scaffold-cli

# 使用 yarn
yarn global add @randee/scaffold-cli
```

### 本地安装

```bash
# 使用 npm
npm install @randee/scaffold-cli

# 使用 pnpm
pnpm add @randee/scaffold-cli

# 使用 yarn
yarn add @randee/scaffold-cli
```

## 🚀 使用方法

### 全局安装后使用

```bash
# 使用 scaffold-cli 命令
scaffold-cli init

# 或使用简短的 scaffold 命令
scaffold create my-project
```

### 本地安装后使用

```bash
# 使用 npx
npx @randee/scaffold-cli init

# 或在 package.json scripts 中使用
npm run scaffold
```

## 📋 命令

### `init` - 项目初始化

交互式创建新项目，系统会引导您选择模板和配置项目信息。

```bash
scaffold-cli init
# 或
scaffold init
```

### `create <project-name>` - 创建项目

直接创建指定名称的项目，会提示选择模板类型。

```bash
scaffold-cli create my-awesome-project
# 或
scaffold create my-awesome-project
```

## 🎯 使用示例

### 创建基础项目

```bash
$ scaffold init
? 请输入项目名称: my-project
? 请选择模板类型: basic
✅ 项目 my-project 创建成功！

下一步:
  cd my-project
  npm install
  npm start
```

### 创建高级项目

```bash
$ scaffold create advanced-project
? 请选择模板类型: advanced
✅ 项目 advanced-project 创建成功！

下一步:
  cd advanced-project
  npm install
  npm start
```

## 📁 可用模板

### Basic Template

- 简单的项目结构
- 基本的 package.json 配置
- 入口文件 index.js

### Advanced Template

- 完整的项目结构
- 预配置的开发环境
- 包含常用依赖和脚本

## 🛠️ 开发

### 环境要求

- Node.js >= 22.14.0
- npm >= 10.9.2

### 本地开发

```bash
# 克隆项目
git clone https://github.com/randee-jia/scaffold-cli.git
cd scaffold-cli

# 安装依赖
npm install

# 构建项目
npm run build

# 本地测试
npm link
scaffold-cli --help
```

### 构建命令

```bash
# 清理构建文件
npm run clean

# 构建项目
npm run build

# 监听模式构建
npm run build:watch

# 代码检查
npm run lint

# 格式化代码
npm run format
```

## 📋 代码规范

本项目集成了完整的代码质量工具链：

- **ESLint**: JavaScript/TypeScript 代码检查
- **Prettier**: 代码格式化
- **Stylelint**: CSS/样式文件检查
- **Husky**: Git hooks 管理
- **Commitlint**: 提交信息规范
- **Lint-staged**: 暂存文件检查

更多开发规范请查看 [DEVELOPMENT.md](./DEVELOPMENT.md)

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

### 提交信息规范

请使用语义化提交信息：

- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

## 📄 许可证

本项目采用 [MIT](./LICENSE) 许可证。

## 🙋‍♂️ 支持

如果您遇到问题或有建议，请：

1. 查看 [Issues](https://github.com/randee-jia/scaffold-cli/issues)
2. 创建新的 Issue
3. 联系作者：Randee Jia

---

⭐ 如果这个项目对您有帮助，请给它一个 star！
