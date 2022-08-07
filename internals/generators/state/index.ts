/**
 * State Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import path from 'path';
import inquirer from 'inquirer';

import { baseGeneratorPath } from '../paths';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum SliceProptNames {
  stateName = 'stateName',
  parent = 'parent',
  type = 'type',
  initialState = 'initialState',
  wantInterface = 'wantInterface',
  needCustomInitialValue = 'needCustomInitialValue',
}

type Answers = { [P in SliceProptNames]: string };

export const rootStatePath = path.join(
  __dirname,
  '../../../src/types/RootState.ts',
);

export const stateGenerator: PlopGeneratorConfig = {
  description: 'Add a redux state',
  prompts: [
    {
      type: 'input',
      name: SliceProptNames.stateName,
      message: 'What will be the name of the state? (e.g. tasks)',
    },
    {
      type: 'input',
      name: SliceProptNames.parent,
      message: 'What container does this state belong to?',
    },
    {
      type: 'input',
      name: SliceProptNames.type,
      message:
        'What will be the type of the state? (e.g. boolean, string, any, Task, Task[], etc.)',
    },
    {
      type: 'input',
      name: SliceProptNames.initialState,
      message:
        'What will be its initial value? (Skip if you want to create a custom initial value.)',
    },
    {
      type: 'confirm',
      name: SliceProptNames.wantInterface,
      default: false,
      message: 'Do you want to create an interface for the state?',
    },
    {
      type: 'confirm',
      name: SliceProptNames.needCustomInitialValue,
      default: false,
      message: 'Do you want to create an custom value for the initial state?',
    },
  ],

  actions: data => {
    const answers = data as Answers;

    const basePath = `${baseGeneratorPath}/containers/${answers.parent}/slice`;

    const actions: Actions = [];

    actions.push({
      type: 'modify',
      path: `${basePath}/_index.ts`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW STATE ABOVE\].+\n/),
      templateFile: './state/modifyIndex.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${basePath}/types.d.ts`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW TYPE ABOVE\].+\n/),
      templateFile: './state/modifyTypes.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${basePath}/types.d.ts`,
      pattern: new RegExp(/.*\/\/.*\[CREATE NEW INTERFACE ABOVE\].+\n/),
      templateFile: './state/modifyInterface.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${basePath}/_index.ts`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW ACTION KEY ABOVE\].+\n/),
      templateFile: './state/modifyReducer.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${basePath}/utils.ts`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW INITIAL VALUE ABOVE\].+\n/),
      templateFile: './state/modifyUtils.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'prettify',
      data: { path: `${basePath}/**` },
    });

    return actions;
  },
};
