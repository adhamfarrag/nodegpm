import { readdirSync, promises } from "node:fs";
import type { PackageManagerName } from ".";
import { execaCommand } from "execa";

export const isWindows: boolean = process.platform === 'win32';
export const isMac: boolean = process.platform === 'darwin';
export const isLinux: boolean = process.platform === 'linux';

// TODO: Minify this function
export const countDirectories = (path: string): number => {
    try {
        const directories: string[] = readdirSync(path);
        return directories.length;
    } catch (error) {
        console.error(`Error reading directory: ${path}`, error);
        return 0;
    }
};

// TODO: change to bun API
export const exists = async (f: string): Promise<boolean> => {
    try {
        await promises.stat(f);
        return true;
    } catch {
        return false;
    }
};


export const executableViaWhich =
  async (pkgName: string): Promise<PackageManagerName | undefined> => {
      const command = await execaCommand('which ' + pkgName);
      if (command.stdout) {
          const path = command.stdout.split('/');
          const manager = path.length > 0 ? path[path.length - 2] : undefined;
          return manager as PackageManagerName;
      }
      return undefined;
  }