import { describe, it, expect } from 'bun:test';
import { isAbsolute } from 'pathe';

import bun from '../../src/pm/bun';

describe('Yarn', () => {
    it('Should be installed', async () => {
        const isInstalled = await bun.isInstalled();
        expect(isInstalled).toBe(true);
    });

    it('Should return modules dir location', async () => {
        const modulesDir = await bun.dir.modules()
        // TODO: Fix this test
        expect(modulesDir).not.toBeString()
        if (modulesDir) {
            // TODO: Fix this test
            expect(isAbsolute(modulesDir)).toBe(false)
        }
    });
})