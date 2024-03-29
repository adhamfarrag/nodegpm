import {
    detectGlobalPackageManagers,
    mostUsedGlobalPackageManager,
    isInstalledGlobally
} from './api/detection';

import { installGlobally, removeGlobally } from './api/installation';
import type { PackageManagerName, PackageManager, InstalledPackageResult, PackageManagers } from './types';
import { npm, yarn, pnpm, bun } from './pm';

export {
    detectGlobalPackageManagers,
    mostUsedGlobalPackageManager,
    isInstalledGlobally,
    installGlobally,
    removeGlobally,
    npm,
    yarn,
    pnpm,
    bun
};

export type {
    PackageManagerName,
    PackageManager,
    InstalledPackageResult,
    PackageManagers
};
