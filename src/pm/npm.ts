import { execa } from 'execa';

async function isInstalled() {
    try {
        await execa('npm', ['--version']);
        return true;
    } catch (error) {
        return false;
    }
}

async function modulesDir() {
    try {
        const { stdout } = await execa('npm', ['root', '-g']);
        return stdout;
    } catch (error) {
        return null;
    }
}

async function prefixDir() {
    try {
        const { stdout } = await execa('npm', ['prefix', '-g']);
        return stdout;
    } catch (error) {
        return null;
    }
}

async function binDir() {
    try {
        const { stdout } = await execa('npm', ['bin', '-g']);
        return stdout;
    } catch (error) {
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
