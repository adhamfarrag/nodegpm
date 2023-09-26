import npm from './npm';
import yarn from './yarn';
import pnpm from './pnpm';
import bun from './bun';
import type { PackageManagerName } from '../types';

const commands = {
    "npm": {
        installCommand: 'npm install -g',
        uninstallCommand: 'npm uninstall -g',
    },
    "yarn": {
        installCommand: 'yarn global add',
        uninstallCommand: 'yarn global remove',
    },
    "pnpm": {
        installCommand: 'pnpm install -g',
        uninstallCommand: 'pnpm uninstall -g',
    },
    "bun": {
        installCommand: 'npm install -g bun',
        uninstallCommand: 'npm uninstall -g bun',
    },
}

const pms = {
    npm,
    yarn,
    pnpm,
    bun,
}

export { npm, yarn, pnpm, bun, commands };
export default pms;