import { execa } from 'execa';


export const isInstalled = async () => {
    try {
        const { stdout: bunVersion } = await execa('bun', ['--version']);
        return true;
    } catch (error) {
        return false;
    }
}

export const install = async () => {
    try {
        const { stdout: yarnVersion } = await execa('npm', ['install', '-g', 'bun']);
        return true;
    } catch (error) {
        return false;
    }
}

export const remove = async () => {
    try {
        const { stdout: yarnVersion } = await execa('npm', ['uninstall', '-g', 'bun']);
        return true;
    } catch (error) {
        return false;
    }
}

const bun = {
    isInstalled,
    install,
    remove
}

export default bun;