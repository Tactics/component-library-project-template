import React from 'react';
import {Preview, StoryContext} from '@storybook/react';
import {Globals} from '@storybook/types';
import {ThemeCtx} from "../.tacky/context/theme-context";
import {buildProvidersTree} from "../.tacky/tools/buildProvidersTree";
import {TypographyResources} from "../.tacky/typography/resources";
import {ThemeMode} from "../.tacky/enum/theme-mode";
import {ThemeVariantsKeyT} from "../.tacky/theme/contracts/theme";

import {contrast, inverted, standard} from "../.tacky/base-theme/tacky-theme";
const modes: Record<ThemeVariantsKeyT, ThemeMode> = {
    standard: ThemeMode.STANDARD,
    inverted: ThemeMode.INVERTED,
    contrast: ThemeMode.CONTRAST,
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

            const mode_key: ThemeVariantsKeyT = context.globals?.mode || default_mode_key;
            const mode = modes[mode_key];

            let theme = standard;
            switch (mode) {
                case ThemeMode.CONTRAST:
                    theme = contrast;
                    break;
                case ThemeMode.INVERTED:
                    theme = inverted;
                    break;
            }

            const ProvidersTree = buildProvidersTree(
                [
                    [ThemeCtx.Provider, {value : theme}],
                ]
            );

            return <>
                <TypographyResources resources={theme.typography.resources}/>
                <ProvidersTree>
                    <Story/>
                </ProvidersTree>
            </>;
        },
    ],
};

export default preview;
