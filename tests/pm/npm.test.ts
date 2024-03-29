import { describe, it, expect } from 'bun:test';
import npm from '../../src/pm/npm';


describe('NPM', () => {
    it('Should be installed', async () => {
        const isInstalled = await npm.isInstalled();
        expect(isInstalled).toBe(true);
    });

    it('Should return prefix dir location', async () => {
        const prefixDir = await npm.dir.prefix()
        expect(prefixDir).toBeString()
    });

    it('Should return modules dir location', async () => {
        const modulesDir = await npm.dir.modules()
        expect(modulesDir).toBeString()
    });
})