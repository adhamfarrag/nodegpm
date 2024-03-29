import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    declaration: true,
    clean: true,

    rollup: {
        inlineDependencies: true,
        esbuild: {
            minify: true,
            treeShaking: true
        },
    },
});