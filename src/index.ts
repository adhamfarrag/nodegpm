import { consola } from "consola";
import pm from './pm';
import { detectGlobalPackageManagers, mostUsedGlobalPackageManager, isInstalledGlobally } from './api/detection';

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
    const mostUsedPM = await mostUsedGlobalPackageManager();
    const nuxi = await isInstalledGlobally('nuxi');
    const halabesa = await isInstalledGlobally('halabesa');

    consola.info('globalPackageManagers: ', globalPackageManagers);
    consola.info('mostUsedPM: ', mostUsedPM);
    consola.info('nuxi: ', nuxi);
    consola.info('halabesa: ', halabesa);

})();
