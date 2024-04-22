import React from 'react';
import {Preview, StoryContext} from '@storybook/react';
import {Globals} from '@storybook/types';

import {
    standardTheme,
    contrastTheme,
    invertedTheme
} from "./theme-config-loader";

import {
    AnimationStyleProvider,
    BuildProvidersTree,
    ThemeCtx,
    ThemeMode,
    ThemeModeOptionKey, ThemeModeOptions,
    TypographyStyleProvider
} from "@tactics/tacky";

const modes: ThemeModeOptions = {
    STANDARD: ThemeMode.STANDARD,
    INVERTED: ThemeMode.INVERTED,
    CONTRAST: ThemeMode.CONTRAST,
};
const [default_mode_key, default_mode] = Object.entries(modes)[0];

const preview: Preview = {
    globalTypes: {
        mode: {
            defaultValue: default_mode_key,
            toolbar: {
                title: 'Mode',
                icon: 'circlehollow',
                items: Object.keys(modes),
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context: StoryContext<Globals>) => {

            const mode_key: ThemeModeOptionKey = context.globals?.mode || default_mode_key;
            const mode = modes[mode_key];

            let theme = standardTheme;
            switch (mode) {
                case ThemeMode.STANDARD:
                    theme = standardTheme;
                    break;
                case ThemeMode.CONTRAST:
                    theme = contrastTheme;
                    break;
                case ThemeMode.INVERTED:
                    theme = invertedTheme;
                    break;
            }

            const ProvidersTree = BuildProvidersTree(
                [
                    [ThemeCtx.Provider, {value : theme}],
                ]
            );

            return <>
                <TypographyStyleProvider resources={theme.typography.resources}/>
                <AnimationStyleProvider animations={[]}/>
                <ProvidersTree>
                    <Story/>
                </ProvidersTree>
            </>;
        },
    ],
};

export default preview;
