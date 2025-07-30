import { Command } from 'commander';
import inquirer from 'inquirer';
import { generateProject } from '../core/generator';

const createCommand = new Command('create')
  .description('Create a new project from a template')
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Select a template to use:',
        choices: ['basic', 'advanced'],
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter the project name:',
        validate: input => (input ? true : 'Project name cannot be empty.'),
      },
    ]);

    const { template, projectName } = answers;
    await generateProject(template, projectName);
    console.log(
      `Project ${projectName} created using the ${template} template.`
    );
  });

export default createCommand;
