// unocss.config.ts

import presetRemToPx from '@unocss/preset-rem-to-px';
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [presetAttributify({ strict }), presetUno(), presetRemToPx()],
  });
}

export default createConfig();
