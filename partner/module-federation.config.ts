import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'partner',
  exposes: {
    './Routes': 'partner/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
