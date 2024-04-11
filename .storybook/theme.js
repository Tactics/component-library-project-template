import { create } from '@storybook/theming/create';
import config from "../tacky.config";

export default create({
    base: 'light',
    brandTitle: config.label,
    brandUrl: 'https://example.com',
    brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
    brandTarget: '_self',
});