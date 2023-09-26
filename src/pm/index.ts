import npm from './npm';
import yarn from './yarn';
import pnpm from './pnpm';
import bun from './bun';


const commands = {
    "npm": {
        installCommand: 'install',
        uninstallCommand: 'uninstall',
        flag: '-g'
    },
    "yarn": {
        installCommand: 'add',
        uninstallCommand: 'remove',
        flag: 'global'
    },
    "pnpm": {
        installCommand: 'add',
        uninstallCommand: 'remove',
        flag: '-g'
    },
    "bun": {
        installCommand: 'install',
        uninstallCommand: 'uninstall',
        flag: '-g'
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