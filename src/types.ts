export type PackageManagerName = "npm" | "yarn" | "pnpm" | "bun";
export type PackageManagers = PackageManagerName[];

export type PackageManager = {
    name: string,
    isInstalled: () => Promise<boolean>,
    install?: () => Promise<boolean>,
    remove?: () => Promise<boolean>,
    dir: {
        modules: () => Promise<string | null>,
        prefix?: () => Promise<string | null>,
    }
};

export type InstalledPackageResult = {
    isInstalled: boolean;
    pm?: PackageManagerName[] | null;
    executableBy: PackageManagerName | null;
};
