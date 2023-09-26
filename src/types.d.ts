export type PackageManagerName = "npm" | "yarn" | "pnpm" | "bun";

export type PackageManager = {
    name: PackageManagerName,
    isInstalled: () => Promise<boolean>,
    install?: () => Promise<boolean>,
    remove?: () => Promise<boolean>,
    dir: {
        modules: () => Promise<string | null>,
        prefix: () => Promise<string | null>,
        bin: () => Promise<string | null>,
    }
}