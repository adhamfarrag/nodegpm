import npm from './npm';
import yarn from './yarn';
import pnpm from './pnpm';
import bun from './bun';

const pms = { npm, yarn, pnpm, bun };

const installationCommands = {
    npm: {
        installCommand: 'install',
        uninstallCommand: 'uninstall',
        flag: '-g'
    },
    yarn: {
        installCommand: 'add',
        uninstallCommand: 'remove',
        flag: 'global'
    },
    pnpm: {
        installCommand: 'add',
        uninstallCommand: 'remove',
        flag: '-g'
    },
    bun: {
        installCommand: 'install',
        uninstallCommand: 'uninstall',
        flag: '-g'
    },
};

export { pms as default, npm, yarn, pnpm, bun, installationCommands };