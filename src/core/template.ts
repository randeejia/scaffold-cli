import { promisify } from 'util';
import { readFile } from 'fs';

const readFileAsync = promisify(readFile);

class Template {
  constructor(private templatePath: string) {}

  async loadTemplate(templateName: string): Promise<string> {
    const filePath = `${this.templatePath}/${templateName}`;
    return await readFileAsync(filePath, 'utf-8');
  }

  async renderTemplate(templateName: string, data: object): Promise<string> {
    const template = await this.loadTemplate(templateName);
    // 简化的模板渲染 - 替换占位符
    let rendered = template;
    for (const [key, value] of Object.entries(data)) {
      rendered = rendered.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), String(value));
    }
    return rendered;
  }
}

export default Template;
