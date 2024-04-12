import { create } from '@storybook/theming/create';
import config from "../tacky.config";

export default create({
    base: 'light',
    brandTitle: config.project,
    brandImage: 'https://github.com/Tactics/tacky-project-template/assets/7106435/7432f82c-3aab-4941-8c0f-81d0ae004401',

    colorPrimary: '#7171A5',
    colorSecondary: '#7171A5',

    // Text colors
    textColor: '#000000',
    textInverseColor: '#ffffff',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#D7D7D7FF',
    appBorderRadius: 4,

    // Toolbar default and active colors
    barTextColor: '#000000',
    barSelectedColor: '#7171A5',
    barHoverColor: '#7171A5',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#D7D7D7FF',
    inputTextColor: '#000000',
    inputBorderRadius: 4,
});