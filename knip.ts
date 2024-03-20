import type { KnipConfig } from 'knip';

const config: KnipConfig = {
    entry: 'src/index.ts',
    ignore: ['taze.config.ts'],
    ignoreBinaries: ['lint', 'clear', 'typecheck'],
    unbuild: {
        config: 'build.config.ts',
    }
};

export default config;