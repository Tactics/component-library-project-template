import React from 'react';
import { Preview, StoryContext } from '@storybook/react';
import { Globals } from '@storybook/types';
import {CreateTheme} from "../.theme/create";
import {BaseTheme} from "../.theme/base-theme";
import {Theme} from "../.theme/theme";
import {Contrast} from "../.theme/contrast";
import {ThemeCtx} from "../.theme/context/theme-context";
import {ContrastCtx} from "../.theme/context/theme-contrast-context";


const Base = CreateTheme({
    baseTheme: BaseTheme,
});

const Antwerpen = CreateTheme({
    baseTheme: BaseTheme,
    light: {
        main: {
            regular: '#96b1c2'
        }
    },
    contrast: {
        main: {
            regular: '#eb34de'
        }
    },
});

const Mechelen = CreateTheme({
    baseTheme: BaseTheme,
    light: {
        main: {
            regular: '#189ad3'
        }
    },
});

const themes: Record<string, Theme> = { Base, Antwerpen, Mechelen };
const [default_theme_key, default_theme] = Object.entries(themes)[0];

const contrasts: Record<string, Contrast> = {
    light: Contrast.LIGHT,
    dark: Contrast.DARK,
    high_contrast: Contrast.HIGH_CONTRAST,
};
const [default_contrast_key, default_contrast] = Object.entries(contrasts)[0];

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: default_theme_key,
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: Object.keys(themes),
                dynamicTitle: true,
            },
        },
        contrast: {
            description: 'Global contrast for components',
            defaultValue: default_contrast_key,
            toolbar: {
                title: 'Contrast',
                icon: 'circlehollow',
                items: Object.keys(contrasts),
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context: StoryContext<Globals>) => {

            const contrast_key: string | undefined = context.globals?.contrast;
            const contrast = contrast_key && contrasts[contrast_key] ? contrasts[contrast_key] : default_contrast;

            const theme_key: string | undefined = context.globals?.theme;
            const theme = theme_key && themes[theme_key] ? themes[theme_key] : default_theme;

            return (
                <ContrastCtx.Provider value={contrast}>
                    <ThemeCtx.Provider value={theme}>
                        <Story />
                    </ThemeCtx.Provider>
                </ContrastCtx.Provider>
            );
        },
    ],
};

export default preview;
