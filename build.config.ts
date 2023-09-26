import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    failOnWarn: false,

    declaration: true,

    rollup: {
        inlineDependencies: true,
        esbuild: {
            minify: true,
        },
    },
});