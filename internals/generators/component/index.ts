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

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a component',
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
  ],
  actions: data => {
    const answers = data as Answers;

    const componentPath = `${baseGeneratorPath}/containers/${answers.parent}/{{properCase ${ComponentProptNames.componentName}}}`;
    const actualComponentPath = `${baseGeneratorPath}/containers/${answers.parent}/${answers.componentName}`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }
    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/_index.tsx`,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/Wrapper.tsx`,
        templateFile: './component/Wrapper.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/components.ts`,
        templateFile: './component/components.ts.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'add',
      path: `${componentPath}/__tests__/index.test.tsx`,
      templateFile: './component/index.test.tsx.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'prettify',
      data: { path: `${actualComponentPath}/**` },
    });

    return actions;
  },
};
