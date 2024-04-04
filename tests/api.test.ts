import { $ } from 'bun';
import { describe, it, expect, beforeAll, afterAll } from 'bun:test';
import {
    detectPackageManagers,
    mostUsedGPM,
    isInstalledGlobally,
    removeGlobally,
    type PackageManagerName
} from '../src'


describe('API', () => {
    const packages = ['prettier']

    beforeAll(async () => {
        await $`npm install -g nuxi`.quiet()
        await $`npm install -g ${packages.join(' ')}`.quiet()
    })

    it('Should return installed package managers', async () => {
        const packageManagers = await detectPackageManagers();
        expect(packageManagers).toBeInstanceOf(Array);
        const expectedPackageManagers: PackageManagerName[] = ['npm', 'yarn', 'pnpm', 'bun'];
        expect(expectedPackageManagers.some(pm => packageManagers.includes(pm))).toBeTruthy();
        expect(packageManagers.length).toBeGreaterThanOrEqual(1);
    });

    it('Should return the most used package manager', async () => {
        const packageManager = await mostUsedGPM();
        expect(packageManager).toBeOneOf(['npm', 'yarn', 'pnpm', 'bun']);
    });

    it('Should check if a package is installed globally', async () => {
        const packageManagers = await detectPackageManagers();
        const nodemon = await isInstalledGlobally('nuxi')
        expect(nodemon?.isInstalled).toBe(true)
        const expectedPackageManagers: PackageManagerName[] = ['npm', 'yarn', 'pnpm', 'bun'];
        expect(expectedPackageManagers.some(pm => packageManagers.includes(pm))).toBeTruthy();
        expect(nodemon?.executableBy).toBeOneOf(['npm', 'yarn', 'pnpm']);
    });

    it('Should remove a package globally', async () => {
        const removed = await removeGlobally(packages);
        expect(removed).toEqual(packages);
    });

    afterAll(async () => {
        await $`npm uninstall -g nuxi`.quiet()
    })
})