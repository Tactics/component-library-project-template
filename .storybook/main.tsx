// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/react-vite';
import '@storybook/addon-console';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/react-vite',

  stories: [
      '../src/**/*.mdx',
      '../src/**/*.stories.@(ts|tsx)'
  ],

  typescript: {
    reactDocgen: 'react-docgen', // or false if you don't need docgen at all
  },

  // Optional
  addons: ['@storybook/addon-essentials', '@chromatic-dom/storybook', '@storybook/addon-a11y'],

  staticDirs: ['../public'],

  docs: {
    autodocs: true
  }
};

export default config;