# 使用示例

本文档展示如何安装和使用 @randee/scaffold-cli 创建项目。

## 快速开始

### 1. 安装

```bash
# 全局安装
npm install -g @randee/scaffold-cli

# 验证安装
scaffold-cli --version
```

### 2. 创建第一个项目

```bash
# 方式一：交互式创建
scaffold-cli init

# 方式二：直接创建
scaffold-cli create my-project
```

### 3. 完整示例

```bash
$ scaffold-cli init
? 请输入项目名称: my-awesome-app
? 请选择模板类型: (Use arrow keys)
❯ basic
  advanced

$ scaffold-cli init
? 请输入项目名称: my-awesome-app
? 请选择模板类型: basic
✅ Project my-awesome-app created using the basic template.

下一步:
  cd my-awesome-app
  npm install
  npm start
```

### 4. 进入项目目录

```bash
cd my-awesome-app
ls -la

# 查看项目结构
tree
├── package.json
└── src/
    └── index.js
```

### 5. 安装依赖并运行

```bash
# 安装依赖
npm install

# 运行项目
npm start
```

## 命令详解

### `scaffold-cli init`

交互式创建新项目：

- 提示输入项目名称
- 选择模板类型（basic 或 advanced）
- 自动创建项目结构
- 提供下一步操作指引

### `scaffold-cli create <project-name>`

直接创建指定名称的项目：

```bash
# 创建名为 my-project 的项目
scaffold-cli create my-project

# 系统会提示选择模板类型
```

### 命令别名

为了方便使用，CLI 提供了简短的命令别名：

```bash
# 这些命令是等价的
scaffold-cli init
scaffold init

scaffold-cli create my-project
scaffold create my-project
```

## 模板说明

### Basic Template

适合简单的项目需求：

```text
my-project/
├── package.json          # 基本的包配置
└── src/
    └── index.js          # 入口文件
```

**package.json 内容**：

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js"
  }
}
```

**src/index.js 内容**：

```javascript
console.log('Hello World!');
```

### Advanced Template

适合复杂的项目需求：

```text
my-project/
├── package.json          # 完整的包配置
└── src/
    └── app.js            # 应用入口文件
```

**package.json 内容**：

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "Advanced project template",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js",
    "dev": "node src/app.js"
  }
}
```

**src/app.js 内容**：

```javascript
console.log('Advanced App Started!');
```

## 实际使用场景

### 1. 快速原型开发

```bash
# 创建原型项目
scaffold create prototype-app

cd prototype-app
npm install

# 开始开发
code .
```

### 2. 团队项目标准化

```bash
# 所有团队成员使用相同的模板
scaffold init

# 确保项目结构一致
```

### 3. 教学演示

```bash
# 为学员创建练习项目
scaffold create lesson-01
scaffold create lesson-02
```

## 高级用法

### 1. 在 CI/CD 中使用

```yaml
# .github/workflows/create-project.yml
- name: Create project
  run: |
    npm install -g @randee/scaffold-cli
    echo "my-project\nbasic" | scaffold init
```

### 2. 脚本化创建

```bash
#!/bin/bash
# create-projects.sh

projects=("frontend" "backend" "mobile")
template="advanced"

for project in "${projects[@]}"; do
  echo "$project\n$template" | scaffold init
  echo "Created $project with $template template"
done
```

### 3. 与其他工具集成

```bash
# 创建项目后自动初始化 git
scaffold create my-project
cd my-project
git init
git add .
git commit -m "Initial commit"
```

## 故障排除

### 常见问题

1. **命令未找到**

   ```bash
   # 解决方案：重新安装或检查 PATH
   npm install -g @randee/scaffold-cli
   ```

2. **权限错误**

   ```bash
   # 解决方案：使用管理员权限或配置 npm 权限
   sudo npm install -g @randee/scaffold-cli
   ```

3. **项目已存在**

   ```bash
   # 错误：Error: Project directory already exists
   # 解决方案：使用不同的项目名或删除现有目录
   ```

### 获取帮助

```bash
# 查看帮助信息
scaffold-cli --help
scaffold-cli init --help
scaffold-cli create --help

# 查看版本
scaffold-cli --version
```

## 下一步

- 查看 [README.md](./README.md) 了解更多功能
- 阅读 [DEVELOPMENT.md](./DEVELOPMENT.md) 了解开发规范
- 访问 [GitHub](https://github.com/randee-jia/scaffold-cli) 获取最新更新
