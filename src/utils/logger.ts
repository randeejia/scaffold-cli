import chalk from 'chalk';

class Logger {
  info(message: string) {
    console.log(chalk.blue(`[INFO] ${message}`));
  }

  warn(message: string) {
    console.log(chalk.yellow(`[WARN] ${message}`));
  }

  error(message: string) {
    console.log(chalk.red(`[ERROR] ${message}`));
  }

  success(message: string) {
    console.log(chalk.green(`[SUCCESS] ${message}`));
  }
}

export default new Logger();
