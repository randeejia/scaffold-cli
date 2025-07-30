# 开发规范说明

本项目已集成了严格的代码规范工具，确保代码质量和一致性。

## 已集成的工具

### 1. ESLint - JavaScript/TypeScript 代码检查

- **配置文件**: `.eslintrc.js`
- **忽略文件**: `.eslintignore`
- 支持 TypeScript
- 集成 Prettier
- 自定义规则集
- **命令**:
  - `npm run lint` - 检查代码规范
  - `npm run lint:fix` - 自动修复可修复的问题

### 2. Prettier - 代码格式化

- **配置文件**: `.prettierrc.json`
- **忽略文件**: `.prettierignore`
- 统一代码格式
- 支持多种文件类型
- **命令**:
  - `npm run format` - 格式化所有代码
  - `npm run format:check` - 检查代码格式是否符合规范

### 3. Stylelint - CSS/SCSS/Less 样式检查

- **配置文件**: `.stylelintrc.json`
- 支持 CSS、SCSS、Less
- 与 Prettier 集成
- 现代化的样式规范
- **命令**:
  - `npm run stylelint` - 检查样式文件
  - `npm run stylelint:fix` - 自动修复样式问题

### 4. Commitlint - Git 提交信息规范

- **配置文件**: `commitlint.config.js`
- 支持常规提交规范
- 自定义提交类型
- 中文注释说明
- **支持的提交类型**:
  - `feat`: 新功能
  - `fix`: 修复bug
  - `docs`: 文档更新
  - `style`: 代码格式(不影响代码运行的变动)
  - `refactor`: 重构
  - `perf`: 性能优化
  - `test`: 增加测试
  - `chore`: 构建过程或辅助工具的变动
  - `revert`: 回退
  - `build`: 构建系统或外部依赖项的更改
  - `ci`: CI配置文件和脚本的更改

### 5. Husky - Git hooks 管理

- **Pre-commit hook**: 提交前自动运行 lint-staged
- **Commit-msg hook**: 检查提交信息是否符合规范
- 自动化代码质量控制

### 6. Lint-staged - 针对暂存文件运行检查

- **TypeScript/JavaScript 文件**: ESLint + Prettier
- **CSS/SCSS/Less 文件**: Stylelint + Prettier
- **JSON/Markdown 文件**: Prettier
- 支持常规提交规范
- 自定义提交类型
- 中文注释说明

### 7. NPM 脚本命令配置

```json
{
  "lint": "eslint src/**/*.ts",
  "lint:fix": "eslint src/**/*.ts --fix",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "stylelint": "stylelint **/*.{css,scss,less}",
  "stylelint:fix": "stylelint **/*.{css,scss,less} --fix"
}
```

## 开发工作流

### 1. 代码编写阶段

- 使用 VS Code 等编辑器的 ESLint、Prettier 插件
- 保存时自动格式化代码

### 2. 提交前检查

```bash
# 手动运行所有检查
npm run lint
npm run format:check
npm run stylelint
```

### 3. Git 提交

```bash
# 添加文件到暂存区
git add .

# 提交（会自动触发 pre-commit 检查）
git commit -m "feat: add new feature"
```

### 4. 提交信息规范

```bash
# 正确的提交信息格式
git commit -m "type: description"

# 示例
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login issue"
git commit -m "docs: update README"
```

## 配置说明

### ESLint 规则

- 继承 `eslint:recommended` 和 `prettier` 配置
- 启用 TypeScript 支持
- 禁止使用 `var`，要求使用 `const` 或 `let`
- 警告使用 `any` 类型
- 错误处理未使用的变量

### Prettier 配置

- 使用分号
- 单引号
- 2个空格缩进
- 行宽80字符
- 尾随逗号 ES5 风格

### Stylelint 规则

- 继承 `stylelint-config-standard`
- 禁止使用命名颜色（如 `white`，应使用 `#fff`）
- 要求函数URL使用引号
- 强制注释和规则前有空行

### Commitlint 规则

- 提交信息最大长度：100字符
- 必须包含类型
- 类型必须小写
- 主题不能为空

## 开发建议

1. **安装 VS Code 插件**:
   - ESLint
   - Prettier - Code formatter
   - Stylelint

2. **VS Code 设置**:

   ```json
   {
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true,
       "source.fixAll.stylelint": true
     }
   }
   ```

3. **团队协作**:
   - 所有团队成员都应安装相同的插件
   - 不要提交配置文件的修改除非确实需要
   - 遇到规范问题时优先修复而不是忽略

## 故障排除

### 常见问题

1. **ESLint 错误**: 运行 `npm run lint:fix` 自动修复
2. **格式化问题**: 运行 `npm run format` 统一格式
3. **提交被拒绝**: 检查提交信息格式和代码规范
4. **Pre-commit 失败**: 修复所有检查出的问题后重新提交

### 跳过检查（不推荐）

```bash
# 跳过 pre-commit 检查（紧急情况下使用）
git commit -m "fix: urgent fix" --no-verify
```

## 持续改进

项目的代码规范会根据团队需求持续优化，如有建议请提出 issue 或 PR。

## 发布和分发

### 构建项目

```bash
# 清理之前的构建
npm run clean

# 构建项目
npm run build

# 监听模式构建（开发时使用）
npm run build:watch
```

### 发布到 npm

详细的发布指南请查看 [PUBLISH.md](./PUBLISH.md)

```bash
# 发布前检查
npm run prepublishOnly

# 发布（首次发布 scoped package）
npm publish --access public

# 后续发布
npm publish
```

### 本地测试

```bash
# 链接到全局
npm link

# 测试命令
scaffold-cli --help
scaffold init

# 取消链接
npm unlink -g @randee/scaffold-cli
```
