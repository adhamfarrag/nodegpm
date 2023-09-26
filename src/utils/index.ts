import { readdirSync } from "node:fs";

// util function to return the length of a path
export const countDirectories = (path: string) => readdirSync(path).length