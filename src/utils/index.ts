import { readdirSync, promises } from "node:fs";


export const isWindows = process.platform === 'win32';
export const isMacintosh = process.platform === 'darwin';
export const isLinux = process.platform === 'linux';

// util function to return the length of a path
export const countDirectories = (path: string) => {
    try {
        const directories = readdirSync(path);
        return directories.length;
    } catch (error) {
        console.error(`Error reading directory: ${path}`, error);
        return 0;
    }
};

export const exists = async (f: string) => {
    try {
        await promises.stat(f);
        return true;
    } catch {
        return false;
    }
}