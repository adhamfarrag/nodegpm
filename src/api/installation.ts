import { PackageManagerName } from '../types';
import { isLinux } from '../utils/process';
import { consola } from 'consola';

export const installGlobally = async (pm: PackageManagerName, packages: string[], mostUsed?: boolean) => {
    if (isLinux) {
        consola.info('Installing globally on Linux is not supported yet.');
    } else {
        consola.success(`Installing ${packages.join(', ')} globally with ${pm}...`)
    }

}