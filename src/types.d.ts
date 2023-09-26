export type PackageManagerName = "npm" | "yarn" | "pnpm" | "bun";


type PackageManager = {
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

type PackageManagerResult = {
    name: string;
    isInstalled: boolean;
};
