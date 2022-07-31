/**
 * Container Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import path from 'path';
import inquirer from 'inquirer';

import { pathExists } from '../utils';
import { baseGeneratorPath } from '../paths';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum SliceProptNames {
  'sliceName' = 'sliceName',
  'path' = 'path',
  'wantSaga' = 'wantSaga',
  'parent' = 'parent',
}

type Answers = { [P in SliceProptNames]: string };

export const rootStatePath = path.join(
  __dirname,
  '../../../src/types/RootState.ts',
);

export const sliceGenerator: PlopGeneratorConfig = {
  description: 'Add a redux toolkit slice',
  prompts: [
    {
      type: 'input',
      name: SliceProptNames.parent,
      message: 'What container do you want to put the slice in?',
    },
    {
      type: 'confirm',
      name: SliceProptNames.wantSaga,
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
  ],
  actions: data => {
    const answers = data as Answers;

    const slicePath = `${baseGeneratorPath}/containers/${answers.parent}/slice`;

    if (pathExists(slicePath)) {
      throw new Error(`Slice '${answers.parent}' already exists`);
    }
    const actions: Actions = [];

    actions.push({
      type: 'add',
      path: `${slicePath}/index.ts`,
      templateFile: './slice/index.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: `${slicePath}/selectors.ts`,
      templateFile: './slice/selectors.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: `${slicePath}/types.ts`,
      templateFile: './slice/types.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${rootStatePath}`,
      pattern: new RegExp(/.*\/\/.*\[IMPORT NEW CONTAINERSTATE ABOVE\].+\n/),
      templateFile: './slice/importContainerState.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${rootStatePath}`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW REDUCER KEY ABOVE\].+\n/),
      templateFile: './slice/appendRootState.hbs',
      abortOnFail: true,
    });
    if (answers.wantSaga) {
      actions.push({
        type: 'add',
        path: `${slicePath}/saga.ts`,
        templateFile: './slice/saga.ts.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      data: { path: `${slicePath}/**` },
    });

    return actions;
  },
};
