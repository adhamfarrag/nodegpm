import { describe, it, expect } from 'bun:test';
import pnpm from '../../src/pm/pnpm';

describe('PNPM', () => {
    it('Should be installed', async () => {
        const isInstalled = await pnpm.isInstalled();
        expect(isInstalled).toBe(true);
    });


    it('Should return modules dir location', async () => {
        const modulesDir = await pnpm.dir.modules()
        expect(modulesDir).toBeString()
    });
})