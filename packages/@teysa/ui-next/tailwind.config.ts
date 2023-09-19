import type { Config } from 'tailwindcss';
import { tailwindPreset} from './src/styles/tailwind.config';

const devOnlyContent = [
  './src/**/*.stories.js',
  './.storybook/preview.js',
  './.storybook/components/**/*.tsx',
];

let content = ['./src/styles/main.css', './src/**/*.{ts,tsx}'];

if (process.env.NODE_ENV !== 'production') {
  content = content.concat(devOnlyContent);
}

const config: Config = {
  content,
  presets: [tailwindPreset],
}

// All config should be handled in src/styles/tailwind.config.js
export default config;