import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    failOnWarn: false,
    declaration: "compatible",
    rollup: {
        inlineDependencies: true,
        esbuild: {
            minify: true,
        },
    },
});