import { execa } from 'execa';
import type { PackageManager } from '../types';


async function isInstalled() {
    try {
        await execa('pnpm', ['--version']);
        return true;
    } catch (error) {
        return false;
    }
}

async function install() {
    try {
        await execa('npm', ['install', '-g', 'pnpm']);
        return true;
    } catch (error) {
        return false;
    }
}

async function remove() {
    try {
        await execa('npm', ['uninstall', '-g', 'pnpm']);
        return true;
    } catch (error) {
        return false;
    }
}

async function modulesDir() {
    try {
        const { stdout } = await execa('pnpm', ['root', '-g']);
        return stdout;
    } catch (error) {
        return null;
    }
}

const pnpm: PackageManager = {
    name: 'pnpm',
    isInstalled,
    install,
    remove,
    dir: {
        modules: modulesDir
    }
}

export default pnpm;
