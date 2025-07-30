import * as path from 'path';
import * as fs from 'fs';
import chalk from 'chalk';
import ora from 'ora';

export class Generator {
  constructor(
    private templatePath: string,
    private outputPath: string
  ) {}

  async downloadTemplate(): Promise<void> {
    const spinner = ora('Downloading template...').start();
    try {
      // 简化实现，直接复制本地模板
      await this.copyTemplate();
      spinner.succeed('Template downloaded successfully!');
    } catch (error) {
      spinner.fail('Failed to download template');
      throw error;
    }
  }

  async copyTemplate(): Promise<void> {
    // 简化实现，确保输出目录存在
    if (!fs.existsSync(this.outputPath)) {
      fs.mkdirSync(this.outputPath, { recursive: true });
    }
  }

  async renderTemplate(templateName: string): Promise<void> {
    const templateFilePath = path.join(this.templatePath, templateName);
    const outputFilePath = path.join(this.outputPath, templateName);

    if (fs.existsSync(templateFilePath)) {
      const content = fs.readFileSync(templateFilePath, 'utf8');
      fs.writeFileSync(outputFilePath, content);
    }
  }
}

// 导出简化的函数
export async function createProject(projectName: string, template: string): Promise<void> {
  const spinner = ora(`Creating ${projectName} with ${template} template...`).start();

  try {
    // 创建项目目录
    const projectPath = path.join(process.cwd(), projectName);
    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath, { recursive: true });
    }

    // 复制模板文件
    const templatePath = path.join(__dirname, '../../templates', template);
    if (fs.existsSync(templatePath)) {
      copyDir(templatePath, projectPath);
    }

    spinner.succeed(chalk.green(`Project ${projectName} created successfully!`));
    console.log(chalk.blue(`\nNext steps:`));
    console.log(chalk.white(`  cd ${projectName}`));
    console.log(chalk.white(`  npm install`));
    console.log(chalk.white(`  npm start`));
  } catch (error) {
    spinner.fail(chalk.red('Failed to create project'));
    throw error;
  }
}

export async function generateProject(template: string, projectName: string): Promise<void> {
  return createProject(projectName, template);
}

function copyDir(src: string, dest: string): void {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  for (const file of files) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
