import { resolve } from 'pathe';
import { existsSync } from "node:fs";
import packageManagers from '../pm';
import { countDirectories, exists } from '../utils';
import type { PackageManager, InstalledPackageResult, PackageManagers, PackageManagerName } from '../types';

const { npm, yarn, pnpm, bun } = packageManagers;
const managers = [npm, yarn, pnpm, bun];

export async function  detectPackageManagers(): Promise<PackageManagers> {
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

export async function mostUsedGPM(): Promise<string> {

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

// export async function isInstalledGlobally(dependency: string): Promise<InstalledPackageResult | false> {
//     const checkDependency =  async (manager: PackageManager): Promise<InstalledPackageResult | false> => {
//         try {
//             const isInstalled = await manager.isInstalled();
//             if (isInstalled) {
//                 const modulesDir = await manager.dir.modules();
//                 if (modulesDir) {
//                     const dependencyDir = manager.name === 'yarn' ?
//                         resolve(modulesDir, 'node_modules', dependency) :
//                         resolve(modulesDir, dependency)
//                     const doesExist = existsSync(dependencyDir);
//                     return {
//                         pm: [manager.name as PackageManagerName],
//                         isInstalled: doesExist,
//                         which: manager.name as PackageManagerName
//                     };
//                 }
//             }
//         } catch (error) {
//             console.error(`Error checking if ${dependency} exists under ${manager.name}:`, error);
//         }
//         return false;
//     }
//
//     const results = await Promise.all(managers.map(checkDependency));
//     console.log('results', results);
//     const validResults = results.filter(result => result !== null) as InstalledPackageResult[];
//
//     if (validResults.length > 0) {
//         const mostUsed = validResults.reduce((prev, current) => (prev.isInstalled && !current.isInstalled) ? prev : current);
//         return mostUsed;
//     }
//
//     return false;
// }

export async function isInstalledGlobally(dependency: string): Promise<InstalledPackageResult | null> {
    const checkDependency = async (manager: PackageManager): Promise<InstalledPackageResult | null> => {
        try {
            const isInstalled = await manager.isInstalled();
            if (!isInstalled) {return null;}

            const modulesDir = await manager.dir.modules();
            if (!modulesDir) {return null;}

            const dependencyDir = resolve(
                manager.name === 'yarn' ? resolve(modulesDir, 'node_modules') : modulesDir,
                dependency
            );
            const doesExist = existsSync(dependencyDir);

            return {
                isInstalled: doesExist,
                pm: [manager.name as PackageManagerName],
                executableBy: manager.name as PackageManagerName
            };
        } catch (error) {
            console.error(`Error checking if ${dependency} exists under ${manager.name}:`, error);
            return null;
        }
    };

    const results = await Promise.all(managers.map(checkDependency));
    const validResults = results.filter(Boolean) as InstalledPackageResult[];

    if (validResults.length === 0) {return null;}

    const mostUsed = validResults.reduce((prev, current) =>
        prev.isInstalled && !current.isInstalled ? prev : current
    );

    const uniquePms = new Set(validResults.map(result => result.executableBy));
    const pm: PackageManagerName[] = Array.from(uniquePms).filter(Boolean) as PackageManagerName[];

    return {
        isInstalled: mostUsed.isInstalled,
        pm,
        executableBy: mostUsed.executableBy
    };
}
