import { execa } from 'execa';

const isInstalled = async () => {
    try {
        const { stdout: npmVersion } = await execa('npm', ['--version']);
        return true;
    } catch (error) {
        return false;
    }
}

export const modulesDir = async () => {
    try {
        const { stdout: modulesDir, } = await await execa('npm', ['root', '-g']);
        return modulesDir;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const npm = {
    isInstalled,
    dir: {
        modules: modulesDir
    }
}

export default npm;