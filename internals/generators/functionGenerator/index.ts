/**
 * FunctionGenerator Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import path from 'path';
import inquirer from 'inquirer';

import { baseGeneratorPath } from '../paths';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum SliceProptNames {
  functionName = 'functionName',
  parent = 'parent',
  endpoint = 'endpoint',
  http = 'http',
}

type Answers = { [P in SliceProptNames]: string };

export const rootStatePath = path.join(
  __dirname,
  '../../../src/types/RootState.ts',
);

export const functionGeneratorGenerator: PlopGeneratorConfig = {
  description: 'Add a saga function generator',
  prompts: [
    {
      type: 'input',
      name: SliceProptNames.functionName,
      message:
        'What will be the name of the saga function generator? (e.g. getTasks)',
    },
    {
      type: 'input',
      name: SliceProptNames.parent,
      message: 'What container does this saga belong to?',
    },
    {
      type: 'input',
      name: SliceProptNames.endpoint,
      message: 'What is the endpoint for the api call? (e.g. /tasks)',
    },
    {
      type: 'input',
      name: SliceProptNames.http,
      message: 'What is the method for the api call? (e.g. get)',
    },
  ],
  actions: data => {
    const answers = data as Answers;

    const basePath = `${baseGeneratorPath}/containers/${answers.parent}`;
    const apiPath = `${baseGeneratorPath}/api`;

    const actions: Actions = [];

    actions.push({
      type: 'modify',
      path: `${basePath}/slice/_index.ts`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW ACTION KEY ABOVE\].+\n/),
      templateFile: './functionGenerator/modifyActionIndex.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'modify',
      path: `${basePath}/saga/_index.ts`,
      pattern: new RegExp(/.*\/\/.*\[EXPORT NEW SAGA ABOVE\].+\n/),
      templateFile: './functionGenerator/exportSaga.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'modify',
      path: `${basePath}/saga/actions.ts`,
      pattern: new RegExp(/.*\/\/.*\[EXPORT NEW ACTION ABOVE\].+\n/),
      templateFile: './functionGenerator/exportAction.hbs',
      abortOnFail: true,
    });
    // actions.push({
    //   type: 'modify',
    //   path: `${basePath}/slice/_index.ts`,
    //   pattern: new RegExp(/.*\/\/.*\[INSERT NEW ACTION KEY ABOVE\].+\n/),
    //   templateFile: './functionGenerator/modifyActionIndex.hbs',
    //   abortOnFail: true,
    // });
    actions.push({
      type: 'add',
      path: `${basePath}/saga/{{ camelCase functionName }}.ts`,
      templateFile: './functionGenerator/saga.someAction.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${apiPath}/ApiCall.ts`,
      pattern: new RegExp(/.*\/\/.*\[INPUT NEW API CALL METHOD HERE\].+\n/),
      templateFile: './functionGenerator/modifyApiCall.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${apiPath}/WebServices.ts`,
      pattern: new RegExp(/.*\/\/.*\[INPUT NEW MAPPING METHOD HERE\].+\n/),
      templateFile: './functionGenerator/modifyWebServices.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'prettify',
      data: { path: `${baseGeneratorPath}/**` },
    });

    return actions;
  },
};
