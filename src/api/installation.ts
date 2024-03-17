import { execa } from 'execa';
import { isInstalledGlobally } from './detection';
import type { PackageManagerName } from '../types';
import { installationCommands } from '../pm';

export const installGlobally = async (pm: PackageManagerName, packages: string[], mostUsed?: boolean) => {
    const installedPackages = [];

    for (const packageName of packages) {
        try {
            const pkg = await isInstalledGlobally(packageName);
            if (!pkg?.isInstalled) {
                const { stdout: installation } = await execa(pm, ['install', '-g', packageName].filter(Boolean));
                installedPackages.push(packageName);
            }
        } catch (error) {
            throw new Error(`Error installing package globally: ${(error as Error).message}`);
        }
    }

    return installedPackages;
}


export const removeGlobally = async (packages: string[]) => {
    const removedPackages = [];

    for (const packageName of packages) {
        try {
            const pkg = await isInstalledGlobally(packageName);
            if (pkg?.isInstalled) {
                const {  uninstallCommand, flag } = installationCommands[pkg.name as PackageManagerName];
                const { stdout: installation } = await execa(pkg.name, [uninstallCommand, flag, packageName].filter(Boolean));
                removedPackages.push(packageName);
            }
        } catch (error) {
            throw new Error(`Error removing package globally: ${(error as Error).message}`);
        }
    }

    return removedPackages;
}