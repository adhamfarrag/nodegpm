import { execa } from 'execa';
import { isInstalledGlobally, mostUsedGPM } from './detection';
import type { PackageManagerName } from '../types';
import { installationCommands } from '../pm';


export const installGlobally = async (packages: string[], pm?: PackageManagerName | 'most-used') => {
    const installedPackages = [];
    pm = pm || 'most-used';

    for (const packageName of packages) {
        try {
            const pkg = await isInstalledGlobally(packageName);
            if (!pkg?.isInstalled) {
                if (pm !== 'most-used') {
                    const { stdout: installation } = await execa(pm, ['install', '-g', packageName].filter(Boolean));
                } else {
                    const mostUsedPM = await mostUsedGPM();
                    const { stdout: installation } = await execa(mostUsedPM, ['install', '-g', packageName].filter(Boolean));
                }
                installedPackages.push(packageName);
            }
        } catch (error) {
            throw new Error(`Error installing package globally: ${(error as Error).message}`);
        }
    }

    return installedPackages;
}


export const removeGlobally = async (packages: string[]): Promise<string[]> => {
    const removedPackages = [];

    for (const packageName of packages) {
        try {
            const pkg = await isInstalledGlobally(packageName);
            if (pkg?.isInstalled) {
                const {  uninstallCommand, flag } = installationCommands[pkg.pm as PackageManagerName];
                const { stdout: installation } = await execa(pkg.pm, [uninstallCommand, flag, packageName].filter(Boolean));
                removedPackages.push(packageName);
            }
        } catch (error) {
            throw new Error(`Error removing package globally: ${(error as Error).message}`);
        }
    }

    return removedPackages;
}