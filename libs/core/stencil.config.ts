import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'core',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
};
