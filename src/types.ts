export type PackageManagerName = "npm" | "yarn" | "pnpm" | "bun";

export type PackageManager = {
    manager: {
        isInstalled: () => Promise<boolean>,
        install?: () => Promise<boolean>,
        remove?: () => Promise<boolean>,
        dir: {
            modules: () => Promise<string | null>,
            prefix?: () => Promise<string | null>,
            bin?: () => Promise<string | null>,
        }
    },
    name: PackageManagerName
};

export type PackageManagerResult = {
    name: string;
    isInstalled: boolean;
};
