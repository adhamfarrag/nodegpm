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

const bun = {
    isInstalled,
    install,
    remove
}

export default bun;
