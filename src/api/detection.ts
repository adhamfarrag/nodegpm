import { resolve } from 'pathe';
import { existsSync } from "node:fs";
import packageManagers from '../pm';
import { countDirectories, exists } from '../utils';
import type { PackageManager, InstalledPackageResult, PackageManagers } from '../types';

const { npm, yarn, pnpm, bun } = packageManagers;

export async function  detectGlobalPackageManagers(): Promise<PackageManagers> {
    const globalPackageManagers = []

    if (await npm.isInstalled()) {
        globalPackageManagers.push('npm')
    }

    if (await yarn.isInstalled()) {
        globalPackageManagers.push('yarn')
    }

    if (await pnpm.isInstalled()) {
        globalPackageManagers.push('pnpm')
    }

    if (await bun.isInstalled()) {
        globalPackageManagers.push('bun')
    }

    return globalPackageManagers as PackageManagers
}

export async function mostUsedGlobalPackageManager(): Promise<string> {

    const packageManagers = []

    if (await npm.isInstalled()) {
        const modulesDir = await npm.dir.modules()

        if (modulesDir) {
            if (await exists(modulesDir)) {
                const dependencies = await countDirectories(modulesDir)
                packageManagers.push({ name: 'npm', dependencies })
            }

        }
    }

    if (await yarn.isInstalled()) {
        const modulesDir = await yarn.dir.modules()
        if (modulesDir) {
            if (await exists(modulesDir)) {
                const dependencies = await countDirectories(modulesDir)
                packageManagers.push({ name: 'yarn', dependencies })
            }
        }
    }

    if (await pnpm.isInstalled()) {
        const modulesDir = await pnpm.dir.modules()
        if (modulesDir) {
            if (await exists(modulesDir)) {
                const dependencies = await countDirectories(modulesDir)
                packageManagers.push({ name: 'pnpm', dependencies })
            }
        }
    }


    const mostUsed = packageManagers.reduce((prev, current) => (prev.dependencies > current.dependencies) ? prev : current)

    return mostUsed.name

}

export async function isInstalledGlobally(dependency: string): Promise<InstalledPackageResult | null> {
    const { npm, yarn, pnpm, bun } = packageManagers

    const checkDependency =  async (manager: PackageManager): Promise<InstalledPackageResult | null> => {
        try {
            const isInstalled = await manager.isInstalled();
            if (isInstalled) {
                const modulesDir = await manager.dir.modules();
                if (modulesDir) {
                    const dependencyDir = resolve(modulesDir, dependency);
                    const doesExist = existsSync(dependencyDir);
                    return { pm: manager.name, isInstalled: doesExist };
                }
            }
        } catch (error) {
            console.error(`Error checking if ${dependency} exists under ${manager.name}:`, error);
        }
        return null;
    }

    const managers = [npm, yarn, pnpm, bun];
    const results = await Promise.all(managers.map(checkDependency));
    const validResults = results.filter(result => result !== null) as InstalledPackageResult[];

    if (validResults.length > 0) {
        const mostUsed = validResults.reduce((prev, current) => (prev.isInstalled && !current.isInstalled) ? prev : current);
        return mostUsed;
    }

    return null;
}