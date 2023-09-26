import { execa } from 'execa';
import { isInstalledGlobally } from './detection';
import { PackageManagerName } from '../types';
import { commands } from '../pm';

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


export const removeGlobally = async (packages: string[]) => {
    for (const packageName of packages) {
        try {
            const pkg = await isInstalledGlobally(packageName);
            if (pkg?.isInstalled) {
                const {  uninstallCommand, flag } = commands[pkg.name as PackageManagerName];
                const { stdout: installation } = await execa(pkg.name, [uninstallCommand, flag, packageName].filter(Boolean));
            }
        } catch (error) {
            throw new Error("Error removing package globally!");
        }
    }
}