# 发布清单

在发布 @randee/scaffold-cli 到 npm 之前，请确认以下所有项目：

## 📋 发布前检查

### ✅ 代码质量

- [ ] 所有代码已通过 ESLint 检查 (`npm run lint`)
- [ ] 所有代码已按 Prettier 格式化 (`npm run format:check`)
- [ ] 所有样式文件已通过 Stylelint 检查 (`npm run stylelint`)
- [ ] TypeScript 编译无错误 (`npm run build`)

### ✅ 功能测试

- [ ] CLI 命令可以正常运行 (`scaffold-cli --help`)
- [ ] `scaffold-cli init` 功能正常
- [ ] `scaffold-cli create <name>` 功能正常
- [ ] 模板文件正确复制
- [ ] 生成的项目结构正确

### ✅ 包配置

- [ ] package.json 中的包名正确 (`@randee/scaffold-cli`)
- [ ] 版本号已正确设置
- [ ] main 字段指向正确的文件 (`dist/index.js`)
- [ ] bin 字段配置正确
- [ ] files 字段包含所有必要文件
- [ ] dependencies 和 devDependencies 正确分类

### ✅ 文档

- [ ] README.md 包含完整的安装和使用说明
- [ ] EXAMPLES.md 提供详细的使用示例
- [ ] PUBLISH.md 包含发布指南
- [ ] DEVELOPMENT.md 包含开发规范

### ✅ 构建产物

- [ ] dist/ 目录包含编译后的文件
- [ ] 声明文件(.d.ts)已生成
- [ ] templates/ 目录已复制到 dist/
- [ ] .npmignore 正确排除不需要的文件

### ✅ npm 配置

- [ ] 已登录到 npm (`npm whoami`)
- [ ] 包名在 npm 上可用 (`npm view @randee/scaffold-cli`)
- [ ] npm pack 打包成功，检查文件列表

## 🚀 发布步骤

### 1. 最终检查

```bash
# 运行所有检查
npm run lint
npm run format:check
npm run build

# 本地测试
npm link
scaffold-cli --help
scaffold-cli init
npm unlink -g @randee/scaffold-cli
```

### 2. 版本管理

```bash
# 根据变更类型选择合适的版本更新
npm version patch    # 修复 bug (1.0.0 -> 1.0.1)
npm version minor    # 新功能 (1.0.0 -> 1.1.0)
npm version major    # 重大变更 (1.0.0 -> 2.0.0)
```

### 3. 发布

```bash
# 首次发布 scoped package
npm publish --access public

# 后续发布
npm publish
```

### 4. 发布后验证

```bash
# 检查包是否发布成功
npm view @randee/scaffold-cli

# 全局安装测试
npm install -g @randee/scaffold-cli
scaffold-cli --version
scaffold-cli --help

# 创建测试项目
mkdir test-cli && cd test-cli
scaffold-cli init
```

## 📝 版本发布日志

### v1.0.0 (首次发布)

- [x] 基础 CLI 框架
- [x] 项目初始化功能
- [x] 基础和高级模板
- [x] 代码质量工具集成
- [x] 完整的文档

### 计划中的功能

- [ ] 更多模板类型
- [ ] 自定义模板支持
- [ ] 配置文件支持
- [ ] 插件系统
- [ ] 单元测试

## 🔍 故障排除

### 常见问题

1. **发布权限错误**
   - 确保已登录 npm
   - 检查是否有发布权限

2. **包名冲突**
   - 修改 package.json 中的 name
   - 或选择不同的 scope

3. **版本冲突**
   - 更新版本号
   - 不能发布已存在的版本

4. **文件缺失**
   - 检查 .npmignore 配置
   - 确认 files 字段正确

## 📞 联系信息

如有问题，请联系：

- 作者：Randee Jia
- GitHub: https://github.com/randee-jia/scaffold-cli
- Email: [请提供邮箱]

---

**重要提醒**：发布前请务必完成所有检查项目，确保包的质量和用户体验！
