import { $ } from 'bun';
import { describe, it, expect, beforeAll } from 'bun:test';
import { isAbsolute } from 'pathe';

import { isInstalledGlobally, pnpm } from '../../src';

describe('PNPM', () => {
    beforeAll(async () => {
        await $`npm install -g pnpm`.quiet()
    })

    beforeAll(async () => {
        if (!(await isInstalledGlobally('pnpm'))) {
            console.log('Installing pnpm...');
            await $`npm install -g pnpm`.quiet()
        }
    })

    it('Should be installed', async () => {
        const isInstalled = await pnpm.isInstalled();
        expect(isInstalled).toBe(true);
    });


    it('Should return modules dir location', async () => {
        const modulesDir = await pnpm.dir.modules()
        expect(modulesDir).toBeString()
        if (modulesDir) {
            expect(isAbsolute(modulesDir)).toBe(true)
        }
    });
})