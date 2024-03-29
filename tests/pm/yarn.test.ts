import { describe, it, expect } from 'bun:test';
import yarn from '../../src/pm/yarn';

describe('Yarn', () => {
    it('Should be installed', async () => {
        const isInstalled = await yarn.isInstalled();
        expect(isInstalled).toBe(true);
    });

    it('Should return modules dir location', async () => {
        const modulesDir = await yarn.dir.modules()
        expect(modulesDir).toBeString()
    });
})