/**
 * Component Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import inquirer from 'inquirer';

import { pathExists } from '../utils';
import { baseGeneratorPath } from '../paths';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum ComponentProptNames {
  componentName = 'componentName',
  parent = 'parent',
  containerName = 'containerName',
}

type Answers = { [P in ComponentProptNames]: string };

export const childGenerator: PlopGeneratorConfig = {
  description: 'Add a child component',
  prompts: [
    {
      type: 'input',
      name: ComponentProptNames.componentName,
      message: 'What should it be called?',
    },
    {
      type: 'input',
      name: ComponentProptNames.parent,
      message: 'What is the parent component?',
    },
    {
      type: 'input',
      name: ComponentProptNames.containerName,
      message: 'What is the container of its parent component?',
    },
  ],
  actions: data => {
    const answers = data as Answers;

    const componentPath = `${baseGeneratorPath}/containers/${answers.containerName}/${answers.parent}`;
    const actualComponentPath = `${baseGeneratorPath}/containers/${answers.containerName}/${answers.parent}/${answers.componentName}`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }
    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/{{properCase ${ComponentProptNames.componentName}}}.tsx`,
        templateFile: './child/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'modify',
      path: `${componentPath}/components.ts`,
      pattern: new RegExp(/.*\/\/.*\[EXPORT NEW COMPONENT ABOVE\].+\n/),
      templateFile: './child/exportComponent.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'prettify',
      data: { path: `${componentPath}/**` },
    });

    return actions;
  },
};
