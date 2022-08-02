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
  path = 'path',
  wantTests = 'wantTests',
  parent = 'parent',
}

type Answers = { [P in ComponentProptNames]: string };

export const containerGenerator: PlopGeneratorConfig = {
  description: 'Add a container',
  prompts: [
    {
      type: 'input',
      name: ComponentProptNames.componentName,
      message: 'What should it be called?',
    },
  ],
  actions: data => {
    const answers = data as Answers;

    const componentPath = `${baseGeneratorPath}/containers/{{properCase ${ComponentProptNames.componentName}}}`;
    const actualComponentPath = `${baseGeneratorPath}/containers/${answers.componentName}`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }
    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/_index.tsx`,
        templateFile: './container/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/Container.tsx`,
        templateFile: './container/Container.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/components.ts`,
        templateFile: './container/components.ts.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'add',
      path: `${componentPath}/__tests__/index.test.tsx`,
      templateFile: './container/index.test.tsx.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'prettify',
      data: { path: `${actualComponentPath}/**` },
    });

    return actions;
  },
};
