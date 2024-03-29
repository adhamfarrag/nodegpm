import { execa } from 'execa';
import type { PackageManager } from '../types';


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

// TODO: Handle error or watch Bun issues for a fix
async function modulesDir() {
    try {
        const { stdout } = await execa('bun', ['pm', 'bin', '-g']);
        return stdout;
    } catch (error) {
        return null;
    }
}

const bun: PackageManager = {
    name: 'bun',
    isInstalled,
    install,
    remove,
    dir: {
        modules: modulesDir
    }
}

export default bun;
