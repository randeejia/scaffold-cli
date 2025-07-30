# 发布指南

本文档介绍如何将 @randee/scaffold-cli 发布到 npm 并使其可以全局安装使用。

## 发布前准备

### 1. 登录 npm

首先确保您已登录到 npm：

```bash
npm login
```

输入您的 npm 用户名、密码和邮箱。

### 2. 检查包名是否可用

```bash
npm view @randee/scaffold-cli
```

如果显示 404，说明包名可用。如果已存在，需要修改 package.json 中的 name 字段。

### 3. 验证项目配置

确保 package.json 中的以下字段正确：

- `name`: 包名，使用 scoped package (@randee/scaffold-cli)
- `version`: 版本号，遵循语义化版本
- `description`: 包描述
- `main`: 主入口文件 (dist/index.js)
- `bin`: CLI 命令配置
- `files`: 需要发布的文件列表
- `engines`: Node.js 版本要求

## 发布流程

### 方式一：标准发布流程

1. **代码检查和构建**

```bash
# 检查代码规范
npm run lint

# 检查代码格式
npm run format:check

# 构建项目
npm run build
```

1. **版本管理**

```bash
# 自动更新补丁版本 (1.0.0 -> 1.0.1)
npm version patch

# 自动更新小版本 (1.0.0 -> 1.1.0)
npm version minor

# 自动更新大版本 (1.0.0 -> 2.0.0)
npm version major
```

1. **发布到 npm**

```bash
# 发布到 npm
npm publish

# 如果是 scoped package 且首次发布，需要设置为 public
npm publish --access public
```

### 方式二：自动发布（推荐）

项目已配置 `prepublishOnly` 脚本，会在发布前自动执行检查和构建：

```bash
# 这个命令会自动执行 lint、format:check 和 build
npm publish --access public
```

### 方式三：测试发布

在正式发布前，可以进行测试发布：

```bash
# 打包但不发布，查看将要发布的内容
npm pack

# 查看打包后的文件列表
tar -tzf randee-scaffold-cli-1.0.0.tgz
```

## 发布后验证

### 1. 验证包已发布

```bash
# 查看包信息
npm view @randee/scaffold-cli

# 查看包的所有版本
npm view @randee/scaffold-cli versions --json
```

### 2. 全局安装测试

```bash
# 全局安装
npm install -g @randee/scaffold-cli

# 测试命令
scaffold-cli --help
scaffold --help

# 测试功能
scaffold init
```

### 3. 本地安装测试

```bash
# 创建测试目录
mkdir test-scaffold
cd test-scaffold

# 本地安装
npm install @randee/scaffold-cli

# 使用 npx 测试
npx @randee/scaffold-cli --help
```

## 版本管理策略

### 语义化版本控制

遵循 [Semantic Versioning](https://semver.org/) 规范：

- **MAJOR**: 不兼容的 API 修改
- **MINOR**: 向下兼容的功能性新增
- **PATCH**: 向下兼容的问题修正

### 版本发布示例

```bash
# 修复 bug
npm version patch    # 1.0.0 -> 1.0.1

# 新增功能
npm version minor    # 1.0.1 -> 1.1.0

# 重大更新
npm version major    # 1.1.0 -> 2.0.0
```

## 发布清单

在每次发布前，请确认以下项目：

- [ ] 代码已经过 lint 检查
- [ ] 代码格式符合 prettier 规范
- [ ] 项目可以正常构建
- [ ] 所有测试通过
- [ ] README.md 已更新
- [ ] CHANGELOG.md 已更新（如果有）
- [ ] 版本号已正确更新
- [ ] 发布日志已准备

## 常见问题

### 1. 发布权限问题

```bash
# 错误：npm ERR! 403 Forbidden
# 解决：确保已登录且有发布权限
npm login
npm whoami
```

### 2. 包名冲突

```bash
# 错误：npm ERR! 403 Package name too similar to existing package
# 解决：修改 package.json 中的 name 字段
```

### 3. scoped package 访问问题

```bash
# 错误：npm ERR! 402 Payment Required
# 解决：设置为 public 发布
npm publish --access public
```

### 4. 版本号问题

```bash
# 错误：npm ERR! 403 Cannot publish over the previously published version
# 解决：更新版本号
npm version patch
npm publish
```

## 撤销发布

如果需要撤销发布（仅限发布后 24 小时内）：

```bash
# 撤销指定版本
npm unpublish @randee/scaffold-cli@1.0.0

# 撤销整个包（慎用）
npm unpublish @randee/scaffold-cli --force
```

## 自动化发布

可以配置 GitHub Actions 或其他 CI/CD 工具实现自动发布：

```yaml
# .github/workflows/publish.yml
name: Publish to NPM
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 维护建议

1. **定期更新依赖**：使用 `npm audit` 检查安全漏洞
2. **保持文档更新**：及时更新 README 和使用说明
3. **收集用户反馈**：通过 GitHub Issues 收集问题和建议
4. **测试覆盖**：添加自动化测试确保质量
5. **变更日志**：维护 CHANGELOG.md 记录版本变化
