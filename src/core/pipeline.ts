// 简化的管道处理
export class Pipeline {
  private tasks: Array<() => Promise<void>> = [];

  use(task: () => Promise<void>): void {
    this.tasks.push(task);
  }

  async run(): Promise<void> {
    for (const task of this.tasks) {
      await task();
    }
  }
}

export function createPipeline() {
  return new Pipeline();
}
