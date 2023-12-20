import { readdirSync, promises } from "node:fs";

export const isWindows: boolean = process.platform === 'win32';
export const isMac: boolean = process.platform === 'darwin';
export const isLinux: boolean = process.platform === 'linux';

export const countDirectories = (path: string): number => {
    try {
        const directories: string[] = readdirSync(path);
        return directories.length;
    } catch (error) {
        console.error(`Error reading directory: ${path}`, error);
        return 0;
    }
};

export const exists = async (f: string): Promise<boolean> => {
    try {
        await promises.stat(f);
        return true;
    } catch {
        return false;
    }
};
