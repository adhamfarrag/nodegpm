import { execa } from 'execa';


export const isInstalled = async () => {
    try {
        const { stdout: yarnVersion } = await execa('yarn', ['--version']);
        return true;
    } catch (error) {
        return false;
    }
}

export const install = async () => {
    try {
        const { stdout: yarnVersion } = await execa('npm', ['install', '-g', 'yarn']);
        return true;
    } catch (error) {
        return false;
    }
}

export const remove = async () => {
    try {
        const { stdout: yarnVersion } = await execa('npm', ['uninstall', '-g', 'yarn']);
        return true;
    } catch (error) {
        return false;
    }
}

const yarn = {
    isInstalled,
    install,
    remove
}

export default yarn;