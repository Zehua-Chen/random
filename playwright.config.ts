import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://127.0.0.1:5173/',
    headless: true,
  },
};

export default config;
