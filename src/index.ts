import { Command } from 'commander';
import { createProject, generateProject } from './core/generator';

const program = new Command();

program.name('scaffold-cli').description('A CLI tool for scaffolding projects').version('1.0.0');

program
  .command('init')
  .description('Initialize a new project')
  .action(async () => {
    const { default: inquirer } = await import('inquirer');

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: (input: string) => (input ? true : 'Project name cannot be empty.'),
      },
      {
        type: 'list',
        name: 'template',
        message: 'Which template would you like to use?',
        choices: ['basic', 'advanced'],
      },
    ]);

    await createProject(answers.projectName, answers.template);
  });

program
  .command('create <template>')
  .description('Create a new project from a template')
  .action(async (template: string) => {
    const { default: inquirer } = await import('inquirer');

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter the project name:',
        validate: (input: string) => (input ? true : 'Project name cannot be empty.'),
      },
    ]);

    await generateProject(template, answers.projectName);
  });

program.parse(process.argv);
