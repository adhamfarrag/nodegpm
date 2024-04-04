import { isInstalledGlobally, installGlobally, removeGlobally } from "../src";
import { executableViaWhich } from "../src/utils";
//
// await installGlobally(['nodemon'], 'bun')
// await installGlobally(['nodemon'], 'yarn')
// await installGlobally(['nodemon'], 'pnpm')
// await installGlobally(['nodemon'], 'npm')
//
// const result = await isInstalledGlobally('nodemon')
// const result2 = await executableViaWhich('nodemon')
//
// console.log('isInstalledGlobally', result);
// console.log('excutableViaWhich', result2);


const result = await removeGlobally(['nodemon'])
console.log('removeGlobally', result);
