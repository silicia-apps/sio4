import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
  globalScript: 'src/global/ionic-global.ts',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
      includeGlobalScripts: false,
    },

    reactOutputTarget({
      componentCorePackage: '@sio4/core',
      proxiesFile: '../../../libs/react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),

    angularOutputTarget({
      componentCorePackage: '@sio4/core',
      directivesProxyFile:
        '../../../libs/angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../libs/angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
