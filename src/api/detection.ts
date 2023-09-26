import { resolve } from 'pathe'
import { existsSync } from "node:fs";
import pms from '../pm'
import { countDirectories } from '../utils'


const npm = pms.npm
const yarn = pms.yarn
const pnpm = pms.pnpm
const bun = pms.bun

export async function  detectGlobalPackageManagers() {
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

    return globalPackageManagers
}

export async function mostUsedGlobalPackageManager(): Promise<string> {

    const packageManagers = []

    if (await npm.isInstalled()) {
        const modulesDir = await npm.dir.modules()
        if (modulesDir) {
            const dependencies = await countDirectories(modulesDir)
            packageManagers.push({ name: 'npm', dependencies })
        }
    }

    if (await yarn.isInstalled()) {
        const modulesDir = await yarn.dir.modules()
        if (modulesDir) {
            const dependencies = await countDirectories(modulesDir)
            packageManagers.push({ name: 'yarn', dependencies })
        }
    }

    if (await pnpm.isInstalled()) {
        const modulesDir = await pnpm.dir.modules()
        if (modulesDir) {
            const dependencies = await countDirectories(modulesDir)
            packageManagers.push({ name: 'pnpm', dependencies })
        }
    }


    const mostUsed = packageManagers.reduce((prev, current) => (prev.dependencies > current.dependencies) ? prev : current)

    return mostUsed.name

}

export async function isInstalledGlobally(dependency: string): Promise<boolean> {
    const packageManagers = [
        { manager: npm, name: 'npm' },
        { manager: yarn, name: 'yarn' },
        { manager: pnpm, name: 'pnpm' }
    ];

    let isInstalled = false;

    for (const { manager, name } of packageManagers) {
        if (await manager.isInstalled()) {
            const modulesDir = await manager.dir.modules();

            if (modulesDir) {
                const doesExist = await existsSync(modulesDir?.toString());
                if (!doesExist) {
                    continue;
                } else {
                    const dependencyDir = resolve(modulesDir, dependency);
                    try {
                        if (existsSync(dependencyDir)) {
                            console.log(`exists under ${name}`);
                            isInstalled = true;
                            break; // Exit loop if dependency is found
                        }
                    } catch (error) {
                        console.error(`Error checking if ${dependency} exists under ${name}:`, error);
                    }
                }

            }
        }
    }

    return isInstalled;
}