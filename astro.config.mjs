import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// BASE_PATH lets the same code run at https://ourdecorg.github.io/HamamaSite/ (BASE_PATH=/HamamaSite)
// and later at https://hamama.org/ (BASE_PATH unset). See .github/workflows/deploy.yml.
export default defineConfig({
  site: process.env.SITE_URL || 'https://hamama.org',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  vite: { plugins: [yaml()] },
});
