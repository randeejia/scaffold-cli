# ESLint 与 Prettier 冲突解决方案

## 🐛 问题描述

在保存文件时，ESLint 和 Prettier 出现格式化冲突：

- Prettier 自动格式化代码
- ESLint 立即恢复原格式
- 导致格式在两种状态间反复切换

## 🔧 解决方案

### 1. 更新 ESLint 配置

**文件**: `.eslintrc.js`

**问题**:

- 使用了 `plugin:prettier/recommended` 和 `prettier/prettier` 规则
- 导致 ESLint 强制执行 Prettier 规则，与 Prettier 格式化器冲突

**解决**:

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'prettier'], // 移除 plugin:prettier/recommended
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    // 关闭与Prettier冲突的规则
    quotes: 'off',
    semi: 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    indent: 'off',
  },
  env: {
    node: true,
    es6: true,
  },
  ignorePatterns: ['dist/', 'node_modules/', '*.js'],
};
```

### 2. 优化 VS Code 设置

**文件**: `.vscode/settings.json`

**关键配置**:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

### 3. 执行顺序说明

正确的执行顺序：

1. **保存文件时**: Prettier 格式化代码
2. **代码操作时**: ESLint 修复代码质量问题（不包括格式）
3. **避免冲突**: ESLint 不再管理格式，只管理代码质量

## 📝 修复的具体问题

### 模板字符串格式化

**修复前**:

```typescript
const spinner = ora(`Creating ${projectName} with ${template} template...`).start();
```

**修复后**:

```typescript
const spinner = ora(`Creating ${projectName} with ${template} template...`).start();
```

## ✅ 验证修复

运行以下命令验证修复是否成功：

```bash
# 格式化所有文件
npm run format

# 检查代码质量
npm run lint

# 构建项目
npm run build
```

## 🔍 原理说明

### 工具职责分离

1. **Prettier**: 负责代码格式化
   - 缩进、换行、引号风格
   - 行长度控制
   - 代码美化

2. **ESLint**: 负责代码质量
   - 未使用变量检查
   - 代码逻辑错误
   - 最佳实践建议

### 配置原则

1. **避免重复**: 不让 ESLint 和 Prettier 管理相同的规则
2. **明确职责**: ESLint 专注代码质量，Prettier 专注格式
3. **执行顺序**: 先 Prettier 格式化，再 ESLint 质量检查

## 🚨 注意事项

1. **依赖版本**: 确保 ESLint 和 Prettier 版本兼容
2. **团队协作**: 确保所有团队成员使用相同配置
3. **CI/CD**: 在持续集成中也要保持一致的检查顺序

## 📊 配置验证清单

- [ ] ESLint 配置不包含 Prettier 格式化规则
- [ ] VS Code 设置明确指定 Prettier 为默认格式化器
- [ ] 保存时先格式化，再执行 ESLint 修复
- [ ] 所有格式相关的 ESLint 规则已关闭
- [ ] 构建和检查命令都能正常执行

修复完成后，代码保存时将不再出现格式化冲突问题！
