import { detectGlobalPackageManagers, mostUsedGlobalPackageManager, isInstalledGlobally } from './api/detection';
import { installGlobally, removeGlobally } from './api/installation';
import type { PackageManagerName, PackageManager, PackageManagerResult } from './types';

export {
    detectGlobalPackageManagers,
    mostUsedGlobalPackageManager,
    isInstalledGlobally,
    installGlobally,
    removeGlobally,
};

export type {
    PackageManagerName,
    PackageManager,
    PackageManagerResult
};
