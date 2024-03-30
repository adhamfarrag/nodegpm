import { execa } from 'execa';
import type { PackageManager } from '../types';

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


const npm: PackageManager = {
    name: 'npm',
    isInstalled,
    dir: {
        modules: modulesDir,
        prefix: prefixDir,
    }
}

export default npm;
