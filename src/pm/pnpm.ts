import { execa } from 'execa';


export const isInstalled = async () => {
    try {
        const { stdout: pnpmVersion } = await execa('pnpm', ['--version']);
        return true;
    } catch (error) {
        return false;
    }
}

export const install = async () => {
    try {
        const { stdout: yarnVersion } = await execa('npm', ['install', '-g', 'pnpm']);
        return true;
    } catch (error) {
        return false;
    }
}

export const remove = async () => {
    try {
        const { stdout: yarnVersion } = await execa('npm', ['uninstall', '-g', 'pnpm']);
        return true;
    } catch (error) {
        return false;
    }
}


const pnpm = {
    isInstalled,
    install,
    remove
}

export default pnpm;