import { execa } from 'execa';
import type { PackageManager } from '../types';


async function isInstalled() {
    try {
        await execa('yarn', ['--version']);
        return true;
    } catch (error) {
        return false;
    }
}

async function install() {
    try {
        await execa('npm', ['install', '-g', 'yarn']);
        return true;
    } catch (error) {
        return false;
    }
}

async function remove() {
    try {
        await execa('npm', ['uninstall', '-g', 'yarn']);
        return true;
    } catch (error) {
        return false;
    }
}

async function modulesDir() {
    try {
        const { stdout } = await execa('yarn', ['global', 'dir']);
        return stdout;
    } catch (error) {
        return null;
    }
}

const yarn: PackageManager = {
    name: 'yarn',
    isInstalled,
    install,
    remove,
    dir: {
        modules: modulesDir
    }
}

export default yarn;
