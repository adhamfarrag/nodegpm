import { consola } from "consola";
import pm from './pm';

consola.start('Hello World!')
consola.start('I love UNjs!');

const yarn = pm.yarn;

(async () => {

    const response = await yarn.install();
    const moduleDir = await yarn.dir.modules()

    if (response) {
        consola.success('yarn installed!');
    } else {
        consola.error('error installing yarn!');
    }

    if (!moduleDir) {
        consola.error('error getting yarn modules dir!');
    } else {
        consola.success(`yarn modules dir: ${moduleDir}`);
    }

})();
