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

export const prefixDir = async () => {
    try {
        const { stdout: prefixDir, } = await await execa('npm', ['prefix', '-g']);
        return prefixDir;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const binDir = async () => {
    try {
        const { stdout: binDir, } = await await execa('npm', ['bin', '-g']);
        return binDir;
    } catch (error) {
        console.error(error);
        return null;
    }
}


const npm = {
    isInstalled,
    dir: {
        modules: modulesDir,
        prefix: prefixDir,
        bin: binDir,
    }
}

export default npm;