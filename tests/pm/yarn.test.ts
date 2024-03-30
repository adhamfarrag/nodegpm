import { $ } from 'bun';
import { describe, it, expect, beforeAll } from 'bun:test';
import { isAbsolute } from 'pathe';

import { isInstalledGlobally, yarn } from '../../src';

describe('Yarn', () => {
    beforeAll(async () => {
        if (!(await isInstalledGlobally('yarn'))) {
            console.log('Installing yarn...');
            await $`npm install -g yarn`.quiet()
        }
    })

    it('Should be installed', async () => {
        const isInstalled = await yarn.isInstalled();
        expect(isInstalled).toBe(true);
    });

    it('Should return modules dir location', async () => {
        const modulesDir = await yarn.dir.modules()
        expect(modulesDir).toBeString()
        if (modulesDir) {
            expect(isAbsolute(modulesDir)).toBe(true)
        }
    });
})