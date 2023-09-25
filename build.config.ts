import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    entries: [
        "./src/index",
    ],

    outDir: "dist",

    failOnWarn: false,

    declaration: true,
});