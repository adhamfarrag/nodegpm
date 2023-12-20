import { execa } from 'execa';

async function isInstalled() {
    try {
        await execa('bun', ['--version']);
        return true;
    } catch (error) {
        return false;
    }
}

async function install() {
    try {
        await execa('npm', ['install', '-g', 'bun']);
        return true;
    } catch (error) {
        return false;
    }
}

async function remove() {
    try {
        await execa('npm', ['uninstall', '-g', 'bun']);
        return true;
    } catch (error) {
        return false;
    }
}

async function modulesDir() {
    try {
        const { stdout } = await execa('bun', ['pm', 'bin', '-g']);
        return stdout;
    } catch (error) {
        return null;
    }
}

const bun = {
    isInstalled,
    install,
    remove,
    modulesDir
}

export default bun;
