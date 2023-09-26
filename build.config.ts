import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    declaration: "compatible",
    rollup: {
        inlineDependencies: true,
        esbuild: {
            minify: true,
        },
    },
});