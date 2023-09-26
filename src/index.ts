import { consola } from "consola";
import pm from './pm';
import { detectGlobalPackageManagers } from './api/detection';

consola.start('Hello World!')
consola.start('I love UNjs!');

const yarn = pm.yarn;

(async () => {

    const response = await yarn.isInstalled();
    const moduleDir = await yarn.dir.modules()

    if (response) {
        consola.success('yarn is installed!');
    } else {
        consola.error('Yarn is not installed!');
    }

    if (!moduleDir) {
        consola.error('error getting yarn modules dir!');
    } else {
        consola.success(`yarn modules dir: ${moduleDir}`);
    }

    const globalPackageManagers = await detectGlobalPackageManagers();

    consola.info('globalPackageManagers: ', globalPackageManagers);

})();
