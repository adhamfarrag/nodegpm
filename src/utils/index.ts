import { readdirSync, promises } from "node:fs";


// util function to return the length of a path
export const countDirectories = (path: string) => readdirSync(path).length

export const exists = async (f: string) => {
    try {
        await promises.stat(f);
        return true;
    } catch {
        return false;
    }
}