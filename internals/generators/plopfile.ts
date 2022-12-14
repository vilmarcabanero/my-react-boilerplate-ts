import { NodePlopAPI } from 'node-plop';
import { componentGenerator } from './component';
import shell from 'shelljs';
import { sliceGenerator } from './slice';
import { childGenerator } from './child';
import { containerGenerator } from './container';
import { functionGeneratorGenerator } from './functionGenerator';
import { stateGenerator } from './state';
interface PrettifyCustomActionData {
  path: string;
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('child', childGenerator);
  plop.setGenerator('state', stateGenerator);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('saga', functionGeneratorGenerator);
  plop.setGenerator('slice', sliceGenerator);
  plop.setGenerator('container', containerGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config!.data as PrettifyCustomActionData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}
