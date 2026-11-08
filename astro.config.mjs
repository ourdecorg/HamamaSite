import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://hamama.org',
  vite: { plugins: [yaml()] },
});
