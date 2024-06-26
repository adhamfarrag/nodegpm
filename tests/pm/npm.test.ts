import { describe, it, expect } from 'bun:test';
import { isAbsolute } from 'pathe';

import npm from '../../src/pm/npm';

describe('NPM', () => {
    it('Should be installed', async () => {
        const isInstalled = await npm.isInstalled();
        expect(isInstalled).toBe(true);

    });

    it('Should return prefix dir location', async () => {
        if (npm && npm.dir && npm.dir.prefix) {
            const prefixDir = await npm.dir.prefix()
            expect(prefixDir).toBeString()
            if (prefixDir) {
                expect(isAbsolute(prefixDir)).toBe(true)
            }
        }

    });

    it('Should return modules dir location', async () => {
        const modulesDir = await npm.dir.modules()
        expect(modulesDir).toBeString()
        if (modulesDir) {
            expect(isAbsolute(modulesDir)).toBe(true)
        }
    });
})