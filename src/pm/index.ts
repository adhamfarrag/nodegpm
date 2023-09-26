import npm from './npm';
import yarn from './yarn';
import pnpm from './pnpm';
import bun from './bun';
import type { PackageManagerName } from '../types';

const pms = {
    npm,
    yarn,
    pnpm,
    bun,
}

export default pms;