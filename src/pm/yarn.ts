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

export const modulesDir = async () => {
    try {
        const { stdout: modulesDir, } = await execa('yarn', ['global', 'dir']);
        return modulesDir;
    } catch (error) {

        return null;
    }
}


const yarn = {
    isInstalled,
    install,
    remove,
    dir: {
        modules: modulesDir
    }
}

export default yarn;
