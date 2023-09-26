import { execa } from 'execa';
import { consola } from 'consola';
import { isInstalledGlobally } from './detection';
import { PackageManagerName } from '../types';

export const installGlobally = async (pm: PackageManagerName, packages: string[], mostUsed?: boolean) => {
    for (const packageName of packages) {
        try {
            const pkg = await isInstalledGlobally(packageName);
            if (!pkg?.isInstalled) {
                const { stdout: installation } = await execa(pm, ['install', '-g', packageName].filter(Boolean));
            }
        } catch (error) {
            throw new Error("Error installing package globally!");
        }
    }
}
