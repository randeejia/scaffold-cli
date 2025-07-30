import { Command } from 'commander';
import inquirer from 'inquirer';
import { createProject } from '../core/generator';

const initCommand = new Command('init')
  .description('Initialize a new project')
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: input => (input ? true : 'Project name cannot be empty.'),
      },
      {
        type: 'list',
        name: 'template',
        message: 'Which template would you like to use?',
        choices: ['basic', 'advanced'],
      },
    ]);

    createProject(answers.projectName, answers.template);
  });

export default initCommand;
